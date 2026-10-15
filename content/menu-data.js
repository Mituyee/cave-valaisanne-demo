/* Cave Valaisanne — contenu de la carte. Modifier les prix et textes ici uniquement. */
window.MENU_DATA = {
 "schema": "swissadvert.menu/0.3",
 "venue": {
  "name": "Cave Valaisanne",
  "brand": "Chalet Suisse",
  "logo": "assets/img/logo-cave-valaisanne-320.png",
  "logoWebp": {
   "320": "assets/img/logo-cave-valaisanne-320.webp",
   "600": "assets/img/logo-cave-valaisanne-600.webp"
  },
  "logoAlt": "Cave Valaisanne – Chalet Suisse, depuis 1960",
  "hero": {
   "image": "images/hero-cave.jpg",
   "imageSmall": "images/hero-cave-800.jpg",
   "imageFocus": "50% 50%",
   "alt": "Salle de restaurant de style chalet : nappes à carreaux, verres de vin et caquelon de fondue"
  },
  "title": "Notre carte",
  "notice": "Ouvert 7/7 de 09:00 à 00:30 — cuisine chaude de 11:30 à 00:00",
  "address": "Bd Georges-Favon 23, 1204 Genève",
  "phone": "022 328 12 36",
  "currency": "CHF",
  "language": "fr",
  "platDuJour": {
   "label": "Plat du jour",
   "url": "plat-du-jour/"
  },
  "reservation": {
   "label": "Réservation & contact",
   "url": "https://cavevalaisanne.ch/reservation-contact/"
  },
  "notes": [
   "Prix en CHF."
  ],
  "legend": {
   "alcool": "Contient de l'alcool (mentionné sur la carte)",
   "af": "Sans alcool"
  },
  "source": [
   "https://cavevalaisanne.ch/carte-des-mets/",
   "https://cavevalaisanne.ch/carte-des-boissons/"
  ],
  "sourceChecked": "2026-10-15",
  "provider": "Swiss Advert Studio"
 },
 "groups": [
  {
   "id": "manger",
   "title": "À manger"
  },
  {
   "id": "boire",
   "title": "À boire"
  }
 ],
 "categories": [
  {
   "id": "entrees-salades",
   "title": "Entrées & Salades",
   "icon": "bowl",
   "image": "images/cat-entrees-salades.jpg",
   "imageAlt": "Salade mêlée aux légumes du marché",
   "sections": [
    {
     "title": "Les Entrées",
     "items": [
      {
       "name": "Salade verte",
       "price": 6.5,
       "image": null,
       "id": "entrees-salades--salade-verte",
       "verif": "vérifié"
      },
      {
       "name": "Potage du jour",
       "price": 8.5,
       "image": null,
       "id": "entrees-salades--potage-du-jour",
       "verif": "vérifié"
      },
      {
       "name": "Salade mêlée",
       "price": 8.5,
       "image": null,
       "id": "entrees-salades--salade-melee",
       "verif": "vérifié"
      },
      {
       "name": "Vol-au-vent",
       "desc": "Aux champignons",
       "price": 15,
       "image": null,
       "id": "entrees-salades--vol-au-vent",
       "verif": "vérifié"
      },
      {
       "name": "Os à moelle gratiné à la fleur de sel",
       "desc": "Accompagné de ses toasts",
       "price": 16,
       "image": "images/p-os-a-moelle.jpg",
       "imageAlt": "Os à moelle gratinés, toasts et salade",
       "id": "entrees-salades--os-a-moelle-gratine-a-la-fleur-de-sel",
       "verif": "vérifié",
       "imageSmall": "images/p-os-a-moelle-800.jpg",
       "imageFocus": "50% 55%"
      },
      {
       "name": "Escalope de foie gras poêlée",
       "desc": "Accompagné de pain brioché et fruits rouges",
       "price": 20,
       "image": null,
       "id": "entrees-salades--escalope-de-foie-gras-poelee",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-mets/"
    },
    {
     "title": "Les Salades",
     "items": [
      {
       "name": "Malakoff 2 pièces",
       "desc": "Salade mêlée et viande séchée du Valais",
       "price": 23,
       "image": "images/p-malakoff.jpg",
       "imageAlt": "Malakoffs dorés, salade et sauce",
       "id": "entrees-salades--malakoff-2-pieces",
       "verif": "vérifié",
       "imageSmall": "images/p-malakoff-800.jpg",
       "imageFocus": "50% 55%"
      },
      {
       "name": "Mesclun de chèvre chaud au miel",
       "desc": "Doré sur toasts de pain noir, œuf dur GRTA, vinaigrette à l'huile de noix et vinaigre balsamique",
       "price": 24,
       "review": "Mention « GRTA » reprise telle quelle (Genève Région – Terre Avenir ?) : à expliquer en légende si l'établissement le souhaite.",
       "image": null,
       "id": "entrees-salades--mesclun-de-chevre-chaud-au-miel",
       "verif": "à confirmer"
      },
      {
       "name": "Salade César",
       "desc": "Aux filets de poulet, parmesan, œuf dur GRTA et croûtons",
       "price": 24,
       "image": null,
       "id": "entrees-salades--salade-cesar",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-mets/"
    }
   ],
   "group": "manger",
   "imageSmall": "images/cat-entrees-salades-800.jpg",
   "imageFocus": "50% 50%"
  },
  {
   "id": "saveurs-cave",
   "title": "Saveurs de la Cave",
   "icon": "board",
   "image": "images/cat-saveurs-cave.jpg",
   "imageAlt": "Assiette de jambon cru, cornichons et noix",
   "sections": [
    {
     "title": "Saveurs de la Cave",
     "items": [
      {
       "name": "Viande séchée du Valais",
       "price": 24,
       "image": null,
       "id": "saveurs-cave--viande-sechee-du-valais",
       "verif": "vérifié"
      },
      {
       "name": "Jambon Cru du Valais",
       "price": 22,
       "image": null,
       "id": "saveurs-cave--jambon-cru-du-valais",
       "verif": "vérifié"
      },
      {
       "name": "Ardoise valaisanne",
       "desc": "Jambon cru, viande séchée et tomme du Valais",
       "price": 23,
       "image": "images/p-ardoise-valaisanne.jpg",
       "imageAlt": "Ardoise de viande séchée, jambon cru, cornichons et noix",
       "id": "saveurs-cave--ardoise-valaisanne",
       "verif": "vérifié",
       "imageSmall": "images/p-ardoise-valaisanne-800.jpg",
       "imageFocus": "50% 50%"
      },
      {
       "name": "Terrine Garnie aux morilles",
       "desc": "Salade, crudités et terrine aux morilles",
       "price": 24,
       "image": null,
       "id": "saveurs-cave--terrine-garnie-aux-morilles",
       "verif": "vérifié"
      },
      {
       "name": "Délice de la Cave",
       "desc": "Salade, crudités, viande séchée, jambon cru, et terrine aux morilles",
       "price": 27,
       "image": null,
       "id": "saveurs-cave--delice-de-la-cave",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-mets/"
    }
   ],
   "group": "manger",
   "imageSmall": "images/cat-saveurs-cave-800.jpg",
   "imageFocus": "45% 50%"
  },
  {
   "id": "delices-cave",
   "title": "Les Délices de la Cave",
   "icon": "plate",
   "image": "images/cat-delices-cave.jpg",
   "imageAlt": "Émincé en sauce crémée aux champignons et légumes",
   "sections": [
    {
     "title": "Les Délices de la Cave",
     "items": [
      {
       "name": "Travers de porc caramélisés",
       "desc": "Pommes frites et légumes",
       "price": 27,
       "image": null,
       "id": "delices-cave--travers-de-porc-caramelises",
       "verif": "vérifié"
      },
      {
       "name": "Suprême de pintade aux champignons",
       "desc": "Gratin et légumes",
       "price": 28,
       "image": null,
       "id": "delices-cave--supreme-de-pintade-aux-champignons",
       "verif": "vérifié"
      },
      {
       "name": "Poulet au curry et lait de coco",
       "desc": "Pistaches, chips de coco et riz venere",
       "price": 28,
       "image": null,
       "id": "delices-cave--poulet-au-curry-et-lait-de-coco",
       "verif": "vérifié"
      },
      {
       "name": "Émincé de veau à la zürichoise",
       "desc": "Rösti maison et légumes",
       "price": 34,
       "image": "images/p-emince-zurichoise.jpg",
       "imageAlt": "Émincé en sauce crémée aux champignons",
       "id": "delices-cave--emince-de-veau-a-la-zurichoise",
       "verif": "vérifié",
       "imageSmall": "images/p-emince-zurichoise-800.jpg",
       "imageFocus": "45% 55%"
      },
      {
       "name": "Escalope de veau viennoise",
       "desc": "Pommes frites et légumes",
       "price": 38,
       "image": null,
       "id": "delices-cave--escalope-de-veau-viennoise",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-mets/"
    }
   ],
   "group": "manger",
   "imageSmall": "images/cat-delices-cave-800.jpg",
   "imageFocus": "50% 55%"
  },
  {
   "id": "tartares-fondues-boeuf",
   "title": "Tartare & Fondues de bœuf",
   "icon": "fork",
   "image": "images/cat-fondues-boeuf.jpg",
   "imageAlt": "Tartare de bœuf au jaune d'œuf et toasts",
   "sections": [
    {
     "title": "Nos tartares de bœuf au couteau",
     "items": [
      {
       "name": "Tartare de Bœuf Classique (200 gr.)",
       "desc": "Cognac - échalotes, câpres, cornichons, huile d'olive, sauce anglaise, tabasco, ketchup, moutarde et jaune d'œuf GRTA",
       "price": 40,
       "tags": [
        "alcool"
       ],
       "image": null,
       "id": "tartares-fondues-boeuf--tartare-de-buf-classique-200-gr",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-mets/",
     "note": "Tous les tartares sont servis avec toasts et frites."
    },
    {
     "title": "Nos fondues à la viande de bœuf",
     "items": [
      {
       "name": "Fondue Bourguignonne",
       "desc": "220 gr. de viande de bœuf, pommes frites et assortiment de sauces",
       "price": 40,
       "image": null,
       "id": "tartares-fondues-boeuf--fondue-bourguignonne",
       "verif": "vérifié"
      },
      {
       "name": "Fondue Chinoise",
       "desc": "220 gr. de viande de bœuf, pommes frites et assortiment de sauces",
       "price": 40,
       "image": "images/p-fondue-chinoise.jpg",
       "imageAlt": "Fondue chinoise : bouillon, fines tranches de bœuf, sauces et frites",
       "id": "tartares-fondues-boeuf--fondue-chinoise",
       "verif": "vérifié",
       "imageSmall": "images/p-fondue-chinoise-800.jpg",
       "imageFocus": "35% 55%"
      },
      {
       "name": "Fondue Bacchus au Pinot noir",
       "desc": "220 gr. de viande de bœuf, pommes frites et assortiment de sauces",
       "price": 40,
       "tags": [
        "alcool"
       ],
       "image": null,
       "id": "tartares-fondues-boeuf--fondue-bacchus-au-pinot-noir",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-mets/"
    }
   ],
   "group": "manger",
   "imageSmall": "images/cat-fondues-boeuf-800.jpg",
   "imageFocus": "55% 50%"
  },
  {
   "id": "coin-boucher",
   "title": "Le Coin du Boucher",
   "icon": "steak",
   "image": "images/cat-coin-boucher.jpg",
   "imageAlt": "Pièce de bœuf grillée, tomates et frites",
   "sections": [
    {
     "title": "Le Coin du Boucher",
     "items": [
      {
       "name": "Hamburger de bœuf au fromage à raclette",
       "desc": "Bacon, bun aux farines GRTA, sauce Aïoli, frites et salade mêlée",
       "price": 29,
       "image": null,
       "id": "coin-boucher--hamburger-de-buf-au-fromage-a-raclette",
       "verif": "vérifié"
      },
      {
       "name": "Steak de Bœuf",
       "desc": "180gr. de viande, pommes frites et légumes",
       "price": 30,
       "image": null,
       "id": "coin-boucher--steak-de-buf",
       "verif": "vérifié"
      },
      {
       "name": "Entrecôte de Bœuf",
       "desc": "200gr. de viande, pommes frites et légumes",
       "price": 35,
       "image": "images/p-entrecote.jpg",
       "imageAlt": "Entrecôte grillée, frites et tomates",
       "id": "coin-boucher--entrecote-de-buf",
       "verif": "vérifié",
       "imageSmall": "images/p-entrecote-800.jpg",
       "imageFocus": "50% 55%"
      },
      {
       "name": "Côtes d'Agneau aux herbes",
       "desc": "Pommes frites et légumes",
       "price": 32,
       "image": null,
       "id": "coin-boucher--cotes-d-agneau-aux-herbes",
       "verif": "vérifié"
      },
      {
       "name": "Saucisse de Veau grillée",
       "desc": "Pommes frites et légumes",
       "price": 21,
       "image": null,
       "id": "coin-boucher--saucisse-de-veau-grillee",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-mets/",
     "note": "Sauces au choix : Beurre maître d'hôtel / Sauce au poivre vert / Sauce aux échalotes / Sauce aux champignons"
    }
   ],
   "group": "manger",
   "imageSmall": "images/cat-coin-boucher-800.jpg",
   "imageFocus": "50% 55%"
  },
  {
   "id": "brasserie",
   "title": "Spécialités Brasserie",
   "icon": "pot",
   "image": "images/cat-brasserie.jpg",
   "imageAlt": "Saucisse rôtie, lentilles et pâtes",
   "sections": [
    {
     "title": "Spécialités Brasserie",
     "items": [
      {
       "name": "Longeole à la Genevoise",
       "desc": "Gratin dauphinois et légumes",
       "price": 29,
       "image": null,
       "id": "brasserie--longeole-a-la-genevoise",
       "verif": "vérifié"
      },
      {
       "name": "Saucisse aux choux",
       "desc": "Papet vaudois",
       "price": 28,
       "image": null,
       "id": "brasserie--saucisse-aux-choux",
       "verif": "vérifié"
      },
      {
       "name": "Jambon à l'Os sauce au madère",
       "desc": "Gratin dauphinois et légumes",
       "price": 27,
       "image": null,
       "id": "brasserie--jambon-a-l-os-sauce-au-madere",
       "verif": "vérifié"
      },
      {
       "name": "Pot-au-feu",
       "desc": "Garni de petits légumes et pommes vapeur",
       "price": 29,
       "image": null,
       "id": "brasserie--pot-au-feu",
       "verif": "vérifié"
      },
      {
       "name": "Choucroute sur assiette",
       "desc": "Palette de porc fumé, lard fumé, saucisson vaudois et vienne",
       "price": 30,
       "image": "images/p-choucroute.jpg",
       "imageAlt": "Choucroute, saucisses, porc fumé et pommes de terre",
       "id": "brasserie--choucroute-sur-assiette",
       "verif": "vérifié",
       "imageSmall": "images/p-choucroute-800.jpg",
       "imageFocus": "55% 60%"
      },
      {
       "name": "Choucroute Garnie sur plat avec saucisse au choux",
       "desc": "Palette de porc fumé, lard fumé, saucisson vaudois, vienne et saucisse au choux",
       "price": 39,
       "image": null,
       "id": "brasserie--choucroute-garnie-sur-plat-avec-saucisse-au-",
       "verif": "vérifié"
      },
      {
       "name": "Choucroute « Royale »",
       "desc": "Palette de porc fumé, lard fumé, saucisson vaudois, vienne, saucisse aux choux",
       "price": 75,
       "unit": "pour 2 personnes",
       "image": null,
       "id": "brasserie--choucroute-royale",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-mets/"
    }
   ],
   "group": "manger",
   "imageSmall": "images/cat-brasserie-800.jpg",
   "imageFocus": "50% 50%"
  },
  {
   "id": "fondues-fromage",
   "title": "Fondues au fromage",
   "icon": "fondue",
   "image": "images/cat-fondues-fromage.jpg",
   "imageAlt": "Caquelon de fondue au fromage et pain",
   "note": "Spécialités au Fromage",
   "sections": [
    {
     "title": "Les Fondues",
     "items": [
      {
       "name": "Traditionnelle",
       "price": 27,
       "image": "images/p-fondue-traditionnelle.jpg",
       "imageAlt": "Caquelon de fondue au fromage",
       "id": "fondues-fromage--traditionnelle",
       "verif": "vérifié",
       "imageSmall": "images/p-fondue-traditionnelle-800.jpg",
       "imageFocus": "50% 50%"
      },
      {
       "name": "Cognac",
       "price": 29,
       "tags": [
        "alcool"
       ],
       "image": null,
       "id": "fondues-fromage--cognac",
       "verif": "vérifié"
      },
      {
       "name": "Fines herbes",
       "price": 29,
       "image": null,
       "id": "fondues-fromage--fines-herbes",
       "verif": "vérifié"
      },
      {
       "name": "Poivre vert",
       "price": 29,
       "image": null,
       "id": "fondues-fromage--poivre-vert",
       "verif": "vérifié"
      },
      {
       "name": "Tomate",
       "price": 30,
       "image": null,
       "id": "fondues-fromage--tomate",
       "verif": "vérifié"
      },
      {
       "name": "Au vin blanc sans alcool",
       "price": 31,
       "tags": [
        "af"
       ],
       "image": null,
       "id": "fondues-fromage--au-vin-blanc-sans-alcool",
       "verif": "vérifié"
      },
      {
       "name": "Trois Fromages",
       "desc": "Gruyère, Vacherin et Chèvre",
       "price": 31,
       "image": null,
       "id": "fondues-fromage--trois-fromages",
       "verif": "vérifié"
      },
      {
       "name": "Champagne",
       "price": 35,
       "tags": [
        "alcool"
       ],
       "image": null,
       "id": "fondues-fromage--champagne",
       "verif": "vérifié"
      },
      {
       "name": "Bolets",
       "price": 35,
       "image": null,
       "id": "fondues-fromage--bolets",
       "verif": "vérifié"
      },
      {
       "name": "Parfumée à la truffe Noire",
       "price": 40,
       "image": null,
       "id": "fondues-fromage--parfumee-a-la-truffe-noire",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-mets/",
     "note": "Supplément de 5.– pour les pommes de terre (fondue tomate exceptée). Supplément de 5.– pour les cornichons et oignons.",
     "review": "Formulation source : « Supplément de 5.- pour les pommes de terre, fondue tomate exceptée » — sens à confirmer (pommes de terre incluses avec la fondue tomate ?)."
    }
   ],
   "group": "manger",
   "imageSmall": "images/cat-fondues-fromage-800.jpg",
   "imageFocus": "50% 50%"
  },
  {
   "id": "raclettes-rosti",
   "title": "Raclettes, Rösti & Croûtes",
   "icon": "cheese",
   "image": "images/cat-raclettes.jpg",
   "imageAlt": "Raclette raclée sur pommes de terre et cornichons",
   "note": "Spécialités au Fromage",
   "sections": [
    {
     "title": "Raclettes au lait cru AOP",
     "items": [
      {
       "name": "Raclette 3 services",
       "price": 20,
       "image": "images/p-raclette.jpg",
       "imageAlt": "Raclette raclée sur pommes de terre",
       "id": "raclettes-rosti--raclette-3-services",
       "verif": "vérifié",
       "imageSmall": "images/p-raclette-800.jpg",
       "imageFocus": "50% 50%"
      },
      {
       "name": "Raclette 5 services",
       "price": 30,
       "image": null,
       "id": "raclettes-rosti--raclette-5-services",
       "verif": "vérifié"
      },
      {
       "name": "Raclette à Gogo !",
       "price": 40,
       "image": null,
       "id": "raclettes-rosti--raclette-a-gogo",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-mets/",
     "note": "Servies avec pommes de terre, cornichons et oignons."
    },
    {
     "title": "Rösti",
     "items": [
      {
       "name": "Rösti valaisan",
       "desc": "Fromage, viande séchée du Valais et œuf au plat GRTA",
       "price": 29.5,
       "image": "images/p-rosti-valaisan.jpg",
       "imageAlt": "Rösti au fromage, viande séchée et œuf au plat",
       "id": "raclettes-rosti--rosti-valaisan",
       "verif": "vérifié",
       "imageSmall": "images/p-rosti-valaisan-800.jpg",
       "imageFocus": "50% 45%"
      },
      {
       "name": "Rösti des Grisons",
       "desc": "Fromage, jambon cru des Grisons et œuf au plat GRTA",
       "price": 28,
       "image": null,
       "id": "raclettes-rosti--rosti-des-grisons",
       "verif": "vérifié"
      },
      {
       "name": "Rösti montagnard",
       "desc": "Fromage, lard et œuf au plat GRTA",
       "price": 28,
       "image": null,
       "id": "raclettes-rosti--rosti-montagnard",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-mets/"
    },
    {
     "title": "Croûtes au Fromage du Valais",
     "items": [
      {
       "name": "Croûte 1 étage",
       "price": 19,
       "image": null,
       "id": "raclettes-rosti--croute-1-etage",
       "verif": "vérifié"
      },
      {
       "name": "Croûte 2 étages",
       "desc": "Avec jambon d'épaule",
       "price": 20,
       "image": null,
       "id": "raclettes-rosti--croute-2-etages",
       "verif": "vérifié"
      },
      {
       "name": "Croûte 3 étages",
       "desc": "Avec jambon d'épaule et œuf au plat GRTA",
       "price": 22,
       "image": null,
       "id": "raclettes-rosti--croute-3-etages",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-mets/"
    },
    {
     "title": "Steaks de Fromage du Valais",
     "items": [
      {
       "name": "Steak de fromage à l'ail frais",
       "desc": "Avec pommes charlotte",
       "price": 22.5,
       "image": null,
       "id": "raclettes-rosti--steak-de-fromage-a-l-ail-frais",
       "verif": "vérifié"
      },
      {
       "name": "Steak de fromage « Cave »",
       "desc": "Pommes charlotte, tomates, oignons et œuf au plat GRTA",
       "price": 25,
       "image": null,
       "id": "raclettes-rosti--steak-de-fromage-cave",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-mets/"
    }
   ],
   "group": "manger",
   "imageSmall": "images/cat-raclettes-800.jpg",
   "imageFocus": "50% 50%"
  },
  {
   "id": "poissons",
   "title": "Nos Poissons",
   "icon": "fish",
   "image": "images/cat-poissons.jpg",
   "imageAlt": "Filets de poisson blanc meunière, pommes de terre et citron",
   "sections": [
    {
     "title": "Nos Poissons",
     "items": [
      {
       "name": "Filet de truite meunière",
       "desc": "Avec riz venere et petits légumes",
       "price": 30,
       "image": null,
       "id": "poissons--filet-de-truite-meuniere",
       "verif": "vérifié"
      },
      {
       "name": "Filet de perche meunière du Valais",
       "desc": "Accompagnés de pommes frites, légumes et sauce tartare",
       "price": 42,
       "image": "images/p-perche.jpg",
       "imageAlt": "Filets de perche dorés, pommes frites, légumes, citron et sauce tartare",
       "id": "poissons--filet-de-perche-meuniere-du-valais",
       "verif": "vérifié",
       "imageSmall": "images/p-perche-800.jpg",
       "imageFocus": "50% 55%"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-mets/"
    }
   ],
   "group": "manger",
   "imageSmall": "images/cat-poissons-800.jpg",
   "imageFocus": "45% 60%"
  },
  {
   "id": "pates",
   "title": "Les Pâtes",
   "icon": "pasta",
   "image": "images/cat-pates.jpg",
   "imageAlt": "Tagliatelles aux champignons",
   "sections": [
    {
     "title": "Sélection de Sauces",
     "items": [
      {
       "name": "Pesto d'amandes",
       "desc": "Basilic, parmesan et huile d'olive",
       "price": 20,
       "image": null,
       "id": "pates--pesto-d-amandes",
       "verif": "vérifié"
      },
      {
       "name": "Carbonara",
       "desc": "Crème, lardons et jaune d'œuf GRTA",
       "price": 22,
       "image": null,
       "id": "pates--carbonara",
       "verif": "vérifié"
      },
      {
       "name": "Valaisanne « gratiné au four »",
       "desc": "Jambon cru, viande séchée, fromage, oignons et crème",
       "price": 25,
       "image": null,
       "id": "pates--valaisanne-gratine-au-four",
       "verif": "vérifié"
      },
      {
       "name": "Parfumée à la truffe noire",
       "desc": "Crème, truffe et copeaux de parmesan",
       "price": 30,
       "image": null,
       "id": "pates--parfumee-a-la-truffe-noire",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-mets/"
    }
   ],
   "group": "manger",
   "imageSmall": "images/cat-pates-800.jpg",
   "imageFocus": "50% 50%"
  },
  {
   "id": "petite-restauration",
   "title": "Petite Restauration",
   "icon": "egg",
   "image": "images/cat-petite-restauration.jpg",
   "imageAlt": "Omelette aux fines herbes, rösti, frites et salade",
   "sections": [
    {
     "title": "Petite Restauration",
     "items": [
      {
       "name": "Gratin portion",
       "price": 15,
       "image": null,
       "id": "petite-restauration--gratin-portion",
       "verif": "vérifié"
      },
      {
       "name": "Portion de frites",
       "price": 10,
       "image": null,
       "id": "petite-restauration--portion-de-frites",
       "verif": "vérifié"
      },
      {
       "name": "Rösti (maison)",
       "price": 18,
       "image": null,
       "id": "petite-restauration--rosti-maison",
       "verif": "vérifié"
      },
      {
       "name": "Assiette trois légumes",
       "price": 18,
       "image": null,
       "id": "petite-restauration--assiette-trois-legumes",
       "verif": "vérifié"
      },
      {
       "name": "Omelette nature",
       "price": 17,
       "image": null,
       "id": "petite-restauration--omelette-nature",
       "verif": "vérifié"
      },
      {
       "name": "Omelette fines herbes",
       "price": 18,
       "image": null,
       "id": "petite-restauration--omelette-fines-herbes",
       "verif": "vérifié"
      },
      {
       "name": "Omelette jambon",
       "price": 19,
       "image": null,
       "id": "petite-restauration--omelette-jambon",
       "verif": "vérifié"
      },
      {
       "name": "Omelette fromage",
       "price": 19,
       "image": null,
       "id": "petite-restauration--omelette-fromage",
       "verif": "vérifié"
      },
      {
       "name": "Omelette parfumée à la truffe noir",
       "price": 25,
       "image": null,
       "id": "petite-restauration--omelette-parfumee-a-la-truffe-noir",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-mets/",
     "note": "Supplément de Frs. 3.00 par choix supplémentaire.",
     "review": "« Supplément de Frs. 3.00 par choix supplémentaire » : à quoi s'applique-t-il exactement (garnitures d'omelette ?)"
    }
   ],
   "group": "manger",
   "imageSmall": "images/cat-petite-restauration-800.jpg",
   "imageFocus": "60% 60%"
  },
  {
   "id": "menus",
   "title": "Les Menus",
   "icon": "star",
   "image": "images/cat-menus.jpg",
   "imageAlt": "Assiette de viande, légumes et pommes de terre",
   "sections": [
    {
     "title": "Les Menus",
     "items": [
      {
       "name": "Menu Valaisan",
       "desc": "Délice de Cave · Raclette 5 services OU Fondue Traditionnelle · Sorbet abricot et eau-de-vie d'abricot OU Sorbet poire et eau-de-vie de poire",
       "price": 48,
       "tags": [
        "alcool"
       ],
       "image": null,
       "id": "menus--menu-valaisan",
       "verif": "vérifié"
      },
      {
       "name": "Menu Suisse",
       "desc": "Salade mêlée · Émincé de Veau à la Zürichoise (avec Rösti maison) · Meringue Glacée",
       "price": 50,
       "image": null,
       "id": "menus--menu-suisse",
       "verif": "vérifié"
      },
      {
       "name": "Menu Chalet",
       "desc": "Terrine aux morilles et crudités · Fondue Bourguignonne OU Fondue Chinoise · Coupe Danemark",
       "price": 55,
       "image": null,
       "id": "menus--menu-chalet",
       "verif": "vérifié"
      },
      {
       "name": "Menu Record",
       "desc": "Vol-au-vent aux champignons · Filet de truite meunière (riz venere et légumes) · Sorbet citron et Génépi",
       "price": 48,
       "tags": [
        "alcool"
       ],
       "image": null,
       "id": "menus--menu-record",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-mets/"
    }
   ],
   "group": "manger",
   "imageSmall": "images/cat-menus-800.jpg",
   "imageFocus": "50% 50%"
  },
  {
   "id": "desserts-maison",
   "title": "Desserts Maison",
   "icon": "cake",
   "image": "images/cat-desserts-maison.jpg",
   "imageAlt": "Fondant au chocolat, glace vanille et fruits rouges",
   "sections": [
    {
     "title": "Nos Desserts Maison",
     "items": [
      {
       "name": "Café délice",
       "desc": "Café avec un fondant au chocolat",
       "price": 10,
       "image": null,
       "id": "desserts-maison--cafe-delice",
       "verif": "vérifié"
      },
      {
       "name": "Café Gourmand",
       "desc": "Café avec un fondant et un mochi caramel beurre salé",
       "price": 12.8,
       "image": null,
       "id": "desserts-maison--cafe-gourmand",
       "verif": "vérifié"
      },
      {
       "name": "Flan caramel",
       "price": 7.5,
       "image": null,
       "id": "desserts-maison--flan-caramel",
       "verif": "vérifié"
      },
      {
       "name": "Tarte tatin",
       "price": 8,
       "image": null,
       "id": "desserts-maison--tarte-tatin",
       "verif": "vérifié"
      },
      {
       "name": "Crème brulée",
       "price": 9,
       "image": null,
       "id": "desserts-maison--creme-brulee",
       "verif": "vérifié"
      },
      {
       "name": "Tiramisu",
       "price": 9,
       "image": null,
       "id": "desserts-maison--tiramisu",
       "verif": "vérifié"
      },
      {
       "name": "Gaufre Liégeoise",
       "desc": "Au choix : chantilly, sauce chocolat, sucre glace, cannelle, caramel",
       "price": 7,
       "image": null,
       "id": "desserts-maison--gaufre-liegeoise",
       "verif": "vérifié"
      },
      {
       "name": "Cerise à l'eau de vie",
       "price": 12.5,
       "tags": [
        "alcool"
       ],
       "image": null,
       "id": "desserts-maison--cerise-a-l-eau-de-vie",
       "verif": "vérifié"
      },
      {
       "name": "Meringues à la crème de Gruyère",
       "price": 12.9,
       "image": "images/p-meringues.jpg",
       "imageAlt": "Meringues, crème double et framboises",
       "id": "desserts-maison--meringues-a-la-creme-de-gruyere",
       "verif": "vérifié",
       "imageSmall": "images/p-meringues-800.jpg",
       "imageFocus": "50% 55%"
      },
      {
       "name": "Fondant Chocolat",
       "desc": "Boule de glace vanille",
       "price": 10.5,
       "image": null,
       "id": "desserts-maison--fondant-chocolat",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-mets/"
    },
    {
     "title": "Macarons",
     "items": [
      {
       "name": "Macarons",
       "desc": "Framboise – Citron – Chocolat – Vanille – Caramel – Pistache",
       "variants": [
        {
         "label": "3 pièces",
         "price": 8
        },
        {
         "label": "6 pièces",
         "price": 15
        }
       ],
       "image": null,
       "id": "desserts-maison--macarons",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-mets/"
    }
   ],
   "group": "manger",
   "imageSmall": "images/cat-desserts-maison-800.jpg",
   "imageFocus": "45% 50%"
  },
  {
   "id": "desserts-glaces",
   "title": "Desserts Glacés",
   "icon": "icecream",
   "image": "images/cat-desserts-glaces.jpg",
   "imageAlt": "Coupe de glaces et fruits rouges",
   "sections": [
    {
     "title": "Nos Desserts Glacés",
     "items": [
      {
       "name": "Ice Café",
       "desc": "Délicate glace café, agrémentée de chantilly",
       "price": 11,
       "image": null,
       "id": "desserts-glaces--ice-cafe",
       "verif": "vérifié"
      },
      {
       "name": "Cassata",
       "variants": [
        {
         "label": "Nature",
         "price": 7
        },
        {
         "label": "Arrosée",
         "price": 9.2
        }
       ],
       "image": null,
       "id": "desserts-glaces--cassata",
       "verif": "vérifié"
      },
      {
       "name": "Noix de Coco",
       "desc": "Glace exotique à la noix de coco présentée dans son écorce",
       "price": 8.2,
       "image": null,
       "id": "desserts-glaces--noix-de-coco",
       "verif": "vérifié"
      },
      {
       "name": "Parfait Mocca",
       "variants": [
        {
         "label": "Nature",
         "price": 7.7
        },
        {
         "label": "Arrosé",
         "price": 9.7
        }
       ],
       "image": null,
       "id": "desserts-glaces--parfait-mocca",
       "verif": "vérifié"
      },
      {
       "name": "Frappés",
       "desc": "Au parfum de votre choix",
       "price": 8,
       "image": null,
       "id": "desserts-glaces--frappes",
       "verif": "vérifié"
      },
      {
       "name": "Max Trésor",
       "desc": "Glace à la vanille et au chocolat",
       "price": 6.5,
       "image": null,
       "id": "desserts-glaces--max-tresor",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-mets/",
     "review": "Variantes « arrosée » : alcool utilisé non précisé sur la carte."
    },
    {
     "title": "Nos Coupes Glacées",
     "items": [
      {
       "name": "Meringue Glacée",
       "desc": "Spécialité Suisse à la meringue, accompagnée de sa glace vanille et fraise",
       "price": 12,
       "image": null,
       "id": "desserts-glaces--meringue-glacee",
       "verif": "vérifié"
      },
      {
       "name": "Coupe Ballade",
       "desc": "Glaces pistache, vanille, chocolat, sauce chocolat et chantilly",
       "price": 12,
       "image": null,
       "id": "desserts-glaces--coupe-ballade",
       "verif": "vérifié"
      },
      {
       "name": "Banana Split",
       "desc": "Glace vanille, banane coupée en deux, sauce au chocolat et chantilly",
       "price": 12,
       "image": null,
       "id": "desserts-glaces--banana-split",
       "verif": "vérifié"
      },
      {
       "name": "Coupe Alexandra",
       "desc": "Glace vanille, caramel, sauce caramel et chantilly",
       "price": 12,
       "image": null,
       "id": "desserts-glaces--coupe-alexandra",
       "verif": "vérifié"
      },
      {
       "name": "Coupe Siena",
       "desc": "Glaces vanille, amarena, fraise, coulis de fraise et chantilly",
       "price": 12,
       "image": null,
       "id": "desserts-glaces--coupe-siena",
       "verif": "vérifié"
      },
      {
       "name": "Coupe Jamaïque",
       "desc": "Glace rhum-raisins, sauce au chocolat et chantilly",
       "price": 12,
       "image": null,
       "id": "desserts-glaces--coupe-jamaique",
       "verif": "vérifié"
      },
      {
       "name": "Coupe Danemark",
       "desc": "Glace vanille avec sauce au chocolat et chantilly",
       "price": 12,
       "image": null,
       "id": "desserts-glaces--coupe-danemark",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-mets/"
    },
    {
     "title": "Nos Coupes Arrosées",
     "items": [
      {
       "name": "Des Caraïbes",
       "desc": "Glace rhum raisin arrosée de rhum",
       "price": 13,
       "tags": [
        "alcool"
       ],
       "image": null,
       "id": "desserts-glaces--des-caraibes",
       "verif": "vérifié"
      },
      {
       "name": "Le Général",
       "desc": "Glace vanille et whisky",
       "price": 13,
       "tags": [
        "alcool"
       ],
       "image": null,
       "id": "desserts-glaces--le-general",
       "verif": "vérifié"
      },
      {
       "name": "Le Colonel",
       "desc": "Sorbet citron et vodka",
       "price": 13,
       "tags": [
        "alcool"
       ],
       "image": null,
       "id": "desserts-glaces--le-colonel",
       "verif": "vérifié"
      },
      {
       "name": "Le Chalet Suisse",
       "desc": "Sorbet abricot du Valais arrosé d'eau-de-vie d'abricot",
       "price": 13,
       "tags": [
        "alcool"
       ],
       "image": null,
       "id": "desserts-glaces--le-chalet-suisse",
       "verif": "vérifié"
      },
      {
       "name": "Le Valaisan",
       "desc": "Sorbet poire arrosé d'eau-de-vie de poire",
       "price": 13,
       "tags": [
        "alcool"
       ],
       "image": null,
       "id": "desserts-glaces--le-valaisan",
       "verif": "vérifié"
      },
      {
       "name": "Le Genevois",
       "desc": "Sorbet pomme verte arrosé d'eau-de-vie de pomme",
       "price": 13,
       "tags": [
        "alcool"
       ],
       "image": null,
       "id": "desserts-glaces--le-genevois",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-mets/"
    },
    {
     "title": "Glaces & Sorbets Artisanaux",
     "items": [
      {
       "name": "Glace ou sorbet, la boule",
       "desc": "Café, Rhum Raisins, Caramel, Meringue double crème, Vanille, Chocolat, Pistache, Fraise, Sorbet Poire Williams, Sorbet Abricot du Valais, Sorbet Citron, Sorbet Pomme Verte",
       "price": 4.2,
       "supplements": [
        {
         "label": "Supplément chantilly",
         "price": 2
        }
       ],
       "image": null,
       "id": "desserts-glaces--glace-ou-sorbet-la-boule",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-mets/",
     "note": "Nos glaces et sorbets sont de fabrication artisanale suisse, sans ajout de colorants ni additifs."
    }
   ],
   "group": "manger",
   "imageSmall": "images/cat-desserts-glaces-800.jpg",
   "imageFocus": "50% 50%"
  },
  {
   "id": "vins-verre",
   "title": "Vins au verre",
   "icon": "wine",
   "image": "images/cat-vins-verre.jpg",
   "imageAlt": "Deux verres de vin rosé sur une nappe à carreaux",
   "sections": [
    {
     "title": "Vins blancs",
     "items": [
      {
       "name": "Fendant 2023",
       "desc": "Albert Biollaz - Chamoson - Valais",
       "price": 5,
       "cont": "1 dl",
       "image": null,
       "id": "vins-verre--fendant-2023-1-dl",
       "verif": "vérifié"
      },
      {
       "name": "Johannisberg 2023",
       "desc": "Albert Biollaz - Chamoson - Valais",
       "price": 5,
       "cont": "1 dl",
       "image": null,
       "id": "vins-verre--johannisberg-2023-1-dl",
       "verif": "vérifié"
      },
      {
       "name": "Merlot blanc 2021",
       "desc": "Fratelli Corti - Balerna - Tessin",
       "price": 7,
       "cont": "1 dl",
       "image": null,
       "id": "vins-verre--merlot-blanc-2021-1-dl",
       "verif": "vérifié"
      },
      {
       "name": "Chardonnay Bio 2023",
       "desc": "Dom. 3 étoiles - Peissy - Genève",
       "price": 7,
       "cont": "1 dl",
       "image": null,
       "id": "vins-verre--chardonnay-bio-2023-1-dl",
       "verif": "vérifié"
      },
      {
       "name": "Pinot blanc Bio 2023",
       "desc": "Dom. 3 étoiles - Peissy - Genève",
       "price": 7,
       "cont": "1 dl",
       "image": null,
       "id": "vins-verre--pinot-blanc-bio-2023-1-dl",
       "verif": "vérifié"
      },
      {
       "name": "Heïda 2022",
       "desc": "Albert Biollaz - Chamoson - Valais",
       "price": 7,
       "cont": "1 dl",
       "image": null,
       "id": "vins-verre--heida-2022-1-dl",
       "verif": "vérifié"
      },
      {
       "name": "Petite Arvine Bio 2023",
       "desc": "Gérald Besse - Martigny - Valais",
       "price": 8,
       "cont": "1 dl",
       "image": null,
       "id": "vins-verre--petite-arvine-bio-2023-1-dl",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    },
    {
     "title": "Rosé",
     "items": [
      {
       "name": "Dôle Blanche 2023",
       "desc": "Albert Biollaz - Chamoson - Valais",
       "price": 5,
       "cont": "1 dl",
       "image": null,
       "id": "vins-verre--dole-blanche-2023-1-dl",
       "verif": "vérifié"
      },
      {
       "name": "Œil des roches 2020",
       "desc": "Grillette - Cressier - Neuchâtel",
       "price": 7,
       "cont": "1 dl",
       "review": "Millésime 2020 au verre, 2022 en bouteille (« Oeil des Roches 2022 »).",
       "image": null,
       "id": "vins-verre--il-des-roches-2020-1-dl",
       "verif": "à confirmer"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    },
    {
     "title": "Rouge",
     "items": [
      {
       "name": "Gamay 2023",
       "desc": "S. Dupraz - Soral - Genève",
       "price": 5,
       "cont": "1 dl",
       "image": null,
       "id": "vins-verre--gamay-2023-1-dl",
       "verif": "vérifié"
      },
      {
       "name": "Goron 2023",
       "desc": "Albert Biollaz - Chamoson - Valais",
       "price": 5,
       "cont": "1 dl",
       "image": null,
       "id": "vins-verre--goron-2023-1-dl",
       "verif": "vérifié"
      },
      {
       "name": "Dôle 2023",
       "desc": "Albert Biollaz - Chamoson - Valais",
       "price": 5,
       "cont": "1 dl",
       "image": null,
       "id": "vins-verre--dole-2023-1-dl",
       "verif": "vérifié"
      },
      {
       "name": "Gamaret 2023",
       "desc": "Dom. Perrières - Peissy - Genève",
       "price": 7,
       "cont": "1 dl",
       "image": null,
       "id": "vins-verre--gamaret-2023-1-dl",
       "verif": "vérifié"
      },
      {
       "name": "Humagne 2022",
       "desc": "Albert Biollaz - Chamoson - Valais",
       "price": 7,
       "cont": "1 dl",
       "image": null,
       "id": "vins-verre--humagne-2022-1-dl",
       "verif": "vérifié"
      },
      {
       "name": "Pinot noir Bio 2023",
       "desc": "Gérald Besse - Martigny - Valais",
       "price": 7,
       "cont": "1 dl",
       "image": null,
       "id": "vins-verre--pinot-noir-bio-2023-1-dl",
       "verif": "vérifié"
      },
      {
       "name": "Syrah 2022",
       "desc": "F. Zufferey - Chippis - Valais",
       "price": 8,
       "cont": "1 dl",
       "image": null,
       "id": "vins-verre--syrah-2022-1-dl",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    },
    {
     "title": "Champagne & Mousseux",
     "items": [
      {
       "name": "Gamaret muté - Demi-sec",
       "desc": "S. Gros - Dardagny - Suisse",
       "price": 9,
       "cont": "1 dl",
       "image": null,
       "id": "vins-verre--gamaret-mute-demi-sec-1-dl",
       "verif": "vérifié"
      },
      {
       "name": "Prosecco - Extra Brut",
       "desc": "Da C. - Chions - Italie",
       "price": 10,
       "cont": "1 dl",
       "image": null,
       "id": "vins-verre--prosecco-extra-brut-1-dl",
       "verif": "vérifié"
      },
      {
       "name": "Pommery Apanage",
       "desc": "Pommery - Reims - France",
       "price": 12,
       "cont": "1 dl",
       "image": null,
       "id": "vins-verre--pommery-apanage-1-dl",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    }
   ],
   "group": "boire",
   "imageSmall": "images/cat-vins-verre-800.jpg",
   "imageFocus": "50% 40%"
  },
  {
   "id": "vins-blancs",
   "title": "Vins blancs en bouteille",
   "icon": "bottle",
   "image": "images/cat-vins-blancs.jpg",
   "imageAlt": "Deux verres de vin blanc et raisins",
   "sections": [
    {
     "title": "Genève",
     "items": [
      {
       "name": "Chardonnay Bio 2023",
       "desc": "Dom. 3 étoiles - Peissy - 13%",
       "price": 46,
       "cont": "75 cl",
       "image": null,
       "id": "vins-blancs--chardonnay-bio-2023-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Pinot Blanc Bio 2023",
       "desc": "Dom. 3 étoiles - Peissy - 13%",
       "price": 47,
       "cont": "75 cl",
       "image": null,
       "id": "vins-blancs--pinot-blanc-bio-2023-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Viognier 2021",
       "desc": "S. Dupraz - Soral - 13.9%",
       "price": 49,
       "cont": "75 cl",
       "image": null,
       "id": "vins-blancs--viognier-2021-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Chasselas Barrique 2019",
       "desc": "Stéphane Gros - Dardagny - 12.5%",
       "price": 55,
       "cont": "75 cl",
       "image": null,
       "id": "vins-blancs--chasselas-barrique-2019-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Peissy blanc 2022",
       "desc": "J.-P. Pellegrin - Satigny - 13.8%",
       "price": 55,
       "cont": "75 cl",
       "image": null,
       "id": "vins-blancs--peissy-blanc-2022-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Nectar blanc 2019",
       "desc": "Stéphane Gros - Dardagny - 14%",
       "price": 55,
       "cont": "75 cl",
       "image": null,
       "id": "vins-blancs--nectar-blanc-2019-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Chardonnay Barrique 2019",
       "desc": "Stéphane Gros - Dardagny - 14%",
       "price": 60,
       "cont": "75 cl",
       "image": null,
       "id": "vins-blancs--chardonnay-barrique-2019-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Sauvignon 2022",
       "desc": "J.-P. Pellegrin - Satigny - 14%",
       "price": 60,
       "cont": "75 cl",
       "image": null,
       "id": "vins-blancs--sauvignon-2022-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Grand cour blanc 2022",
       "desc": "J.-P. Pellegrin - Satigny - 13.5%",
       "price": 68,
       "cont": "75 cl",
       "image": null,
       "id": "vins-blancs--grand-cour-blanc-2022-75-cl",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    },
    {
     "title": "Valais",
     "items": [
      {
       "name": "Fendant (Chasselas) 2022",
       "desc": "Albert Biollaz - Chamoson - 12.5%",
       "price": 43,
       "cont": "75 cl",
       "image": null,
       "id": "vins-blancs--fendant-chasselas-2022-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Johannisberg 2022",
       "desc": "Albert Biollaz - Chamoson - 13%",
       "price": 44,
       "cont": "75 cl",
       "image": null,
       "id": "vins-blancs--johannisberg-2022-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Heïda 2022",
       "desc": "Albert Biollaz - Chamoson - 13%",
       "price": 47,
       "cont": "75 cl",
       "image": null,
       "id": "vins-blancs--heida-2022-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Petite Arvine Bio 2023",
       "desc": "Gérald Besse - Martigny - 14.5%",
       "price": 55,
       "cont": "75 cl",
       "image": null,
       "id": "vins-blancs--petite-arvine-bio-2023-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Fendant (Chasselas) Bio 2022",
       "desc": "M.-T. Chappaz - Fully - 11.7%",
       "price": 58,
       "cont": "75 cl",
       "image": null,
       "id": "vins-blancs--fendant-chasselas-bio-2022-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Grain cinq Bio 2022",
       "desc": "M.-T. Chappaz - Fully - 14.3%",
       "price": 75,
       "cont": "75 cl",
       "image": null,
       "id": "vins-blancs--grain-cinq-bio-2022-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Petite Arvine Dousse Bio 2019",
       "desc": "M.-T. Chappaz - Fully - 12.1%",
       "price": 85,
       "cont": "75 cl",
       "image": null,
       "id": "vins-blancs--petite-arvine-dousse-bio-2019-75-cl",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    },
    {
     "title": "Canton de Vaud",
     "items": [
      {
       "name": "Pinot Gris 2023",
       "desc": "Dom. Colombe - La Côte - 13.5%",
       "price": 50,
       "cont": "75 cl",
       "image": null,
       "id": "vins-blancs--pinot-gris-2023-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Chasselas Bio Marchandes 2021",
       "desc": "Dom. Colombe - Féchy - 12%",
       "price": 56,
       "cont": "75 cl",
       "image": null,
       "id": "vins-blancs--chasselas-bio-marchandes-2021-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Chasselas La Braise 2021",
       "desc": "Les frères Dubois - Épesses - 12.3%",
       "price": 56,
       "cont": "75 cl",
       "image": null,
       "id": "vins-blancs--chasselas-la-braise-2021-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Curzilles Bio 2021",
       "desc": "Dom. Colombe - Féchy - 13%",
       "price": 56,
       "cont": "75 cl",
       "image": null,
       "id": "vins-blancs--curzilles-bio-2021-75-cl",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    },
    {
     "title": "Neuchâtel",
     "items": [
      {
       "name": "Chasselas les Chapelets 2020",
       "desc": "Grillette - Neuchâtel - 12.5%",
       "price": 54,
       "cont": "75 cl",
       "image": null,
       "id": "vins-blancs--chasselas-les-chapelets-2020-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Sauvignon Blanc 2022",
       "desc": "Grillette - Neuchâtel - 13%",
       "price": 60,
       "cont": "75 cl",
       "image": null,
       "id": "vins-blancs--sauvignon-blanc-2022-75-cl",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    },
    {
     "title": "Tessin",
     "items": [
      {
       "name": "Merlot blanc Sauro 2021",
       "desc": "Fratelli - Corti - Balerna - 12.5%",
       "price": 47,
       "cont": "75 cl",
       "image": null,
       "id": "vins-blancs--merlot-blanc-sauro-2021-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Stria bianca 2022",
       "desc": "Fratelli - Corti - Balerna - 13%",
       "price": 50,
       "cont": "75 cl",
       "image": null,
       "id": "vins-blancs--stria-bianca-2022-75-cl",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    },
    {
     "title": "France",
     "items": [
      {
       "name": "Sancerre 2021",
       "desc": "Les fondettes - Sancerre - 12,5%",
       "price": 58,
       "cont": "75 cl",
       "image": null,
       "id": "vins-blancs--sancerre-2021-75-cl",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    },
    {
     "title": "Italie",
     "items": [
      {
       "name": "Pinot Grigio 2021",
       "desc": "Ruffino - Toscane - 12.5%",
       "price": 52,
       "cont": "75 cl",
       "image": null,
       "id": "vins-blancs--pinot-grigio-2021-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Pecorino 2019",
       "desc": "Villa Angela - Piceno - 13%",
       "price": 52,
       "cont": "75 cl",
       "image": null,
       "id": "vins-blancs--pecorino-2019-75-cl",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    }
   ],
   "group": "boire",
   "imageSmall": "images/cat-vins-blancs-800.jpg",
   "imageFocus": "50% 45%"
  },
  {
   "id": "vins-rouges",
   "title": "Vins rouges en bouteille",
   "icon": "bottle",
   "image": "images/cat-vins-rouges.jpg",
   "imageAlt": "Deux verres de vin rouge et raisins",
   "sections": [
    {
     "title": "Genève",
     "items": [
      {
       "name": "Pinot Noir 2023",
       "desc": "Dom. Molards - Russin - 13.5%",
       "price": 43,
       "cont": "75 cl",
       "image": null,
       "id": "vins-rouges--pinot-noir-2023-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Gamaret 2023",
       "desc": "Dom. Perrières - Peissy - 13.9%",
       "price": 46,
       "cont": "75 cl",
       "image": null,
       "id": "vins-rouges--gamaret-2023-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Douce Noire 2018",
       "desc": "Abeilles d'Or - Chouilly - 14.6%",
       "price": 58,
       "cont": "75 cl",
       "image": null,
       "id": "vins-rouges--douce-noire-2018-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Gamaret Barrique 2022",
       "desc": "J.P. Pellegrin - Satigny - 13.5%",
       "price": 65,
       "cont": "75 cl",
       "image": null,
       "id": "vins-rouges--gamaret-barrique-2022-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Nectar de noir 2021",
       "desc": "Stéphane Gros - Dardagny - 13.5%",
       "price": 70,
       "cont": "75 cl",
       "image": null,
       "id": "vins-rouges--nectar-de-noir-2021-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Grand Cour Rouge 2021",
       "desc": "J.P. Pellegrin - Satigny - 14%",
       "price": 80,
       "cont": "75 cl",
       "image": null,
       "id": "vins-rouges--grand-cour-rouge-2021-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "P De Pinot Noir 2020",
       "desc": "J.P. Pellegrin - Satigny - 14%",
       "price": 89,
       "cont": "75 cl",
       "image": null,
       "id": "vins-rouges--p-de-pinot-noir-2020-75-cl",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    },
    {
     "title": "Valais",
     "items": [
      {
       "name": "Humagne 2022",
       "desc": "Albert Biollaz - Chamoson - 13%",
       "price": 46,
       "cont": "75 cl",
       "image": null,
       "id": "vins-rouges--humagne-2022-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Pinot noir Bio 2023",
       "desc": "Gérald Besse - Martigny - 13%",
       "price": 47,
       "cont": "75 cl",
       "image": null,
       "id": "vins-rouges--pinot-noir-bio-2023-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Réserve des reines 2021",
       "desc": "Albert Biollaz - Chamoson - 13.5%",
       "price": 47,
       "cont": "75 cl",
       "image": null,
       "id": "vins-rouges--reserve-des-reines-2021-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Syrah 2022",
       "desc": "Fréderic Zufferey - Chippis - 14.2%",
       "price": 49,
       "cont": "75 cl",
       "image": null,
       "id": "vins-rouges--syrah-2022-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Cornalin 2022",
       "desc": "Fréderic Zufferey - Chippis - 14.2%",
       "price": 53,
       "cont": "75 cl",
       "image": null,
       "id": "vins-rouges--cornalin-2022-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "La Petite Grange Bio 2021",
       "desc": "M.-T Chappaz - Fully - 13.6%",
       "price": 65,
       "cont": "75 cl",
       "image": null,
       "id": "vins-rouges--la-petite-grange-bio-2021-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Grain Mariage Bio 2020",
       "desc": "M.-T Chappaz - Fully - 12%",
       "price": 70,
       "cont": "75 cl",
       "image": null,
       "id": "vins-rouges--grain-mariage-bio-2020-75-cl",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    },
    {
     "title": "Canton de Vaud",
     "items": [
      {
       "name": "Gamay Gamaret Mélodine 2022",
       "desc": "Henri Cruchon - Echichens - 13.4%",
       "price": 50,
       "cont": "75 cl",
       "image": null,
       "id": "vins-rouges--gamay-gamaret-melodine-2022-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Polisson 2020",
       "desc": "Dom. Colombe - Féchy - 13.5%",
       "price": 55,
       "cont": "75 cl",
       "image": null,
       "id": "vins-rouges--polisson-2020-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Pinot noir Servagnin Bio 2020",
       "desc": "Henri Cruchon - Echichens - 14.8%",
       "price": 58,
       "cont": "75 cl",
       "image": null,
       "id": "vins-rouges--pinot-noir-servagnin-bio-2020-75-cl",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    },
    {
     "title": "Neuchâtel",
     "items": [
      {
       "name": "Divico 2019",
       "desc": "Grillette - Neuchâtel - 14%",
       "price": 58,
       "cont": "75 cl",
       "image": null,
       "id": "vins-rouges--divico-2019-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Pinot noir Graf Zeppelin 2019",
       "desc": "Grillette - Neuchâtel - 13.5%",
       "price": 72,
       "cont": "75 cl",
       "image": null,
       "id": "vins-rouges--pinot-noir-graf-zeppelin-2019-75-cl",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    },
    {
     "title": "Tessin",
     "items": [
      {
       "name": "Merlot Prà 2022",
       "desc": "Brivio vini - Mendrisio - 13%",
       "price": 45,
       "cont": "75 cl",
       "image": null,
       "id": "vins-rouges--merlot-pra-2022-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Rosso del brich 2019",
       "desc": "Fratelli Corti - Balerna - 13%",
       "price": 55,
       "cont": "75 cl",
       "image": null,
       "id": "vins-rouges--rosso-del-brich-2019-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Ferradou Primo 2019",
       "desc": "Cantina Cavaliere - Contone - 14.5%",
       "price": 72,
       "cont": "75 cl",
       "image": null,
       "id": "vins-rouges--ferradou-primo-2019-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Merlot Barrique Lenéo 2020",
       "desc": "Fratelli Corti - Balerna - 13%",
       "price": 78,
       "cont": "75 cl",
       "image": null,
       "id": "vins-rouges--merlot-barrique-leneo-2020-75-cl",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    },
    {
     "title": "France",
     "items": [
      {
       "name": "Bila-Haut 2020",
       "desc": "M. Chapoutier - Roussillon - 14%",
       "price": 55,
       "cont": "75 cl",
       "image": null,
       "id": "vins-rouges--bila-haut-2020-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Château Loumelat 2019",
       "desc": "Côtes-de-blaye - Bordeau - 13,5%",
       "price": 56,
       "cont": "75 cl",
       "image": null,
       "id": "vins-rouges--chateau-loumelat-2019-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Gigondas 2016",
       "desc": "Ch. du Trignon - Gigondas - 15%",
       "price": 62,
       "cont": "75 cl",
       "image": null,
       "id": "vins-rouges--gigondas-2016-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Vacqueras 2015",
       "desc": "Ch. du Trignon - Gigondas - 14.5%",
       "price": 60,
       "cont": "75 cl",
       "image": null,
       "id": "vins-rouges--vacqueras-2015-75-cl",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    },
    {
     "title": "Italie",
     "items": [
      {
       "name": "Chianti 2014",
       "desc": "Ruffino - Tosacane - 14%",
       "price": 55,
       "cont": "75 cl",
       "image": null,
       "id": "vins-rouges--chianti-2014-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Barbera d'Alba 2015",
       "desc": "Giacomo - Vico Piémont - 14%",
       "price": 60,
       "cont": "75 cl",
       "image": null,
       "id": "vins-rouges--barbera-d-alba-2015-75-cl",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    },
    {
     "title": "Argentine",
     "items": [
      {
       "name": "Syrah-Malbec 2021",
       "desc": "Bodega Calia - San Juan - 13.5%",
       "price": 52,
       "cont": "75 cl",
       "image": null,
       "id": "vins-rouges--syrah-malbec-2021-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Malbec Réserva 2020",
       "desc": "Finca Sophenia - Mendoza - 14,5%",
       "price": 55,
       "cont": "75 cl",
       "image": null,
       "id": "vins-rouges--malbec-reserva-2020-75-cl",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    }
   ],
   "group": "boire",
   "imageSmall": "images/cat-vins-rouges-800.jpg",
   "imageFocus": "50% 40%"
  },
  {
   "id": "roses-mousseux",
   "title": "Rosés, Mousseux & Champagne",
   "icon": "bubbles",
   "image": "images/cat-roses-mousseux.jpg",
   "imageAlt": "Deux flûtes de vin mousseux",
   "sections": [
    {
     "title": "Vins rosés de Suisse",
     "items": [
      {
       "name": "Réserve des reines 2022",
       "desc": "Albert Biollaz - Valais - 13%",
       "price": 45,
       "cont": "75 cl",
       "image": null,
       "id": "roses-mousseux--reserve-des-reines-2022-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Oeil des Roches 2022",
       "desc": "Grillette - Neuchâtel - 13.5%",
       "price": 50,
       "cont": "75 cl",
       "image": null,
       "id": "roses-mousseux--oeil-des-roches-2022-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Rosé Bio 2022",
       "desc": "M.-T. Chappaz - Valais - 12.9%",
       "price": 58,
       "cont": "75 cl",
       "image": null,
       "id": "roses-mousseux--rose-bio-2022-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Rosé de Gamay 2023",
       "desc": "J.-D. Ramu - Genève - 13%",
       "price": 28,
       "cont": "50 cl",
       "image": null,
       "id": "roses-mousseux--rose-de-gamay-2023-50-cl",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    },
    {
     "title": "Vins rosés (France)",
     "items": [
      {
       "name": "Magali 2023",
       "desc": "Fam. Combard - Provence - 13%",
       "price": 50,
       "cont": "75 cl",
       "image": null,
       "id": "roses-mousseux--magali-2023-75-cl",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    },
    {
     "title": "Mousseux",
     "items": [
      {
       "name": "Gamaret Muté",
       "desc": "Demi-s. Stéphane Gros - Genève - 12.5%",
       "price": 65,
       "cont": "75 cl",
       "image": null,
       "id": "roses-mousseux--gamaret-mute-75-cl",
       "verif": "vérifié"
      },
      {
       "name": "Prosecco",
       "desc": "Extra Brut Da C. - Chions - 11%",
       "price": 50,
       "cont": "75 cl",
       "image": null,
       "id": "roses-mousseux--prosecco-75-cl",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    },
    {
     "title": "Champagnes",
     "items": [
      {
       "name": "Pommery Apanage",
       "desc": "Pommery - Reims - 12% vol.",
       "price": 70,
       "cont": "75 cl",
       "image": null,
       "id": "roses-mousseux--pommery-apanage-75-cl",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    }
   ],
   "group": "boire",
   "imageSmall": "images/cat-roses-mousseux-800.jpg",
   "imageFocus": "50% 40%"
  },
  {
   "id": "aperitifs",
   "title": "Apéritifs",
   "icon": "cocktail",
   "image": "images/cat-aperitifs.jpg",
   "imageAlt": "Spritz et apéritif à l'orange sur glace",
   "sections": [
    {
     "title": "Whisky",
     "items": [
      {
       "name": "J & B",
       "desc": "40%",
       "price": 10,
       "cont": "4 cl",
       "image": null,
       "id": "aperitifs--j-b-4-cl",
       "verif": "vérifié"
      },
      {
       "name": "Johnnie Walker",
       "desc": "40%",
       "price": 10,
       "cont": "4 cl",
       "image": null,
       "id": "aperitifs--johnnie-walker-4-cl",
       "verif": "vérifié"
      },
      {
       "name": "Jack Daniel's",
       "desc": "40%",
       "price": 12,
       "cont": "4 cl",
       "image": null,
       "id": "aperitifs--jack-daniel-s-4-cl",
       "verif": "vérifié"
      },
      {
       "name": "JW Blue Label",
       "desc": "40%",
       "price": 20,
       "cont": "4 cl",
       "image": null,
       "id": "aperitifs--jw-blue-label-4-cl",
       "verif": "vérifié"
      },
      {
       "name": "Chivas Regal",
       "desc": "40%",
       "price": 15,
       "cont": "4 cl",
       "image": null,
       "id": "aperitifs--chivas-regal-4-cl",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    },
    {
     "title": "Anisés",
     "items": [
      {
       "name": "Pastis",
       "desc": "45%",
       "price": 7,
       "cont": "4 cl",
       "image": null,
       "id": "aperitifs--pastis-4-cl",
       "verif": "vérifié"
      },
      {
       "name": "Ricard",
       "desc": "45%",
       "price": 7,
       "cont": "4 cl",
       "image": null,
       "id": "aperitifs--ricard-4-cl",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    },
    {
     "title": "Divers",
     "items": [
      {
       "name": "Fernet Branca",
       "desc": "39%",
       "price": 7,
       "cont": "2.5 cl",
       "image": null,
       "id": "aperitifs--fernet-branca-2-5-cl",
       "verif": "vérifié"
      },
      {
       "name": "Appenzeller",
       "desc": "29%",
       "price": 7,
       "cont": "4 cl",
       "image": null,
       "id": "aperitifs--appenzeller-4-cl",
       "verif": "vérifié"
      },
      {
       "name": "Kir",
       "price": 6.5,
       "cont": "10 cl",
       "image": null,
       "id": "aperitifs--kir-10-cl",
       "verif": "vérifié"
      },
      {
       "name": "Le Cave: Muscat Proseco",
       "price": 10,
       "cont": "15 cl",
       "image": null,
       "id": "aperitifs--le-cave-muscat-proseco-15-cl",
       "verif": "vérifié"
      },
      {
       "name": "Martini blc/Rge",
       "desc": "15%",
       "price": 7,
       "cont": "4 cl",
       "review": "Listé deux fois sur la carte en ligne (même prix) : affiché une seule fois.",
       "image": null,
       "id": "aperitifs--martini-blc-rge-4-cl",
       "verif": "à confirmer"
      },
      {
       "name": "Spritz",
       "price": 12,
       "cont": "15 cl",
       "image": null,
       "id": "aperitifs--spritz-15-cl",
       "verif": "vérifié"
      },
      {
       "name": "Kir royal",
       "price": 14,
       "cont": "10 cl",
       "image": null,
       "id": "aperitifs--kir-royal-10-cl",
       "verif": "vérifié"
      },
      {
       "name": "Bacardi blanc",
       "desc": "37.5%",
       "price": 8,
       "cont": "4 cl",
       "image": null,
       "id": "aperitifs--bacardi-blanc-4-cl",
       "verif": "vérifié"
      },
      {
       "name": "3 rivières brun",
       "desc": "37.5%",
       "price": 11,
       "cont": "4 cl",
       "image": null,
       "id": "aperitifs--3-rivieres-brun-4-cl",
       "verif": "vérifié"
      },
      {
       "name": "Campari",
       "desc": "23%",
       "price": 7,
       "cont": "4 cl",
       "image": null,
       "id": "aperitifs--campari-4-cl",
       "verif": "vérifié"
      },
      {
       "name": "Cynar",
       "desc": "16.5%",
       "price": 7,
       "cont": "4 cl",
       "image": null,
       "id": "aperitifs--cynar-4-cl",
       "verif": "vérifié"
      },
      {
       "name": "Porto rouge",
       "desc": "19%",
       "price": 7,
       "cont": "4 cl",
       "image": null,
       "id": "aperitifs--porto-rouge-4-cl",
       "verif": "vérifié"
      },
      {
       "name": "Porto blanc",
       "desc": "19%",
       "price": 7,
       "cont": "4 cl",
       "image": null,
       "id": "aperitifs--porto-blanc-4-cl",
       "verif": "vérifié"
      },
      {
       "name": "Vodka",
       "desc": "37.5%",
       "price": 9,
       "cont": "4 cl",
       "image": null,
       "id": "aperitifs--vodka-4-cl",
       "verif": "vérifié"
      },
      {
       "name": "Suze",
       "desc": "20%",
       "price": 7,
       "cont": "4 cl",
       "image": null,
       "id": "aperitifs--suze-4-cl",
       "verif": "vérifié"
      },
      {
       "name": "Gin",
       "desc": "37.5%",
       "price": 9,
       "cont": "4 cl",
       "image": null,
       "id": "aperitifs--gin-4-cl",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    }
   ],
   "group": "boire",
   "imageSmall": "images/cat-aperitifs-800.jpg",
   "imageFocus": "45% 45%"
  },
  {
   "id": "digestifs",
   "title": "Digestifs",
   "icon": "shot",
   "image": "images/cat-digestifs.jpg",
   "imageAlt": "Verre d'eau-de-vie et bouteilles de spiritueux",
   "sections": [
    {
     "title": "Eaux de Vie",
     "items": [
      {
       "name": "Abricot / Poire",
       "desc": "37.5%",
       "price": 9,
       "cont": "2.5 cl",
       "image": null,
       "id": "digestifs--abricot-poire-2-5-cl",
       "verif": "vérifié"
      },
      {
       "name": "Moitié - Moitié",
       "desc": "35%",
       "price": 9,
       "cont": "2.5 cl",
       "image": null,
       "id": "digestifs--moitie-moitie-2-5-cl",
       "verif": "vérifié"
      },
      {
       "name": "Grappa",
       "desc": "37.5%",
       "price": 7,
       "cont": "2.5 cl",
       "image": null,
       "id": "digestifs--grappa-2-5-cl",
       "verif": "vérifié"
      },
      {
       "name": "Lie",
       "desc": "40%",
       "price": 7,
       "cont": "2.5 cl",
       "image": null,
       "id": "digestifs--lie-2-5-cl",
       "verif": "vérifié"
      },
      {
       "name": "Marc",
       "desc": "40%",
       "price": 7,
       "cont": "2.5 cl",
       "image": null,
       "id": "digestifs--marc-2-5-cl",
       "verif": "vérifié"
      },
      {
       "name": "Pruneau",
       "desc": "37.5%",
       "price": 8,
       "cont": "2.5 cl",
       "image": null,
       "id": "digestifs--pruneau-2-5-cl",
       "verif": "vérifié"
      },
      {
       "name": "Pomme",
       "desc": "37.5%",
       "price": 8,
       "cont": "2.5 cl",
       "image": null,
       "id": "digestifs--pomme-2-5-cl",
       "verif": "vérifié"
      },
      {
       "name": "Framboise",
       "desc": "37.5%",
       "price": 8,
       "cont": "2.5 cl",
       "image": null,
       "id": "digestifs--framboise-2-5-cl",
       "verif": "vérifié"
      },
      {
       "name": "Calvados",
       "desc": "40%",
       "price": 8,
       "cont": "2.5 cl",
       "image": null,
       "id": "digestifs--calvados-2-5-cl",
       "verif": "vérifié"
      },
      {
       "name": "Kirsch",
       "desc": "37.5%",
       "price": 7,
       "cont": "2.5 cl",
       "image": null,
       "id": "digestifs--kirsch-2-5-cl",
       "verif": "vérifié"
      },
      {
       "name": "Vielle prune",
       "desc": "40%",
       "price": 10,
       "cont": "2.5 cl",
       "image": null,
       "id": "digestifs--vielle-prune-2-5-cl",
       "verif": "vérifié"
      },
      {
       "name": "Vielle poire",
       "desc": "40%",
       "price": 10,
       "cont": "2.5 cl",
       "image": null,
       "id": "digestifs--vielle-poire-2-5-cl",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    },
    {
     "title": "Liqueurs",
     "items": [
      {
       "name": "Baileys",
       "desc": "17%",
       "price": 8,
       "cont": "2.5 cl",
       "image": null,
       "id": "digestifs--baileys-2-5-cl",
       "verif": "vérifié"
      },
      {
       "name": "Cointreau",
       "desc": "40%",
       "price": 8,
       "cont": "2.5 cl",
       "image": null,
       "id": "digestifs--cointreau-2-5-cl",
       "verif": "vérifié"
      },
      {
       "name": "Chartreuse",
       "desc": "55%",
       "price": 9,
       "cont": "2.5 cl",
       "image": null,
       "id": "digestifs--chartreuse-2-5-cl",
       "verif": "vérifié"
      },
      {
       "name": "Poire / Abricot",
       "desc": "30%",
       "price": 8.5,
       "cont": "2.5 cl",
       "image": null,
       "id": "digestifs--poire-abricot-2-5-cl",
       "verif": "vérifié"
      },
      {
       "name": "Limoncello",
       "desc": "30%",
       "price": 7,
       "cont": "2.5 cl",
       "image": null,
       "id": "digestifs--limoncello-2-5-cl",
       "verif": "vérifié"
      },
      {
       "name": "Génépi",
       "desc": "32%",
       "price": 9.5,
       "cont": "2.5 cl",
       "image": null,
       "id": "digestifs--genepi-2-5-cl",
       "verif": "vérifié"
      },
      {
       "name": "Amaretto",
       "desc": "28%",
       "price": 8.5,
       "cont": "2.5 cl",
       "image": null,
       "id": "digestifs--amaretto-2-5-cl",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    },
    {
     "title": "Cognacs",
     "items": [
      {
       "name": "Martel",
       "desc": "40%",
       "price": 9,
       "cont": "2.5 cl",
       "image": null,
       "id": "digestifs--martel-2-5-cl",
       "verif": "vérifié"
      },
      {
       "name": "Remy Martin",
       "desc": "40%",
       "price": 12,
       "cont": "2.5 cl",
       "image": null,
       "id": "digestifs--remy-martin-2-5-cl",
       "verif": "vérifié"
      },
      {
       "name": "Armagnac",
       "desc": "40%",
       "price": 10,
       "cont": "2.5 cl",
       "image": null,
       "id": "digestifs--armagnac-2-5-cl",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    }
   ],
   "group": "boire",
   "imageSmall": "images/cat-digestifs-800.jpg",
   "imageFocus": "45% 50%"
  },
  {
   "id": "bieres",
   "title": "Bières",
   "icon": "beer",
   "image": "images/cat-bieres.jpg",
   "imageAlt": "Bières pression blonde, ambrée et brune",
   "sections": [
    {
     "title": "Bières Pression",
     "items": [
      {
       "name": "Valaisanne Blonde",
       "variants": [
        {
         "label": "3 dl",
         "price": 5
        },
        {
         "label": "5 dl",
         "price": 7
        }
       ],
       "image": null,
       "id": "bieres--valaisanne-blonde",
       "verif": "vérifié"
      },
      {
       "name": "Valaisanne Pale Ale",
       "variants": [
        {
         "label": "3 dl",
         "price": 5.5
        },
        {
         "label": "5 dl",
         "price": 7.5
        }
       ],
       "image": null,
       "id": "bieres--valaisanne-pale-ale",
       "verif": "vérifié"
      },
      {
       "name": "Valaisanne White IPA",
       "variants": [
        {
         "label": "3 dl",
         "price": 6
        },
        {
         "label": "5 dl",
         "price": 8
        }
       ],
       "image": null,
       "id": "bieres--valaisanne-white-ipa",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    },
    {
     "title": "Bières en bouteille",
     "items": [
      {
       "name": "Valaisanne Blanche IPA",
       "price": 6,
       "cont": "3.3 dl",
       "image": null,
       "id": "bieres--valaisanne-blanche-ipa-3-3-dl",
       "verif": "vérifié"
      },
      {
       "name": "Feldschlösschen Brune",
       "price": 5,
       "cont": "3.3 dl",
       "image": null,
       "id": "bieres--feldschlosschen-brune-3-3-dl",
       "verif": "vérifié"
      },
      {
       "name": "Valaisanne sans alcool",
       "price": 6,
       "cont": "3.3 dl",
       "tags": [
        "af"
       ],
       "image": null,
       "id": "bieres--valaisanne-sans-alcool-3-3-dl",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    },
    {
     "title": "Bières Panachées",
     "items": [
      {
       "name": "Panaché",
       "variants": [
        {
         "label": "2 dl",
         "price": 4
        },
        {
         "label": "3 dl",
         "price": 5
        },
        {
         "label": "5 dl",
         "price": 7
        }
       ],
       "image": null,
       "id": "bieres--panache",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    }
   ],
   "group": "boire",
   "imageSmall": "images/cat-bieres-800.jpg",
   "imageFocus": "45% 50%"
  },
  {
   "id": "sans-alcool",
   "title": "Sans alcool",
   "icon": "glass",
   "image": "images/cat-sans-alcool.jpg",
   "imageAlt": "Jus de fruits, limonades et boissons fraîches",
   "sections": [
    {
     "title": "Eaux minérales",
     "items": [
      {
       "name": "Sembrancher Pétillante",
       "variants": [
        {
         "label": "3.75 dl",
         "price": 5
        },
        {
         "label": "7.5 dl",
         "price": 8.5
        }
       ],
       "image": null,
       "id": "sans-alcool--sembrancher-petillante",
       "verif": "vérifié"
      },
      {
       "name": "Sembrancher Naturelle",
       "variants": [
        {
         "label": "3.75 dl",
         "price": 5
        },
        {
         "label": "7.5 dl",
         "price": 8.5
        }
       ],
       "image": null,
       "id": "sans-alcool--sembrancher-naturelle",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    },
    {
     "title": "Minérales",
     "items": [
      {
       "name": "Cola",
       "variants": [
        {
         "label": "2 dl",
         "price": 4
        },
        {
         "label": "3 dl",
         "price": 5
        },
        {
         "label": "5 dl",
         "price": 6.5
        }
       ],
       "image": null,
       "id": "sans-alcool--cola",
       "verif": "vérifié"
      },
      {
       "name": "Cola Zero",
       "price": 5,
       "cont": "3.3 dl",
       "image": null,
       "id": "sans-alcool--cola-zero-3-3-dl",
       "verif": "vérifié"
      },
      {
       "name": "Limonade",
       "price": 5,
       "cont": "3 dl",
       "image": null,
       "id": "sans-alcool--limonade-3-dl",
       "verif": "vérifié"
      },
      {
       "name": "Thé froid",
       "variants": [
        {
         "label": "2d",
         "price": 4
        },
        {
         "label": "3d",
         "price": 5
        },
        {
         "label": "5 dl",
         "price": 6.5
        }
       ],
       "review": "Contenances « 2d » / « 3d » telles que publiées (2 dl / 3 dl ?).",
       "image": null,
       "id": "sans-alcool--the-froid",
       "verif": "à confirmer"
      },
      {
       "name": "Sinalco",
       "price": 5,
       "cont": "3.3 dl",
       "image": null,
       "id": "sans-alcool--sinalco-3-3-dl",
       "verif": "vérifié"
      },
      {
       "name": "Rivella rouge",
       "price": 5,
       "cont": "3.3 dl",
       "image": null,
       "id": "sans-alcool--rivella-rouge-3-3-dl",
       "verif": "vérifié"
      },
      {
       "name": "Jus de pomme Ramseier",
       "price": 5,
       "cont": "3.3 dl",
       "image": null,
       "id": "sans-alcool--jus-de-pomme-ramseier-3-3-dl",
       "verif": "vérifié"
      },
      {
       "name": "Jus de pomme de Genève",
       "variants": [
        {
         "label": "3 dl",
         "price": 4.5
        },
        {
         "label": "5 dl",
         "price": 6
        }
       ],
       "image": null,
       "id": "sans-alcool--jus-de-pomme-de-geneve",
       "verif": "vérifié"
      },
      {
       "name": "Alpinesse Tonic",
       "price": 5,
       "cont": "2 dl",
       "image": null,
       "id": "sans-alcool--alpinesse-tonic-2-dl",
       "verif": "vérifié"
      },
      {
       "name": "San Bitter",
       "price": 4.5,
       "cont": "1,2 dl",
       "image": null,
       "id": "sans-alcool--san-bitter-1-2-dl",
       "verif": "vérifié"
      },
      {
       "name": "Diabolo",
       "variants": [
        {
         "label": "2 dl",
         "price": 4
        },
        {
         "label": "3 dl",
         "price": 5
        }
       ],
       "image": null,
       "id": "sans-alcool--diabolo",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    },
    {
     "title": "Jus et nectars de fruits",
     "items": [
      {
       "name": "Nectar de poire du Valais",
       "price": 5,
       "cont": "2 dl",
       "image": null,
       "id": "sans-alcool--nectar-de-poire-du-valais-2-dl",
       "verif": "vérifié"
      },
      {
       "name": "Nectar d'abricot du Valais",
       "price": 5,
       "cont": "2 dl",
       "image": null,
       "id": "sans-alcool--nectar-d-abricot-du-valais-2-dl",
       "verif": "vérifié"
      },
      {
       "name": "Jus de tomate du Valais",
       "price": 5,
       "cont": "2 dl",
       "image": null,
       "id": "sans-alcool--jus-de-tomate-du-valais-2-dl",
       "verif": "vérifié"
      },
      {
       "name": "Nectar de fraise du Valais",
       "price": 5.5,
       "cont": "2 dl",
       "image": null,
       "id": "sans-alcool--nectar-de-fraise-du-valais-2-dl",
       "verif": "vérifié"
      },
      {
       "name": "Jus d'orange",
       "price": 4.5,
       "cont": "2 dl",
       "image": null,
       "id": "sans-alcool--jus-d-orange-2-dl",
       "verif": "vérifié"
      },
      {
       "name": "Oranges pressées",
       "price": 6,
       "cont": "2 dl",
       "image": null,
       "id": "sans-alcool--oranges-pressees-2-dl",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    },
    {
     "title": "Sirops",
     "items": [
      {
       "name": "Petit sirop",
       "variants": [
        {
         "label": "3 dl",
         "price": 3.5
        },
        {
         "label": "5 dl",
         "price": 4.5
        }
       ],
       "image": null,
       "id": "sans-alcool--petit-sirop",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    },
    {
     "title": "Laits",
     "items": [
      {
       "name": "Lait",
       "variants": [
        {
         "label": "2 dl",
         "price": 2.5
        },
        {
         "label": "3 dl",
         "price": 3.5
        },
        {
         "label": "5 dl",
         "price": 5.5
        }
       ],
       "image": null,
       "id": "sans-alcool--lait",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    }
   ],
   "group": "boire",
   "imageSmall": "images/cat-sans-alcool-800.jpg",
   "imageFocus": "50% 45%"
  },
  {
   "id": "boissons-chaudes",
   "title": "Boissons chaudes",
   "icon": "cup",
   "image": "images/cat-boissons-chaudes.jpg",
   "imageAlt": "Café et cappuccino à la crème",
   "sections": [
    {
     "title": "Cafés",
     "items": [
      {
       "name": "Café",
       "price": 4,
       "image": null,
       "id": "boissons-chaudes--cafe",
       "verif": "vérifié"
      },
      {
       "name": "Expresse",
       "price": 4,
       "image": null,
       "id": "boissons-chaudes--expresse",
       "verif": "vérifié"
      },
      {
       "name": "Ristrette",
       "price": 4,
       "image": null,
       "id": "boissons-chaudes--ristrette",
       "verif": "vérifié"
      },
      {
       "name": "Café sans caféine",
       "price": 4.5,
       "image": null,
       "id": "boissons-chaudes--cafe-sans-cafeine",
       "verif": "vérifié"
      },
      {
       "name": "Café luxe",
       "price": 5.5,
       "image": null,
       "id": "boissons-chaudes--cafe-luxe",
       "verif": "vérifié"
      },
      {
       "name": "Café Viennois",
       "price": 5,
       "image": null,
       "id": "boissons-chaudes--cafe-viennois",
       "verif": "vérifié"
      },
      {
       "name": "Cappuccino",
       "price": 5,
       "image": null,
       "id": "boissons-chaudes--cappuccino",
       "verif": "vérifié"
      },
      {
       "name": "Cappuccino décaféiné",
       "price": 5.5,
       "image": null,
       "id": "boissons-chaudes--cappuccino-decafeine",
       "verif": "vérifié"
      },
      {
       "name": "Renversé",
       "price": 4.5,
       "image": null,
       "id": "boissons-chaudes--renverse",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    },
    {
     "title": "Chocolats",
     "items": [
      {
       "name": "Chocolat",
       "price": 4,
       "image": null,
       "id": "boissons-chaudes--chocolat",
       "verif": "vérifié"
      },
      {
       "name": "Chocolat canette",
       "price": 5.5,
       "image": null,
       "id": "boissons-chaudes--chocolat-canette",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    },
    {
     "title": "Thés et Infusions Bio",
     "items": [
      {
       "name": "Thé Vert",
       "price": 4,
       "image": null,
       "id": "boissons-chaudes--the-vert",
       "verif": "vérifié"
      },
      {
       "name": "Thé Noir",
       "price": 4,
       "image": null,
       "id": "boissons-chaudes--the-noir",
       "verif": "vérifié"
      },
      {
       "name": "Verveine bio Suisse",
       "price": 4,
       "image": null,
       "id": "boissons-chaudes--verveine-bio-suisse",
       "verif": "vérifié"
      },
      {
       "name": "Camomille bio Suisse",
       "price": 4,
       "image": null,
       "id": "boissons-chaudes--camomille-bio-suisse",
       "verif": "vérifié"
      },
      {
       "name": "Menthe bio Suisse",
       "price": 4,
       "image": null,
       "id": "boissons-chaudes--menthe-bio-suisse",
       "verif": "vérifié"
      },
      {
       "name": "Sauge bio Suisse",
       "price": 4,
       "image": null,
       "id": "boissons-chaudes--sauge-bio-suisse",
       "verif": "vérifié"
      },
      {
       "name": "Thym bio Suisse",
       "price": 4,
       "image": null,
       "id": "boissons-chaudes--thym-bio-suisse",
       "verif": "vérifié"
      },
      {
       "name": "Mélisse bio Suisse",
       "price": 4,
       "image": null,
       "id": "boissons-chaudes--melisse-bio-suisse",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    },
    {
     "title": "Vin chaud et Grogs",
     "items": [
      {
       "name": "Vin chaud",
       "price": 6.5,
       "tags": [
        "alcool"
       ],
       "image": null,
       "id": "boissons-chaudes--vin-chaud",
       "verif": "vérifié"
      },
      {
       "name": "Grog au cognac",
       "price": 9.5,
       "tags": [
        "alcool"
       ],
       "image": null,
       "id": "boissons-chaudes--grog-au-cognac",
       "verif": "vérifié"
      },
      {
       "name": "Grog au rhum",
       "price": 6.5,
       "tags": [
        "alcool"
       ],
       "image": null,
       "id": "boissons-chaudes--grog-au-rhum",
       "verif": "vérifié"
      }
     ],
     "src": "https://cavevalaisanne.ch/carte-des-boissons/"
    }
   ],
   "group": "boire",
   "imageSmall": "images/cat-boissons-chaudes-800.jpg",
   "imageFocus": "50% 50%"
  }
 ]
};
