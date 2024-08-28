import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { Vehicle } from './vehicle.entity';

@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  // Similar CRUD route handlers as DriversController
}
