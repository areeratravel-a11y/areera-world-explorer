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
    <article className="mt-16 max-w-3xl">
      <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
      {intro ? (
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{intro}</p>
      ) : null}
      <div className="mt-10 space-y-8">
        {sections.map((s, i) => (
          <Reveal key={s.heading} delay={i * 50}>
            <section className="relative rounded-2xl border border-border/70 bg-card/50 p-6 sm:p-7 backdrop-blur-xs transition-all hover:border-border">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-primary">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold">
                  {i + 1}
                </span>
                <span>Stage 0{i + 1}</span>
              </div>
              <h3 className="mt-2.5 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                {s.heading}
              </h3>
              {s.paragraphs.map((p) => (
                <p key={p} className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
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
