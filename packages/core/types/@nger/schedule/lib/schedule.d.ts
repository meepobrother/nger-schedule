import { ICronJobConfig } from './interfaces/cron-job-config.interface';
import { IJobConfig } from './interfaces/job-config.interface';
import { IGlobalConfig } from './interfaces/global-config.interface';
export declare class Schedule {
    private readonly scheduler;
    constructor(globalConfig?: IGlobalConfig);
    cancelJob(key: string): void;
    scheduleCronJob(key: string, cron: string, callback: JobCallback, config?: ICronJobConfig): void;
    scheduleIntervalJob(key: string, interval: number, callback: JobCallback, config?: IJobConfig): void;
    scheduleTimeoutJob(key: string, timeout: number, callback: JobCallback, config?: IJobConfig): void;
}
