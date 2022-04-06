import {startExpressServer} from "./server";
import { publicRoute, privateRoute } from "./routes"
require("./schedulers");

export const app = startExpressServer([publicRoute, privateRoute]);