export default function CTA() {
  return (
    <section id="contact" className="relative">
      <div className="absolute inset-0 -z-0 bg-gradient-to-br from-indigo-600/15 via-fuchsia-500/10 to-cyan-400/15" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-gray-900 p-10 text-white shadow-xl sm:p-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ready to pilot drones and robots for your store?</h2>
              <p className="mt-3 text-gray-300">Book a demo and we’ll recommend a configuration tailored to your catalog, geography, and SLAs.</p>
            </div>
            <form className="grid gap-4 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
              <input className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/60 focus:border-indigo-400 focus:outline-none" placeholder="Name" />
              <input type="email" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/60 focus:border-indigo-400 focus:outline-none" placeholder="Work email" />
              <input className="sm:col-span-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/60 focus:border-indigo-400 focus:outline-none" placeholder="Company / Store URL" />
              <button className="sm:col-span-2 rounded-lg bg-white px-5 py-3 font-medium text-gray-900 hover:bg-gray-200">Book a demo</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
