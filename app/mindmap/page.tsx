import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Link from "next/link";

export default function MindMap() {
  return (
    <>
      <Navigation currentPage="mindmap" />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4 md:p-8">
        <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 mb-4 transition-colors"
          >
            ← Retour au poster détaillé
          </Link>
          <Badge variant="outline" className="mb-4">
            CARTE MENTALE - VISION GLOBALE
          </Badge>
          <h1 className="text-3xl md:text-5xl font-black text-slate-800 mb-2">
            Révolutionner le quotidien des cœliaques
          </h1>
          <p className="text-xl text-slate-600">en France</p>
        </div>

          {/* Mind Map Container */}
          <div className="relative glass rounded-3xl shadow-2xl p-8 md:p-16 overflow-hidden animate-scale-in border border-white/20">
            {/* Background avec mesh gradient animé */}
            <div className="absolute inset-0 bg-mesh opacity-20 animate-gradient"></div>
            
            {/* Particules interactives */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-green-500/15 to-emerald-500/15 rounded-full blur-2xl animate-pulse-slow transform -translate-x-1/2 -translate-y-1/2"></div>
            
            {/* Lignes de connexion animées */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full opacity-10">
                <defs>
                  <linearGradient id="connectionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="50%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
                <path d="M50,50 Q200,100 400,200" stroke="url(#connectionGrad)" strokeWidth="2" fill="none" className="animate-pulse" />
                <path d="M400,50 Q200,100 50,200" stroke="url(#connectionGrad)" strokeWidth="2" fill="none" className="animate-pulse" style={{animationDelay: '1s'}} />
              </svg>
            </div>          {/* Central Node */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Main Central Circle */}
            <div className="relative mb-20 animate-scale-in">
              <div className="group relative w-96 h-96 mx-auto">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-orange-500 to-red-600 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700 animate-glow"></div>
                
                {/* Main circle */}
                <div className="relative w-96 h-96 bg-gradient-to-br from-red-500 via-orange-500 to-red-600 rounded-full flex flex-col items-center justify-center text-white shadow-2xl overflow-hidden group-hover:scale-105 transition-all duration-500 cursor-pointer">
                  <div className="absolute inset-0 glass-dark animate-gradient"></div>
                  
                  {/* Rotating border */}
                  <div className="absolute inset-2 border-4 border-white/20 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="text-7xl mb-6 animate-pulse">🍞</div>
                    <div className="text-3xl font-black mb-3 text-shadow-glow">ÉCOSYSTÈME</div>
                    <div className="text-3xl font-black mb-4 text-shadow-glow">CŒLIAQUE</div>
                    <div className="w-20 h-1 bg-white/50 mx-auto mb-4 rounded-full"></div>
                    <div className="text-xl font-bold opacity-90 animate-fade-in-up">600K personnes</div>
                    <div className="text-xl font-bold opacity-90 animate-fade-in-up" style={{animationDelay: '0.2s'}}>12,9B$ marché</div>
                  </div>
                  
                  {/* Orbiting elements */}
                  <div className="absolute inset-0 animate-spin" style={{animationDuration: '30s'}}>
                    <div className="absolute top-4 left-1/2 w-3 h-3 bg-yellow-300 rounded-full transform -translate-x-1/2"></div>
                    <div className="absolute bottom-4 left-1/2 w-3 h-3 bg-blue-300 rounded-full transform -translate-x-1/2"></div>
                    <div className="absolute left-4 top-1/2 w-3 h-3 bg-green-300 rounded-full transform -translate-y-1/2"></div>
                    <div className="absolute right-4 top-1/2 w-3 h-3 bg-purple-300 rounded-full transform -translate-y-1/2"></div>
                  </div>
                </div>
                
                {/* Connection Lines avec animation */}
                <div className="absolute -top-12 left-1/2 w-1 h-32 bg-gradient-to-t from-red-500 via-orange-400 to-transparent transform -translate-x-1/2 animate-pulse"></div>
                <div className="absolute -bottom-12 left-1/2 w-1 h-32 bg-gradient-to-b from-red-500 via-orange-400 to-transparent transform -translate-x-1/2 animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute -left-12 top-1/2 h-1 w-32 bg-gradient-to-l from-red-500 via-orange-400 to-transparent transform -translate-y-1/2 animate-pulse" style={{animationDelay: '2s'}}></div>
                <div className="absolute -right-12 top-1/2 h-1 w-32 bg-gradient-to-r from-red-500 via-orange-400 to-transparent transform -translate-y-1/2 animate-pulse" style={{animationDelay: '3s'}}></div>
              </div>
            </div>

            {/* Four Main Branches */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-7xl">
              
              {/* Branch 1: Le Problème (Top Left) */}
              <div className="relative">
                <div className="absolute top-0 left-1/2 w-px h-16 bg-gradient-to-t from-red-400 to-transparent transform -translate-x-1/2 lg:-top-16"></div>
                <Card className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-300 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">⚠️</span>
                      </div>
                      <h2 className="text-2xl font-black text-red-700">LE PROBLÈME</h2>
                      <Badge variant="destructive" className="mt-2">IGNORÉ DEPUIS TROP LONGTEMPS</Badge>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white/70 p-4 rounded-xl">
                        <div className="font-bold text-red-700 mb-2">🔍 Un Marché Invisible</div>
                        <ul className="text-sm space-y-1 text-red-600">
                          <li>• 600K personnes concernées</li>
                          <li>• 80% non diagnostiquées</li>
                          <li>• 10 ans d'errance médicale</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white/70 p-4 rounded-xl">
                        <div className="font-bold text-red-700 mb-2">😔 Douleur Quotidienne</div>
                        <ul className="text-sm space-y-1 text-red-600">
                          <li>• Stress alimentaire constant</li>
                          <li>• Isolement social</li>
                          <li>• Prix 3x plus élevés</li>
                        </ul>
                      </div>
                      
                      <div className="bg-red-200/70 p-4 rounded-xl border border-red-300">
                        <div className="font-bold text-red-800 mb-2">🇫🇷 Retard Français</div>
                        <ul className="text-sm space-y-1 text-red-700">
                          <li>• 3 ans de retard sur l'Espagne</li>
                          <li>• <strong>0 resto 100% SG à Lyon</strong></li>
                          <li>• Seulement ~15 options partielles</li>
                          <li>• Apps fragmentées</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Branch 2: Notre Vision (Top Right) */}
              <div className="relative">
                <div className="absolute top-0 left-1/2 w-px h-16 bg-gradient-to-t from-blue-400 to-transparent transform -translate-x-1/2 lg:-top-16"></div>
                <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-2 border-blue-300 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">🎯</span>
                      </div>
                      <h2 className="text-2xl font-black text-blue-700">NOTRE VISION</h2>
                      <Badge className="bg-blue-500 hover:bg-blue-600 mt-2">RÉVOLUTIONNER L'EXPÉRIENCE</Badge>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white/70 p-4 rounded-xl">
                        <div className="font-bold text-blue-700 mb-2">🌟 Écosystème Complet</div>
                        <p className="text-sm text-blue-600">
                          S'informer, manger et partager<br />
                          en toute sécurité et sérénité
                        </p>
                      </div>
                      
                      <div className="bg-white/70 p-4 rounded-xl">
                        <div className="font-bold text-blue-700 mb-2">👑 Devenir LA Référence</div>
                        <p className="text-sm text-blue-600">
                          Du sans gluten en France<br />
                          Confiance • Communauté • Qualité
                        </p>
                      </div>
                      
                      <div className="bg-blue-200/70 p-4 rounded-xl border border-blue-300">
                        <div className="font-bold text-blue-800 mb-2">🚀 Impact Mesurable</div>
                        <ul className="text-sm space-y-1 text-blue-700">
                          <li>• 100K utilisateurs an 1</li>
                          <li>• 50 restaurants certifiés</li>
                          <li>• 10K diagnostics aidés</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Branch 3: Les Solutions (Bottom Left) */}
              <div className="relative">
                <div className="absolute -top-0 left-1/2 w-px h-16 bg-gradient-to-b from-green-400 to-transparent transform -translate-x-1/2 lg:top-0"></div>
                <Card className="bg-gradient-to-br from-green-50 to-emerald-100 border-2 border-green-300 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">🛠️</span>
                      </div>
                      <h2 className="text-2xl font-black text-green-700">LES SOLUTIONS</h2>
                      <Badge className="bg-green-500 hover:bg-green-600 mt-2">3 AXES STRATÉGIQUES</Badge>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white/70 p-4 rounded-xl">
                        <div className="font-bold text-green-700 mb-2">📱 Digital</div>
                        <ul className="text-sm space-y-1 text-green-600">
                          <li>• App "tout-en-un" communautaire</li>
                          <li>• Scanner IA + Coaching</li>
                          <li>• Marketplace producteurs</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white/70 p-4 rounded-xl">
                        <div className="font-bold text-green-700 mb-2">🍽️ Restauration</div>
                        <ul className="text-sm space-y-1 text-green-600">
                          <li>• 1er resto 100% SG Lyon</li>
                          <li>• Dark kitchen spécialisée</li>
                          <li>• Réseau boulangeries</li>
                        </ul>
                      </div>
                      
                      <div className="bg-green-200/70 p-4 rounded-xl border border-green-300">
                        <div className="font-bold text-green-800 mb-2">🎓 Éducation</div>
                        <ul className="text-sm space-y-1 text-green-700">
                          <li>• Certification restaurants</li>
                          <li>• Programme post-diagnostic</li>
                          <li>• Sensibilisation médecins</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Branch 4: L'Opportunité (Bottom Right) */}
              <div className="relative">
                <div className="absolute -top-0 left-1/2 w-px h-16 bg-gradient-to-b from-purple-400 to-transparent transform -translate-x-1/2 lg:top-0"></div>
                <Card className="bg-gradient-to-br from-purple-50 to-violet-100 border-2 border-purple-300 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">💎</span>
                      </div>
                      <h2 className="text-2xl font-black text-purple-700">L'OPPORTUNITÉ</h2>
                      <Badge className="bg-purple-500 hover:bg-purple-600 mt-2">PREUVES DE SUCCÈS</Badge>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white/70 p-4 rounded-xl">
                        <div className="font-bold text-purple-700 mb-2">💰 Modèles Prouvés</div>
                        <ul className="text-sm space-y-1 text-purple-600">
                          <li>• Find Me GF: 200K users (US)</li>
                          <li>• Noglu: 5 restos Paris</li>
                          <li>• Honest Greens: 30 restos</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white/70 p-4 rounded-xl">
                        <div className="font-bold text-purple-700 mb-2">📊 Marché Inexploité</div>
                        <ul className="text-sm space-y-1 text-purple-600">
                          <li>• 600K personnes en attente</li>
                          <li>• Croissance 15%/an Europe</li>
                          <li>• First mover advantage</li>
                        </ul>
                      </div>
                      
                      <div className="bg-purple-200/70 p-4 rounded-xl border border-purple-300">
                        <div className="font-bold text-purple-800 mb-2">🎯 Timing Parfait</div>
                        <ul className="text-sm space-y-1 text-purple-700">
                          <li>• Post-COVID: santé prioritaire</li>
                          <li>• Digitalisation accélérée</li>
                          <li>• Inflation: besoin d'efficacité</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-black mb-4">Prêts à révolutionner le quotidien de 600 000 personnes ?</h3>
                <p className="text-lg opacity-90 mb-6">
                  Modèles prouvés • Marché inexploité • Timing parfait
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                  <Link 
                    href="/"
                    className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    📊 Voir les données détaillées
                  </Link>
                  <div className="text-sm opacity-75">
                    💬 Scannez le QR code sur le poster pour nous contacter
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}