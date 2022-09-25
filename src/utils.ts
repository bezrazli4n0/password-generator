import { PasswordStrength } from "./types";

export const UPPERCASE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export const LOWERCASE_CHARS = "abcdefghijklmnopqrstuvwxyz";
export const NUMERIC_CHARS = "0123456789";
export const SYMBOLS_CHARS = "!@#$%^&*()_-+=\"'{}?><;:|\\[].,";

export function containsMaskChar(value: string, mask: string): boolean {
  for (const m of mask) {
    for (const v of value) {
      if (m === v) {
        return true;
      }
    }
  }

  return false;
}

export function getPasswordStrengthIndex(strength: PasswordStrength): number {
  switch (strength) {
    case PasswordStrength.Low:
      return 1;
    case PasswordStrength.Medium:
      return 2;
    case PasswordStrength.Good:
      return 3;
    case PasswordStrength.High:
      return 4;
  }
}

// Very naive implementation of password strength determination.
export function getPasswordStrength(password: string): PasswordStrength {
  let bonus = 0;

  if (containsMaskChar(password, UPPERCASE_CHARS)) {
    bonus += 1;
  }

  if (containsMaskChar(password, LOWERCASE_CHARS)) {
    bonus += 1;
  }

  if (containsMaskChar(password, NUMERIC_CHARS)) {
    bonus += 1;
  }

  if (containsMaskChar(password, SYMBOLS_CHARS)) {
    bonus += 1;
  }

  switch (bonus) {
    case 0:
    case 1:
      return PasswordStrength.Low;
    case 2:
      return PasswordStrength.Medium;
    case 3:
      return PasswordStrength.Good;
    case 4:
      return PasswordStrength.High;
    default:
      return PasswordStrength.Low;
  }
}

export function generatePassword(
  useUpperCase: boolean,
  useLowerCase: boolean,
  useNumeric: boolean,
  useSymbols: boolean,
  len: number
): string {
  let password = "";
  let mask = "";

  if (useUpperCase) {
    mask += UPPERCASE_CHARS;
  }

  if (useLowerCase) {
    mask += LOWERCASE_CHARS;
  }

  if (useNumeric) {
    mask += NUMERIC_CHARS;
  }

  if (useSymbols) {
    mask += SYMBOLS_CHARS;
  }

  if (mask === "") {
    throw new Error("Mask is empty!");
  }

  for (let i = 0; i < len; i++) {
    const randomValue = Math.floor(Math.random() * mask.length);
    password += mask[randomValue];
  }

  return password;
}
