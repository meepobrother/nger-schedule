import { Module } from '@nestjs/core/injector/module';
export declare function chooseModule(metatype: Function): Module | null | undefined;
export declare function getInstance(module: Module, metatype: Function): any;
