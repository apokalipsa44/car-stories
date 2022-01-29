import { EngineSpecks } from "./engineSpecks.model";
import { GarageEvent } from "./garageEvent.model";
import { PucharseInfo } from "./pucharseInfo.model";

export interface Car{
    id?:string;
    model?:string;
    engine?:string;
    engineSpecks?:EngineSpecks;
    year?:string;
    gearbox?:string;
    milage?:string;
    pucharseInfo?:PucharseInfo;
    private?:GarageEvent[]
}