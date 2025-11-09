import { Package, Truck, ShieldCheck, Zap } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: Package,
      title: "Smart Inventory",
      desc: "Live stock tracking across hubs and dark stores with AI‑based demand forecasts.",
    },
    {
      icon: Truck,
      title: "Autonomous Delivery",
      desc: "Air + ground robots optimize last‑mile routes and reduce delivery times by 60%.",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise‑grade Security",
      desc: "Encrypted control links, geofencing, and automated safety checks built‑in.",
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      desc: "Plug‑and‑play APIs with popular carts: Shopify, WooCommerce, and custom stacks.",
    },
  ];

  return (
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Built for high‑velocity e‑commerce
          </h2>
          <p className="mt-3 text-gray-600">
            Modular hardware, cloud control, and a single dashboard to run everything.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
