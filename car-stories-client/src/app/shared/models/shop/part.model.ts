import { PartsCategoryTypes } from "../../enums/partsCategoryTypes.enum";

export interface Part {
  name?: string;
  partNumber?: number;
  brand?: string;
  shortDescription?: string;
  longDescription?: string;
  quantity?: number;
  price?: number;
  images?: string[];
  mainImage?: string;
  category?:PartsCategoryTypes;
  tags?: string[];
}
