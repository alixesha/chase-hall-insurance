import advisingImg from "@/assets/advising.jpg";
import familyImg from "@/assets/family.jpg";
import heroImg from "@/assets/hero.jpg";
import medicareImg from "@/assets/medicare.jpg";

export const PHONE_DISPLAY = "(901) 292-6940";
export const PHONE_TEL = "tel:+19012926940";
export const ADDRESS = "8192 Wethersfield Dr, Germantown, TN 38138";
export const MAPS_QUERY =
  "https://www.google.com/maps/search/?api=1&query=8192+Wethersfield+Dr,+Germantown,+TN+38138";

export interface Service {
  slug: string;
  title: string;
  short: string;
  image: string;
  points: string[];
}

export const services: Service[] = [
  {
    slug: "medicare",
    title: "Medicare Insurance",
    short:
      "Turning 65 or new to Medicare? Get clear, unbiased guidance on the plan that fits your health needs and budget.",
    image: medicareImg,
    points: [
      "Medicare Supplement (Medigap) plans",
      "Medicare Advantage options",
      "Prescription drug (Part D) coverage",
      "Annual plan reviews at no cost to you",
    ],
  },
  {
    slug: "aca",
    title: "ACA Plans",
    short:
      "Quality health coverage for individuals and families — with help finding every subsidy you qualify for.",
    image: familyImg,
    points: [
      "Marketplace plans for individuals & families",
      "Help estimating subsidies and tax credits",
      "Open enrollment and special enrollment guidance",
      "Plan comparisons explained in plain English",
    ],
  },
  {
    slug: "final-expense",
    title: "Final Expense",
    short:
      "Protect your family from unexpected end-of-life costs with simple, affordable life insurance.",
    image: heroImg,
    points: [
      "Affordable whole-life coverage",
      "Fixed premiums that never increase",
      "Benefits paid directly to your loved ones",
      "Simple applications with no-exam options",
    ],
  },
  {
    slug: "financial-advising",
    title: "Financial Advising",
    short:
      "Personal guidance to help you protect your income, grow your savings, and retire with confidence.",
    image: advisingImg,
    points: [
      "Retirement income planning",
      "Life insurance & protection strategies",
      "Annuities and safe-money options",
      "Reviews of policies and beneficiaries",
    ],
  },
];
