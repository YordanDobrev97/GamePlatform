import 'reflect-metadata'

import * as PIXI from 'pixi.js'
import { container, TYPES } from './inversify.config'
import { IBaseLoader } from './loaders/IBaseLoader'
import { BaseLoader } from './loaders/BaseLoader'
import { ILoader } from './loaders/ILoader'

export class Main {
    private _app: PIXI.Application
    private baseLoader: ILoader

    constructor() {
        this._app = container.get<PIXI.Application>(TYPES.Application);
        console.log('app', this._app)
        const root = document.getElementById('pixi-root')
        root.appendChild(this._app.view)

        this.baseLoader = container.get<ILoader>(BaseLoader)
        this.init()
    }

    private async init() {
        await this.baseLoader.load()
    }
}

new Main()