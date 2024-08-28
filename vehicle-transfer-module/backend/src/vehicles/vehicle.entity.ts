import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  vehicleNumber: number;

  @Column()
  vehicleType: string;

  @Column()
  pucCertificate: string;

  @Column()
  insuranceCertificate: string;
}
