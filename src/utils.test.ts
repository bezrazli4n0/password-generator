import { describe, expect, test } from "@jest/globals";
import { PasswordStrength } from "./types";
import {
  getPasswordStrengthIndex,
  getPasswordStrength,
  generatePassword,
  containsMaskChar,
  UPPERCASE_CHARS,
  LOWERCASE_CHARS,
  NUMERIC_CHARS,
  SYMBOLS_CHARS,
} from "./utils";

describe("Password Utils", () => {
  test("Success - get password strength index", () => {
    expect(getPasswordStrengthIndex(PasswordStrength.Low)).toBe(1);
    expect(getPasswordStrengthIndex(PasswordStrength.Medium)).toBe(2);
    expect(getPasswordStrengthIndex(PasswordStrength.Good)).toBe(3);
    expect(getPasswordStrengthIndex(PasswordStrength.High)).toBe(4);
  });

  test("Success - get password strength", () => {
    const lowStrengthPassword = "A";
    const mediumStrengthPassword = "Aa";
    const goodStrengthPassword = "Aa1";
    const highStrengthPassword = "Aa1#";

    expect(getPasswordStrength(lowStrengthPassword)).toBe(PasswordStrength.Low);
    expect(getPasswordStrength(mediumStrengthPassword)).toBe(
      PasswordStrength.Medium
    );
    expect(getPasswordStrength(goodStrengthPassword)).toBe(
      PasswordStrength.Good
    );
    expect(getPasswordStrength(highStrengthPassword)).toBe(
      PasswordStrength.High
    );
  });

  test("Success - generate password and check mask", () => {
    expect(
      containsMaskChar(
        generatePassword(true, false, false, false, 1),
        UPPERCASE_CHARS
      )
    ).toBeTruthy();

    expect(
      containsMaskChar(
        generatePassword(false, true, false, false, 1),
        LOWERCASE_CHARS
      )
    ).toBeTruthy();

    expect(
      containsMaskChar(
        generatePassword(false, false, true, false, 1),
        NUMERIC_CHARS
      )
    ).toBeTruthy();

    expect(
      containsMaskChar(
        generatePassword(false, false, false, true, 1),
        SYMBOLS_CHARS
      )
    ).toBeTruthy();
  });
});
