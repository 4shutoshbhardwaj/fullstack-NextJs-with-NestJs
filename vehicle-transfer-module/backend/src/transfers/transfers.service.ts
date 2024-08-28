import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transfer } from './transfer.entity';  // The Transfer entity
import { Vehicle } from '../vehicles/vehicle.entity';  // The Vehicle entity
import { Driver } from '../drivers/driver.entity';  // The Driver entity

@Injectable()
export class TransfersService {
  constructor(
    @InjectRepository(Transfer)
    private readonly transferRepository: Repository<Transfer>,  // Inject Transfer repository
    @InjectRepository(Vehicle)
    private readonly vehicleRepository: Repository<Vehicle>,    // Inject Vehicle repository
    @InjectRepository(Driver)
    private readonly driverRepository: Repository<Driver>,      // Inject Driver repository
  ) {}

  // Transfer a vehicle from one driver to another
  async transferVehicle(vehicleId: number, fromDriverId: number, toDriverId: number): Promise<Transfer> {
    const vehicle = await this.vehicleRepository.findOne({ where: { id: vehicleId } });
    const fromDriver = await this.driverRepository.findOne({ where: { id: fromDriverId } });
    const toDriver = await this.driverRepository.findOne({ where: { id: toDriverId } });

    if (!vehicle || !fromDriver || !toDriver) {
      throw new Error('Invalid vehicle or driver data');
    }

    // Create a transfer record
    const transfer = this.transferRepository.create({
      vehicle,
      fromDriver,
      toDriver,
      transferDate: new Date(),
    });

    // Save transfer to history
    await this.transferRepository.save(transfer);

    // Optionally, update the vehicle's current driver (if applicable)
    vehicle.currentDriver = toDriver;
    await this.vehicleRepository.save(vehicle);

    return transfer;
  }

  // Get transfer history for a specific vehicle
  async getTransferHistory(vehicleId: number): Promise<Transfer[]> {
    return this.transferRepository.find({
      where: { vehicle: { id: vehicleId } },
      relations: ['fromDriver', 'toDriver', 'vehicle'],  // To include related data
    });
  }
}
