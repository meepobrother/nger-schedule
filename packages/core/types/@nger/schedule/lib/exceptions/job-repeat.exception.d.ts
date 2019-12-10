export declare class JobRepeatException extends Error {
    message: string;
    name: string;
    stack: string;
    constructor(message?: string, stack?: string);
}
