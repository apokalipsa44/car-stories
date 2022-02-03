import { Vehicle } from "../vehicle/vehicle.model";
import { PurchaseInfo } from "./purchaseInfo.model";

export interface User{
    id?: string;
    firstName?: string;
    lastName?: string;
    isAdmin?: boolean;
    login?: string;
    password?: string;
    email?: string;
    phone?: string;
    accountNumber?: string;
    purchaseInfo?: PurchaseInfo[];
    vehicles?:Vehicle[]
}