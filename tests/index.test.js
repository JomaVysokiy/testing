// import { strict as assert } from 'node:assert';
// import assert from 'power-assert';
import reverse from "../src/index.js";
test("reverse", () => {
  expect(reverse("hello")).toEqual("olleh");
  expect(reverse("")).toEqual("");
});
console.log("yesssssssss");
