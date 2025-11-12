# Celiac Disease Poster - Next.js Project

Un poster one-page interactif sur le problème de la maladie cœliaque en France.

## 🚀 Technologies

- **Next.js 15** - React framework avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling utilitaire
- **shadcn/ui** - Composants UI réutilisables

## 📋 Installation

1. Installez les dépendances :
```bash
npm install
```

2. Installez les dépendances supplémentaires pour shadcn/ui :
```bash
npm install clsx tailwind-merge tailwindcss-animate
```

## 🛠️ Développement

Lancez le serveur de développement :

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📄 Structure du Poster

Le poster est divisé en 5 sections principales :

1. **Chiffres Clés** - Statistiques sur la maladie cœliaque en France
2. **Parcours Utilisateur** - Le parcours du diagnostic à la vie quotidienne
3. **Comparaison Internationale** - France vs Italie vs Espagne
4. **Douleurs Quotidiennes** - Une journée type d'une personne cœliaque
5. **Opportunités** - Pistes de solutions (Digital, Restauration, Éducation)

## 🖨️ Impression

Le poster est optimisé pour l'impression en format A4. Les styles d'impression sont définis dans `app/globals.css`.

Pour imprimer :
- Ouvrez le poster dans votre navigateur
- Utilisez Ctrl+P (ou Cmd+P sur Mac)
- Sélectionnez les options d'impression appropriées

## 📱 Responsive Design

Le poster s'adapte automatiquement aux différentes tailles d'écran :
- Desktop (> 768px) : Grille en 3 colonnes
- Tablet/Mobile (< 768px) : Vue empilée verticale

## 🎨 Personnalisation

Les couleurs principales utilisées :
- Rouge (#DC2626) - Pour mettre en avant les problèmes
- Orange (#F97316) - Pour les transitions
- Vert (#16A34A) - Pour les opportunités
- Bleu (#2563EB) - Pour les comparaisons

## 📦 Build pour Production

```bash
npm run build
npm start
```

## 📝 License

Projet réalisé dans le cadre d'un hackathon emlyon.
