import { Hono } from "hono";
import { compress } from "hono/compress";
import { logger } from "hono/logger";
import { secureHeaders } from "hono/secure-headers";

const app = new Hono()
	.use(logger())
	.use(compress())
	.use(secureHeaders())
	.get("/", (c) => c.text("Hello Hono!"))
	.get("/ping", (c) => c.text("pong"));

export default app;
