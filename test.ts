
import arrayify from "./index";

test(() => {
  expect(arrayify("a")).toEqual(["a"]);
});

test(() => {
  expect(arrayify(["a"])).toEqual(["a"]);
});
