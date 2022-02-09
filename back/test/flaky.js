const assert = require("assert");
const readSecret = require("../utils/readSecret")
const tmp = require("tmp")
const fs = require("fs");
const { AssertionError } = require("assert");

describe("These are meant to be fLaKy", () => {
    it("should be fLaKy", () => {
        const random = Math.random() < 0.85;
        assert(random);
    }),
    it("should be fLaKy again", () => {
        const random = Math.random() < 0.15;
        assert(random);
    }),
    it("should be fLaKy too", () => {
        const random = Math.random() < 0.55;
        assert(random);
    }),
    it("should be very fLaKy", () => {
        const random = Math.random() < Math.random();
        assert(random);
    })
})
