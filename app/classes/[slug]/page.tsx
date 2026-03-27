import Nav from "@/components/Nav";
import { notFound } from "next/navigation";

type ProgramKey = "fundamentals" | "advanced" | "kids" | "ladies" | "boxing" | "homeschool";

const programs: Record<
  ProgramKey,
  {
    name: string;
    audience: string;
    intro: string;
    benefits: string[];
    structure: string;
    ctaLabel: string;
  }
> = {
  fundamentals: {
    name: "Fundamentals Jiu-Jitsu",
    audience: "Adults & teens new to Jiu-Jitsu",
    intro:
      "Our Fundamentals Jiu-Jitsu program is designed for beginners and newer students who want a strong foundation in Brazilian Jiu-Jitsu.",
    benefits: [
      "Learn core positions, transitions, submissions, and escapes.",
      "Build confidence with structured, step-by-step instruction.",
      "Improve fitness, coordination, and body awareness.",
      "Train in a safe, supportive environment with partners who respect your pace.",
    ],
    structure:
      "Classes typically include a warm-up, technique breakdowns, drilling with partners, and controlled situational sparring.",
    ctaLabel: "Get started with Fundamentals",
  },
  advanced: {
    name: "Advanced Jiu-Jitsu",
    audience: "Experienced practitioners",
    intro:
      "Advanced Jiu-Jitsu classes are for students with a solid foundation who are ready for more complex techniques and training intensity.",
    benefits: [
      "Expand your arsenal with advanced techniques and combinations.",
      "Develop deeper understanding of strategy, timing, and transitions.",
      "Prepare for competition with focused drilling and live training.",
      "Challenge yourself in a room full of motivated training partners.",
    ],
    structure:
      "Classes focus on high-level technique, situational drills, and live sparring rounds appropriate for experienced students.",
    ctaLabel: "Train in Advanced Jiu-Jitsu",
  },
  kids: {
    name: "Kids Jiu-Jitsu",
    audience: "Children (e.g. ages 5–12)",
    intro:
      "Kids Jiu-Jitsu teaches children essential self-defense skills while building focus, confidence, and discipline in a fun, supportive setting.",
    benefits: [
      "Improve confidence, focus, and self-control.",
      "Learn age-appropriate self-defense and bully-prevention skills.",
      "Develop coordination, balance, and overall fitness.",
      "Build respect, teamwork, and resilience through positive challenges.",
    ],
    structure:
      "Classes mix warm-ups, basic movements, partner drills, and games that reinforce key techniques and good behavior on the mats.",
    ctaLabel: "Book a Kids Jiu-Jitsu class",
  },
  ladies: {
    name: "Ladies Jiu-Jitsu",
    audience: "Women of all experience levels",
    intro:
      "Ladies Jiu-Jitsu provides a supportive, empowering environment where women can train, get in shape, and learn practical self-defense.",
    benefits: [
      "Train in a comfortable, encouraging space designed for women.",
      "Learn practical techniques for real-world self-defense.",
      "Improve strength, conditioning, and stress relief.",
      "Join a community of supportive training partners.",
    ],
    structure:
      "Classes focus on technique, drilling, and controlled training with partners, with an emphasis on safety and clear communication.",
    ctaLabel: "Start Ladies Jiu-Jitsu",
  },
  boxing: {
    name: "Boxing",
    audience: "Teens & adults of all fitness levels",
    intro:
      "Our Boxing program blends striking fundamentals, footwork, and conditioning into high-energy classes for all fitness levels.",
    benefits: [
      "Learn proper punching technique and footwork.",
      "Boost cardio, endurance, and overall conditioning.",
      "Relieve stress in a safe, supervised environment.",
      "Complement your Jiu-Jitsu training or start fresh with striking.",
    ],
    structure:
      "Classes typically include jump rope or light cardio, technique drills, pad or bag work, and conditioning.",
    ctaLabel: "Try a Boxing class",
  },
  homeschool: {
    name: "Homeschool Classes",
    audience: "Homeschool students",
    intro:
      "Kaiju Jiu Jitsu offers daytime Jiu-Jitsu classes designed specifically for homeschool students. As a Direct Provider through the Step Up For Students Scholarship, we make it easy for qualifying families to use their scholarship funds for martial arts training.",
    benefits: [
      "Daytime class schedule tailored for homeschool families.",
      "Build confidence, discipline, and physical fitness during the school day.",
      "Learn self-defense and essential life skills in a structured environment.",
      "Direct Provider through Step Up For Students Scholarship — qualifying families can apply scholarship funds directly.",
    ],
    structure:
      "Classes include a warm-up, age-appropriate technique instruction, partner drilling, and controlled training designed to develop skills progressively.",
    ctaLabel: "Get started with Homeschool Classes",
  },
};

interface ProgramPageProps {
  params: { slug: string };
}

export default function ProgramPage({ params }: ProgramPageProps) {
  const slug = params.slug as ProgramKey;
  const program = programs[slug];

  if (!program) {
    return notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-neutral-50">
      <Nav />
      <main className="flex-1">
        <section className="border-b border-neutral-800 bg-neutral-950">
          <div className="max-w-6xl mx-auto px-4 pt-10 pb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400 mb-3">
              {program.audience}
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              {program.name}
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 max-w-2xl">
              {program.intro}
            </p>
          </div>
        </section>

        <section className="border-b border-neutral-800 bg-neutral-950">
          <div className="max-w-6xl mx-auto px-4 py-10 grid gap-10 lg:grid-cols-[minmax(0,_1.1fr)_minmax(0,_1fr)]">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-3">
                Why students love this program
              </h2>
              <ul className="space-y-3">
                {program.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-sm text-neutral-300">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5">
              <h3 className="text-base font-semibold mb-2">
                What a typical class looks like
              </h3>
              <p className="text-sm text-neutral-300 mb-4">
                {program.structure}
              </p>
              <p className="text-xs text-neutral-400 mb-4">
                Exact structure may vary by coach and day, but you can always expect a
                focus on safety, technique, and positive training partners.
              </p>
              <a
                href="/get-started"
                className="inline-flex items-center justify-center rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 transition-colors"
              >
                {program.ctaLabel}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
