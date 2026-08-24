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
      <div className="mt-8 space-y-9">
        {sections.map((s, i) => (
          <Reveal key={s.heading} delay={i * 50}>
            <section>
              <h3 className="text-lg font-semibold">{s.heading}</h3>
              {s.paragraphs.map((p) => (
                <p key={p} className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
              {s.list ? (
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {s.list.map((li) => (
                    <li
                      key={li}
                      className="flex gap-2 rounded-lg border border-border bg-card/40 px-3 py-2"
                    >
                      <span className="text-primary">•</span>
                      <span>{li}</span>
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
