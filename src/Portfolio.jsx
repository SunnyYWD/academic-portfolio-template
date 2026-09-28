import React from "react";
import { content, site } from "./content.js";

function Icon({ name, className = "h-4 w-4" }) {
  const paths = {
    mail: <path d="M4 6h16v12H4zM4 7l8 6 8-6" />,
    map: <path d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />,
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.7-1.6 6.7-7A5.4 5.4 0 0 0 20.3 3.8 5 5 0 0 0 20.1 0S19-.4 16 1.5a13.4 13.4 0 0 0-8 0C5-.4 3.9 0 3.9 0a5 5 0 0 0-.2 3.8A5.4 5.4 0 0 0 2.3 7.5c0 5.4 3.4 6.6 6.7 7A4.8 4.8 0 0 0 8 18v4" /><path d="M8 18c-4.5 2-5-2-7-2" /></>,
    external: <path d="M14 4h6v6m0-6-9 9m-1-7H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5" />
  };
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 border-b border-slate-200 py-10 first:pt-0">
      <h2 className="font-title mb-6 border-b border-slate-200 pb-2 text-[1.72rem] leading-tight text-slate-950">{title}</h2>
      {children}
    </section>
  );
}

function ProfileCard({ t }) {
  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <div className="border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mx-auto aspect-square w-44 overflow-hidden rounded-full border border-slate-200 bg-slate-50">
          <img src={site.avatar} alt={t.name} className="h-full w-full object-cover" />
        </div>
        <div className="mt-6 text-center">
          <h1 className="font-title text-4xl text-slate-950">{t.name}</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">{t.role}</p>
          <p className="text-sm leading-6 text-slate-600">{t.institution}</p>
        </div>
        <div className="mt-6 space-y-3 border-t border-slate-200 pt-5 text-sm text-slate-600">
          {site.email && (
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 break-all transition hover:text-sky-700">
              <Icon name="mail" className="h-4 w-4 shrink-0 text-slate-500" />{site.email}
            </a>
          )}
          {t.location && <div className="flex items-center gap-3"><Icon name="map" className="h-4 w-4 shrink-0 text-slate-500" />{t.location}</div>}
          {site.github && (
            <a href={site.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-sky-700">
              <Icon name="github" className="h-4 w-4 shrink-0 text-slate-500" />{t.labels.github}
            </a>
          )}
        </div>
      </div>
    </aside>
  );
}

function Education({ title, items }) {
  if (!items.length) return null;
  return (
    <div className="mt-8">
      <h3 className="font-title mb-4 text-2xl text-slate-950">{title}</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item, index) => (
          <article key={`${item.degree}-${index}`} className="border border-slate-200 bg-slate-50/60 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-sky-800">{item.period}</p>
            <h4 className="mt-3 text-base font-semibold leading-7 text-slate-950">{item.degree}</h4>
            <p className="mt-1 text-sm leading-6 text-slate-700">{item.school}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function ExternalButton({ href, label, primary = false }) {
  if (!href) return null;
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 border px-4 py-2 text-sm font-semibold transition ${primary ? "border-sky-900 bg-sky-900 text-white hover:bg-sky-800" : "border-slate-300 text-slate-800 hover:border-sky-600 hover:text-sky-700"}`}>
      {label}<Icon name="external" />
    </a>
  );
}

function Publications({ items, labels }) {
  return (
    <div className="space-y-5">
      {items.map((item, index) => (
        <article key={`${item.title}-${index}`} className="border border-slate-200 bg-white p-6">
          <div className="flex flex-wrap items-center gap-3">
            {item.status && <span className="bg-sky-900 px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white">{item.status}</span>}
            <span className="text-sm text-slate-500">{item.venue}</span>
          </div>
          <h3 className="font-title mt-4 text-2xl leading-snug text-slate-950">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600"><strong className="font-bold text-slate-800">{item.authorName}</strong>{item.coauthors}</p>
          <p className="mt-4 text-[0.98rem] leading-8 text-slate-700">{item.summary}</p>
          {!!item.metrics?.length && (
            <div className="mt-5 flex max-w-lg divide-x divide-slate-200 border-y border-slate-200">
              {item.metrics.map((metric, metricIndex) => (
                <div key={`${metric.label}-${metricIndex}`} className="min-w-0 flex-1 px-4 py-3 first:pl-0">
                  <p className="font-title text-2xl text-slate-950">{metric.value}</p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">{metric.label}</p>
                </div>
              ))}
            </div>
          )}
          {(item.paperUrl || item.codeUrl) && (
            <div className="mt-6 flex flex-wrap gap-3">
              <ExternalButton href={item.paperUrl} label={labels.paper} primary />
              <ExternalButton href={item.codeUrl} label={labels.code} />
            </div>
          )}
        </article>
      ))}
    </div>
  );
}

function News({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={`${item.date}-${index}`} className="grid gap-3 border-b border-slate-100 pb-3 text-sm leading-7 last:border-b-0 md:grid-cols-[88px_1fr]">
          <span className="font-semibold text-sky-800">{item.date}</span><span className="text-slate-700">{item.text}</span>
        </li>
      ))}
    </ul>
  );
}

function Experience({ items }) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <article key={`${item.title}-${index}`} className="grid gap-3 border-b border-slate-100 pb-4 last:border-b-0 md:grid-cols-[160px_1fr]">
          <span className="text-sm font-semibold text-slate-500">{item.period}</span>
          <div>
            <h3 className="text-base font-semibold text-slate-950">{item.title}</h3>
            <p className="mt-1 text-sm text-slate-700">{item.organization}</p>
            {item.details && <p className="mt-1 text-sm text-slate-500">{item.details}</p>}
          </div>
        </article>
      ))}
    </div>
  );
}

function Projects({ items, detailsLabel }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item, index) => (
        <article key={`${item.title}-${index}`} className="flex min-h-[260px] flex-col border border-slate-200 bg-white p-5 transition hover:border-sky-300 hover:shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-sky-800">{item.category}</p>
          <h3 className="font-title mt-3 text-2xl text-slate-950">{item.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{item.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {item.tags?.map((tag, tagIndex) => <span key={`${tag}-${tagIndex}`} className="border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-600">{tag}</span>)}
          </div>
          {item.url && <a href={item.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 border-t border-slate-100 pt-4 text-sm font-semibold text-slate-800 transition hover:text-sky-700">{detailsLabel}<Icon name="external" /></a>}
        </article>
      ))}
    </div>
  );
}

export default function Portfolio() {
  const [language, setLanguage] = React.useState(site.defaultLanguage === "zh" ? "zh" : "en");
  const t = content[language];
  const sections = ["about", "publications", "news", "experience", "projects"];

  React.useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.title = `${t.name} | Portfolio`;
  }, [language, t.name]);

  return (
    <main className="font-body min-h-screen bg-white text-slate-900 antialiased selection:bg-sky-100 selection:text-sky-950">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#about" className="font-title text-2xl text-slate-950">{t.name}</a>
          <nav aria-label={language === "zh" ? "页面导航" : "Page navigation"} className="hidden items-center gap-7 md:flex">
            {sections.filter((id) => id === "about" || t[id].length).map((id) => <a key={id} href={`#${id}`} className="text-sm font-semibold text-slate-600 transition hover:text-sky-700">{t.navigation[id]}</a>)}
          </nav>
          <button type="button" onClick={() => setLanguage(language === "en" ? "zh" : "en")} className="border border-slate-200 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-slate-700 transition hover:border-sky-300 hover:text-sky-700" aria-label={language === "en" ? "Switch to Chinese" : "切换到英文"}>{t.language}</button>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-10 lg:grid-cols-[280px_1fr] lg:py-14">
        <ProfileCard t={t} />
        <div>
          <Section id="about" title={t.navigation.about}>
            <div className="space-y-5 rounded-[22px] border border-slate-200 bg-white px-6 py-7 text-[1.02rem] leading-8 text-slate-700 shadow-[0_12px_32px_rgba(15,23,42,0.06)] sm:px-8 sm:py-8 md:text-[1.08rem] md:leading-9">
              {t.about.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </div>
            <Education title={t.labels.education} items={t.education} />
          </Section>
          {!!t.publications.length && <Section id="publications" title={t.navigation.publications}><Publications items={t.publications} labels={t.labels} /></Section>}
          {!!t.news.length && <Section id="news" title={t.navigation.news}><News items={t.news} /></Section>}
          {!!t.experience.length && <Section id="experience" title={t.navigation.experience}><Experience items={t.experience} /></Section>}
          {!!t.projects.length && <Section id="projects" title={t.navigation.projects}><Projects items={t.projects} detailsLabel={t.labels.details} /></Section>}
          <footer className="py-10">
            <h2 className="font-title mb-3 text-2xl text-slate-950">{t.labels.contact}</h2>
            <p className="text-sm leading-7 text-slate-600">{t.contact}</p>
            <p className="mt-8 border-t border-slate-200 pt-5 text-xs text-slate-500">{t.footer}</p>
          </footer>
        </div>
      </div>
    </main>
  );
}
