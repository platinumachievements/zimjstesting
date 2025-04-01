// ZIM Card Samples Module
// Contains sample card data and default card configuration

import { ZIM_CARD_CONFIG } from "./zim-card-config.js";

export const ZIM_CARD_SAMPLE_DATA = [
    {
        titleText: "God of War",
        descriptionText: "A father and son's epic journey through the nine realms.",
        color: orange,
        design: "Classic"
    },
    {
        titleText: "The Last of Us",
        descriptionText: "A post-apocalyptic tale of survival and human connection.",
        color: green,
        design: "Modern"
    },
    {
        titleText: "Horizon Zero Dawn",
        descriptionText: "Explore a world where nature has reclaimed the ruins of an advanced civilization.",
        color: blue,
        design: "Classic"
    },
    {
        titleText: "Bloodborne",
        descriptionText: "A gothic horror action RPG in a cursed city.",
        color: dark,
        design: "Modern"
    },
    {
        titleText: "Spider-Man",
        descriptionText: "Swing through New York as the iconic web-slinger.",
        color: red,
        design: "Classic"
    },
    {
        titleText: "Ghost of Tsushima",
        descriptionText: "A samurai's quest to protect his homeland from invasion.",
        color: brown,
        design: "Modern"
    },
    {
        titleText: "Ratchet & Clank",
        descriptionText: "A colorful adventure across the galaxy with dynamic duo.",
        color: light,
        design: "Classic"
    },
    {
        titleText: "Death Stranding",
        descriptionText: "A unique journey through a fractured America.",
        color: blue,
        design: "Modern"
    },
    {
        titleText: "Demon's Souls",
        descriptionText: "The original challenging action RPG that started it all.",
        color: dark,
        design: "Classic"
    },
    {
        titleText: "Returnal",
        descriptionText: "A roguelike adventure through an alien world.",
        color: purple,
        design: "Modern"
    }
];

export const ZIM_CARD_DEFAULT_CONFIG = {
    width: ZIM_CARD_CONFIG.DEFAULT.WIDTH,
    height: ZIM_CARD_CONFIG.DEFAULT.HEIGHT,
    titleText: ZIM_CARD_CONFIG.DEFAULT.TITLE_TEXT,
    descriptionText: ZIM_CARD_CONFIG.DEFAULT.DESCRIPTION_TEXT,
    design: ZIM_CARD_CONFIG.DEFAULT.DESIGN,
    color: ZIM_CARD_CONFIG.DEFAULT.COLOR
};