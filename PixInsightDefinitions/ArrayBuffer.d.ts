//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ArrayBuffer {


    //-------------------------
    //-------Properties--------
    //-------------------------
    byteLength: number;
    length: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(length: number);


    //-------------------------
    //--------Functions--------
    //-------------------------
    /**
    DESCRIPTION
    @param begin: uint32

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public slice(begin: number): ArrayBuffer;
    /**
    DESCRIPTION
    @param begin: uint32
    @param end: uint32

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public slice(begin: number, end?: number): ArrayBuffer;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: ArrayBuffer;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
