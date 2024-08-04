import * as PIXI from 'pixi.js'
import { ReelsView } from './reels/ReelsView'

export class Main {
    private _app: PIXI.Application

    constructor() {
        this._app =  new PIXI.Application({
            width: window.innerWidth,
            height: window.innerHeight,
            backgroundColor: 0x30305b
        })

        const root = document.getElementById('pixi-root')
        root.appendChild(this._app.view)

        globalThis.__PIXI_APP__ = this._app
        this.init()
    }

    private async init() {
        new ReelsView(this._app)
    }
}

new Main()