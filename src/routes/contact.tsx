import { createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/Reveal";
import { PHONE_DISPLAY, PHONE_TEL, ADDRESS, MAPS_QUERY } from "@/lib/services";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact Chase Hall | (901) 292-6940 — Germantown, TN",
      },
      {
        name: "description",
        content:
          "Contact Chase Hall, insurance agent in Germantown, TN. Call (901) 292-6940 or visit 8192 Wethersfield Dr, Germantown, TN 38138.",
      },
      { property: "og:title", content: "Contact Chase Hall — Insurance Agent" },
      {
        property: "og:description",
        content: "Call (901) 292-6940 or visit 8192 Wethersfield Dr, Germantown, TN 38138.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="overflow-hidden bg-ink pt-16 text-ink-foreground md:pt-20">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <Reveal direction="right">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Contact</p>
            <h1 className="mt-4 max-w-2xl font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
              The fastest way to reach me? Call.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              No forms to wait on, no call centers to navigate. When you dial my
              number, you reach me.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Cards */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal direction="right">
            <div className="h-full rounded-2xl border border-border bg-card p-9 shadow-sm">
              <PhoneIcon className="h-9 w-9 text-gold-deep" />
              <h2 className="mt-4 font-display text-3xl tracking-tight">Call me directly</h2>
              <a
                href={PHONE_TEL}
                className="mt-2 block font-display text-4xl text-gold-deep transition-colors hover:text-ink sm:text-5xl"
              >
                {PHONE_DISPLAY}
              </a>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Ask a question, schedule a review, or get a quote — a five-minute
                conversation is usually all it takes.
              </p>
            </div>
          </Reveal>
          <Reveal direction="right" delay={120}>
            <div className="h-full rounded-2xl border border-border bg-card p-9 shadow-sm">
              <PinIcon className="h-9 w-9 text-gold-deep" />
              <h2 className="mt-4 font-display text-3xl tracking-tight">Visit the office</h2>
              <p className="mt-2 font-display text-2xl leading-snug text-foreground sm:text-3xl">
                {ADDRESS}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Serving Germantown, Memphis, and the surrounding communities —
                in-person meetings by appointment, or by phone whenever it's
                easier for you.
              </p>
              <a
                href={MAPS_QUERY}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-ink-foreground transition-colors hover:bg-gold hover:text-ink"
              >
                Get directions →
              </a>
            </div>
          </Reveal>
        </div>

        {/* Map */}
        <Reveal direction="left" delay={100}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-border shadow-sm">
            <iframe
              title="Map to 8192 Wethersfield Dr, Germantown, TN 38138"
              src="https://www.google.com/maps?q=8192+Wethersfield+Dr,+Germantown,+TN+38138&output=embed"
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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

function PinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
