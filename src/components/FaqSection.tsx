import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type Faq = { question: string; answer: string };

export function FaqSection({
  items,
  title = "Frequently asked questions",
  description,
}: {
  items: Faq[];
  title?: string;
  description?: string;
}) {
  if (items.length === 0) return null;
  return (
    <section className="mt-16 max-w-3xl">
      <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
      {description ? (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
      <Accordion type="single" collapsible className="mt-6">
        {items.map((f) => (
          <AccordionItem key={f.question} value={f.question}>
            <AccordionTrigger className="text-left text-sm font-medium sm:text-base">
              {f.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {f.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
