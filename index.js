import isArray from "@unction/isarray";
export default function arrayify(value) {
  if (isArray(value)) {
    return value;
  }

  return [value];
}
