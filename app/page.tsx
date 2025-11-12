import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4 md:p-8 print:p-0">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Section */}
        <header className="text-center mb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-orange-500/10 to-red-600/10 rounded-3xl -z-10"></div>
          <div className="relative z-10 py-12 px-8">
            <Badge variant="destructive" className="mb-6 text-sm font-medium px-4 py-2">
              PROBLÈME MAJEUR DE SANTÉ PUBLIQUE
            </Badge>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-red-600 via-orange-600 to-red-700 bg-clip-text text-transparent mb-6 leading-tight">
              La vie cachée des<br />
              <span className="text-red-600">600 000 cœliaques</span>
            </h1>
            <p className="text-2xl md:text-4xl font-bold text-slate-700 mb-6">en France</p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
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
          <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-gradient-to-br from-red-50 via-white to-orange-50 border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📊</span>
                </div>
                <h2 className="text-2xl font-black text-slate-800 mb-2">
                  Un marché invisible
                </h2>
                <Badge variant="destructive" className="text-xs">
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
                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                  <span>💶</span>
                  <span>Produits <strong className="text-red-600">2-3x plus chers</strong> vs Italie</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                  <span>📈</span>
                  <span>Marché mondial: <strong className="text-green-600">12,9 milliards USD</strong></span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                  <span>🇪🇸</span>
                  <span>Espagne/Italie: Croissance <strong className="text-blue-600">à deux chiffres</strong></span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 2: Parcours Utilisateur */}
          <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-gradient-to-br from-orange-50 via-white to-yellow-50 border-0 shadow-xl">
            <CardContent className="p-8">
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
                        <li>• Solitude informationnelle</li>
                        <li>• Courses = 2h de scan</li>
                        <li>• Peur du restaurant</li>
                        <li>• Isolement social</li>
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
          <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-0 shadow-xl">
            <CardContent className="p-8">
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
                  <p className="text-xl md:text-2xl italic font-bold leading-relaxed mb-4">
                    "Le pire, ce n'est pas le gluten. C'est le <span className="text-yellow-300">manque d'information</span>, 
                    l'<span className="text-yellow-300">isolement</span> et le sentiment que la France n'a pas compris notre réalité."
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm opacity-90">
                    <div className="w-8 h-px bg-white/50"></div>
                    <span>Personne cœliaque, diagnostiquée il y a 2 ans</span>
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
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="font-medium">App complète communautaire</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="font-medium">Scan + Resto + Coaching</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="font-medium">IA pour accompagnement diagnostic</span>
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
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="font-medium">1er resto 100% sans gluten à Lyon ?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="font-medium">Dark kitchen livraison</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="font-medium">Marketplace producteurs locaux</span>
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
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="font-medium">Sensibilisation grand public</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="font-medium">Formation restaurateurs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="font-medium">Parcours post-diagnostic</span>
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
                      <div className="text-sm opacity-90">File d'attente chez <strong>Copain</strong></div>
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
  );
}
