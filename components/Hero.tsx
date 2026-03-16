import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative border-b border-neutral-800">
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top,_#222,_#050505)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/90" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 pt-16 pb-20 flex flex-col lg:flex-row items-start gap-10">
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400 mb-4">
            Middleburg, Florida
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
            World‑Class Jiu‑Jitsu in a Safe, Family‑Friendly Environment in{" "}
            <span className="text-red-400">Middleburg, FL</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 max-w-xl mb-8">
            Train with experienced black belt instruction in a clean, welcoming gym
            where kids, teens, and adults build real self‑defense skills, confidence,
            and lasting discipline.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-900/40 hover:bg-red-500 transition-colors"
            >
              Get Started – Book Your First Class
            </Link>
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-100 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
            >
              View Classes &amp; Schedule
            </Link>
          </div>

          <p className="text-xs text-neutral-400">
            Serving Middleburg and the greater Jacksonville area with safe, structured
            Jiu‑Jitsu training for all levels.
          </p>
        </div>

        <aside className="w-full max-w-sm lg:w-80 lg:ml-auto bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5 backdrop-blur">
          <h2 className="text-sm font-semibold mb-2">New to Jiu‑Jitsu?</h2>
          <p className="text-sm text-neutral-300 mb-4">
            No experience needed. Start in a beginner‑friendly class where you&apos;ll
            be guided step by step and matched with partners at your level.
          </p>
          <Link
            href="#how-to-start"
            className="inline-flex items-center text-sm font-medium text-red-400 hover:text-red-300"
          >
            How it works
            <span aria-hidden className="ml-1">
              →
            </span>
          </Link>
        </aside>
      </div>
    </section>
  );
}
