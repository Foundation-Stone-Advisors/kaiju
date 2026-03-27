import Link from "next/link";

const classes = [
  {
    name: "Fundamentals Jiu‑Jitsu",
    tag: "Beginners",
    description:
      "Learn the core positions, transitions, submissions, and escapes in a structured, beginner‑friendly class.",
    href: "/classes/fundamentals",
  },
  {
    name: "Advanced Jiu‑Jitsu",
    tag: "Experienced",
    description:
      "Sharpen your technique, strategy, and live training with high‑level instruction and challenging rounds.",
    href: "/classes/advanced",
  },
  {
    name: "Kids Jiu‑Jitsu",
    tag: "Ages 5–12",
    description:
      "Kids build confidence, focus, and discipline through safe, age‑appropriate drills, games, and self‑defense skills.",
    href: "/classes/kids",
  },
  {
    name: "Ladies Jiu‑Jitsu",
    tag: "Women",
    description:
      "Train Jiu‑Jitsu in a supportive, empowering environment while learning practical self‑defense.",
    href: "/classes/ladies",
  },
  {
    name: "Boxing",
    tag: "Striking",
    description:
      "High‑energy classes blending striking fundamentals, footwork, and conditioning for all fitness levels.",
    href: "/classes/boxing",
  },
  {
    name: "No‑Gi Classes",
    tag: "No‑Gi",
    description:
      "Train without the traditional gi in fast‑paced classes that emphasize wrestling, leg locks, and submission grappling.",
    href: "/classes/no-gi",
  },
  {
    name: "Homeschool Classes",
    tag: "Homeschool",
    description:
      "Daytime Jiu‑Jitsu classes designed for homeschool students. Kaiju Jiu Jitsu is a Direct Provider through the Step Up For Students Scholarship.",
    href: "/classes/homeschool",
  },
];

export default function ClassesGrid() {
  return (
    <section className="border-b border-neutral-800 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
          Classes for Every Age and Experience Level
        </h2>
        <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mb-8">
          Whether you&apos;re a parent, a busy professional, or a dedicated competitor,
          there&apos;s a class designed for you.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {classes.map((item) => (
            <div
              key={item.name}
              className="flex flex-col rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-semibold">
                  {item.name}
                </h3>
                <span className="text-[11px] uppercase tracking-[0.18em] text-neutral-400 border border-neutral-700 rounded-full px-2 py-1">
                  {item.tag}
                </span>
              </div>
              <p className="text-sm text-neutral-300 flex-1 mb-4">
                {item.description}
              </p>
              <Link
                href={item.href}
                className="text-sm font-medium text-red-400 hover:text-red-300 mt-auto"
              >
                View details →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
