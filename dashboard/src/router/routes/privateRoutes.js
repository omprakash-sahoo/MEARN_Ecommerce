import { adminRoutes } from "./adminRout";
import { sellerRoutes } from "./sellerRoutes";

export const privateRoutes = [...adminRoutes, ...sellerRoutes];
