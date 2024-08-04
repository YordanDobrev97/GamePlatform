import * as PIXI from 'pixi.js'

export class BaseLoader {
    private loader: PIXI.loaders.Loader = new PIXI.loaders.Loader()
    private _resources: { [key: string]: PIXI.loaders.Resource } = {}

    load(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.loader.add('border', '/border.png')

            this.loader.load((_, resources) => {
                if (this.loader.progress === 100) {
                    this._resources['border'] = resources
                    resolve();
                } else {
                    reject(new Error('Failed to load base resources'))
                }
            });
        });
    }

    getResource(path: string) {
        return this._resources[path][path]
    }
}
