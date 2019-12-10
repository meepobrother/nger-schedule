import 'reflect-metadata';
import { ICronJobConfig } from '../interfaces/cron-job-config.interface';
import { IJobConfig } from '../interfaces/job-config.interface';
export declare const Interval: (milliseconds: number, config?: IJobConfig) => (target: any, key: any, descriptor: any) => void;
export declare const Timeout: (milliseconds: number, config?: IJobConfig) => (target: any, key: any, descriptor: any) => void;
export declare const Cron: (cron: string, config?: ICronJobConfig) => (target: any, key: any, descriptor: any) => void;
