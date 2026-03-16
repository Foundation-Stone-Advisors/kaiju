export default function InstructorSpotlight() {
  return (
    <section className="border-b border-neutral-800 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 py-14 grid gap-10 lg:grid-cols-[minmax(0,_1.1fr)_minmax(0,_1fr)] items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
            Train Under Experienced, Supportive Instruction
          </h2>
          <h3 className="text-base font-semibold text-neutral-200 mb-2">
            Coach Elijah – Head Instructor &amp; Black Belt
          </h3>
          <p className="text-sm sm:text-base text-neutral-300 mb-4">
            Coach Elijah has dedicated many years to training and teaching Jiu-Jitsu,
            combining technical expertise with a calm, supportive coaching style.
          </p>
          <p className="text-sm sm:text-base text-neutral-300 mb-4">
            He is committed to helping each student progress at their own pace, whether
            they&apos;re stepping onto the mats for the first time or refining advanced
            techniques for competition.
          </p>
          <p className="text-sm sm:text-base text-neutral-300 mb-6">
            Classes focus on strong fundamentals, smart strategy, and conditioning
            while reinforcing discipline, respect, and perseverance.
          </p>
          <a
            href="/about"
            className="inline-flex items-center text-sm font-medium text-red-400 hover:text-red-300"
          >
            Learn more about our philosophy
            <span aria-hidden className="ml-1">→</span>
          </a>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto h-64 w-full max-w-xs overflow-hidden rounded-3xl border border-neutral-800 bg-gradient-to-br from-red-900/60 via-neutral-900 to-black">
            <div className="absolute inset-0 opacity-40 mix-blend-screen bg-[radial-gradient(circle_at_20%_0,_rgba(248,113,113,0.9),transparent_60%),_radial-gradient(circle_at_80%_100%,_rgba(239,68,68,0.8),transparent_55%)]" />
            <div className="relative h-full w-full flex flex-col items-center justify-center text-center px-6">
              <div className="h-20 w-20 rounded-full border-2 border-red-400/70 bg-neutral-950/70 mb-4" />
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-300 mb-1">
                Head Instructor
              </div>
              <div className="text-lg font-semibold mb-2">Coach Elijah</div>
              <p className="text-xs text-neutral-200">
                Black belt Jiu-Jitsu instructor dedicated to helping students of all
                ages build confidence, skill, and resilience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
