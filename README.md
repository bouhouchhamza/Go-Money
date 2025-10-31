💸 Simulateur de prêt bancaire moderne

Hey 👋 bienvenue dans Go-Money, un mini-projet créé pour découvrir le monde du JavaScript, du design web et des calculs financiers !
Ce projet a été réalisé dans le cadre de ma formation à YouCode.
C’est un site simple, moderne et utile qui te permet de simuler un prêt bancaire et de voir combien tu vas rembourser chaque mois 💰

🎯 Objectif du projet

Créer une petite application web où :

L’utilisateur choisit le type de prêt (maison, terrain, voiture, entreprise…)

Il entre le montant et la durée

Et le site calcule automatiquement la mensualité, le total à rembourser et les intérêts

Le but ?
👉 Comprendre comment manipuler le DOM, les formulaires, et les calculs dynamiques avec JavaScript !

⚙️ Fonctionnalités principales

✅ Simulation de prêt automatique
✅ Taux d’intérêt différent selon le type de prêt
✅ Message d’alerte si la mensualité dépasse 40 % du salaire
✅ Interface responsive (mobile + desktop)
✅ Design coloré avec dégradé bleu/violet moderne

🧮 Formule utilisée
mensualite = (loan_amount * monthly_interest) / 
             (1 - Math.pow(1 + monthly_interest, -months));


💡 Cette formule calcule la mensualité à payer selon le montant, le taux d’intérêt et la durée.

🖼️ Aperçu rapide
Go-Money/
│
├── index.html   → Page principale  
├── style.css    → Style et design  
├── script.js    → Calculs et logique JS  
└── assets/      → Images et icônes

🧰 Outils utilisés
Technologie	Rôle
🧱 HTML5	Structure du site
🎨 CSS3 / Bootstrap 5	Design responsive
⚙️ JavaScript	Calculs et interactions
💡 (Optionnel) jQuery	Pour rendre le code plus fluide
💻 Comment l’essayer ?

Télécharge ou clone le projet :

git clone https://github.com/username/Go-Money.git


Ouvre le dossier :

cd Go-Money


Lance le fichier index.html dans ton navigateur 🌐

🧠 Ce que j’ai appris

Utiliser les formulaires en HTML

Gérer les événements et calculs dynamiques en JS

Styliser une page avec Bootstrap et CSS custom

Organiser un petit projet web comme un pro 😎

👨‍💻 Auteur

Hamza Bouhouch
Formation : YouCode
📅 Année : 2025
📍 Maroc

💬 “Petit à petit, on devient grand dans le code.” 🚀

<div align="center">

✨ Merci d’avoir visité mon projet !
Si tu veux me donner ton avis, n’hésite pas à ouvrir une issue ou à m’écrire 💙

</div>