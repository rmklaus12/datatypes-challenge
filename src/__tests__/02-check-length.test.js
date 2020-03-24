import { checkLength } from "../02-check-length";

test("hello is 5 letters long", () => {
  expect(checkLength("hello")).toBe(5);
});

test("two words is 9 characters long", () => {
  expect(checkLength("two words")).toBe(9);
});
