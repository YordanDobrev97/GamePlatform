import { injectable } from 'inversify'

import { IBaseLoader } from './IBaseLoader'
import { ILoader } from './ILoader'

@injectable()
export class CommonLoader implements ILoader {
    load(): Promise<void> {
       return null
    }

    getResource(path: string): PIXI.loaders.Loader | undefined {
        return null
    }
}