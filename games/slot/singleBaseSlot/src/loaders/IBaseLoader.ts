import { ILoader } from './ILoader'

export interface IBaseLoader {
    registerLoader(name: string, loader: ILoader) : void
    getLoader(name: string): ILoader | undefined
    loadAll(): Promise<void>
}