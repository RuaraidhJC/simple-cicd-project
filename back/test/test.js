const assert = require("assert");
const readSecret = require("../utils/readSecret")
const tmp = require("tmp")
const fs = require("fs")

describe("Testing helper reading function ", () => {
    it("should be able to read from a temp file", () => {
        secretData = "Hello World!"
        const tmpobj = tmp.fileSync();
        fs.writeFileSync(tmpobj.name, secretData)
        assert.equal(secretData, readSecret(tmpobj.name));
        tmpobj.removeCallback();
    }),
    it("shouldn't crash and return empty string if file not exists", () => {
        assert.equal(readSecret("path/does/not/exist"), "");
    })
})
