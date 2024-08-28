import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Driver } from './driver.entity';

@Injectable()
export class DriversService {
  constructor(
    @InjectRepository(Driver)
    private readonly driverRepository: Repository<Driver>, // Inject the repository
  ) {}

  // Find all drivers
  async findAll(): Promise<Driver[]> {
    return this.driverRepository.find();
  }

  // Find a driver by id
  async findOne(id: number): Promise<Driver> {
    return this.driverRepository.findOne({ where: { id } });
  }

  // Create a new driver
  async create(driverData: Partial<Driver>): Promise<Driver> {
    const driver = this.driverRepository.create(driverData);
    return this.driverRepository.save(driver);
  }

  // Update a driver by id
  async update(id: number, updateData: Partial<Driver>): Promise<Driver> {
    await this.driverRepository.update(id, updateData);
    return this.driverRepository.findOne({ where: { id } });
  }

  // Delete a driver by id
  async remove(id: number): Promise<void> {
    await this.driverRepository.delete(id);
  }
}
