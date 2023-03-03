//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class StarNet extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    mask: boolean;
    stride: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(StarNet?: StarNet);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: StarNet;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    Stride_128;
    Stride_16;
    Stride_32;
    Stride_64;
    Stride_8;
}
