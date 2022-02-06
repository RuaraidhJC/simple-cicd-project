const assert = require("assert");

describe("Env var in CI environment", () => {
    it("should have a secret in the environment", () => {
        assert(process.env.SECRET_MESSAGE, "Secret message exists in env")
    }),
    it("should have a secret with the value CIRCLECI", () => {
        assert.equal(process.env.SECRET_MESSAGE, "CIRCLECI", "Secret message is CIRCLECI")
    })
})
