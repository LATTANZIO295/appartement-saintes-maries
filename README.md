# L'Escale Camarguaise - Site Web

Bienvenue sur le site web de votre appartement de vacances aux Saintes-Maries-de-la-Mer !

## 📋 Contenu du site

Ce site web professionnel présente votre appartement de 50 m² avec les sections suivantes :

### 1. **Accueil (Hero Section)**
- Présentation attractive de l'appartement
- Bouton d'appel à l'action "Réserver maintenant"
- Image de la plage des Saintes-Maries

### 2. **Présentation**
- Description complète de votre appartement
- 4 points forts mis en avant :
  - 🏖️ Proche de la plage (6 minutes à pied)
  - 🏠 Tout équipé (cuisine moderne, climatisation, Wi-Fi)
  - 🚗 Parking privé
  - 👨‍👩‍👧‍👦 Idéal pour 2-4 personnes

### 3. **Galerie**
- 6 images de la région et du village
- Design responsive avec effet hover

### 4. **Équipements et Services**
- Chambre & Séjour
- Cuisine & Salle de bain
- Confort & Technologie
- Services inclus (draps, ménage)

### 5. **À Proximité**
- Plage
- Centre-ville
- Nature et Camargue
- Activités locales

### 6. **Tarifs**
- Basse Saison : 110€/nuit
- Moyenne Saison : 120€/nuit
- Haute Saison : 130€/nuit
- Vacances Scolaires : 120€/nuit
- Note : Draps et ménage inclus

### 7. **Contact**
- Coordonnées directes (téléphone et email)
- Formulaire de contact interactif

### 8. **Footer**
- Informations légales
- Localisation

## 🎨 Design

Le site utilise un **design moderne et épuré** avec :
- Palette de couleurs professionnelle (bleu, gris, blanc)
- Typographie claire et lisible
- Animations subtiles au scroll
- Design responsive (mobile, tablette, desktop)

## 📱 Responsive Design

Le site s'adapte parfaitement à tous les appareils :
- Desktop (1200px+)
- Tablette (768px - 1199px)
- Mobile (< 768px)

## 🔧 Structure des fichiers

```
appartement-saintes-maries/
├── index.html          # Page HTML principale
├── styles.css          # Feuille de styles CSS
├── script.js           # Fichier JavaScript pour les interactions
├── public/             # Dossier contenant les images
│   ├── LDQqceR3nMLQ.jpg
│   ├── Yh5pcjTbJ3Kk.jpg
│   ├── CD1vy9csyWvW.jpg
│   ├── SJTVMYlq08gs.jpg
│   ├── bhdtYlxHCOVc.jpg
│   └── elQ0VjHuuHRC.jpg
└── README.md           # Ce fichier
```

## 💻 Comment utiliser le site

### Accès local
1. Ouvrez un terminal dans le répertoire du projet
2. Lancez un serveur web local :
   ```bash
   python3 -m http.server 8000
   ```
3. Accédez au site via : `http://localhost:8000`

### Déploiement en ligne
Pour mettre votre site en ligne, vous pouvez utiliser :
- **Netlify** (gratuit, très simple)
- **GitHub Pages** (gratuit)
- **Vercel** (gratuit)
- **Un hébergement web traditionnel** (OVH, 1&1, etc.)

## 📝 Modification du contenu

### Modifier les informations de contact
Ouvrez `index.html` et cherchez la section "Contact" :
```html
<a href="tel:+33648021972">06 48 02 19 72</a>
<a href="mailto:ellattanzio66@gmail.com">ellattanzio66@gmail.com</a>
```

### Modifier les tarifs
Cherchez la section "Tarifs" dans `index.html` et mettez à jour les prix.

### Ajouter ou remplacer des images
1. Placez vos images dans le dossier `public/`
2. Mettez à jour les références dans `index.html`

### Modifier les textes
Tous les textes sont dans `index.html`. Vous pouvez les modifier directement.

### Personnaliser les couleurs
Ouvrez `styles.css` et modifiez les variables CSS au début du fichier :
```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    /* ... */
}
```

## 🚀 Fonctionnalités JavaScript

### Formulaire de contact
- Validation des champs (email, etc.)
- Envoi par mailto (ouvre le client email)
- Message de confirmation

### Animations
- Animations au scroll (fade-in)
- Effets hover sur les cartes
- Smooth scroll sur les liens de navigation

### Navigation
- Menu sticky (reste visible au scroll)
- Liens de navigation fluides

## 📊 SEO et Métadonnées

Le site inclut :
- Titre optimisé
- Meta viewport pour mobile
- Charset UTF-8
- Structure sémantique HTML5

## 🔐 Sécurité

- Pas de données sensibles stockées
- Formulaire utilisant mailto (pas de serveur backend requis)
- Pas de dépendances externes (CDN)

## 📞 Support et modifications

Pour toute modification ou amélioration du site, vous pouvez :
1. Modifier directement les fichiers HTML/CSS/JS
2. Contacter un développeur web pour des améliorations plus complexes

## 📄 Licence

© 2026 L'Escale Camarguaise. Tous droits réservés.

---

**Créé avec ❤️ pour votre appartement aux Saintes-Maries-de-la-Mer**
