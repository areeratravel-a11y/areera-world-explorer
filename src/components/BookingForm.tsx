import { useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactInfo } from "@/data/site";
import { AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackInquirySubmitted, trackWhatsAppContact } from "@/lib/analytics";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name (minimum 2 characters)").max(100),
  email: z.string().trim().email("Please enter a valid email address (e.g. name@example.com)").max(255),
  phone: z.string().trim().min(7, "Please enter a valid phone number (minimum 7 digits)").max(20, "Phone number is too long"),
  detail: z.string().trim().min(1, "This field is required").max(120),
  message: z.string().trim().max(1000).optional(),
});

export type BookingFormProps = {
  title: string;
  description?: string;
  detailLabel: string;
  detailPlaceholder?: string;
  defaultDetail?: string;
  submitLabel?: string;
};

type FormField = "name" | "email" | "phone" | "detail" | "message";

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  detail?: string;
  message?: string;
};

export function BookingForm({
  title,
  description,
  detailLabel,
  detailPlaceholder,
  defaultDetail = "",
  submitLabel = "Send inquiry",
}: BookingFormProps) {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const clearFieldError = (fieldName: FormField) => {
    if (errors[fieldName]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[fieldName];
        return next;
      });
    }
  };

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      detail: fd.get("detail"),
      message: fd.get("message"),
    });

    if (!parsed.success) {
      const next: FormErrors = {};
      parsed.error.issues.forEach((i) => {
        const key = i.path[0] as FormField;
        if (key && !next[key]) next[key] = i.message;
      });
      setErrors(next);
      toast.error("Please review the highlighted fields in the form");
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    const values = parsed.data;
    const msg = `*New Inquiry via Website*\n*Name:* ${values.name}\n*Email:* ${values.email}\n*Phone:* ${values.phone}\n*Details:* ${values.detail}${values.message ? `\n*Message:* ${values.message}` : ""}`;
    const encoded = encodeURIComponent(msg);
    const waNumber = contactInfo.whatsapp.replace(/[^0-9]/g, "");
    const refCode = `ARR-${Math.floor(100000 + Math.random() * 900000)}`;
    trackInquirySubmitted({
      service: title || "Travel Consultation",
      name: values.name,
      ref: refCode,
      source: "BookingForm",
    });
    trackWhatsAppContact({
      context: "BookingForm",
      service: title || "Travel Consultation",
    });

    toast.success("Opening WhatsApp with your inquiry details...");
    const waUrl = `https://wa.me/${waNumber}?text=${encoded}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setIsSubmitting(false);
    navigate({
      to: "/thank-you",
      search: {
        name: values.name,
        service: title || "Travel Inquiry",
        ref: refCode,
      },
    });
  }

  const renderFieldError = (name: FormField) => {
    if (!errors[name]) return null;
    return (
      <p
        id={`${name}-error`}
        role="alert"
        className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-destructive animate-in fade-in slide-in-from-top-1 duration-200"
      >
        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
        <span>{errors[name]}</span>
      </p>
    );
  };

  const errorCount = Object.keys(errors).length;

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-border bg-card/70 p-6 sm:p-8 transition-all"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      {description ? <p className="mt-2 text-sm text-muted-foreground">{description}</p> : null}

      {/* Summary Error Banner */}
      {errorCount > 0 && (
        <div
          role="alert"
          className="mt-4 rounded-xl border border-destructive/40 bg-destructive/10 p-3.5 text-xs text-destructive flex items-center gap-2.5 animate-in fade-in duration-200"
        >
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>
            Please check the highlighted fields below ({errorCount} {errorCount === 1 ? "field requires" : "fields require"} attention).
          </span>
        </div>
      )}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {/* Name Field */}
        <div>
          <Label htmlFor="name" className="flex items-center gap-1">
            <span>Full name</span>
            <span className="text-destructive font-bold" aria-hidden="true">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            maxLength={100}
            onChange={() => clearFieldError("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={cn(
              "mt-1.5 transition-colors",
              errors.name && "border-destructive focus-visible:ring-destructive/40 bg-destructive/5 text-foreground",
            )}
            placeholder="Your name"
          />
          {renderFieldError("name")}
        </div>

        {/* Email Field */}
        <div>
          <Label htmlFor="email" className="flex items-center gap-1">
            <span>Email address</span>
            <span className="text-destructive font-bold" aria-hidden="true">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            maxLength={255}
            onChange={() => clearFieldError("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={cn(
              "mt-1.5 transition-colors",
              errors.email && "border-destructive focus-visible:ring-destructive/40 bg-destructive/5 text-foreground",
            )}
            placeholder="you@example.com"
          />
          {renderFieldError("email")}
        </div>

        {/* Phone Field */}
        <div>
          <Label htmlFor="phone" className="flex items-center gap-1">
            <span>Phone / WhatsApp</span>
            <span className="text-destructive font-bold" aria-hidden="true">*</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            maxLength={20}
            onChange={() => clearFieldError("phone")}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={cn(
              "mt-1.5 transition-colors",
              errors.phone && "border-destructive focus-visible:ring-destructive/40 bg-destructive/5 text-foreground",
            )}
            placeholder="+92 300 0000000"
          />
          {renderFieldError("phone")}
        </div>

        {/* Detail Field */}
        <div>
          <Label htmlFor="detail" className="flex items-center gap-1">
            <span>{detailLabel}</span>
            <span className="text-destructive font-bold" aria-hidden="true">*</span>
          </Label>
          <Input
            id="detail"
            name="detail"
            maxLength={120}
            defaultValue={defaultDetail}
            onChange={() => clearFieldError("detail")}
            aria-invalid={Boolean(errors.detail)}
            aria-describedby={errors.detail ? "detail-error" : undefined}
            className={cn(
              "mt-1.5 transition-colors",
              errors.detail && "border-destructive focus-visible:ring-destructive/40 bg-destructive/5 text-foreground",
            )}
            placeholder={detailPlaceholder}
          />
          {renderFieldError("detail")}
        </div>

        {/* Optional Message Field */}
        <div className="sm:col-span-2">
          <Label htmlFor="message">Additional details (optional)</Label>
          <Textarea
            id="message"
            name="message"
            maxLength={1000}
            rows={4}
            onChange={() => clearFieldError("message")}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={cn(
              "mt-1.5 transition-colors",
              errors.message && "border-destructive focus-visible:ring-destructive/40 bg-destructive/5 text-foreground",
            )}
            placeholder="Travel dates, number of travellers, budget, any specific requirement"
          />
          {renderFieldError("message")}
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="mt-6 w-full sm:w-auto font-semibold shadow-md royal-surface"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Connecting to WhatsApp...
          </>
        ) : (
          submitLabel
        )}
      </Button>

      <p className="mt-3 text-xs text-muted-foreground">
        We review every request manually and reply during business hours.
      </p>
    </form>
  );
}
