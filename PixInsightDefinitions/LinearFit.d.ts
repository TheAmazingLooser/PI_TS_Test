//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class LinearFit extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    referenceViewId: string;
    rejectHigh: number;
    rejectLow: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(LinearFit?: LinearFit);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static referenceViewId: string;
    static rejectHigh: number;
    static rejectLow: number;
}