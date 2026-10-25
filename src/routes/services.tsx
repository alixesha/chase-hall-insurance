import { createFileRoute, Link } from "@tanstack/react-router";

import { Reveal } from "@/components/Reveal";
import { services, PHONE_DISPLAY, PHONE_TEL } from "@/lib/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title: "Insurance Services | Medicare, ACA, Final Expense & Financial Advising — Chase Hall",
      },
      {
        name: "description",
        content:
          "Explore Chase Hall's services: Medicare Insurance, ACA marketplace plans, final expense life insurance and personal financial advising in Germantown, TN.",
      },
      { property: "og:title", content: "Insurance Services — Chase Hall Insurance Agent" },
      {
        property: "og:description",
        content:
          "Medicare Insurance, ACA Plans, Final Expense and Financial Advising in Germantown, TN.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="overflow-hidden bg-ink pt-16 text-ink-foreground md:pt-20">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <Reveal direction="right">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Services</p>
            <h1 className="mt-4 max-w-2xl font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
              Coverage for every stage of life
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              From your first health plan to your retirement income, every service
              below comes with the same promise: plain-English explanations and a
              plan built around you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Service sections — image enters from the left, text from the right */}
      {services.map((service, i) => (
        <section
          key={service.slug}
          className={
            i % 2 === 0
              ? "border-b border-border bg-background"
              : "border-b border-border bg-secondary/50"
          }
        >
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
            <Reveal direction="left">
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl border border-gold/30" aria-hidden="true" />
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="relative rounded-2xl object-cover shadow-xl"
                />
              </div>
            </Reveal>
            <Reveal direction="right" delay={120}>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-deep">
                {String(i + 1).padStart(2, "0")} — {service.title}
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
                {service.title}
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
                {service.short}
              </p>
              <ul className="mt-6 space-y-3">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm sm:text-base">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-gold-deep" />
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
              <a
                href={PHONE_TEL}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-ink-foreground transition-colors hover:bg-gold hover:text-ink"
              >
                <PhoneIcon className="h-4 w-4" />
                Ask about {service.title.toLowerCase()} — {PHONE_DISPLAY}
              </a>
            </Reveal>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <Reveal direction="right">
          <div className="rounded-3xl bg-ink px-8 py-14 text-center text-ink-foreground shadow-sm sm:px-16">
            <h2 className="mx-auto max-w-2xl font-display text-4xl tracking-tight sm:text-5xl">
              Not sure which one you need?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base">
              That's exactly what I'm here for. Tell me your situation and I'll walk
              you through your options — free of charge.
            </p>
            <a
              href={PHONE_TEL}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-ink transition-colors hover:bg-gold-deep hover:text-ink-foreground"
            >
              <PhoneIcon className="h-4 w-4" />
              Call {PHONE_DISPLAY}
            </a>
            <div className="mt-6">
              <Link
                to="/contact"
                className="text-sm font-semibold text-gold transition-colors hover:text-ink-foreground"
              >
                Or visit my office →
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
