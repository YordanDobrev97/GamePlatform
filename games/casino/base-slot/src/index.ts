import * as PIXI from 'pixi.js';

window.addEventListener('DOMContentLoaded', async () => {
    const app = new PIXI.Application();
    await app.init({
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: '0x1099bb',
    });
    
    document.body.appendChild(app.canvas); 
})