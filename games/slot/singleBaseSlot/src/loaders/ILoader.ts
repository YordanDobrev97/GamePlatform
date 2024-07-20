import * as PIXI from 'pixi.js'

export interface ILoader {
    load(): Promise<void>
    getResource(path: string): PIXI.loaders.Loader | undefined
}