export interface IJobConfig {
    maxRetry?: number;
    retryInterval?: number;
    enable?: boolean;
    key?: string;
    waiting?: boolean;
    immediate?: boolean;
}
