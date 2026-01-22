import { RequestIdVariables } from "hono/request-id";
import { LoggerVariables } from "./middleware/logger.ts";

export type ErrorVariables = {
    error?: Error;
};

export type Env = {
    Bindings: CloudflareBindings;
    Variables: RequestIdVariables & LoggerVariables & ErrorVariables;
    MESHY_API_KEY: string;
    MESHY_BASE_URL?: string;
};
