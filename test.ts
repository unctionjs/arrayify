
import arrayify from "./index.ts";

test(() => {
  expect(arrayify("a")).toEqual(["a"]);
});

test(() => {
  expect(arrayify(["a"])).toEqual(["a"]);
});
