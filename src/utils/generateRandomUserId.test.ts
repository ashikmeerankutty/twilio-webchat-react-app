import { generateRandomUserId } from "./generateRandomUserId";

describe("generateRandomUserId", () => {
    it("generate a string of length 36", () => {
        expect(generateRandomUserId()).toHaveLength(36);
    });
    it("generate a random string", () => {
        const string1 = generateRandomUserId();
        const string2 = generateRandomUserId();
        expect(string1).not.toEqual(string2);
    });
});
