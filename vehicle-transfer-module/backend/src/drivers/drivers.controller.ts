import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { Driver } from './driver.entity';

@Controller('drivers')
export class DriversController {
  constructor(private readonly driversService: DriversService) {}

  // Get all drivers
  @Get()
  async findAll(): Promise<Driver[]> {
    return this.driversService.findAll();
  }

  // Get a single driver by id
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Driver> {
    return this.driversService.findOne(id);
  }

  // Create a new driver
  @Post()
  async create(@Body() driverData: Partial<Driver>): Promise<Driver> {
    return this.driversService.create(driverData);
  }

  // Update an existing driver
  @Put(':id')
  async update(@Param('id') id: number, @Body() updateData: Partial<Driver>): Promise<Driver> {
    return this.driversService.update(id, updateData);
  }

  // Delete a driver by id
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.driversService.remove(id);
  }
}
