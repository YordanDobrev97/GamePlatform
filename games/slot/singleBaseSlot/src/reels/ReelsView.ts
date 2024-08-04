interface SymbolConfig {
    name: string
    rect: [number, number, number, number]
    scale: number
    order: number
}

export class ReelsView {
    protected symbolConfig: SymbolConfig[] =  [
        { name: 'cherry', rect: [365, 365, 130, 100], scale: 1.5, order: 1 },
        { name: 'orange', rect: [15, 25, 100, 100], scale: 1.5, order: 2 },
        { name: 'banana', rect: [15, 130, 110, 100], scale: 1.5, order: 0 },
        { name: 'seven', rect: [125, 130, 120, 100], scale: 1.5, order: 3 },
        { name: 'wild', rect: [350, 250, 140, 100], scale: 1.5, order: 4 },
        { name: 'bell', rect: [120, 25, 110, 100], scale: 1.5, order: 5 },
        { name: 'diamond', rect: [130, 250, 110, 100], scale: 1.5, order: 6 },
        { name: 'lemon', rect: [135, 385, 110, 100], scale: 1.5, order: 7 },
        { name: 'grapes', rect: [240, 50, 110, 100], scale: 1.5, order: 8 },
        { name: 'watermelon', rect: [0, 390, 110, 100], scale: 1.5, order: 9 },
        { name: 'bar', rect: [365, 140, 110, 100], scale: 1.5, order: 10 },
        { name: 'dollar', rect: [245, 145, 110, 100], scale: 1.5, order: 11 },
        { name: 'heart', rect: [360, 40, 110, 100], scale: 1.5, order: 12 },
        { name: 'plum', rect: [240, 395, 140, 100], scale: 1.5, order: 13 },
        { name: 'apple', rect: [240, 265, 100, 100], scale: 1.5, order: 14 },
    ]

    protected static BORDER_IMAGE_URL = '/border.png'
    protected static REEL_IMAGE_URL = '/reelImages.png'

    protected cols: number = 5
    protected spacing: { x: number, y: number } = { x: 160, y: 150 }

    public constructor(protected app: PIXI.Application) {
        this.init()
    }

    protected init() {
        this.addBorder()
        this.loadTextures().then(() => {
            this.addReelSymbols()
        }).catch((error) => {
            console.error('Error loading textures:', error)
        });
    }

    protected addBorder() {
        const sprite = PIXI.Sprite.from(ReelsView.BORDER_IMAGE_URL)
        sprite.position.set(100, 0)
        this.app.stage.addChild(sprite)
    }

    protected async loadTextures() {
        return new Promise<void>((resolve, reject) => {
            PIXI.loaders.shared.add('reelImages', ReelsView.REEL_IMAGE_URL).load((loader, resources) => {
                if (resources.reelImages.error) {
                    reject(resources.reelImages.error)
                } else {
                    resolve()
                }
            });
        });
    }

    protected addReelSymbols() {
        const baseTexture = PIXI.utils.TextureCache['reelImages'].baseTexture
        const sortedSymbols = this.symbolConfig.sort((a, b) => a.order - b.order)

        let spacingX = 0
        let spacingY = 0

        const container = new PIXI.Container()
        sortedSymbols.forEach((symbol, i) => {
            const texture = new PIXI.Texture(baseTexture, new PIXI.Rectangle(...symbol.rect))
            const sprite = new PIXI.Sprite(texture);

            const index = symbol.order
            const col = 3 + (index % this.cols)
            const row = Math.floor(index / this.cols)

            if (i > 0) {
                spacingX += 90
            }

            if (i === this.symbolConfig.length - 1) {
                spacingY += -20
            } else {
                spacingY += 15
            }

            if (i % 5 === 0) {
                spacingX = 0
            }

            const xPosition = col * this.spacing.x + spacingX;
            const yPosition = (row * this.spacing.y) + spacingY;
            sprite.position.set(xPosition, yPosition)
            sprite.scale.set(symbol.scale)

            container.addChild(sprite)
        });

        container.position.set(0, 220)

        this.app.stage.addChild(container)
    }
}
