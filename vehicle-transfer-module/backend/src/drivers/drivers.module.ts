import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriversService } from './drivers.service';
import { DriversController } from './drivers.controller';
import { Driver } from './driver.entity'; // Your Driver entity

@Module({
  imports: [TypeOrmModule.forFeature([Driver])], // Registers the Driver entity with TypeORM
  controllers: [DriversController],              // Registers the DriversController
  providers: [DriversService],                   // Registers the DriversService
})
export class DriversModule {}
