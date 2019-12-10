import { ICronJobConfig } from './interfaces/cron-job-config.interface';
import { IJobConfig } from './interfaces/job-config.interface';
import { IJob } from './interfaces/job.interface';
export declare class Scheduler {
    private static readonly jobs;
    static queueJob(_job: IJob): void;
    static cancelJob(key: string): void;
    static scheduleCronJob(key: string, cron: string, cb: JobCallback, config?: ICronJobConfig, tryLock?: Promise<TryLock> | TryLock): void;
    static scheduleIntervalJob(key: string, interval: number, cb: JobCallback, config?: IJobConfig, tryLock?: Promise<TryLock> | TryLock): void;
    static scheduleTimeoutJob(key: string, timeout: number, cb: JobCallback, config?: IJobConfig, tryLock?: Promise<TryLock> | TryLock): void;
    private static addJob;
    private static runJobImmediately;
    private static assertJobNotExist;
}
