import isArray from "@unction/isarray";

export default function arrayify<A> (value: A): [A] | A {
  if (isArray(value)) {
    return value;
  }

  return [value];
}
