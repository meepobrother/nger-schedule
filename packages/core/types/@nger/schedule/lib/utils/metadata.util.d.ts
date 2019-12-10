export declare function extendArrayMetadata<T extends Array<any>>(key: string, metadata: T, target: any): void;
export declare function extendMetadata<T extends any>(key: string, metadata: T, target: any): void;
export declare const getMetadata: <T extends any>(key: any, ...targets: any[]) => void | T;
