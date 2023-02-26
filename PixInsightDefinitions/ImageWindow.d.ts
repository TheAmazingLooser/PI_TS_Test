//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ImageWindow {


    //-------------------------
    //-------Properties--------
    //-------------------------
    aperture: number;
    bitsPerSample: number;
    cfaType: string;
    currentView: View;
    exposure: number;
    filePath: string;
    fileURL: string;
    focalLength: number;
    geometry: Rect;
    hasMaskReferences: boolean;
    hasPendingUpdates: boolean;
    height: number;
    horizontalResolution: number;
    iconic: boolean;
    isACopy: boolean;
    isClosed: boolean;
    isComplexSample: boolean;
    isFloatSample: boolean;
    isModified: boolean;
    isNew: boolean;
    isNull: boolean;
    isWindow: boolean;
    isoSpeed: number;
    keywords: Array<any>;
    mainView: View;
    mask: ImageWindow;
    maskEnabled: boolean;
    maskInverted: boolean;
    maskMode: number;
    maskVisible: boolean;
    metricResolution: boolean;
    numberOfPreviews: number;
    position: Point;
    previews: Array<any>;
    resolution: number;
    rgbWorkingSpace: RGBColorSystem;
    selectedPreview: View;
    transparencyColor: boolean;
    transparencyMode: boolean;
    transparencyVisible: boolean;
    verticalResolution: number;
    viewportHeight: number;
    viewportPosition: Point;
    viewportUpdateRect: Rect;
    viewportWidth: number;
    visible: boolean;
    visibleViewportRect: Rect;
    width: number;
    zoomFactor: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(ImageWindow: ImageWindow);
    constructor(width: number, height: number, numberOfChannels?: number, bitsPerSample?: number, floatSample?: boolean, color?: boolean, id?: string);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public applyColorTransformation(bmp: Bitmap, view?: View): void;

    public astrometricSolution(): Array<any>;

    public astrometricSolutionSummary(): string;

    public bringToFront(): void;

    public celestialToImage(eqDeg: Point): Point;

    public celestialToImage(alphaDeg: number, deltaDeg: number): Point;

    public celestialToImage(eqDeg: Array<any>): Array<any>;

    public celestialToImage(alphaDeg: Array<any>, deltaDeg: Array<any>): Array<any>;

    public clearAstrometricSolution(): void;

    public close(multiple?: boolean /* false*/): number;

    public commitPendingUpdates(): void;

    public copyAstrometricSolution(source: ImageWindow): void;

    public createPreview(r: Rect, id: string): View;

    public createPreview(x0: number, y0: number, x1: number, y1: number, id: string): View;

    public deiconize(): void;

    public deletePreview(preview: View): void;

    public deletePreviews(): void;

    public fitWindow(): void;

    public forceClose(): void;

    public go(index: number): void;

    public hide(): void;

    public iconize(): void;

    public imageScalarToViewport(k: number): number;

    public imageToCelestial(xy: Point): Point;

    public imageToCelestial(x: number, y: number): Point;

    public imageToCelestial(xy: Array<any>): Array<any>;

    public imageToCelestial(x: Array<any>, y: Array<any>): Array<any>;

    public imageToViewport(p: Point): Point;

    public imageToViewport(r: Rect): Rect;

    public isMaskCompatible(mask: ImageWindow): boolean;

    public isMaskOf(window: ImageWindow): boolean;

    public isValidView(view: View): boolean;

    public modifyPreview(preview: View, r: Rect, id?: string): void;

    public modifyPreview(preview: View, x0: number, y0: number, x1: number, y1: number, id?: string): void;

    public previewById(id: string): View;

    public previewRect(preview: View): Rect;

    public purge(swapFiles?: boolean /* true*/, properties?: any /* true*/, histograms?: boolean /* true*/, statistics?: boolean /* true*/, notify?: boolean /* true*/): void;

    public redo(n?: number /* 1*/): void;

    public redoAll(): void;

    public regenerate(): void;

    public regenerateAstrometricSolution(): void;

    public removeMask(): void;

    public removeMaskReferences(): void;

    public save(allowMessages?: boolean /* true*/, strict?: boolean /* true*/): boolean;

    public saveAs(filePath: string, queryOptions?: boolean /* true*/, allowMessages?: boolean /* true*/, strict?: boolean /* true*/, verifyOverwrite?: boolean /* true*/, formatHints?: string /* ''*/): boolean;

    public sendToBack(): void;

    public setAstrometricSolution(keywords: Array<any>, controlPoints: ByteArray): void;

    public setMask(mask: ImageWindow, invert?: boolean /* false*/): void;

    public setResolution(res: number): void;

    public setResolution(xRes: number, yRes: number, metric?: boolean): void;

    public setSampleFormat(bitsPerSample: number, floatSample: boolean): void;

    public setViewport(center: Point, zoomFactor?: number): void;

    public setViewport(x: number, y: number, zoomFactor?: number): void;

    public show(): void;

    public undo(n?: number /* 1*/): void;

    public undoAll(): void;

    public updateAstrometryMetadata(): void;

    public updateImageRect(r: Rect): void;

    public updateImageRect(x0: number, y0: number, x1: number, y1: number): void;

    public updateMaskReferences(): void;

    public updateViewport(): void;

    public updateViewportRect(r: Rect): void;

    public updateViewportRect(x0: number, y0: number, x1: number, y1: number): void;

    public viewportScalarToImage(k: number): number;

    public viewportToImage(p: Point): Point;

    public viewportToImage(r: Rect): Rect;

    public zoomIn(): void;

    public zoomOut(): void;

    public zoomToFit(allowZoomIn?: boolean /* false*/, animate?: boolean /* true*/): void;

    public zoomToOptimalFit(allowZoomIn?: boolean /* false*/, animate?: boolean /* true*/): void;



    //-------------------------
    //----static Functions-----
    //-------------------------
    public static open(url: string, id?: string /* ''*/, formatHints?: string /* ''*/, asCopy?: boolean /* false*/): Array<any>;

    public static windowByFilePath(path: string): ImageWindow;

    public static windowById(id: string): ImageWindow;



    //-------------------------
    //----static Properties----
    //-------------------------
    static aperture: number;
    static bitsPerSample: number;
    static cfaType: string;
    static currentView: View;
    static exposure: number;
    static filePath: string;
    static fileURL: string;
    static focalLength: number;
    static geometry: Rect;
    static hasMaskReferences: boolean;
    static hasPendingUpdates: boolean;
    static height: number;
    static horizontalResolution: number;
    static iconic: boolean;
    static isACopy: boolean;
    static isClosed: boolean;
    static isComplexSample: boolean;
    static isFloatSample: boolean;
    static isModified: boolean;
    static isNew: boolean;
    static isNull: boolean;
    static isWindow: boolean;
    static isoSpeed: number;
    static keywords: Array<any>;
    static mainView: View;
    static mask: ImageWindow;
    static maskEnabled: boolean;
    static maskInverted: boolean;
    static maskMode: number;
    static maskVisible: boolean;
    static metricResolution: boolean;
    static numberOfPreviews: number;
    static position: Point;
    static previews: Array<any>;
    static resolution: number;
    static rgbWorkingSpace: RGBColorSystem;
    static selectedPreview: View;
    static transparencyColor: boolean;
    static transparencyMode: boolean;
    static transparencyVisible: boolean;
    static verticalResolution: number;
    static viewportHeight: number;
    static viewportPosition: Point;
    static viewportUpdateRect: Rect;
    static viewportWidth: number;
    static visible: boolean;
    static visibleViewportRect: Rect;
    static width: number;
    static zoomFactor: number;
}