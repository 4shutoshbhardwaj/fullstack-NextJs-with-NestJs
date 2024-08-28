import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Driver } from '../drivers/driver.entity';
import { Vehicle } from '../vehicles/vehicle.entity';

@Entity()
export class Transfer {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Driver, { nullable: true })
  fromDriver: Driver;

  @ManyToOne(() => Driver, { nullable: true })
  toDriver: Driver;

  @ManyToOne(() => Vehicle)
  vehicle: Vehicle;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  transferDate: Date;
}
