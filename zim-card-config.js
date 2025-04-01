// ZIM Card Configuration Module
// Central configuration for all card-related constants and dimensions

const DIMENSIONS = {
    WIDTH: 375,  // Half of original 750
    HEIGHT: 525  // Half of original 1050
};

export const ZIM_CARD_CONFIG = {
    // Card dimensions
    DIMENSIONS,
    
    // Default card settings
    DEFAULT: {
        WIDTH: DIMENSIONS.WIDTH,
        HEIGHT: DIMENSIONS.HEIGHT,
        TITLE_TEXT: "Edit Me!",
        DESCRIPTION_TEXT: "This is a sample card for editing. Try changing the design and colors!",
        DESIGN: "Classic",
        COLOR: orange
    }
}; 