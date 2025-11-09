import { CheckCircle2 } from "lucide-react";

const products = [
  {
    name: "AeroX Delivery Drone",
    price: "$3,499",
    features: ["10km range", "2.5kg payload", "Precision landing"],
    image: "https://images.unsplash.com/photo-1543946207-39bd91e70ca7?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "RoboRunner Warehouse Bot",
    price: "$2,199",
    features: ["Lidar navigation", "8hr battery", "Auto‑dock"],
    image: "https://images.unsplash.com/photo-1720036236694-d0a231c52563?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSb2JvUnVubmVyJTIwV2FyZWhvdXNlJTIwQm90fGVufDB8MHx8fDE3NjI2ODc4ODZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
  },
  {
    name: "SkyHub Controller",
    price: "$899",
    features: ["5G + LoRa", "End‑to‑end encryption", "Cloud dashboards"],
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured devices</h2>
            <p className="mt-2 text-gray-600">Pre‑configured kits for fast pilots and full‑scale rollouts.</p>
          </div>
          <a href="#contact" className="hidden rounded-lg bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-800 sm:block">
            Talk to sales
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article key={p.name} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="aspect-video w-full overflow-hidden bg-gray-100">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                  <span className="text-indigo-600 font-semibold">{p.price}</span>
                </div>
                <ul className="mt-3 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center text-sm text-gray-600">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="mt-5 w-full rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500">Add to cart</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
