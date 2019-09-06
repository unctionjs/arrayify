
import arrayify from "./index";

test("works", () => {
  expect(arrayify("a")).toEqual(["a"]);
});

test("works", () => {
  expect(arrayify(["a"])).toEqual(["a"]);
});
