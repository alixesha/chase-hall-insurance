import { createFileRoute, Link } from "@tanstack/react-router";

import heroImg from "@/assets/hero.jpg";
import { Reveal } from "@/components/Reveal";
import { services, PHONE_DISPLAY, PHONE_TEL, ADDRESS } from "@/lib/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Chase Hall Insurance Agent | Medicare, ACA, Final Expense & Financial Advising — Germantown, TN",
      },
      {
        name: "description",
        content:
          "Personal guidance on Medicare Insurance, ACA plans, final expense coverage and financial advising from Chase Hall, insurance agent in Germantown, TN. Call (901) 292-6940.",
      },
      {
        property: "og:title",
        content: "Chase Hall Insurance Agent | Germantown, TN",
      },
      {
        property: "og:description",
        content:
          "Medicare Insurance, ACA Plans, Final Expense and Financial Advising — call (901) 292-6940.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden bg-ink pt-16 text-ink-foreground md:pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:py-28">
          <Reveal direction="left">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl border border-gold/30" aria-hidden="true" />
              <img
                src={heroImg}
                alt="Chase Hall meeting with clients to review their insurance options"
                width={1920}
                height={1088}
                className="relative rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </Reveal>
          <Reveal direction="right" delay={120}>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
              Germantown, Tennessee
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Protecting what matters most to&nbsp;you.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-muted sm:text-lg">
              Medicare, ACA plans, final expense coverage, and financial advising —
              clear answers and personal attention from an agent who picks up the phone.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-gold-deep hover:text-ink-foreground"
              >
                Call {PHONE_DISPLAY}
              </a>
              <Link
                to="/services"
                className="inline-flex items-center rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-ink-foreground transition-colors hover:border-gold hover:text-gold"
              >
                Explore services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <Reveal direction="right">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-deep">
            What I offer
          </p>
          <h2 className="mt-3 max-w-xl font-display text-4xl tracking-tight sm:text-5xl">
            Four ways I help families like yours
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {services.map((service, i) => (
            <div
              key={service.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl"
            >
              <Reveal direction="left" delay={i * 60}>
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-52 w-full object-cover"
                />
              </Reveal>
              <Reveal direction="right" delay={i * 60 + 100} className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-2xl tracking-tight">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.short}
                </p>
                <Link
                  to="/services"
                  className="mt-5 text-sm font-semibold text-gold-deep transition-colors hover:text-ink"
                >
                  Learn more →
                </Link>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* Why Chase */}
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <Reveal direction="right">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
              Why Chase Hall
            </p>
            <h2 className="mt-3 max-w-xl font-display text-4xl tracking-tight sm:text-5xl">
              Big-agency knowledge, neighborhood service
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <Reveal direction="right" delay={0}>
              <ShieldIcon className="h-9 w-9 text-gold" />
              <h3 className="mt-4 font-display text-2xl">Unbiased advice</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                I compare plans across top carriers and recommend what actually fits
                you — not what pays me the most.
              </p>
            </Reveal>
            <Reveal direction="right" delay={120}>
              <PhoneIcon className="h-9 w-9 text-gold" />
              <h3 className="mt-4 font-display text-2xl">You call, I answer</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                No call centers, no tickets. Reach me directly at {PHONE_DISPLAY}
                whenever a question comes up.
              </p>
            </Reveal>
            <Reveal direction="right" delay={240}>
              <HeartIcon className="h-9 w-9 text-gold" />
              <h3 className="mt-4 font-display text-2xl">A neighbor nearby</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Based at {ADDRESS}, serving Germantown and the greater Memphis
                area — in person or over the phone.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <Reveal direction="right">
          <div className="rounded-3xl border border-gold/40 bg-card px-8 py-14 text-center shadow-sm sm:px-16">
            <h2 className="mx-auto max-w-2xl font-display text-4xl tracking-tight sm:text-5xl">
              Let's find the right coverage for you.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              A short conversation is all it takes to know where you stand. Call,
              ask your questions, and get honest answers — no pressure, no obligation.
            </p>
            <a
              href={PHONE_TEL}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-ink-foreground transition-colors hover:bg-gold hover:text-ink"
            >
              <PhoneIcon className="h-4 w-4" />
              Call {PHONE_DISPLAY}
            </a>
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

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7z" />
    </svg>
  );
}
