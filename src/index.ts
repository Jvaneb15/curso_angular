/**
 * ======== Código de TypeScript ==========
 */

class Heroe {
    alterEgo: string;
    edad: number;
    nombreReal: number;

    constructor( alterEgo: string ) {
        this.alterEgo = alterEgo;
    }
}

const ironman = new Heroe( 'Ironman' );
console.log(ironman);
