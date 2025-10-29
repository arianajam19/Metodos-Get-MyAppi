import ejemplo from "./ejemplo.routers.js";

import { Router } from "express";

const indexRoutes = Router();

indexRoutes.use('/ejemplo', ejemplo);


export default indexRoutes;