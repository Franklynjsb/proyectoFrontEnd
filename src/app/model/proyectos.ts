export class Proyecto {
    id?: number;
    nombreE : string;
    descripcionE : string;
    imgP : string;

    constructor(nombreE: string, descripcionE: string, imgP: string) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.imgP = imgP;
    }

}
