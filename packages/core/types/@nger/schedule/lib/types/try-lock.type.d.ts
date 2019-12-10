declare type TryLock = (method: string) => TryRelease;
declare type TryRelease = boolean | (() => void);
