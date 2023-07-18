/*HTML Conection*/

const productContainer = document.querySelector(".container#container");
const buttonsCategories = document.querySelectorAll(".products-category");
const inputSearch = document.querySelector("#inputSearch");
let buttonAdd = document.querySelectorAll(".button-add");
const cartNumber = document.querySelector("#number");

let shoppingCart;
let shoppingCartLS = localStorage.getItem("cart");

if (shoppingCartLS) {
  shoppingCart = JSON.parse(shoppingCartLS);
} else {
  shoppingCart = [];
}

/* Products */

const products = [
  /*ACCION*/

  {
    id: 1,
    img: "Imagenes/Accion/deadSpaceImg.jpg",
    name: "Dead Space",
    categoria: { id: "action", nombre: "Acción" },
    price: 39.13,
  },
  {
    id: 2,
    img: "Imagenes/Accion/GTAVImg.jpg",
    name: "GTA V",
    categoria: { id: "action", nombre: "Acción" },
    price: 11.56,
  },
  {
    id: 3,
    img: "Imagenes/Accion/hellLetLooseImg.jpg",
    name: "Hell Let Loose",
    categoria: { id: "action", nombre: "Acción" },
    price: 22.48,
  },
  {
    id: 4,
    img: "Imagenes/Accion/mortalKombatImg.jpg",
    name: "Mortal Kombat 11",
    categoria: { id: "action", nombre: "Acción" },
    price: 3.23,
  },
  {
    id: 5,
    img: "Imagenes/Accion/redDeadRedeptionImg.jpg",
    name: "Red Dead Redemption II",
    categoria: { id: "action", nombre: "Acción" },
    price: 16.52,
  },
  {
    id: 6,
    img: "Imagenes/Accion/spiderManImg.jpg",
    name: "Spider Man Miles Morales",
    categoria: { id: "action", nombre: "Acción" },
    price: 26.42,
  },
  {
    id: 7,
    img: "Imagenes/Accion/superHotImg.jpg",
    name: "Super Hot ",
    categoria: { id: "action", nombre: "Acción" },
    price: 2.5,
  },
  {
    id: 8,
    img: "Imagenes/Accion/tombRaiderImg.jpg",
    name: "Rise Of The Tomb Raider",
    categoria: { id: "action", nombre: "Acción" },
    price: 13.69,
  },

  /*ESTRATEGIA*/

  {
    id: 9,
    img: "Imagenes/Estrategia/AOEIImg.jpg",
    name: "Age Of Empires II DE",
    categoria: { id: "strategy", nombre: "Estrategia" },
    price: 7.82,
  },
  {
    id: 11,
    img: "Imagenes/Estrategia/AOEIIIMg.jpg",
    name: "Age Of Empires III DE",
    categoria: { id: "strategy", nombre: "Estrategia" },
    price: 5.15,
  },
  {
    id: 12,
    img: "Imagenes/Estrategia/AOEIVImg.jpg",
    name: "Age Of Empires IV",
    categoria: { id: "strategy", nombre: "Estrategia" },
    price: 22.91,
  },
  {
    id: 13,
    img: "Imagenes/Estrategia/frostpunkImg.jpg",
    name: "FrostPunk",
    categoria: { id: "strategy", nombre: "Estrategia" },
    price: 10.27,
  },
  {
    id: 14,
    img: "Imagenes/Estrategia/northgardImg.jpg",
    name: "Northgard",
    categoria: { id: "strategy", nombre: "Estrategia" },
    price: 5.65,
  },
  {
    id: 15,
    img: "Imagenes/Estrategia/totalWarEmpireImg.jpg",
    name: "Total War Empire DE",
    categoria: { id: "strategy", nombre: "Estrategia" },
    price: 5.43,
  },
  {
    id: 16,
    img: "Imagenes/Estrategia/totalWarRomeRemastered Img.jpg",
    name: "Total War Rome",
    categoria: { id: "strategy", nombre: "Estrategia" },
    price: 12.88,
  },
  {
    id: 17,
    img: "Imagenes/Estrategia/victoria3Img.jpg",
    name: "Victoria 3",
    categoria: { id: "strategy", nombre: "Estrategia" },
    price: 28.4,
  },

  /*INDIE*/

  {
    id: 18,
    img: "Imagenes/Indie/beatCopImg.jpg",
    name: "Beat Cop",
    categoria: { id: "indie", nombre: "Indie" },
    price: 1.1,
  },
  {
    id: 19,
    img: "Imagenes/Indie/graveyardKeeperImg.jpg",
    name: "Graveyard Keeper",
    categoria: { id: "indie", nombre: "Indie" },
    price: 2.71,
  },
  {
    id: 20,
    img: "Imagenes/Indie/hollowKnightImg.jpg",
    name: "Hollow Knight",
    categoria: { id: "indie", nombre: "Indie" },
    price: 9.31,
  },
  {
    id: 21,
    img: "Imagenes/Indie/moonlighterImg.jpg",
    name: "Moonlighter",
    categoria: { id: "indie", nombre: "Indie" },
    price: 1.83,
  },
  {
    id: 22,
    img: "Imagenes/Indie/onlyUpImg.jpg",
    name: "Only Up",
    categoria: { id: "indie", nombre: "Indie" },
    price: 10.46,
  },
  {
    id: 23,
    img: "Imagenes/Indie/stardewValleytImg.jpg",
    name: "Stardew Valley",
    categoria: { id: "indie", nombre: "Indie" },
    price: 15.08,
  },
  {
    id: 24,
    img: "Imagenes/Indie/travellerRestImg.jpg",
    name: "Traveller Rest",
    categoria: { id: "indie", nombre: "Indie" },
    price: 9.46,
  },
  {
    id: 25,
    img: "Imagenes/Indie/valheimImg.jpg",
    name: "Valheim",
    categoria: { id: "indie", nombre: "Indie" },
    price: 18.94,
  },

  /*RPG*/

  {
    id: 26,
    img: "Imagenes/RPG/assasinsCreedOdysseyimg.jpg",
    name: "Assasin's Creed Odyssey",
    categoria: { id: "rpg", nombre: "RPG" },
    price: 35.63,
  },
  {
    id: 27,
    img: "Imagenes/RPG/dregdeImg.jpg",
    name: "Dredge",
    categoria: { id: "rpg", nombre: "RPG" },
    price: 19.38,
  },
  {
    id: 28,
    img: "Imagenes/RPG/farCryPrimalImg.jpg",
    name: "Far Cry Primal",
    categoria: { id: "rpg", nombre: "RPG" },
    price: 7.49,
  },
  {
    id: 29,
    img: "Imagenes/RPG/godOfWarImg.jpg",
    name: "God Of War",
    categoria: { id: "rpg", nombre: "RPG" },
    price: 21.47,
  },
  {
    id: 30,
    img: "Imagenes/RPG/greedfallImg.jpg",
    name: "Greedfall",
    categoria: { id: "rpg", nombre: "RPG" },
    price: 4.13,
  },
  {
    id: 31,
    img: "Imagenes/RPG/hogwartsLegacyImg.jpg",
    name: "Hogwarts Legacy",
    categoria: { id: "rpg", nombre: "RPG" },
    price: 60.59,
  },
  {
    id: 32,
    img: "Imagenes/RPG/mounAndBladeIIImg.jpg",
    name: "Mount and Blade II",
    categoria: { id: "rpg", nombre: "RPG" },
    price: 24.58,
  },
  {
    id: 33,
    img: "Imagenes/RPG/wildWestImg.jpg",
    name: "Wild West",
    categoria: { id: "rpg", nombre: "RPG" },
    price: 15.41,
  },

  /*SIMULADOR*/

  {
    id: 34,
    img: "Imagenes/Simulador/builderSimulatorImg.jpg",
    name: "Builder Simulator",
    categoria: { id: "simulator", nombre: "Simulador" },
    price: 1.64,
  },
  {
    id: 35,
    img: "Imagenes/Simulador/citiesSkylinesImg.jpg",
    name: "Cities Skylines",
    categoria: { id: "simulator", nombre: "Simulador" },
    price: 41.19,
  },
  {
    id: 36,
    img: "Imagenes/Simulador/farmingSimulator22Img.jpg",
    name: "Farming Simulator 2022",
    categoria: { id: "simulator", nombre: "Simulador" },
    price: 23.37,
  },
  {
    id: 37,
    img: "Imagenes/Simulador/fifa23Img.jpg",
    name: "Fifa 2023",
    categoria: { id: "simulator", nombre: "Simulador" },
    price: 24.24,
  },
  {
    id: 38,
    img: "Imagenes/Simulador/goingMedievalImg.jpg",
    name: "Going Medieval",
    categoria: { id: "simulator", nombre: "Simulador" },
    price: 7.78,
  },
  {
    id: 39,
    img: "Imagenes/Simulador/jurassicWorldEvolutionImg.jpg",
    name: "Jurassic World Evolution 2",
    categoria: { id: "simulator", nombre: "Simulador" },
    price: 13.17,
  },
  {
    id: 40,
    img: "Imagenes/Simulador/planetZooImg.jpg",
    name: "Planet Zoo",
    categoria: { id: "simulator", nombre: "Simulador" },
    price: 9.07,
  },
  {
    id: 41,
    img: "Imagenes/Simulador/prisonArchitectImg.jpg",
    name: "Prison Architech",
    categoria: { id: "simulator", nombre: "Simulador" },
    price: 1.76,
  },

  /*SURVIVAL*/

  {
    id: 42,
    img: "Imagenes/Survival/7daystodieImg.jpg",
    name: "7 Days To Die",
    categoria: { id: "survival", nombre: "Survival" },
    price: 3.92,
  },
  {
    id: 43,
    img: "Imagenes/Survival/greenHellimg.jpg",
    name: "Green Hell",
    categoria: { id: "survival", nombre: "Survival" },
    price: 9.97,
  },
  {
    id: 44,
    img: "Imagenes/Survival/minecraftimg.jpg",
    name: "Minecraft",
    categoria: { id: "survival", nombre: "Survival" },
    price: 25.33,
  },
  {
    id: 45,
    img: "Imagenes/Survival/raftImg.jpg",
    name: "Raft",
    categoria: { id: "survival", nombre: "Survival" },
    price: 9.01,
  },
  {
    id: 46,
    img: "Imagenes/Survival/residentEvilVillageImg.jpg",
    name: "Resident Evil Village",
    categoria: { id: "survival", nombre: "Survival" },
    price: 13.44,
  },
  {
    id: 47,
    img: "Imagenes/Survival/sonsOfTheForestImg.jpg",
    name: "Sons Of The Forest",
    categoria: { id: "survival", nombre: "Survival" },
    price: 50.99,
  },
  {
    id: 48,
    img: "Imagenes/Survival/terrariaImg.jpg",
    name: "Terraria",
    categoria: { id: "survival", nombre: "Survival" },
    price: 7.57,
  },
  {
    id: 49,
    img: "Imagenes/Survival/theForestImg.jpg",
    name: "The Forest",
    categoria: { id: "survival", nombre: "Survival" },
    price: 6.56,
  },
];
