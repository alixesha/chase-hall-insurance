import { createFileRoute, Link } from "@tanstack/react-router";

import heroImg from "@/assets/hero.jpg";
import { Reveal } from "@/components/Reveal";
import { PHONE_DISPLAY, PHONE_TEL, ADDRESS, MAPS_QUERY } from "@/lib/services";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About Chase Hall | Insurance Agent in Germantown, TN",
      },
      {
        name: "description",
        content:
          "Meet Chase Hall, insurance agent in Germantown, TN — unbiased advice, personal service, and honest answers on Medicare, ACA, final expense and financial advising.",
      },
      { property: "og:title", content: "About Chase Hall — Insurance Agent in Germantown, TN" },
      {
        property: "og:description",
        content:
          "Unbiased advice and neighborhood service on Medicare, ACA, final expense and financial advising. Call (901) 292-6940.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* Intro */}
      <section className="overflow-hidden bg-ink pt-16 text-ink-foreground md:pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <Reveal direction="left">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl border border-gold/30" aria-hidden="true" />
              <img
                src={heroImg}
                alt="Chase Hall reviewing coverage options with a couple"
                loading="lazy"
                width={1920}
                height={1088}
                className="relative rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </Reveal>
          <Reveal direction="right" delay={120}>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">About</p>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
              Your agent, not a call center.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-muted sm:text-lg">
              Chase Hall is an insurance agent based right here in Germantown,
              Tennessee. I help individuals, families, and retirees across the
              greater Memphis area make confident decisions about their coverage
              and their money.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="grid gap-12 md:grid-cols-2">
          <Reveal direction="right">
            <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
              Insurance is personal. Your agent should be too.
            </h2>
          </Reveal>
          <Reveal direction="right" delay={120}>
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                Most people meet insurance in the worst moments — a hospital stay, a
                retirement deadline, a bill nobody expected. My job is to make sure
                you never face those moments unprepared, and that you always
                understand exactly what you're paying for.
              </p>
              <p>
                I'll sit down with you (in person at my Germantown office, or over
                the phone — whatever suits you), walk through your situation in
                plain English, and compare options across multiple carriers until
                we find the one that genuinely fits.
              </p>
              <p>
                No scripts, no pressure, and no jargon. Just honest advice from
                someone who lives and works in your community.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
          <Reveal direction="right">
            <h2 className="font-display text-4xl tracking-tight sm:text-5xl">How I work</h2>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <Reveal direction="right" delay={0}>
              <p className="font-display text-3xl text-gold-deep">01</p>
              <h3 className="mt-3 font-display text-2xl">Listen first</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Every recommendation starts with your story — your health, your
                family, your budget, your plans.
              </p>
            </Reveal>
            <Reveal direction="right" delay={120}>
              <p className="font-display text-3xl text-gold-deep">02</p>
              <h3 className="mt-3 font-display text-2xl">Explain everything</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                You'll never sign anything you don't fully understand. If a plan
                has a catch, I'll be the first to tell you.
              </p>
            </Reveal>
            <Reveal direction="right" delay={240}>
              <p className="font-display text-3xl text-gold-deep">03</p>
              <h3 className="mt-3 font-display text-2xl">Stay in touch</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Life changes and plans should too. I check in every year to make
                sure your coverage still fits.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <Reveal direction="right">
          <div className="rounded-3xl border border-gold/40 bg-card px-8 py-14 text-center shadow-sm sm:px-16">
            <h2 className="mx-auto max-w-2xl font-display text-4xl tracking-tight sm:text-5xl">
              Let's talk about your plan.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Call {PHONE_DISPLAY} or stop by the office at {ADDRESS}.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={PHONE_TEL}
                className="inline-flex items-center rounded-full bg-ink px-8 py-4 text-sm font-semibold text-ink-foreground transition-colors hover:bg-gold hover:text-ink"
              >
                Call {PHONE_DISPLAY}
              </a>
              <a
                href={MAPS_QUERY}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-ink/20 px-8 py-4 text-sm font-semibold text-foreground transition-colors hover:border-gold-deep hover:text-gold-deep"
              >
                Get directions
              </a>
              <Link
                to="/services"
                className="inline-flex items-center rounded-full border border-ink/20 px-8 py-4 text-sm font-semibold text-foreground transition-colors hover:border-gold-deep hover:text-gold-deep"
              >
                Browse services
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
