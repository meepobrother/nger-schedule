import { NestDistributedSchedule } from './nest-distributed.schedule';
export declare class NestSchedule extends NestDistributedSchedule {
    constructor();
    tryLock(method: string): Promise<boolean>;
}
