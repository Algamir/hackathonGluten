import QR from "./qr";

export default function Footer() {
  return (
    <footer className="mt-12 p-10 rounded-3xl border-0 glass-dark text-white shadow-2xl print:shadow-none relative overflow-hidden animate-fade-in-up">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-slate-800/50 to-slate-900/50 animate-gradient"></div>
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-glow"></div>
              <div className="relative w-28 h-28 bg-gradient-to-br from-red-500 via-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform duration-500 shadow-2xl">
                <span className="text-3xl animate-pulse">🍞</span>
              </div>
            </div>
            <div className="animate-slide-in">
              <div className="text-2xl font-black mb-3 bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text text-transparent">
                Équipe Hackathon emlyon
              </div>
              <div className="text-lg text-slate-300 mb-4 font-medium">Poster — Maladie Cœliaque en France</div>
              <div className="flex flex-wrap gap-3 text-xs">
                <span className="bg-gradient-to-r from-red-500/20 to-red-600/30 text-red-300 px-4 py-2 rounded-full border border-red-500/20 hover:scale-105 transition-transform duration-300">
                  600K personnes
                </span>
                <span className="bg-gradient-to-r from-orange-500/20 to-orange-600/30 text-orange-300 px-4 py-2 rounded-full border border-orange-500/20 hover:scale-105 transition-transform duration-300">
                  12,9B$ marché
                </span>
                <span className="bg-gradient-to-r from-green-500/20 to-emerald-600/30 text-green-300 px-4 py-2 rounded-full border border-green-500/20 hover:scale-105 transition-transform duration-300">
                  Opportunité
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 animate-scale-in" style={{animationDelay: '0.3s'}}>
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="text-2xl animate-pulse">💡</span>
                <div className="text-xl font-black bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Une idée ? Un contact ?
                </div>
                <span className="text-2xl animate-pulse" style={{animationDelay: '0.5s'}}>🚀</span>
              </div>
              <div className="text-sm text-slate-300 font-medium">Scannez pour rejoindre notre étude</div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative w-36 h-36 bg-white p-3 rounded-2xl shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <QR value="https://forms.gle/placeholder" />
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-xs text-slate-400 mb-2 font-medium">Qui peut nous aider ?</div>
              <div className="flex flex-wrap gap-2 text-xs justify-center">
                <span className="text-blue-300 hover:text-blue-200 transition-colors cursor-pointer">Investisseurs</span>
                <span className="text-slate-400">•</span>
                <span className="text-green-300 hover:text-green-200 transition-colors cursor-pointer">Entrepreneurs</span>
                <span className="text-slate-400">•</span>
                <span className="text-red-300 hover:text-red-200 transition-colors cursor-pointer">Cœliaques</span>
                <span className="text-slate-400">•</span>
                <span className="text-purple-300 hover:text-purple-200 transition-colors cursor-pointer">Médecins</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Separator avec animation */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <div className="flex items-center justify-center gap-4 text-xs text-slate-500">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            <span className="font-medium">Hackathon 2025 • Révolutionner le quotidien des cœliaques</span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
