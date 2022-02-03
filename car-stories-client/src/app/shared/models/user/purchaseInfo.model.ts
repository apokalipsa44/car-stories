import { Part } from '../shop/part.model';

export interface PurchaseInfo {
  purchaseDate?: string;
  purchaseAmount?: number;
  invoiceNumber?: string;
  comment?: string;
  partsList?: Part[];
}
