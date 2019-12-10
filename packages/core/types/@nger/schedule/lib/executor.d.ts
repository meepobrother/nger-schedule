import { IGlobalConfig } from './interfaces/global-config.interface';
export declare class Executor {
    private readonly configs;
    private timer;
    private currentRetryCount;
    private logger;
    constructor(configs: IGlobalConfig);
    execute(jobKey: string, callback: () => Promise<Stop> | Stop, tryLock: Promise<TryLock> | TryLock): Promise<Stop>;
    private run;
    private clear;
}
