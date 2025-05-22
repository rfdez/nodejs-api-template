import { testClient } from "hono/testing";
import assert from "node:assert/strict";
import { describe, it } from "node:test";
import app from "../../src/app/app.ts";

describe("ping endpoint", () => {
	const client = testClient(app);

	it("should return pong", async () => {
		const res = await client.ping.$get();

		assert.strictEqual(res.status, 200);
		assert.strictEqual(await res.text(), "pong");
	});
});
