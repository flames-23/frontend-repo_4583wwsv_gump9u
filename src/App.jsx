import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-20 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-xl font-semibold">
            Drown Robotics
          </a>
          <nav className="hidden gap-6 text-sm sm:flex">
            <a className="hover:text-indigo-600" href="#features">Features</a>
            <a className="hover:text-indigo-600" href="#products">Products</a>
            <a className="hover:text-indigo-600" href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="hidden rounded-lg bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-500 sm:block">Get a demo</a>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Products />
        <CTA />
      </main>

      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-gray-600">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p>© {new Date().getFullYear()} Drown Robotics — All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-gray-900">Privacy</a>
              <a href="#" className="hover:text-gray-900">Terms</a>
              <a href="#contact" className="hover:text-gray-900">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
