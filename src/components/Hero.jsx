import { Rocket, ShoppingCart } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-fuchsia-500/10 to-cyan-400/20" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-medium text-indigo-600 ring-1 ring-inset ring-indigo-600/20">
              <Rocket className="h-3.5 w-3.5" />
              Next‑gen Commerce
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Drone & Robot Solutions for E‑commerce
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Launch, automate, and scale your operations with smart aerial drones and warehouse robots. Faster fulfillment, safer operations, happier customers.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-white shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Shop Devices
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-gray-700 hover:bg-gray-50"
              >
                Explore Features
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-12 -bottom-12 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_40%),radial-gradient(circle_at_80%_50%,rgba(34,211,238,0.15),transparent_35%),radial-gradient(circle_at_40%_80%,rgba(244,63,94,0.12),transparent_30%)]" />
              <div className="relative flex h-full flex-col items-center justify-center p-8">
                <div className="mb-6 grid h-40 w-40 place-items-center rounded-full bg-gradient-to-br from-indigo-600 to-fuchsia-500 text-white shadow-lg">
                  <svg viewBox="0 0 64 64" className="h-24 w-24" aria-hidden="true">
                    <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="32" cy="32" r="6" />
                      <path d="M32 26V8m0 30v18M26 32H8m30 0h18" />
                      <circle cx="8" cy="32" r="6" />
                      <circle cx="56" cy="32" r="6" />
                      <circle cx="32" cy="8" r="6" />
                      <circle cx="32" cy="56" r="6" />
                    </g>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">AeroX Fleet</h3>
                <p className="mt-2 text-center text-sm text-gray-600">
                  Autonomous delivery drones with precision landing, real‑time tracking, and seamless inventory sync.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
