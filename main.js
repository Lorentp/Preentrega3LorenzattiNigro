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
    video: "Imagenes/Accion/deadSpaceVideo.webm",
    name: "Dead Space",
    categoria: { id: "action", nombre: "Acción" },
    price: 39.13,
  },
  {
    id: 2,
    img: "Imagenes/Accion/GTAVImg.jpg",
    video: "Imagenes/Accion/GTAVVideo.webm",
    name: "GTA V",
    categoria: { id: "action", nombre: "Acción" },
    price: 11.56,
  },
  {
    id: 3,
    img: "Imagenes/Accion/hellLetLooseImg.jpg",
    video: "Imagenes/Accion/hellLetLooseVideo.webm",
    name: "Hell Let Loose",
    categoria: { id: "action", nombre: "Acción" },
    price: 22.48,
  },
  {
    id: 4,
    img: "Imagenes/Accion/mortalKombatImg.jpg",
    video: "Imagenes/Accion/mortalKombatVideo.webm",
    name: "Mortal Kombat 11",
    categoria: { id: "action", nombre: "Acción" },
    price: 3.23,
  },
  {
    id: 5,
    img: "Imagenes/Accion/redDeadRedeptionImg.jpg",
    video: "Imagenes/Accion/redDeadRedemtionVideo.webm",
    name: "Red Dead Redemption II",
    categoria: { id: "action", nombre: "Acción" },
    price: 16.52,
  },
  {
    id: 6,
    img: "Imagenes/Accion/spiderManImg.jpg",
    video: "Imagenes/Accion/spiderManVideo.webm",
    name: "Spider Man Miles Morales",
    categoria: { id: "action", nombre: "Acción" },
    price: 26.42,
  },
  {
    id: 7,
    img: "Imagenes/Accion/superHotImg.jpg",
    video: "Imagenes/Accion/superHotVideo.webm",
    name: "Super Hot ",
    categoria: { id: "action", nombre: "Acción" },
    price: 2.5,
  },
  {
    id: 8,
    img: "Imagenes/Accion/tombRaiderImg.jpg",
    video: "Imagenes/Accion/tombRaiderVideo.webm",
    name: "Rise Of The Tomb Raider",
    categoria: { id: "action", nombre: "Acción" },
    price: 13.69,
  },

  /*ESTRATEGIA*/

  {
    id: 9,
    img: "Imagenes/Estrategia/AOEIIIMg.jpg",
    video: "ImagenesEstrategia/AOEIIVideo.webm",
    name: "Age Of Empires II DE",
    categoria: { id: "strategy", nombre: "Estrategia" },
    price: 7.82,
  },
  {
    id: 11,
    img: "Imagenes/Estrategia/AOEIIIIMg.jpg",
    video: "ImagenesEstrategia/AOEIIIVideo.webm",
    name: "Aghe Of Empires III DE",
    categoria: { id: "strategy", nombre: "Estrategia" },
    price: 5.15,
  },
  {
    id: 12,
    img: "Imagenes/Estrategia/AOEIVImg.jpg",
    video: "ImagenesEstrategia/AOEIVVideo.webm",
    name: "Age Of Empires IV",
    categoria: { id: "strategy", nombre: "Estrategia" },
    price: 22.91,
  },
  {
    id: 13,
    img: "Imagenes/Estrategia/frostpunkImg.jpg",
    video: "ImagenesEstrategia/frostPunkVideo.webm",
    name: "FrostPunk",
    categoria: { id: "strategy", nombre: "Estrategia" },
    price: 10.27,
  },
  {
    id: 14,
    img: "Imagenes/Estrategia/northgardImg.jpg",
    video: "ImagenesEstrategia/northgardVideo.webm",
    name: "Northgard",
    categoria: { id: "strategy", nombre: "Estrategia" },
    price: 5.65,
  },
  {
    id: 15,
    img: "Imagenes/Estrategia/totalWarEmpireImg.jpg",
    video: "ImagenesEstrategia/totalwarEmpireVideo.webm",
    name: "Total War Empire DE",
    categoria: { id: "strategy", nombre: "Estrategia" },
    price: 5.43,
  },
  {
    id: 16,
    img: "Imagenes/Estrategia/totalWarRomeRemastered Img.jpg",
    video: "ImagenesEstrategia/totalWarRomeRemasteredVideo.webm",
    name: "Total War Rome",
    categoria: { id: "strategy", nombre: "Estrategia" },
    price: 12.88,
  },
  {
    id: 17,
    img: "Imagenes/Estrategia/victoria3Img.jpg",
    video: "ImagenesEstrategia/VictoriaVIdeo.webm",
    name: "Victoria 3",
    categoria: { id: "strategy", nombre: "Estrategia" },
    price: 28.4,
  },

  /*INDIE*/

  {
    id: 18,
    img: "Imagenes/Indie/beatCopImg.jpg",
    video: "Imagenes/Indie/beatCopVideo.webm",
    name: "Beat Cop",
    categoria: { id: "indie", nombre: "Indie" },
    price: 1.1,
  },
  {
    id: 19,
    img: "Imagenes/Indie/graveyardKeeperImg.jpg",
    video: "Imagenes/Indie/graveyardKeeperVideo.webm",
    name: "Graveyard Keeper",
    categoria: { id: "indie", nombre: "Indie" },
    price: 2.71,
  },
  {
    id: 20,
    img: "Imagenes/Indie/hollowKnightImg.jpg",
    video: "Imagenes/Indie/hollowKnightVideo.webm",
    name: "Hollow Knight",
    categoria: { id: "indie", nombre: "Indie" },
    price: 9.31,
  },
  {
    id: 21,
    img: "Imagenes/Indie/moonlighterImg.jpg",
    video: "Imagenes/Indie/moonlighterVideo.webm",
    name: "Moonlighter",
    categoria: { id: "indie", nombre: "Indie" },
    price: 1.83,
  },
  {
    id: 22,
    img: "Imagenes/Indie/onlyUpImg.jpg",
    video: "Imagenes/Indie/onlyUpVideo.webm",
    name: "Only Up",
    categoria: { id: "indie", nombre: "Indie" },
    price: 10.46,
  },
  {
    id: 23,
    img: "Imagenes/Indie/stardewValleytImg.jpg",
    video: "Imagenes/Indie/stardewValleyVideo.webm",
    name: "Stardew Valley",
    categoria: { id: "indie", nombre: "Indie" },
    price: 15.08,
  },
  {
    id: 24,
    img: "Imagenes/Indie/travellerRestImg.jpg",
    video: "ImagenesI/ndie/travelerRestVideo.webm",
    name: "Traveller Rest",
    categoria: { id: "indie", nombre: "Indie" },
    price: 9.46,
  },
  {
    id: 25,
    img: "Imagenes/Indie/valheimImg.jpg",
    video: "Imagenes/Indie/valheimVideo.webm",
    name: "Valheim",
    categoria: { id: "indie", nombre: "Indie" },
    price: 18.94,
  },

  /*RPG*/

  {
    id: 26,
    img: "Imagenes/RPG/assasinsCreedOdysseyimg.jpg",
    video: "Imagenes/RPG/assasinCreedOdisseyVideo.webm",
    name: "Assasin's Creed Odyssey",
    categoria: { id: "rpg", nombre: "RPG" },
    price: 35.63,
  },
  {
    id: 27,
    img: "Imagenes/RPG/dregdeImg.jpg",
    video: "Imagenes/RPG/dredgeVideo.webm",
    name: "Dredge",
    categoria: { id: "rpg", nombre: "RPG" },
    price: 19.38,
  },
  {
    id: 28,
    img: "Imagenes/RPG/farCryPrimalImg.jpg",
    video: "Imagenes/RPG/farCryPrimalVideo.webm",
    name: "Far Cry Primal",
    categoria: { id: "rpg", nombre: "RPG" },
    price: 7.49,
  },
  {
    id: 29,
    img: "Imagenes/RPG/godOfWarImg.jpg",
    video: "Imagenes/RPG/godOfWarVideo.webm",
    name: "God Of War",
    categoria: { id: "rpg", nombre: "RPG" },
    price: 21.47,
  },
  {
    id: 30,
    img: "Imagenes/RPG/greedfallImg.jpg",
    video: "Imagenes/RPG/greedfallVideo.webm",
    name: "Greedfall",
    categoria: { id: "rpg", nombre: "RPG" },
    price: 4.13,
  },
  {
    id: 31,
    img: "Imagenes/RPG/hogwartsLegacyImg.jpg",
    video: "Imagenes/RPG/hogwartsLegacyVideo.webm",
    name: "Hogwarts Legacy",
    categoria: { id: "rpg", nombre: "RPG" },
    price: 60.59,
  },
  {
    id: 32,
    img: "Imagenes/RPG/mounAndBladeIIImg.jpg",
    video: "Imagenes/RPG/MountAndBladeIIVideo.webm",
    name: "Mount and Blade II",
    categoria: { id: "rpg", nombre: "RPG" },
    price: 24.58,
  },
  {
    id: 33,
    img: "Imagenes/RPG/wildWestImg.jpg",
    video: "Imagenes/RPG/wildWestVideo.webm",
    name: "Wild West",
    categoria: { id: "rpg", nombre: "RPG" },
    price: 15.41,
  },

  /*SIMULADOR*/

  {
    id: 34,
    img: "Imagenes/Simulador/builderSimulatorImg.jpg",
    video: "Imagenes/Simulador/builderSimulatorVideo.webm",
    name: "Builder Simulator",
    categoria: { id: "simulator", nombre: "Simulador" },
    price: 1.64,
  },
  {
    id: 35,
    img: "Imagenes/Simulador/citiesSkylinesImg.jpg",
    video: "Imagenes/Simulador/citiesSkylinesVideo.webm",
    name: "Cities Skylines",
    categoria: { id: "simulator", nombre: "Simulador" },
    price: 41.19,
  },
  {
    id: 36,
    img: "Imagenes/Simulador/farmingSimulator22Img.jpg",
    video: "Imagenes/Simulador/farmingSimulator22Video.webm",
    name: "Farming Simulator 2022",
    categoria: { id: "simulator", nombre: "Simulador" },
    price: 23.37,
  },
  {
    id: 37,
    img: "Imagenes/Simulador/fifa23Img.jpg",
    video: "Imagenes/Simulador/fifa23Video.webm",
    name: "Fifa 2023",
    categoria: { id: "simulator", nombre: "Simulador" },
    price: 24.24,
  },
  {
    id: 38,
    img: "Imagenes/Simulador/goingMedievalImg.jpg",
    video: "Imagenes/Simulador/goingMedievalVideo.webm",
    name: "Going Medieval",
    categoria: { id: "simulator", nombre: "Simulador" },
    price: 7.78,
  },
  {
    id: 39,
    img: "Imagenes/Simulador/jurassicWorldEvolutionImg.jpg",
    video: "Imagenes/Simulador/jurassicWorldEvolutionVideo.webm",
    name: "Jurassic World Evolution 2",
    categoria: { id: "simulator", nombre: "Simulador" },
    price: 13.17,
  },
  {
    id: 40,
    img: "Imagenes/Simulador/planetZooImg.jpg",
    video: "Imagenes/Simulador/planetZooVideo.webm",
    name: "Planet Zoo",
    categoria: { id: "simulator", nombre: "Simulador" },
    price: 9.07,
  },
  {
    id: 41,
    img: "Imagenes/Simulador/prisonArchitectImg.jpg",
    video: "Imagenes/Simulador/prisonArchitectVideo.webm",
    name: "Prison Architech",
    categoria: { id: "simulator", nombre: "Simulador" },
    price: 1.76,
  },

  /*SURVIVAL*/

  {
    id: 42,
    img: "Imagenes/Survival/7daystodieImg.jpg",
    video: "Imagenes/Survival/7daystodieVideo.webm",
    name: "7 Days To Die",
    categoria: { id: "survival", nombre: "Survival" },
    price: 3.92,
  },
  {
    id: 43,
    img: "Imagenes/Survival/greenHellimg.jpg",
    video: "Imagenes/Survival/greenHellVideo.webm",
    name: "Green Hell",
    categoria: { id: "survival", nombre: "Survival" },
    price: 9.97,
  },
  {
    id: 44,
    img: "Imagenes/Survival/minecraftimg.jpg",
    video: "Imagenes/Survival/minecraftVideo.webm",
    name: "Minecraft",
    categoria: { id: "survival", nombre: "Survival" },
    price: 25.33,
  },
  {
    id: 45,
    img: "Imagenes/Survival/raftImg.jpg",
    video: "Imagenes/Survival/raftVideo.webm",
    name: "Raft",
    categoria: { id: "survival", nombre: "Survival" },
    price: 9.01,
  },
  {
    id: 46,
    img: "Imagenes/Survival/residentEvilVillageImg.jpg",
    video: "Imagenes/Survival/residentEvilVillageVideo.webm",
    name: "Resident Evil Village",
    categoria: { id: "survival", nombre: "Survival" },
    price: 13.44,
  },
  {
    id: 47,
    img: "Imagenes/Survival/sonsOfTheForestImg.jpg",
    video: "Imagenes/Survival/sonsOfTheForestVideo.webm",
    name: "Sons Of The Forest",
    categoria: { id: "survival", nombre: "Survival" },
    price: 50.99,
  },
  {
    id: 48,
    img: "Imagenes/Survival/terrariaImg.jpg",
    video: "Imagenes/Survival/terrariaImg.jpg",
    name: "Terraria",
    categoria: { id: "survival", nombre: "Survival" },
    price: 7.57,
  },
  {
    id: 49,
    img: "Imagenes/Survival/theForestImg.jpg",
    video: "Imagenes/Survival/theForestVideo.webm",
    name: "The Forest",
    categoria: { id: "survival", nombre: "Survival" },
    price: 6.56,
  },
];
