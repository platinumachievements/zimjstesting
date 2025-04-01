// ZIM Card Component Module
// Core component for creating interactive cards in ZIM

import { ZIM_CARD_DESIGNS, ZIM_CARD_ALLOWED_COLORS } from "./zim-card-styles.js";
import { ZIM_CARD_CONFIG } from "./zim-card-config.js";

export class ZIMCard extends Container {
    constructor(params) {
        const { 
            width = ZIM_CARD_CONFIG.DIMENSIONS.WIDTH,
            height = ZIM_CARD_CONFIG.DIMENSIONS.HEIGHT,
            color = orange,
            titleText = "Card Title!", 
            descriptionText = "Card Description", 
            design = "Classic"
        } = params || {};

        super(width, height);
        this.color = ZIM_CARD_ALLOWED_COLORS.includes(color) ? color : orange;
        this.currentDesign = design;

        this.titleText = titleText;
        this.descriptionText = descriptionText;
        this.spacing = width * .1 / 2;

        // Apply the design first
        this.applyDesign(design);
    }

    cleanup() {
        // Remove all child elements
        while (this.numChildren > 0) {
            this.removeChildAt(0);
        }
        
        // Reset component properties
        this.titleLabel = null;
        this.descriptionLabel = null;
        this.backgroundLayer = null;
        this.shadowLayer = null;
        this.contentWindow = null;
        this.descriptionContainer = null;
        this.contentContainer = null;
    }

    applyDesign(design) {
        this.cleanup();
        if (ZIM_CARD_DESIGNS[design.toUpperCase()]) {
            ZIM_CARD_DESIGNS[design.toUpperCase()].build(this);
        } else {
            console.log(`Unknown design: ${design}. Using Classic.`);
            ZIM_CARD_DESIGNS.CLASSIC.build(this);
        }
    }

    updateCard(data) {
        // Store current design and color
        const currentDesign = this.currentDesign;
        const currentColor = this.color;

        // Update text content
        this.titleText = data.titleText;
        this.descriptionText = data.descriptionText;

        // Clean up and reapply the current design
        this.cleanup();
        this.applyDesign(currentDesign);

        // Restore the current color
        this.color = currentColor;
        if (this.backgroundLayer) {
            this.backgroundLayer.color = currentColor;
        }
        if (this.titleLabel && this.titleLabel.parent !== this.contentWindow) {
            this.titleLabel.backgroundColor = currentColor;
        }
        
        S.update();
    }
} 