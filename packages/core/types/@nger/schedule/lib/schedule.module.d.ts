import { DynamicModule } from '@nestjs/common';
import { IGlobalConfig } from './interfaces/global-config.interface';
export declare class ScheduleModule {
    static register(globalConfig?: IGlobalConfig): DynamicModule;
}
