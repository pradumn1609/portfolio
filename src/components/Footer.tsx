import { Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6">
          <button
            onClick={scrollToTop}
            className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </button>

          <div className="text-center">
            <p className="text-lg font-semibold mb-2">Pradumn Pathak</p>
            <p className="text-slate-400 text-sm">
              Computer Science Engineer | Web Developer | AI Solutions
            </p>
          </div>

          <div className="w-full h-px bg-slate-700"></div>

          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <span>&copy; {new Date().getFullYear()} Pradumn Pathak. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
