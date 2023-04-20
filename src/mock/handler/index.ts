import { authHandler } from "./auth";
import { commentHandler } from "./comment";
import { postHandler } from "./post";

export const handlers = [...authHandler, ...postHandler, ...commentHandler];
