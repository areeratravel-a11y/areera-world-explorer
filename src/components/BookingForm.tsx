import { useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20, "Phone number is too long"),
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

export function BookingForm({
  title,
  description,
  detailLabel,
  detailPlaceholder,
  defaultDetail = "",
  submitLabel = "Send inquiry",
}: BookingFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

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
      const next: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        const key = String(i.path[0]);
        if (!next[key]) next[key] = i.message;
      });
      setErrors(next);
      toast.error("Please correct the highlighted fields");
      return;
    }

    setErrors({});
    const values = parsed.data;
    const msg = `*New Inquiry via Website*\n*Name:* ${values.name}\n*Email:* ${values.email}\n*Phone:* ${values.phone}\n*Details:* ${values.detail}${values.message ? `\n*Message:* ${values.message}` : ""}`;
    const encoded = encodeURIComponent(msg);
    toast.success("Opening WhatsApp with your inquiry details...");
    window.open(`https://wa.me/923001234567?text=${encoded}`, "_blank");
  }

  const field = (name: string) =>
    errors[name] ? <p className="mt-1 text-xs text-destructive">{errors[name]}</p> : null;

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-border bg-card/70 p-6 sm:p-8"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      {description ? <p className="mt-2 text-sm text-muted-foreground">{description}</p> : null}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" maxLength={100} className="mt-1.5" placeholder="Your name" />
          {field("name")}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            maxLength={255}
            className="mt-1.5"
            placeholder="you@example.com"
          />
          {field("email")}
        </div>
        <div>
          <Label htmlFor="phone">Phone / WhatsApp</Label>
          <Input
            id="phone"
            name="phone"
            maxLength={20}
            className="mt-1.5"
            placeholder="+92 300 0000000"
          />
          {field("phone")}
        </div>
        <div>
          <Label htmlFor="detail">{detailLabel}</Label>
          <Input
            id="detail"
            name="detail"
            maxLength={120}
            defaultValue={defaultDetail}
            className="mt-1.5"
            placeholder={detailPlaceholder}
          />
          {field("detail")}
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="message">Additional details (optional)</Label>
          <Textarea
            id="message"
            name="message"
            maxLength={1000}
            rows={4}
            className="mt-1.5"
            placeholder="Travel dates, number of travellers, budget, any specific requirement"
          />
          {field("message")}
        </div>
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
        {submitLabel}
      </Button>
      <p className="mt-3 text-xs text-muted-foreground">
        We review every request manually and reply during business hours.
      </p>
    </form>
  );
}
