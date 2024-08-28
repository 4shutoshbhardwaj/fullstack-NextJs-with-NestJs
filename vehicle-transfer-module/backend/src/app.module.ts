import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriversModule } from './drivers/drivers.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { TransfersModule } from './transfers/transfers.module';
import ormconfig from './ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    DriversModule,
    VehiclesModule,
    TransfersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
