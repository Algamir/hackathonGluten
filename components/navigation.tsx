import Link from "next/link";

interface NavigationProps {
  currentPage: 'poster' | 'mindmap';
}

export default function Navigation({ currentPage }: NavigationProps) {
  return (
    <nav className="fixed top-6 right-6 z-50 glass rounded-2xl shadow-2xl border border-white/20 p-2 animate-slide-in">
      <div className="flex gap-1">
        <Link
          href="/"
          className={`group px-5 py-3 rounded-xl text-sm font-bold transition-all duration-500 relative overflow-hidden ${
            currentPage === 'poster'
              ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-xl'
              : 'text-slate-700 hover:bg-white/60'
          }`}
        >
          <div className={`absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${currentPage === 'poster' ? 'opacity-0' : ''}`}></div>
          <div className="relative z-10 flex items-center gap-2">
            <span className="text-lg">📊</span>
            <span>Poster détaillé</span>
          </div>
        </Link>
        <Link
          href="/mindmap"
          className={`group px-5 py-3 rounded-xl text-sm font-bold transition-all duration-500 relative overflow-hidden ${
            currentPage === 'mindmap'
              ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-xl'
              : 'text-slate-700 hover:bg-white/60'
          }`}
        >
          <div className={`absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${currentPage === 'mindmap' ? 'opacity-0' : ''}`}></div>
          <div className="relative z-10 flex items-center gap-2">
            <span className="text-lg">🧠</span>
            <span>Carte mentale</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}