import * as PIXI from 'pixi.js';
import { injectable, inject } from 'inversify';
import { TYPES } from '../inversify.config';
import { ILoader } from './ILoader';

@injectable()
export class BaseLoader implements ILoader {
    private loader: PIXI.loaders.Loader;
    private _resources: { [key: string]: PIXI.loaders.Resource } = {};

    constructor(
        @inject(TYPES.Application) private app: PIXI.Application
    ) {
        this.loader = new PIXI.loaders.Loader();
    }

    load(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.loader.add('border', '/border.png');

            this.loader.load((_, resources) => {
                if (this.loader.progress === 100) {
                    this._resources = resources;
                    resolve();
                } else {
                    reject(new Error('Failed to load base resources'));
                }
            });
        });
    }

    getResource(path: string): PIXI.loaders.Resource | undefined {
        return this._resources[path];
    }
}
