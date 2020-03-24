import { checkPassword } from "../03-check-password";

test("8 characters with uppercase and a number is valid", () => {
  expect(checkPassword("Password1")).toBe(true);
});

test("8 characters with uppercase but no number is invalid", () => {
  expect(checkPassword("Password")).toContain(
    "Valid passwords must contain at least 1 number"
  );
});

test("8 characters with no uppercase but no number is invalid", () => {
  const result = checkPassword("password");
  expect(result).toContain("Valid passwords must contain at least 1 number");
  expect(result).toContain(
    "Valid passwords must contain at least one capital letter"
  );
});

test("short passwords are invalid", () => {
  const result = checkPassword("pass");
  expect(result).toContain("Valid passwords are at least 8 characters");
  expect(result).toContain("Valid passwords must contain at least 1 number");
  expect(result).toContain(
    "Valid passwords must contain at least one capital letter"
  );
});
