import Navigation from "../../components/navigation"
import { Card, CardContent } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Separator } from "../../components/ui/separator"

export default function SourcesPage() {
  return (
    <>
      <Navigation currentPage="poster" />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4 md:p-8">
        <div className="max-w-[1200px] mx-auto">
          
          {/* Header */}
          <header className="text-center mb-12">
            <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 p-8 rounded-2xl border border-blue-200 shadow-lg">
              <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-4">
                📚 Sources Détaillées
              </h1>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Liste exhaustive de toutes les sources utilisées pour la cartographie des établissements sans gluten à Lyon
              </p>
              <Badge variant="secondary" className="mt-4 bg-blue-500 text-white">
                Mise à jour : 13 novembre 2025
              </Badge>
            </div>
          </header>

          {/* Sources par établissement */}
          <div className="space-y-8">
            
            {/* Sans Gluten Pizza & Épicerie */}
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl">🍕</div>
                  <h2 className="text-2xl font-bold text-green-800">Sans Gluten Pizza & Épicerie</h2>
                </div>
                <div className="space-y-2 text-sm">
                  <a href="https://www.sansglutenpizza.fr/services/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 underline">
                    • https://www.sansglutenpizza.fr/services/
                  </a>
                  <a href="https://sansglutenpizza.fr/fr" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 underline">
                    • https://sansglutenpizza.fr/fr
                  </a>
                  <a href="https://erasmusplace.com/local-service/sans-gluten-pizza-epicerie-lyon/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 underline">
                    • https://erasmusplace.com/local-service/sans-gluten-pizza-epicerie-lyon/
                  </a>
                  <a href="https://www.tripadvisor.fr/Restaurant_Review-g187265-d20415709-Reviews-Sans_Gluten_Pizza_Epicerie-Lyon_Rhone_Auvergne_Rhone_Alpes.html" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 underline">
                    • TripAdvisor - Sans Gluten Pizza Épicerie
                  </a>
                  <a href="https://www.tripadvisor.fr/Restaurant_Review-g187265-d12186073-Reviews-Sans_Gluten_Pizza-Lyon_Rhone_Auvergne_Rhone_Alpes.html" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 underline">
                    • TripAdvisor - Sans Gluten Pizza
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Les Gasteliers */}
            <Card className="bg-gradient-to-br from-pink-50 to-rose-50 border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white text-xl">🧁</div>
                  <h2 className="text-2xl font-bold text-pink-800">Les Gasteliers</h2>
                </div>
                <div className="space-y-2 text-sm">
                  <a href="https://because-gus.com/les-gasteliers-lyon/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 underline">
                    • https://because-gus.com/les-gasteliers-lyon/
                  </a>
                  <a href="https://because-gus.com/restaurant/les-gasteliers-patisserie-sans-gluten-a-lyon/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 underline">
                    • Because Gus - Restaurant Les Gasteliers
                  </a>
                  <a href="https://www.tripadvisor.fr/Restaurant_Review-g187265-d12193102-Reviews-Les_Gasteliers-Lyon_Rhone_Auvergne_Rhone_Alpes.html" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 underline">
                    • TripAdvisor - Les Gasteliers
                  </a>
                  <a href="https://www.mariefrance.fr/cuisine-recettes/les-gasteliers-la-patisserie-sans-gluten-pour-les-gourmands-de-lyon-112564.html" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 underline">
                    • Marie France - Article sur Les Gasteliers
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Copains */}
            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xl">🥖</div>
                  <h2 className="text-2xl font-bold text-yellow-800">Copains (Lyon)</h2>
                </div>
                <div className="space-y-2 text-sm">
                  <a href="https://copains.co/nos-ecrins/lyon-3-cours-vitton/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 underline">
                    • https://copains.co/nos-ecrins/lyon-3-cours-vitton/
                  </a>
                  <a href="https://copains.co/nos-ecrins/lyon-80-rue-president-edouard-herriot/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 underline">
                    • Copains - Lyon Rue Président Édouard Herriot
                  </a>
                  <a href="https://www.copains-paris.com/pages/nos-ecrins" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 underline">
                    • https://www.copains-paris.com/pages/nos-ecrins
                  </a>
                  <a href="https://www.ubereats.com/fr/store/boulangerie-copains-vitton/JbW0l8UEUcaUx1Jd0ifSFg" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 underline">
                    • UberEats - Boulangerie Copains Vitton
                  </a>
                  <a href="https://www.ubereats.com/fr/store/boulangerie-copains-herriot/Izkl5CR0XfKZUDO9wUVkPw" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 underline">
                    • UberEats - Boulangerie Copains Herriot
                  </a>
                  <a href="https://www.leprogres.fr/economie/2025/07/26/lyon-une-boulangerie-100-sans-gluten-ouvre-ses-portes" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 underline">
                    • Le Progrès - Article ouverture boulangerie
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Continue avec les autres établissements... */}
            {/* Zappo */}
            <Card className="bg-gradient-to-br from-red-50 to-pink-50 border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white text-xl">🍕</div>
                  <h2 className="text-2xl font-bold text-red-800">Zappo (Gerland)</h2>
                </div>
                <div className="space-y-2 text-sm">
                  <a href="https://www.zappo.fr/fr/pizzeria-gerland-lyon-7.html" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 underline">
                    • https://www.zappo.fr/fr/pizzeria-gerland-lyon-7.html
                  </a>
                  <a href="https://www.zappo.fr/fr/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 underline">
                    • https://www.zappo.fr/fr/
                  </a>
                  <a href="https://www.zappo.fr/fr/pizzeria-calzoneria-lyon-5.html" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 underline">
                    • Zappo - Pizzeria Calzoneria Lyon 5
                  </a>
                  <a href="https://www.tripadvisor.fr/Restaurant_Review-g187265-d12330374-Reviews-Zappo-Lyon_Rhone_Auvergne_Rhone_Alpes.html" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 underline">
                    • TripAdvisor - Zappo
                  </a>
                  <a href="https://www.ubereats.com/fr-fr/store/zappo-gerland/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 underline">
                    • UberEats - Zappo Gerland
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Sources recherche et outils */}
            <Separator className="my-8" />
            
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl">🔍</div>
                  <h2 className="text-2xl font-bold text-blue-800">Outils de Recherche Utilisés</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-700 mb-2">🤖 Recherches ChatGPT</h3>
                    <div className="space-y-2 text-sm">
                      <a href="https://chatgpt.com/share/69159d32-9694-8013-a33c-47ffbaac5923" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 underline">
                        • Recherche #1 - Établissements sans gluten Lyon
                      </a>
                      <a href="https://chatgpt.com/share/6915a041-3b9c-8013-8cac-f6e7b496386f" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 underline">
                        • Recherche #2 - Validation et compléments
                      </a>
                      <a href="https://chatgpt.com/share/6915a04e-7088-8013-a29b-6bbf78eb9180" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 underline">
                        • Recherche #3 - Vérification données
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-700 mb-2">🗺️ Cartographie Collaborative</h3>
                    <div className="bg-white p-4 rounded-lg border border-blue-200">
                      <a href="https://www.google.com/maps/d/edit?mid=1gSEsD4J48KbeF70XtXGqu3W9K0r02X4&usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                        • Carte MyMaps collaborative créée par Maxence Manson
                      </a>
                      <p className="text-xs text-slate-500 mt-2">Possibilité de collaboration communautaire pour enrichir les données</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Note méthodologique */}
            <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 border-0 shadow-xl border-l-4 border-amber-400">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white text-xl">⚠️</div>
                  <h2 className="text-xl font-bold text-amber-800">Note Méthodologique</h2>
                </div>
                <p className="text-sm text-amber-700 leading-relaxed">
                  Cette compilation de sources a été réalisée en novembre 2025 par l'équipe PLESSIS LAGARDE Loréline, 
                  CECILLON Marie, AZLOVIC Elmina et DUBOIS Sophie dans le cadre du Hackathon Innovation Sans Gluten. 
                  Les informations sont regroupées par établissement avec validation croisée sur plusieurs plateformes 
                  (sites officiels, avis clients, plateformes de livraison). La carte collaborative permet une mise à jour 
                  continue par la communauté.
                </p>
              </CardContent>
            </Card>

            {/* Retour */}
            <div className="text-center py-8">
              <a 
                href="/" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                ← Retour au poster principal
              </a>
            </div>

          </div>
        </div>
      </main>
    </>
  )
}