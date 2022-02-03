import { LabourDone } from "./labourDone.model";
import { ReplacedPart } from "./replacedPart.model";

export interface GarageEvent{
    eventDate?: string;
    currentMilage?:string;
    labourDone?:LabourDone;
    parts?:ReplacedPart[];

}