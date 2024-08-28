import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { TransfersService } from './transfers.service';
import { Transfer } from './transfer.entity';

@Controller('transfers')
export class TransfersController {
  constructor(private readonly transfersService: TransfersService) {}

  // Endpoint to transfer a vehicle from one driver to another
  @Post()
  async transferVehicle(
    @Body('vehicleId') vehicleId: number,
    @Body('fromDriverId') fromDriverId: number,
    @Body('toDriverId') toDriverId: number,
  ): Promise<Transfer> {
    return this.transfersService.transferVehicle(vehicleId, fromDriverId, toDriverId);
  }

  // Endpoint to get transfer history for a specific vehicle
  @Get(':vehicleId/history')
  async getTransferHistory(@Param('vehicleId') vehicleId: number): Promise<Transfer[]> {
    return this.transfersService.getTransferHistory(vehicleId);
  }
}
