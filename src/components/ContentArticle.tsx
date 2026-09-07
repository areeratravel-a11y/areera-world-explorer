import { Reveal } from "@/components/Reveal";

export type ContentSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type ArticleContent = {
  title: string;
  intro?: string;
  sections: ContentSection[];
};

export function ContentArticle({ title, intro, sections }: ArticleContent) {
  return (
    <article className="mt-16 mx-auto max-w-3xl">
      <h2 className="text-2xl font-bold sm:text-3xl text-foreground">{title}</h2>
      {intro ? (
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base max-w-prose">
          {intro}
        </p>
      ) : null}
      <div className="mt-10 space-y-8">
        {sections.map((s, i) => (
          <Reveal key={s.heading} delay={i * 50}>
            <section className="relative rounded-2xl border border-border/70 bg-card p-6 sm:p-7 shadow-xs transition-all hover:border-border">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <span>Step 0{i + 1}</span>
              </div>
              <h3 className="mt-3 font-display text-lg font-bold tracking-tight text-foreground sm:text-xl">
                {s.heading}
              </h3>
              {s.paragraphs.map((p) => (
                <p key={p} className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base max-w-prose">
                  {p}
                </p>
              ))}
              {s.list ? (
                <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                  {s.list.map((li) => (
                    <li
                      key={li}
                      className="flex items-start gap-2.5 py-1 text-foreground/90"
                    >
                      <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden />
                      <span className="leading-normal">{li}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          </Reveal>
        ))}
      </div>
    </article>
  );
}
