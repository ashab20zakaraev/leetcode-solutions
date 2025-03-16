import { expect, describe, it } from "vitest"
import { palindromeNumber } from "./solution"

describe("Testing PalindromeNumber method", () => {
  it.each`
    x        | expected
    ${121}   | ${true}
    ${-121}  | ${false}
    ${10}    | ${false}
  `('returns $expected when $x', ({ x, expected }) => {
    expect(palindromeNumber(x)).toStrictEqual(expected)
  })
})
