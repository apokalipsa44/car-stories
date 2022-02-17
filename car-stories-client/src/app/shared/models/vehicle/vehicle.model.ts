import { BikeTags } from '../../enums/tags/bikeTags.enum';
import { CarTags } from '../../enums/carTags.enum';
import { VehicleTypes } from '../../enums/vehicleTypes.enum';
import { EngineSpecks } from './engineSpecks.model';
import { GarageEvent } from './garageEvent.model';
import { PucharseInfo } from './pucharseInfo.model';

export interface Vehicle {
  id?: string;
  model?: string;
  engine?: string;
  engineSpecks?: EngineSpecks;
  year?: string;
  gearbox?: string;
  milage?: string;
  pucharseInfo?: PucharseInfo;
  garageEvents?: GarageEvent[];
  type?: VehicleTypes;
  tags?: BikeTags | CarTags;
}
