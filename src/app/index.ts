import { serve } from "@hono/node-server";
import app from "./app.js";

const server = serve(app);

process.on("SIGINT", () => {
	server.close();

	process.exit(0);
});

process.on("SIGTERM", () => {
	server.close((err) => {
		if (err) {
			console.error("Error closing server:", err);

			process.exit(1);
		}

		process.exit(0);
	});
});

process.on("uncaughtException", (err) => {
	console.error("Uncaught Exception:", err);

	process.exit(1);
});

process.on("unhandledRejection", (reason) => {
	console.error("Unhandled Promise Rejection:", reason);
});
