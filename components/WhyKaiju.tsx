const features = [
  {
    title: "Safe, Supportive Training",
    body: "Structured classes in a clean, supervised environment so kids and adults can train with confidence.",
  },
  {
    title: "Experienced Black Belt Instruction",
    body: "Decades of training and teaching experience focused on helping every student progress from day one through advanced levels.",
  },
  {
    title: "Confidence & Community",
    body: "Build discipline, humility, and real friendships in a positive, family‑friendly community on and off the mats.",
  },
];

export default function WhyKaiju() {
  return (
    <section className="border-b border-neutral-800 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
          Why Train at Kaiju Jiu‑Jitsu?
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5"
            >
              <div className="mb-3 h-8 w-8 rounded-full bg-red-600/20 text-red-400 flex items-center justify-center text-xs font-semibold">
                •
              </div>
              <h3 className="text-base font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-neutral-300">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
