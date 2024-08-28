import {start} from "../src/client.js";
import test from "node:test";
import assert from "node:assert";

test("when starting a ws client, it will tell you if it created a new socket", () => {
    assert.strictEqual(start(), true)
    assert.strictEqual(start(), false)
});