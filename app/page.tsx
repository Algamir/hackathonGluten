import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <>
      <Navigation currentPage="poster" />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4 md:p-8 print:p-0">
        <div className="max-w-[1400px] mx-auto">
        {/* Header Section */}
        <header className="text-center mb-20 relative overflow-hidden">
          {/* Background avec mesh gradient animé */}
          <div className="absolute inset-0 bg-mesh opacity-30 rounded-3xl animate-gradient"></div>
          <div className="absolute inset-0 glass rounded-3xl"></div>
          
          {/* Particules flottantes */}
          <div className="absolute top-10 left-10 w-3 h-3 bg-red-400 rounded-full animate-float opacity-60"></div>
          <div className="absolute top-20 right-16 w-2 h-2 bg-orange-400 rounded-full animate-float opacity-70" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-16 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-float opacity-50" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-10 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-float opacity-60" style={{animationDelay: '0.5s'}}></div>
          
          <div className="relative z-10 py-16 px-8">
            <div className="animate-fade-in-up">
              <Badge variant="destructive" className="mb-8 text-sm font-bold px-8 py-4 animate-glow shadow-2xl">
                🚨 PROBLÈME MAJEUR DE SANTÉ PUBLIQUE
              </Badge>
            </div>
            
            <div className="animate-scale-in" style={{animationDelay: '0.2s'}}>
              <h1 className="text-4xl md:text-7xl lg:text-9xl font-black gradient-text mb-8 leading-tight animate-gradient text-shadow-glow">
                La vie cachée des<br />
                <span className="bg-gradient-to-r from-red-500 via-pink-500 to-red-600 bg-clip-text text-transparent animate-pulse-slow">
                  600 000 cœliaques
                </span>
              </h1>
            </div>
            
            <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <p className="text-3xl md:text-5xl font-black text-slate-800 mb-6 tracking-tight">en France</p>
            </div>
            
            <div className="animate-slide-in" style={{animationDelay: '0.6s'}}>
              <div className="bg-gradient-to-r from-slate-100 via-white to-slate-100 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-slate-200 shadow-xl max-w-4xl mx-auto">
                <p className="text-lg md:text-2xl text-slate-700 font-medium">
                  <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent font-bold">12,9 milliards USD</span> de marché mondial • 
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold"> Une communauté invisible</span> • 
                  <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent font-bold"> Un désert de solutions</span>
                </p>
              </div>
            </div>
            
            <div className="animate-scale-in" style={{animationDelay: '0.8s'}}>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                <Link 
                  href="/mindmap" 
                  className="group bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all duration-500 hover:scale-110 text-lg relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex items-center gap-3">
                    <span className="text-2xl animate-pulse">🧠</span>
                    <span>Voir la carte mentale</span>
                  </div>
                </Link>
                <div className="flex items-center gap-3 text-slate-600">
                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent"></div>
                  <span className="text-sm font-medium">Pitch visuel en 10 secondes</span>
                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent"></div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-up" style={{animationDelay: '1s'}}>
              <div className="relative w-32 h-2 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-full animate-gradient"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-full blur-sm animate-glow"></div>
              </div>
            </div>
          </div>
        </header>

        {/* Introduction */}
        <section className="mb-16 relative">
          <div className="bg-gradient-to-r from-red-50 via-orange-50 to-red-50 p-8 md:p-12 rounded-2xl border border-red-200 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-500/10 rounded-full translate-y-12 -translate-x-12"></div>
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-1 h-16 bg-gradient-to-b from-red-500 to-orange-500 rounded-full"></div>
                <Badge variant="outline" className="border-red-300 text-red-700">
                  CONTEXTE DE L'ÉTUDE
                </Badge>
              </div>
              <p className="text-xl md:text-2xl leading-relaxed text-slate-800 font-medium">
                Aujourd'hui, notre équipe a découvert un{" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-bold">
                  marché de 12,9 milliards USD
                </span>, 
                une{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold">
                  communauté de 600 000 personnes en France
                </span>... et un{" "}
                <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent font-bold text-2xl">
                  désert d'informations et de solutions adaptées
                </span>.
              </p>
            </div>
          </div>
        </section>

        {/* Top 3 Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Section 1: Chiffres Clés */}
          <Card className="group card-hover bg-gradient-to-br from-red-50 via-white to-orange-50 border-0 shadow-2xl relative overflow-hidden animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-br from-red-100/20 via-orange-100/20 to-red-100/20 group-hover:from-red-200/30 group-hover:to-orange-200/30 transition-all duration-500"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-400/10 to-orange-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <CardContent className="p-8 relative z-10">
              <div className="text-center mb-8">
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 via-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:rotate-12 transition-transform duration-500">
                    <span className="text-4xl animate-pulse">📊</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                </div>
                <h2 className="text-2xl font-black text-slate-800 mb-3 group-hover:text-red-700 transition-colors duration-300">
                  Un marché invisible
                </h2>
                <Badge variant="destructive" className="text-xs px-4 py-2 animate-pulse shadow-lg">
                  CHIFFRES CLÉS
                </Badge>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 rounded-xl text-white text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                  <div className="relative z-10">
                    <div className="text-5xl font-black mb-2">600K</div>
                    <div className="text-sm font-medium opacity-90">personnes cœliaques</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-600 to-red-700 p-5 rounded-xl text-white text-center">
                  <div className="text-3xl font-bold mb-1">❌ 10-20%</div>
                  <div className="text-sm font-medium opacity-90">seulement diagnostiquées</div>
                </div>

                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-5 rounded-xl text-white text-center">
                  <div className="text-3xl font-bold mb-1">⏱️ 10 ans</div>
                  <div className="text-sm font-medium opacity-90">d'errance avant diagnostic</div>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="space-y-3 text-sm text-slate-700">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span>💶</span>
                    <span>Prix produits SG</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-red-600">+250%</div>
                    <div className="text-xs text-slate-500">vs Italie</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span>📈</span>
                    <span>Marché mondial</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600">12,9B $</div>
                    <div className="text-xs text-slate-500">en 2024</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span>🚀</span>
                    <span>Croissance ES/IT</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-blue-600">+15%/an</div>
                    <div className="text-xs text-slate-500">vs 6% France</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-red-100 rounded-lg border border-red-200">
                  <div className="flex items-center gap-2">
                    <span>⚠️</span>
                    <span>Potentiel France</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-red-700">480K</div>
                    <div className="text-xs text-red-600">non diagnostiqués</div>
                  </div>
                </div>
              </div>

              {/* Sources */}
              <Separator className="my-4" />
              <div className="mt-2 text-[10px] leading-relaxed text-slate-500">
                <span className="font-semibold">Sources: </span>
                <a
                  href="https://www.afdiag.fr/fr/pathologies-liees-au-gluten/maladie-cliaque/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-slate-700"
                >
                  AFDIAG – Maladie cœliaque (prévalence 1–2%, 10–20% diagnostiqués)
                </a>
                <span className="px-1">•</span>
                <a
                  href="https://www.american-hospital.org/pathologie/maladie-coeliaque#:~:text=On%20estime%20%C3%A0%20700%20000,1%25%20de%20la%20population)."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-slate-700"
                >
                  American Hospital – Maladie cœliaque (700 000 personnes estimées en France)
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Section 2: Parcours Utilisateur */}
          <Card className="group card-hover bg-gradient-to-br from-orange-50 via-white to-yellow-50 border-0 shadow-2xl relative overflow-hidden animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100/20 via-yellow-100/20 to-orange-100/20 group-hover:from-orange-200/30 group-hover:to-yellow-200/30 transition-all duration-500"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-orange-400/10 to-yellow-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <CardContent className="p-8 relative z-10">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🚶</span>
                </div>
                <h2 className="text-2xl font-black text-slate-800 mb-2">
                  Le parcours du combattant
                </h2>
                <Badge className="bg-orange-500 hover:bg-orange-600 text-xs">
                  TIMELINE PATIENT
                </Badge>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border-l-4 border-green-400">
                  <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center text-xl">😊</div>
                  <div>
                    <p className="font-bold text-green-700 text-sm">AVANT</p>
                    <p className="text-xs text-slate-600">Vie normale, symptômes inexpliqués</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-px h-6 bg-gradient-to-b from-green-400 to-orange-400"></div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl border-l-4 border-orange-400">
                  <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-xl">🤔</div>
                  <div>
                    <p className="font-bold text-orange-600 text-sm">SYMPTÔMES (2-10 ans)</p>
                    <p className="text-xs text-slate-600">Fatigue, douleurs, médecins multiples</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-px h-6 bg-gradient-to-b from-orange-400 to-red-500"></div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-red-50 rounded-xl border-l-4 border-red-400">
                  <div className="w-10 h-10 bg-red-400 rounded-full flex items-center justify-center text-xl">🏥</div>
                  <div>
                    <p className="font-bold text-red-600 text-sm">DIAGNOSTIC</p>
                    <p className="text-xs text-slate-600">"Vous êtes cœliaque"</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-100 to-red-200 p-4 rounded-xl border border-red-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-red-500/10 rounded-full -translate-y-8 translate-x-8"></div>
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-xl">😰</div>
                    <div>
                      <p className="font-black text-red-700 text-sm mb-1">POST-DIAGNOSTIC</p>
                      <p className="text-xs text-red-800 font-bold mb-2">"Et maintenant je fais quoi ?"</p>
                      <ul className="text-xs space-y-1 text-red-700">
                        <li>• Frustration continue</li>
                        <li>• Charge mental</li>
                        <li>• Anxiété</li>
                        <li>• Restaurant non conforme</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl border-l-4 border-orange-500">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-xl">❓</div>
                  <div>
                    <p className="font-bold text-orange-700 text-sm">VIE QUOTIDIENNE</p>
                    <p className="text-xs text-slate-600">Frustration continue</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 3: Comparaison Internationale */}
          <Card className="group card-hover bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-0 shadow-2xl relative overflow-hidden animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-indigo-100/20 to-blue-100/20 group-hover:from-blue-200/30 group-hover:to-indigo-200/30 transition-all duration-500"></div>
            <div className="absolute top-0 left-0 w-36 h-36 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <CardContent className="p-8 relative z-10">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌍</span>
                </div>
                <h2 className="text-2xl font-black text-slate-800 mb-2">
                  Pourquoi la France est en retard ?
                </h2>
                <Badge className="bg-blue-500 hover:bg-blue-600 text-xs">
                  COMPARAISON INTERNATIONALE
                </Badge>
              </div>
              
              <div className="space-y-5">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-5 rounded-xl text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                  <div className="relative z-10">
                    <p className="font-black text-center mb-3 text-lg">🇮🇹 ITALIE ⭐⭐⭐⭐⭐</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center gap-1"><span>✅</span> Loi cœliaque (2005)</div>
                      <div className="flex items-center gap-1"><span>✅</span> Remboursement produits</div>
                      <div className="flex items-center gap-1"><span>✅</span> Formation restaurateurs</div>
                      <div className="flex items-center gap-1"><span>✅</span> 265k diagnostiqués</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-5 rounded-xl text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                  <div className="relative z-10">
                    <p className="font-black text-center mb-3 text-lg">🇪🇸 ESPAGNE ⭐⭐⭐⭐</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center gap-1"><span>✅</span> Culture SG forte</div>
                      <div className="flex items-center gap-1"><span>✅</span> Chaînes healthy</div>
                      <div className="flex items-center gap-1"><span>✅</span> Pâtes SG accessibles</div>
                      <div className="flex items-center gap-1"><span>✅</span> Croissance 2 chiffres</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-500 to-red-600 p-5 rounded-xl text-white border-4 border-red-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                  <div className="relative z-10">
                    <p className="font-black text-center mb-3 text-lg">🇫🇷 FRANCE ⭐⭐</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center gap-1"><span>❌</span> Peu de sensibilisation</div>
                      <div className="flex items-center gap-1"><span>❌</span> Peu de restos 100% SG</div>
                      <div className="flex items-center gap-1"><span>❌</span> Prix 2-3x plus chers</div>
                      <div className="flex items-center gap-1"><span>❌</span> 120k diagnostiqués</div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="bg-gradient-to-r from-slate-100 via-white to-slate-100 p-5 rounded-xl border border-slate-200 relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-r"></div>
                <div className="pl-4">
                  <p className="text-sm italic text-slate-700 font-medium leading-relaxed">
                    "En Espagne, je mange au resto sans stress. En France, je dois toujours appeler avant et souvent me contenter d'une salade."
                  </p>
                  <p className="text-xs text-slate-500 mt-2">— Témoignage anonyme</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section Carte Lyon - Réalité du terrain */}
        <Card className="mb-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50 border-0 shadow-2xl overflow-hidden animate-fade-in-up">
          <CardContent className="p-0">
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🗺️</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black mb-4">
                  La réalité du terrain à Lyon
                </h2>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  CARTOGRAPHIE INTERACTIVE
                </Badge>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Texte explicatif */}
                <div className="space-y-6 animate-slide-in">
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl border border-orange-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                        <span className="text-2xl">📍</span>
                      </div>
                      <h3 className="text-xl font-black text-orange-700">État des lieux Lyon</h3>
                    </div>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      Nous avons cartographié <strong className="text-orange-600">tous les commerces</strong> proposant des options sans gluten sur Lyon. 
                      Le constat est sans appel.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-white p-4 rounded-xl shadow-sm">
                        <div className="text-2xl font-black text-red-600 mb-1">4</div>
                        <div className="text-xs text-slate-600">Restaurant 100% SG</div>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm">
                        <div className="text-2xl font-black text-orange-600 mb-1">~15</div>
                        <div className="text-xs text-slate-600">Options partielles</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                        <span className="text-2xl">⚠️</span>
                      </div>
                      <h3 className="text-xl font-black text-blue-700">Les défis identifiés</h3>
                    </div>
                    
                    <ul className="space-y-3 text-sm text-slate-700">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Contamination croisée :</strong> Cuisines partagées, risque élevé</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Formation insuffisante :</strong> Personnel non sensibilisé</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Choix limités :</strong> Souvent 1-2 plats maximum</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Géolocalisation :</strong> Concentrés centre-ville uniquement</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-purple-100 to-purple-200 p-6 rounded-2xl border-2 border-purple-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-purple-400/20 rounded-full -translate-y-10 translate-x-10"></div>
                    <div className="relative z-10">
                      <div className="text-center mb-4">
                        <div className="text-2xl mb-2">💡</div>
                        <h3 className="text-lg font-black text-purple-800">L'opportunité est énorme !</h3>
                      </div>
                      <p className="text-purple-700 text-center font-medium">
                        <strong>2ème ville de France</strong> mais quasi aucune offre 100% sans gluten sécurisée. 
                        Le <strong>premier acteur</strong> à s'implanter sérieusement aura le marché pour lui.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Carte interactive */}
                <div className="animate-scale-in" style={{animationDelay: '0.3s'}}>
                  <div className="bg-white p-6 rounded-2xl shadow-2xl border border-slate-200 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"></div>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-black text-slate-800">Shops Sans Gluten - Lyon</h3>
                        <Badge className="bg-indigo-500 hover:bg-indigo-600">
                          INTERACTIVE
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-600">
                        Cliquez sur les marqueurs pour voir les détails de chaque établissement
                      </p>
                    </div>

                    {/* Container de la carte avec effet glass */}
                    <div className="relative rounded-xl overflow-hidden shadow-xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 pointer-events-none z-10"></div>
                      <iframe 
                        src="https://www.google.com/maps/d/embed?mid=1gSEsD4J48KbeF70XtXGqu3W9K0r02X4&ehbc=2E312F" 
                        width="100%" 
                        height="400"
                        style={{border: 0, borderRadius: '12px'}}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>

                    {/* Légende */}
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                      <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg border border-green-200">
                        <div className="w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></div>
                        <span className="text-green-700 font-medium">Établissement 100% sans gluten OUVERT</span>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-orange-50 rounded-lg border border-orange-200">
                        <div className="w-4 h-4 bg-orange-500 rounded-full flex-shrink-0"></div>
                        <span className="text-orange-700 font-medium">Établissement avec options SANS GLUTEN ouvert</span>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-red-50 rounded-lg border border-red-200">
                        <div className="w-4 h-4 bg-red-500 rounded-full flex-shrink-0"></div>
                        <span className="text-red-700 font-medium">Établissement FERMÉ définitivement</span>
                      </div>
                    </div>
                    
                    {/* Source de la carte */}
                    <div className="mt-4 bg-slate-50 p-4 rounded-lg border-l-4 border-indigo-400">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-xs text-slate-600">
                          <strong>Source :</strong> 
                          <a 
                            href="https://www.google.com/maps/d/edit?mid=1gSEsD4J48KbeF70XtXGqu3W9K0r02X4&usp=sharing" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:text-indigo-800 underline ml-1"
                          >
                            MyMaps - Établissements sans gluten Lyon
                          </a>
                          {" "}par Maxence Manson
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          Carte collaborative en ligne
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <span className="text-blue-500">✏️</span>
                          Modifiable par la communauté
                        </span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-4 text-center">
                      <p className="text-xs text-slate-500 mb-2">Vous connaissez d'autres adresses ?</p>
                      <button className="text-xs bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                        📧 Contribuer à la carte
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section conclusion avec stats */}
              <div className="mt-8 bg-gradient-to-r from-slate-800 to-slate-900 text-white p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 -translate-x-16"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 translate-x-12"></div>
                
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-black mb-6">Le verdict est sans appel</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                      <div className="text-3xl font-black text-red-400 mb-2">2,2M</div>
                      <div className="text-sm opacity-80">habitants Grand Lyon</div>
                      <div className="text-xs opacity-60 mt-1">≈ 22 000 cœliaques potentiels</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                      <div className="text-3xl font-black text-orange-400 mb-2">~15</div>
                      <div className="text-sm opacity-80">options sans gluten</div>
                      <div className="text-xs opacity-60 mt-1">Dont 0 restaurant 100% sécurisé</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                      <div className="text-3xl font-black text-yellow-400 mb-2">1/1500</div>
                      <div className="text-sm opacity-80">ratio option/cœliaque</div>
                      <div className="text-xs opacity-60 mt-1">Vs 1/50 à Barcelone</div>
                    </div>
                  </div>

                  <Separator className="my-6 bg-white/20" />
                  
                  <p className="text-xl font-bold">
                    Lyon, 2ème ville de France, mais <span className="text-red-400">désert alimentaire</span> pour les cœliaques.
                    <br />
                    <span className="text-green-400">L'opportunité n'a jamais été aussi claire.</span>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section Cartographie des Acteurs */}
        <Card className="mb-16 bg-gradient-to-br from-emerald-50 via-white to-teal-50 border-0 shadow-2xl overflow-hidden animate-fade-in-up">
          <CardContent className="p-0">
            <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 text-white p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🕸️</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black mb-4">
                  Cartographie des acteurs clés
                </h2>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  RÉSEAU D'EXPERTS IDENTIFIÉS
                </Badge>
                <p className="text-lg mt-4 opacity-90">
                  Notre équipe a mené des interviews pour identifier l'écosystème lyonnais
                </p>
              </div>
            </div>

            <div className="p-8">
              {/* Réseau central avec connexions */}
              <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 mb-8 border border-slate-200 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <svg className="w-full h-full">
                    <defs>
                      <pattern id="network" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                        <circle cx="25" cy="25" r="1" fill="#64748b"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#network)"/>
                  </svg>
                </div>

                {/* Network visualization */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-center text-slate-800 mb-8">
                    Écosystème Sans Gluten Lyon
                  </h3>

                  {/* Central hub - Version simplifiée */}
                  <div className="flex justify-center mb-12">
                    <div className="w-32 h-32 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse-slow">
                      <div className="text-center text-white">
                        <div className="text-2xl mb-1">🎯</div>
                        <div className="text-sm font-bold">ÉCOSYSTÈME</div>
                        <div className="text-xs opacity-80">Sans Gluten</div>
                      </div>
                    </div>
                  </div>

                  {/* Actor nodes */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    
                    {/* Secteur Médical */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-black text-blue-700 text-center mb-4 flex items-center justify-center gap-2">
                        <span className="text-xl">⚕️</span>
                        Secteur Médical
                      </h4>
                      
                      <div className="bg-blue-50 p-4 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all duration-300 group">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:rotate-12 transition-transform duration-300">
                            DC
                          </div>
                          <div>
                            <div className="font-bold text-blue-800 text-sm">Dr. Christophe CELLIER</div>
                            <div className="text-xs text-blue-600">Gastro-entérologue</div>
                          </div>
                        </div>
                        <div className="text-xs text-slate-600 bg-white/70 p-2 rounded space-y-1">
                          <div><strong>Expertise :</strong> Spécialisé maladie cœliaque</div>
                          <div className="flex gap-2">
                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">📈 Impact: 9/10</span>
                            <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">📞 Access: 3/10</span>
                          </div>
                          <div className="text-xs text-red-600 italic">⚠️ Difficile à contacter</div>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all duration-300 group">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:rotate-12 transition-transform duration-300">
                            PM
                          </div>
                          <div>
                            <div className="font-bold text-indigo-800 text-sm">Pr. MION</div>
                            <div className="text-xs text-indigo-600">Hôpital Édouard Herriot</div>
                          </div>
                        </div>
                        <div className="text-xs text-slate-600 bg-white/70 p-2 rounded space-y-1">
                          <div><strong>Service :</strong> Allergies alimentaires • Auteur</div>
                          <div className="flex gap-2">
                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">📈 Impact: 8/10</span>
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-bold">🤝 Access: 7/10</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all duration-300 group">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:rotate-12 transition-transform duration-300">
                            CG
                          </div>
                          <div>
                            <div className="font-bold text-cyan-800 text-sm">Centre Gastro-entérologie</div>
                            <div className="text-xs text-cyan-600">Lyon • Maladies digestives</div>
                          </div>
                        </div>
                        <div className="text-xs text-slate-600 bg-white/70 p-2 rounded space-y-1">
                          <div><strong>Spécialité :</strong> Pathologies intestinales • Cœliaque</div>
                          <div className="flex gap-2">
                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">🏥 Expert: 8/10</span>
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-bold">📍 Local: 9/10</span>
                          </div>
                          <div className="text-xs text-green-600 italic">✅ Potentiel partenaire Lyon</div>
                        </div>
                      </div>
                    </div>

                    {/* Secteur Business */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-black text-orange-700 text-center mb-4 flex items-center justify-center gap-2">
                        <span className="text-xl">🏪</span>
                        Secteur Business
                      </h4>
                      
                      <div className="bg-orange-50 p-4 rounded-xl border-2 border-orange-200 hover:shadow-lg transition-all duration-300 group">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:rotate-12 transition-transform duration-300">
                            GV
                          </div>
                          <div>
                            <div className="font-bold text-orange-800 text-sm">Grégoire VANDENESCH</div>
                            <div className="text-xs text-orange-600">Ex-Boulangerie Chez Grégoire</div>
                          </div>
                        </div>
                        <div className="text-xs text-slate-600 bg-white/70 p-2 rounded space-y-1">
                          <div><strong>Status :</strong> Boulangerie fermée • Expertise terrain</div>
                          <div className="flex gap-2">
                            <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">⚠️ Risk: 9/10</span>
                            <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs font-bold">💡 Learn: 10/10</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-orange-50 p-4 rounded-xl border-2 border-orange-200 hover:shadow-lg transition-all duration-300 group">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:rotate-12 transition-transform duration-300">
                            BB
                          </div>
                          <div>
                            <div className="font-bold text-orange-800 text-sm">Baptiste BORNE</div>
                            <div className="text-xs text-orange-600">Fondateur COPAINS</div>
                          </div>
                        </div>
                        <div className="text-xs text-slate-600 bg-white/70 p-2 rounded space-y-1">
                          <div><strong>Succès :</strong> Modèle économique prouvé • Expansion nationale</div>
                          <div className="flex gap-2">
                            <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs font-bold">💰 Profit: 9/10</span>
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-bold">📞 Contact: 6/10</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-orange-50 p-4 rounded-xl border-2 border-orange-200 hover:shadow-lg transition-all duration-300 group">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:rotate-12 transition-transform duration-300">
                            SC
                          </div>
                          <div>
                            <div className="font-bold text-amber-800 text-sm">SCHÄR</div>
                            <div className="text-xs text-amber-600">Leader européen produits SG</div>
                          </div>
                        </div>
                        <div className="text-xs text-slate-600 bg-white/70 p-2 rounded space-y-1">
                          <div><strong>Position :</strong> Marque référence • Distribution massive</div>
                          <div className="flex gap-2">
                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">🏭 Scale: 10/10</span>
                            <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs font-bold">🤝 Partner: 7/10</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Secteur Communauté */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-black text-purple-700 text-center mb-4 flex items-center justify-center gap-2">
                        <span className="text-xl">👥</span>
                        Communauté
                      </h4>
                      
                      <div className="bg-purple-50 p-4 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-all duration-300 group">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:rotate-12 transition-transform duration-300">
                            EC
                          </div>
                          <div>
                            <div className="font-bold text-purple-800 text-sm">Émilie GUILLAUME CANTIN</div>
                            <div className="text-xs text-purple-600">Admin Lyon Sans Gluten</div>
                          </div>
                        </div>
                        <div className="text-xs text-slate-600 bg-white/70 p-2 rounded space-y-1">
                          <div><strong>Réseau :</strong> Page Facebook • Communauté active</div>
                          <div className="flex gap-2">
                            <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-bold">👥 Reach: 8/10</span>
                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">🤝 Engage: 9/10</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-purple-50 p-4 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-all duration-300 group">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:rotate-12 transition-transform duration-300">
                            ZN
                          </div>
                          <div>
                            <div className="font-bold text-pink-800 text-sm">Zoe NoGluten</div>
                            <div className="text-xs text-pink-600">Influenceuse Cœliaque</div>
                          </div>
                        </div>
                        <div className="text-xs text-slate-600 bg-white/70 p-2 rounded space-y-1">
                          <div><strong>Influence :</strong> Sensibilisation • Témoignage vécu</div>
                          <div className="flex gap-2">
                            <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded text-xs font-bold">📱 Social: 7/10</span>
                            <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs font-bold">💫 Trust: 9/10</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Matrice de priorités */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl border border-indigo-200 mb-8">
                <h3 className="text-2xl font-black text-indigo-800 text-center mb-8 flex items-center justify-center gap-3">
                  <span className="text-3xl">🎯</span>
                  Matrice Impact / Accessibilité
                </h3>
                
                <div className="relative bg-white p-8 rounded-xl shadow-lg">
                  {/* Axes */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-full h-px bg-slate-300"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-px h-full bg-slate-300"></div>
                  </div>
                  
                  {/* Labels des axes */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-sm font-bold text-slate-600">Impact Élevé</div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm font-bold text-slate-600">Impact Faible</div>
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm font-bold text-slate-600">Difficile d'accès</div>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90 text-sm font-bold text-slate-600">Facile d'accès</div>
                  
                  {/* Acteurs positionnés - Interactifs et déplaçables */}
                  <div className="relative h-80 select-none" id="matrix-container">
                    {/* Instructions */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium z-20">
                      💡 Glissez les acteurs pour les repositionner
                    </div>

                    {/* Dr. Cellier */}
                    <div 
                      className="absolute w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg hover:scale-110 transition-all cursor-move group draggable-actor z-10" 
                      style={{top: '32px', right: '32px'}}
                      data-actor="cellier"
                    >
                      <div className="text-center pointer-events-none">
                        <div className="text-lg">🩺</div>
                        <div className="text-xs">DC</div>
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Dr. Cellier</div>
                    </div>
                    
                    {/* Émilie */}
                    <div 
                      className="absolute w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg hover:scale-110 transition-all cursor-move group draggable-actor z-10" 
                      style={{top: '80px', right: '80px'}}
                      data-actor="emilie"
                    >
                      <div className="text-center pointer-events-none">
                        <div className="text-lg">👥</div>
                        <div className="text-xs">EC</div>
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Émilie (Admin FB)</div>
                    </div>

                    {/* Pr. Mion */}
                    <div 
                      className="absolute w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg hover:scale-110 transition-all cursor-move group draggable-actor z-10" 
                      style={{top: '32px', left: '32px'}}
                      data-actor="mion"
                    >
                      <div className="text-center pointer-events-none">
                        <div className="text-lg">🏥</div>
                        <div className="text-xs">PM</div>
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Pr. Mion</div>
                    </div>

                    {/* Baptiste */}
                    <div 
                      className="absolute w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg hover:scale-110 transition-all cursor-move group draggable-actor z-10" 
                      style={{top: '80px', left: '80px'}}
                      data-actor="baptiste"
                    >
                      <div className="text-center pointer-events-none">
                        <div className="text-lg">🥖</div>
                        <div className="text-xs">BB</div>
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Baptiste (COPAINS)</div>
                    </div>

                    {/* Schär */}
                    <div 
                      className="absolute w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg hover:scale-110 transition-all cursor-move group draggable-actor z-10" 
                      style={{top: '128px', left: '128px'}}
                      data-actor="schar"
                    >
                      <div className="text-center pointer-events-none">
                        <div className="text-lg">🏭</div>
                        <div className="text-xs">SC</div>
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Schär</div>
                    </div>

                    {/* Grégoire */}
                    <div 
                      className="absolute w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg hover:scale-110 transition-all cursor-move group draggable-actor z-10" 
                      style={{bottom: '32px', left: '48px'}}
                      data-actor="gregoire"
                    >
                      <div className="text-center pointer-events-none">
                        <div className="text-lg">⚠️</div>
                        <div className="text-xs">GV</div>
                      </div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Grégoire</div>
                    </div>

                    {/* Zoe */}
                    <div 
                      className="absolute w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg hover:scale-110 transition-all cursor-move group draggable-actor z-10" 
                      style={{bottom: '32px', right: '48px'}}
                      data-actor="zoe"
                    >
                      <div className="text-center pointer-events-none">
                        <div className="text-lg">📱</div>
                        <div className="text-xs">ZN</div>
                      </div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Zoe NoGluten</div>
                    </div>
                  </div>

                  {/* Script pour le drag & drop */}
                  <script dangerouslySetInnerHTML={{
                    __html: `
                      (function() {
                        let draggedElement = null;
                        let initialX = 0;
                        let initialY = 0;
                        let offsetX = 0;
                        let offsetY = 0;
                        
                        function initDragAndDrop() {
                          const actors = document.querySelectorAll('.draggable-actor');
                          const container = document.getElementById('matrix-container');
                          
                          if (!container) return;
                          
                          actors.forEach(actor => {
                            actor.addEventListener('mousedown', handleMouseDown);
                          });
                          
                          document.addEventListener('mousemove', handleMouseMove);
                          document.addEventListener('mouseup', handleMouseUp);
                        }
                        
                        function handleMouseDown(e) {
                          e.preventDefault();
                          draggedElement = e.currentTarget;
                          
                          const rect = draggedElement.getBoundingClientRect();
                          const containerRect = document.getElementById('matrix-container').getBoundingClientRect();
                          
                          initialX = e.clientX - rect.left;
                          initialY = e.clientY - rect.top;
                          
                          draggedElement.style.zIndex = '50';
                          draggedElement.style.transform = 'scale(1.1)';
                          draggedElement.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
                        }
                        
                        function handleMouseMove(e) {
                          if (!draggedElement) return;
                          
                          e.preventDefault();
                          const container = document.getElementById('matrix-container');
                          const containerRect = container.getBoundingClientRect();
                          
                          const newX = e.clientX - containerRect.left - initialX;
                          const newY = e.clientY - containerRect.top - initialY;
                          
                          // Contraintes pour rester dans le container
                          const maxX = containerRect.width - 64; // 64px = largeur de la bulle
                          const maxY = containerRect.height - 64;
                          
                          const constrainedX = Math.max(0, Math.min(newX, maxX));
                          const constrainedY = Math.max(0, Math.min(newY, maxY));
                          
                          draggedElement.style.left = constrainedX + 'px';
                          draggedElement.style.top = constrainedY + 'px';
                          draggedElement.style.right = 'auto';
                          draggedElement.style.bottom = 'auto';
                        }
                        
                        function handleMouseUp(e) {
                          if (!draggedElement) return;
                          
                          draggedElement.style.zIndex = '10';
                          draggedElement.style.transform = 'scale(1)';
                          draggedElement.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
                          
                          draggedElement = null;
                        }
                        
                        // Initialiser quand le DOM est prêt
                        if (document.readyState === 'loading') {
                          document.addEventListener('DOMContentLoaded', initDragAndDrop);
                        } else {
                          initDragAndDrop();
                        }
                        
                        // Réinitialiser si la page change (pour les SPA)
                        setTimeout(initDragAndDrop, 100);
                      })();
                    `
                  }} />
                </div>

                {/* Légende priorités */}
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-emerald-100 rounded-lg">
                    <div className="text-emerald-600 font-bold text-sm">🎯 PRIORITÉ 1</div>
                    <div className="text-xs text-slate-600">Impact élevé + Accès facile</div>
                  </div>
                  <div className="text-center p-3 bg-blue-100 rounded-lg">
                    <div className="text-blue-600 font-bold text-sm">🔄 PRIORITÉ 2</div>
                    <div className="text-xs text-slate-600">Impact élevé + Accès difficile</div>
                  </div>
                  <div className="text-center p-3 bg-pink-100 rounded-lg">
                    <div className="text-pink-600 font-bold text-sm">⚡ QUICK WINS</div>
                    <div className="text-xs text-slate-600">Impact moyen + Accès facile</div>
                  </div>
                  <div className="text-center p-3 bg-orange-100 rounded-lg">
                    <div className="text-orange-600 font-bold text-sm">📚 ANALYSE</div>
                    <div className="text-xs text-slate-600">Retour d'expérience</div>
                  </div>
                </div>
              </div>

              {/* Analyse des connexions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-200">
                  <h4 className="text-xl font-black text-emerald-700 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🔍</span>
                    Insights Terrain
                  </h4>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Échec documenté :</strong> Grégoire a fermé sa boulangerie SG (causes à analyser)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Expertise médicale :</strong> 2 références hospitalières majeures identifiées</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Communauté organisée :</strong> Réseaux sociaux actifs mais fragmentés</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Modèle COPAINS :</strong> Seul succès commercial documenté</span>
                    </li>
                  </ul>
                  
                  {/* Explication concept COPAINS */}
                  <div className="mt-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-orange-400 rounded-r-lg">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🎨</span>
                      <div>
                        <div className="font-bold text-orange-700 text-sm mb-1">💡 CONCEPT COPAINS</div>
                        <div className="text-xs text-orange-600 leading-relaxed">
                          <strong>Concept store</strong> alliant <em>art de vivre et santé</em>.<br/>
                          Design esthétique • Expérience premium • Files de 30min quotidiennes.<br/>
                          <span className="text-orange-800 font-semibold">→ Preuve que le marché premium SG existe et prospère</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
                  <h4 className="text-xl font-black text-blue-700 mb-4 flex items-center gap-2">
                    <span className="text-2xl">⚡</span>
                    Opportunités Réseau
                  </h4>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Partenariats médicaux :</strong> Légitimité via Herriot/Cellier</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Retour d'expérience :</strong> Grégoire = mentor pour éviter écueils</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Marketing communauté :</strong> Émilie/Zoe = ambassadrices naturelles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Benchmarking :</strong> COPAINS = modèle économique à adapter</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Matrix des connexions */}
              <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 -translate-x-16"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 translate-x-12"></div>
                
                
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Douleurs Quotidiennes */}
        <Card className="mb-16 bg-gradient-to-br from-red-50 via-pink-50 to-red-50 border-0 shadow-2xl overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-gradient-to-r from-red-600 via-pink-600 to-red-600 text-white p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">💔</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black mb-4">
                  Une journée dans la vie d'une personne cœliaque
                </h2>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  TÉMOIGNAGES RÉELS
                </Badge>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center text-2xl">🌅</div>
                    <div>
                      <span className="font-black text-orange-700 text-sm">7h PETIT-DÉJEUNER</span>
                      <div className="w-8 h-1 bg-orange-300 rounded mt-1"></div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    "Pain sans gluten = <span className="font-bold text-red-600">6,50€</span>. Pain normal = <span className="font-bold text-green-600">1,20€</span>"
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center text-2xl">☕</div>
                    <div>
                      <span className="font-black text-red-700 text-sm">10h PAUSE CAFÉ</span>
                      <div className="w-8 h-1 bg-red-300 rounded mt-1"></div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    "Désolée, je ne peux pas manger le gâteau d'anniversaire" <span className="text-lg">😔</span>
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-100 to-red-200 p-6 rounded-xl border border-red-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-2xl">🍽️</div>
                    <div>
                      <span className="font-black text-red-700 text-sm">13h DÉJEUNER</span>
                      <div className="w-8 h-1 bg-red-400 rounded mt-1"></div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    "J'ai appelé 3 restos, <span className="font-bold text-red-600">aucun ne garantit zéro contamination</span>"
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-6 rounded-xl border border-orange-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-2xl">🛒</div>
                    <div>
                      <span className="font-black text-orange-700 text-sm">16h COURSES</span>
                      <div className="w-8 h-1 bg-orange-400 rounded mt-1"></div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    "<span className="font-bold text-orange-600">2h à scanner</span> les étiquettes. 'Traces possibles' = je prends ou pas ?"
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-100 to-pink-100 p-6 rounded-xl border border-red-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center text-2xl">👨‍👩‍👧</div>
                    <div>
                      <span className="font-black text-red-700 text-sm">19h FAMILLE</span>
                      <div className="w-8 h-1 bg-red-400 rounded mt-1"></div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    "C'est dans ta tête, <span className="font-bold text-red-600">un peu de gluten ne va pas te tuer</span>" <span className="text-lg">😤</span>
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-6 rounded-xl border border-orange-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-2xl">📱</div>
                    <div>
                      <span className="font-black text-orange-700 text-sm">22h RECHERCHES</span>
                      <div className="w-8 h-1 bg-orange-400 rounded mt-1"></div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    "Je scroll des forums... Application = <span className="font-bold text-orange-600">10 restos à Lyon avec contamination</span>"
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-white p-8 rounded-2xl relative overflow-hidden shadow-xl">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 -translate-x-16"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 translate-x-12"></div>
                <div className="relative z-10 text-center">
                  <div className="w-2 h-16 bg-white/30 rounded-full mx-auto mb-6"></div>
                  <p className="text-xl md:text-2xl italic font-bold leading-relaxed mb-6">
                    "Le pire, ce n'est pas le gluten. C'est le <span className="text-yellow-300">manque d'information</span>, 
                    l'<span className="text-yellow-300">isolement</span> et le sentiment que la France n'a pas compris notre réalité."
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-center">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                      <div className="text-2xl font-black text-yellow-300">2h</div>
                      <div className="text-xs opacity-80">par jour en recherches</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                      <div className="text-2xl font-black text-yellow-300">3x</div>
                      <div className="text-xs opacity-80">plus de stress alimentaire</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                      <div className="text-2xl font-black text-yellow-300">85%</div>
                      <div className="text-xs opacity-80">évitent les sorties resto</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-sm opacity-90">
                    <div className="w-8 h-px bg-white/50"></div>
                    <span>Loréline, 24 ans • Étudiante emlyon • Diagnostiquée il y a 6 mois</span>
                    <div className="w-8 h-px bg-white/50"></div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Opportunités */}
        <Card className="mb-16 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border-0 shadow-2xl overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🔍</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black mb-4">
                  Et si on changeait la donne ?
                </h2>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  3 AXES D'OPPORTUNITÉS
                </Badge>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">📱</span>
                    </div>
                    <h3 className="font-black text-2xl text-blue-700 mb-2">DIGITAL</h3>
                    <div className="w-12 h-1 bg-blue-400 rounded mx-auto"></div>
                  </div>
                  <ul className="space-y-4 text-sm text-slate-700">
                    <li className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-400">
                      <div className="font-bold text-blue-700 mb-1">App complète communautaire</div>
                      <div className="text-xs text-slate-600">Comme "Find Me Gluten Free" (US) - 200k utilisateurs actifs</div>
                    </li>
                    <li className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-400">
                      <div className="font-bold text-blue-700 mb-1">Scan IA + Coaching personnalisé</div>
                      <div className="text-xs text-slate-600">Détection ingredients + suivi nutritionnel post-diagnostic</div>
                    </li>
                    <li className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-400">
                      <div className="font-bold text-blue-700 mb-1">Marketplace producteurs</div>
                      <div className="text-xs text-slate-600">Direct circuit court - artisans sans gluten certifiés</div>
                    </li>
                  </ul>
                </div>

                <div className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-200">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">🍽️</span>
                    </div>
                    <h3 className="font-black text-2xl text-orange-700 mb-2">RESTAURATION</h3>
                    <div className="w-12 h-1 bg-orange-400 rounded mx-auto"></div>
                  </div>
                  <ul className="space-y-4 text-sm text-slate-700">
                    <li className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-400">
                      <div className="font-bold text-orange-700 mb-1">1er resto 100% sans gluten Lyon</div>
                      <div className="text-xs text-slate-600">Modèle "Noglu" Paris (succès prouvé) - ROI 18 mois</div>
                      <div className="text-xs text-orange-600 font-medium mt-1">📍 Notre étude terrain : 0 concurrent direct</div>
                    </li>
                    <li className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-400">
                      <div className="font-bold text-orange-700 mb-1">Dark kitchen spécialisée</div>
                      <div className="text-xs text-slate-600">Livraison premium - cuisine dédiée - certification</div>
                    </li>
                    <li className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-400">
                      <div className="font-bold text-orange-700 mb-1">Franchise boulangerie</div>
                      <div className="text-xs text-slate-600">COPAINS fait 30min de queue - marché non saturé</div>
                    </li>
                  </ul>
                </div>

                <div className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl border border-purple-200">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">🎓</span>
                    </div>
                    <h3 className="font-black text-2xl text-purple-700 mb-2">ÉDUCATION</h3>
                    <div className="w-12 h-1 bg-purple-400 rounded mx-auto"></div>
                  </div>
                  <ul className="space-y-4 text-sm text-slate-700">
                    <li className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-400">
                      <div className="font-bold text-purple-700 mb-1">Certification restaurants</div>
                      <div className="text-xs text-slate-600">Label qualité + formation équipes + audit mensuel</div>
                    </li>
                    <li className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-400">
                      <div className="font-bold text-purple-700 mb-1">Programme post-diagnostic</div>
                      <div className="text-xs text-slate-600">6 mois d'accompagnement - nutrition + psy + communauté</div>
                    </li>
                    <li className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-400">
                      <div className="font-bold text-purple-700 mb-1">Campagne sensibilisation</div>
                      <div className="text-xs text-slate-600">Partenariat médecins généralistes - diagnostic précoce</div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white p-8 rounded-2xl relative overflow-hidden shadow-xl">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 -translate-x-16"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 translate-x-12"></div>
                <div className="relative z-10 text-center">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-black text-yellow-300 mb-2">30 min</div>
                      <div className="text-sm opacity-90">File d'attente chez <strong>COPAINS</strong></div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-yellow-300 mb-2">0</div>
                      <div className="text-sm opacity-90">Restaurant 100% SG à <strong>Lyon</strong></div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-yellow-300 mb-2">3 ans</div>
                      <div className="text-sm opacity-90">De retard sur l'<strong>Espagne</strong></div>
                    </div>
                  </div>
                  <Separator className="my-6 bg-white/20" />
                  <p className="text-2xl font-black">
                    Le marché est là. La demande aussi. <br />
                    <span className="text-yellow-300">Qui va agir ?</span>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section Preuve de Concept */}
        <Card className="mb-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50 border-0 shadow-2xl overflow-hidden">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">💡</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4">
                La preuve que ça marche déjà
              </h2>
              <Badge className="bg-indigo-500 hover:bg-indigo-600 text-xs">
                SUCCÈS INTERNATIONAUX
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-indigo-100 text-center">
                <div className="text-3xl mb-2">🇺🇸</div>
                <div className="font-bold text-indigo-700 mb-2">Find Me Gluten Free</div>
                <div className="text-2xl font-black text-indigo-600 mb-1">200K+</div>
                <div className="text-xs text-slate-600">utilisateurs actifs</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100 text-center">
                <div className="text-3xl mb-2">🇫🇷</div>
                <div className="font-bold text-green-700 mb-2">Noglu Paris</div>
                <div className="text-2xl font-black text-green-600 mb-1">5 restos</div>
                <div className="text-xs text-slate-600">expansion continue</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-100 text-center">
                <div className="text-3xl mb-2">🇪🇸</div>
                <div className="font-bold text-orange-700 mb-2">Honest Greens</div>
                <div className="text-2xl font-black text-orange-600 mb-1">30 restos</div>
                <div className="text-xs text-slate-600">healthy & sans gluten</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-100 text-center">
                <div className="text-3xl mb-2">🇮🇹</div>
                <div className="font-bold text-purple-700 mb-2">AIC (Asso. Italienne)</div>
                <div className="text-2xl font-black text-purple-600 mb-1">200K</div>
                <div className="text-xs text-slate-600">membres actifs</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <p className="text-2xl font-bold mb-4">
                  🚀 Ces modèles existent et fonctionnent
                </p>
                <p className="text-lg opacity-90 mb-6">
                  La France a 2-3 ans de retard sur ses voisins européens
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                    <div className="font-bold">Modèle prouvé ✅</div>
                    <div className="text-sm opacity-80">Apps + Restos + Communauté</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                    <div className="font-bold">Marché inexploité ✅</div>
                    <div className="text-sm opacity-80">600K personnes en attente</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                    <div className="font-bold">ROI démontré ✅</div>
                    <div className="text-sm opacity-80">Croissance 2 chiffres Europe</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section Sources et Références */}
        <Card className="mb-16 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-50 border-0 shadow-xl">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-slate-800 mb-4 flex items-center justify-center gap-3">
                <span className="text-4xl">📚</span>
                Sources & Références
              </h2>
              <p className="text-slate-600">Données vérifiées et interviews terrain</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Sources officielles */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-700 border-b-2 border-blue-200 pb-2">🏛️ Sources Officielles</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-400">
                    <p><strong>Santé Publique France</strong> - Prévalence maladie cœliaque (1% population)</p>
                    <a href="https://www.santepubliquefrance.fr" className="text-blue-600 hover:underline text-xs">www.santepubliquefrance.fr</a>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-400">
                    <p><strong>AFDIAG</strong> - Association Française des Intolérants au Gluten</p>
                    <a href="https://www.afdiag.fr" className="text-green-600 hover:underline text-xs">www.afdiag.fr</a>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-400">
                    <p><strong>INSEE</strong> - Données démographiques Lyon Métropole (1.4M habitants)</p>
                    <a href="https://www.insee.fr" className="text-purple-600 hover:underline text-xs">www.insee.fr</a>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-400">
                    <p><strong>Xerfi</strong> - Marché sans gluten France (+15% CAGR)</p>
                    <a href="https://www.xerfi.com" className="text-orange-600 hover:underline text-xs">www.xerfi.com</a>
                  </div>
                </div>
              </div>

              {/* Interviews & Terrain */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-700 border-b-2 border-emerald-200 pb-2">🎤 Interviews Terrain</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-400">
                    <p><strong>Dr. Christophe CELLIER</strong> - Gastro-entérologue spécialisé</p>
                    <p className="text-xs text-slate-600 mt-1">Interview téléphonique • Novembre 2024</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-indigo-400">
                    <p><strong>Pr. MION</strong> - Hôpital Édouard Herriot</p>
                    <p className="text-xs text-slate-600 mt-1">Échange email • Octobre 2024</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-400">
                    <p><strong>Grégoire VANDENESCH</strong> - Ex-Boulangerie "Chez Grégoire"</p>
                    <p className="text-xs text-slate-600 mt-1">Entretien sur site • Novembre 2024</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-400">
                    <p><strong>Émilie GUILLAUME CANTIN</strong> - Admin "Lyon Sans Gluten" FB</p>
                    <p className="text-xs text-slate-600 mt-1">Échange communauté • Octobre 2024</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-pink-400">
                    <p><strong>Zoe NoGluten</strong> - Influenceuse cœliaque</p>
                    <p className="text-xs text-slate-600 mt-1">Messages privés • Novembre 2024</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-400">
                    <p><strong>Baptiste BORNE</strong> - Fondateur COPAINS</p>
                    <p className="text-xs text-slate-600 mt-1">Analyse modèle économique • Novembre 2024</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-400">
                    <p><strong>SCHÄR France</strong> - Leader européen produits sans gluten</p>
                    <p className="text-xs text-slate-600 mt-1">Étude partenariats • Octobre 2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sources techniques */}
            <Separator className="my-8" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-bold text-slate-700 mb-3">🗺️ Données Cartographiques</h4>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm"><strong>MyMaps Google</strong></p>
                  <p className="text-xs text-slate-600 mb-2">Établissements sans gluten Lyon</p>
                  <a 
                    href="https://www.google.com/maps/d/edit?mid=1gSEsD4J48KbeF70XtXGqu3W9K0r02X4&usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-blue-600 hover:underline text-xs"
                  >
                    Voir la carte complète
                  </a>
                  <p className="text-xs text-slate-500 mt-1">Créé par Maxence Manson</p>
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-slate-700 mb-3">📊 Analyses Comparatives</h4>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm"><strong>Benchmarking International</strong></p>
                  <p className="text-xs text-slate-600 mb-2">Allemagne • Italie • Canada</p>
                  <p className="text-xs text-slate-500">Sources : Associations nationales cœliaques</p>
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-slate-700 mb-3">🔬 Études Scientifiques</h4>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm"><strong>Recherche Académique</strong></p>
                  <p className="text-xs text-slate-600 mb-2">PubMed • ScienceDirect</p>
                  <p className="text-xs text-slate-500">Prévalence et impact socio-économique</p>
                </div>
              </div>
            </div>

            {/* Disclaimer méthodologique */}
            <div className="mt-8 bg-amber-50 p-6 rounded-xl border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
                <span>⚠️</span>
                Note Méthodologique
              </h4>
              <p className="text-sm text-amber-700">
                Cette étude s'appuie sur <strong>6 interviews qualitatives</strong> menées en novembre 2025 
                dans l'écosystème lyonnais, complétées par des données officielles françaises et européennes. 
                Les projections économiques sont basées sur des modèles existants et nécessitent une validation 
                par étude de marché approfondie.
              </p>
            </div>

            {/* Bouton vers sources détaillées */}
            <div className="mt-8 text-center">
              <a 
                href="/sources" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                📚 Voir toutes les sources détaillées
                <span className="text-sm opacity-80">(16 établissements documentés)</span>
              </a>
            </div>

            {/* Attribution */}
            <div className="mt-6 text-center">
              <p className="text-xs text-slate-500">
                📋 <strong>Recherche & Analyse :</strong> PLESSIS LAGARDE Loréline - CECILLON Marie - FAZLOVIC Elmina - DUBOIS Sophie • Hackathon Innovation Sans Gluten • 12 novembre 2025
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action Final */}
        <div className="bg-gradient-to-br from-slate-900 via-red-900 to-orange-900 text-white p-12 rounded-3xl text-center shadow-2xl relative overflow-hidden mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-orange-500/20 to-red-600/20"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10">
            <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <span className="text-4xl">🎯</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
                "600 000 personnes
              </span>
              <br />
              <span className="text-white">
                attendent qu'on prenne leur problème au sérieux."
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="text-4xl mb-4">🤔</div>
                <p className="text-xl font-semibold">
                  Comment peut-on transformer cette <span className="text-yellow-300 font-bold">douleur</span> en <span className="text-green-300 font-bold">opportunité</span> ?
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="text-4xl mb-4">💭</div>
                <p className="text-xl font-semibold">
                  Quelle solution changerait <span className="text-blue-300 font-bold">vraiment</span> leur quotidien ?
                </p>
              </div>
            </div>

            <Separator className="my-8 bg-white/20" />

            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-6 rounded-2xl inline-block shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center gap-4">
                <span className="text-3xl">👉</span>
                <span className="text-2xl font-black">
                  Venez en discuter avec nous
                </span>
                <span className="text-3xl">💬</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer with QR / contact */}
        <div className="max-w-[1200px] mx-auto mt-8">
          <Footer />
        </div>
      </div>
    </main>
    </>
  );
}
