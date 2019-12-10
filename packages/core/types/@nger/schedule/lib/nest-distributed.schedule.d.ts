export declare abstract class NestDistributedSchedule {
    private readonly __jobs;
    private readonly __lockers;
    protected constructor();
    abstract tryLock?(method: string): Promise<TryRelease> | TryRelease;
    private getLocker;
    private init;
    private isLockerExist;
}
