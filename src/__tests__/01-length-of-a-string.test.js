import { getLength } from "../01-length-of-a-string";

test("hello is 5 letters long", () => {
  expect(getLength("hello")).toBe(5);
});

test("two words is 9 characters long", () => {
  expect(getLength("two words")).toBe(9);
});
