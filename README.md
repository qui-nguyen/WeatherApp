# :world_map: WeatherApp :sunny: :cloud_with_rain: 

Le 2ème projet du bootcamp La Capsule.
Weather App est une application web qui permet d'afficher la météo d'une ville sur une carte intéractive.

## FONCTIONNALITES PRINCIPALES

- Une UI responsible avec le login et logout
- Enregistrer une nouvelle ville pour surveiller sa météo
- Afficher les informations météologiques d'une ville en temps réel
- Gérer durablement les informations d'un utlisateur avec la base de données MongoDB
- Une carte intéractive matérialisant des villes saisies

## USAGE

Installer les modules définis dans `package.json` par `node package manager (npm)`

```node
npm install
```

Démarrer le projet en local

```node
npm start
```

Naviguer le navigateur vers <http://localhost:3000>. La page web s'actualise automatiquement si l'on change un des fichiers source.

## TECHNOLOGIES

- `html`, `css` et `bootstrap` pour créer un UI responsible
- `express` pour créer rapidement une infrastructure Web souple sous l'environment `node.js` et pour rendre dynamique les pages HTML
- [`api open weather app`](https://openweathermap.org) pour un service spécialisé dans les données météorologiques des villes
- `NoSQL` avec `MongoDB` pour le stockage des données et la bibliothèque `MongooseDB` pour créer la connexion entre MongoDB et le serveur node.js
- architecture `MVC` Model-View-Control
- `[leafletjs]`(https://leafletjs.com/) librairie open-source javascript pour la carte intéractive

[![npm](https://img.shields.io/npm/v/npm)](https://npm.im/npm)

## A QUOI CE WEB RESSEMBLE ?

### :computer: "On the internet"

Le projet a été déployé sur `Heroku` et il se retrouve via le lien : <https://weather-00.herokuapp.com/>

### :clapper: Youtube

[![Demo projet sur ma chaîne youtube](https://img.youtube.com/vi/s-W8MsTo78A/0.jpg)](https://youtu.be/s-W8MsTo78A)

## LICENCE

![NPM](https://img.shields.io/npm/l/express)
