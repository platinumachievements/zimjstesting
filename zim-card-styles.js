// ZIM Card Styles Module
// Contains all visual style definitions and design templates for ZIM cards

export const ZIM_CARD_DESIGNS = {
    CLASSIC: {
        name: "Classic",
        style: {
            borderWidth: 2,
            borderColor: dark,
            corner: 20
        },
        build: function(zimCard) {
            Style.remember();
            STYLE = this.style;

            zimCard.shadowLayer = new Rectangle({
                width: zimCard.width,
                height: zimCard.height,
                borderWidth: 0
            })
                .addTo(zimCard)
                .sha(black.toAlpha(.3), 5, 5, 2);

            zimCard.backgroundLayer = new Rectangle(zimCard.width, zimCard.height, zimCard.color)
                .addTo(zimCard)
                .cur();
            
            zimCard.backgroundLayer.on("mousedown", () => {
                zimCard.drag({currentTarget: true});
                zimCard.shadowLayer.sha(black.toAlpha(.2), 8, 8, 2);
            });
            
            zimCard.backgroundLayer.on("pressup", () => {
                zimCard.noDrag();
                zimCard.backgroundLayer.cur();
                zimCard.shadowLayer.sha(black.toAlpha(.2), 5, 5, 2);
                S.update();
            });

            zimCard.contentWindow = new Rectangle(
                zimCard.width * .9,
                zimCard.height * .7,
                white,
                null,
                0
            )
                .alp(.8)
                .pos(0, zimCard.spacing, CENTER, TOP, zimCard);

            zimCard.descriptionContainer = new Rectangle(
                zimCard.width * .9,
                zimCard.height - zimCard.contentWindow.height - zimCard.spacing * 3,
                white,
                null,
                0
            )
                .alp(.8)
                .pos(0, zimCard.spacing, CENTER, BOTTOM, zimCard)
                .noMouse();

            Style.recall();

            zimCard.descriptionLabel = new Label({
                text: zimCard.descriptionText,
                align: CENTER,
                valign: CENTER,
                labelWidth: zimCard.descriptionContainer.width - 25,
                labelHeight: zimCard.descriptionContainer.height - 25
            }).center(zimCard.descriptionContainer);

            zimCard.contentContainer = new Container(
                zimCard.contentWindow.width,
                zimCard.contentWindow.height
            )
                .loc(zimCard.contentWindow, null, zimCard)
                .setMask(zimCard.contentWindow);

            // Add the image to the content container
            new Pic("test-asset")
                .sca(2)
                .center(zimCard.contentContainer)
                

            zimCard.titleLabel = new Label({
                text: zimCard.titleText,
                backgroundColor: red,
                color: white,
                paddingH: 20,
                corner: [0, 0, 20, 0],
                align: RIGHT,
                valign: CENTER,
                labelWidth: zimCard.contentWindow.width / 2,
                labelHeight: zimCard.contentWindow.height / 5
            })
                .pos(0, 0, LEFT, TOP, zimCard.contentWindow)
                .addTo(zimCard)
                .setMask(zimCard.contentWindow);
        }
    },
    MODERN: {
        name: "Modern",
        style: {
            borderWidth: 1,
            borderColor: grey,
            corner: 10
        },
        build: function(zimCard) {
            Style.remember();
            STYLE = this.style;

            zimCard.shadowLayer = new Rectangle({
                width: zimCard.width,
                height: zimCard.height,
                borderWidth: 0
            })
                .addTo(zimCard)
                .sha(black.toAlpha(.2), 3, 3, 1);

            zimCard.backgroundLayer = new Rectangle(zimCard.width, zimCard.height, zimCard.color)
                .addTo(zimCard)
                .cur();
            
            zimCard.backgroundLayer.on("mousedown", () => {
                zimCard.drag({currentTarget: true});
                zimCard.shadowLayer.sha(black.toAlpha(.15), 5, 5, 1);
            });
            
            zimCard.backgroundLayer.on("pressup", () => {
                zimCard.noDrag();
                zimCard.backgroundLayer.cur();
                zimCard.shadowLayer.sha(black.toAlpha(.2), 3, 3, 1);
                S.update();
            });

            // Add the image to the card
            new Pic("test-asset")
                .sca(1)
                .center(zimCard)
                .pos(0, zimCard.height * 0.5, CENTER, TOP);

            zimCard.titleLabel = new Label({
                text: zimCard.titleText,
                backgroundColor: zimCard.color,
                color: white,
                padding: 10,
                corner: 10,
                align: CENTER,
                valign: CENTER,
                labelWidth: zimCard.width * .8
            })
                .pos(0, zimCard.spacing, CENTER, TOP, zimCard);

            zimCard.descriptionLabel = new Label({
                text: zimCard.descriptionText,
                align: CENTER,
                valign: TOP,
                labelWidth: zimCard.width * .9,
                color: dark
            })
                .pos(0, zimCard.titleLabel.height + zimCard.spacing * 2, CENTER, TOP, zimCard);

            Style.recall();
        }
    }
};

export const ZIM_CARD_ALLOWED_COLORS = [
    red, salmon, orange, green, pink, blue, brown, yellow, purple, interstellar,
    black, darker, licorice, dark, charcoal, grey, gray, granite, tin, pewter,
    silver, fog, mist, light, moon, lighter, white, faint, clear
]; 