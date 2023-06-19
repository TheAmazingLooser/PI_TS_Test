//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class LinearFunction {


    //-------------------------
    //-------Properties--------
    //-------------------------
    adev: number;
    b: number;
    intercept: number;
    isValid: boolean;
    m: number;
    slope: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(S: LinearFunction);
    constructor(x1: number, y1: number, x2: number, y2: number);
    constructor(x: Array<any> | any /* TypedArray */, y: Array<any> | any /* TypedArray */);


    //-------------------------
    //--------Functions--------
    //-------------------------
    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public evaluate(x: number): void;

    /**
    DESCRIPTION
    @param x: Array|TypedArray
    @param y: Array|TypedArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public fit(x: Array<any> | any /* TypedArray */, y: Array<any> | any /* TypedArray */): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: LinearFunction;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
