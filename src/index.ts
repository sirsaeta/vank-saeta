import {startExpressServer} from "./server";
import { publicRoute, privateRoute } from "./routes"

export const app = startExpressServer([publicRoute, privateRoute]);