//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Gaia extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    centerDec: number;
    centerRA: number;
    command: string;
    countIO: number;
    dataRelease: number;
    databaseFilePaths: Array<any>;
    databaseHasMeanSpectrumData: boolean;
    databaseMagnitudeHigh: number;
    databaseMagnitudeLow: number;
    databaseSpectrumBits: number;
    databaseSpectrumCount: number;
    databaseSpectrumStart: number;
    databaseSpectrumStep: number;
    excessCount: number;
    exclusionFlags: number;
    generateBinaryOutput: boolean;
    generateTextOutput: boolean;
    inclusionFlags: number;
    isValid: boolean;
    magnitudeHigh: number;
    magnitudeLow: number;
    normalizeSpectrum: boolean;
    outputDataRelease: number;
    outputFilePath: string;
    photonFluxUnits: boolean;
    radius: number;
    rejectCount: number;
    requiredFlags: number;
    sortBy: number;
    sourceLimit: number;
    sources: Array<any>;
    textFormat: number;
    textHeaders: number;
    timeDecode: number;
    timeIO: number;
    timeTotal: number;
    timeUncompress: number;
    verbosity: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(Gaia?: Gaia);


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
    static centerDec: number;
    static centerRA: number;
    static command: string;
    static countIO: number;
    static dataRelease: number;
    static databaseFilePaths: Array<any>;
    static databaseHasMeanSpectrumData: boolean;
    static databaseMagnitudeHigh: number;
    static databaseMagnitudeLow: number;
    static databaseSpectrumBits: number;
    static databaseSpectrumCount: number;
    static databaseSpectrumStart: number;
    static databaseSpectrumStep: number;
    static excessCount: number;
    static exclusionFlags: number;
    static generateBinaryOutput: boolean;
    static generateTextOutput: boolean;
    static inclusionFlags: number;
    static isValid: boolean;
    static magnitudeHigh: number;
    static magnitudeLow: number;
    static normalizeSpectrum: boolean;
    static outputDataRelease: number;
    static outputFilePath: string;
    static photonFluxUnits: boolean;
    static radius: number;
    static rejectCount: number;
    static requiredFlags: number;
    static sortBy: number;
    static sourceLimit: number;
    static sources: Array<any>;
    static textFormat: number;
    static textHeaders: number;
    static timeDecode: number;
    static timeIO: number;
    static timeTotal: number;
    static timeUncompress: number;
    static verbosity: number;


    //-------------------------
    //--------constants--------
    //-------------------------
    DataRelease_2;
    DataRelease_3;
    DataRelease_3_SP;
    DataRelease_BestAvailable;
    DataRelease_E3;
    SortBy_Dec;
    SortBy_DontSort;
    SortBy_G;
    SortBy_G_BP;
    SortBy_G_RP;
    SortBy_Parallax;
    SortBy_RA;
    TextFormat_CSV;
    TextFormat_Tabular;
    TextFormat_TabularCompound;
    TextHeaders_None;
    TextHeaders_SearchParameters;
    TextHeaders_SearchParametersAndTableColumns;
    TextHeaders_TableColumns;
}
