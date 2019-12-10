export function extendArrayMetadata<T extends Array<any>>(
    key: string,
    metadata: T,
    target: any,
) {
    const previousValue = Reflect.getMetadata(key, target) || [];
    const value = [...previousValue, ...metadata];
    Reflect.defineMetadata(key, value, target);
}

export function extendMetadata<T extends any>(
    key: string,
    metadata: T,
    target: any,
) {
    const previousValue = Reflect.getMetadata(key, target) || [];
    const value = [...previousValue, metadata];
    Reflect.defineMetadata(key, value, target);
}

export const getMetadata = <T extends any>(key: any, ...targets: any[]): T | void => {
    for (let i = 0; i < targets.length; i++) {
        const metadata = Reflect.getMetadata(key, targets[i]);
        if (metadata) {
            return metadata;
        }
    }
    return void 0;
};
