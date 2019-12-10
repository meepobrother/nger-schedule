export class JobRepeatException extends Error {
    message: string;
    name: string = 'JobRepeatException';
    stack: string;

    constructor(message?: string, stack?: string) {
        super(message);
        if (message) this.message = message;
        if (stack) this.stack = stack;
    }
}
