import 'reflect-metadata';
import { Container } from 'inversify';
import * as PIXI from 'pixi.js';
import { BaseLoader } from './loaders/BaseLoader';
import { CommonLoader } from './loaders/CommonLoader';
import { ILoader } from './loaders/ILoader';

const container = new Container();

const TYPES = {
    Application: Symbol.for('Application'),
    BaseLoader: Symbol.for('BaseLoader'),
    CommonLoader: Symbol.for('CommonLoader'),
    ILoader: Symbol.for('ILoader')
};

container.bind<PIXI.Application>(TYPES.Application).toConstantValue(
    new PIXI.Application({
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: 0x30305b
    })
);

container.bind<ILoader>(TYPES.BaseLoader).to(BaseLoader);
container.bind<ILoader>(TYPES.CommonLoader).to(CommonLoader);

export { container, TYPES };