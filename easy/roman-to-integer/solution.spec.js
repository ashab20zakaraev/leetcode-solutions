import { expect, describe, it } from "vitest"
import { romanToInt } from "./solution"

describe("Testing RomanToInt method", () => {
  it("if roman string too large", () => {
    expect(romanToInt("IIIIIXXXXMMMMMMMM")).toStrictEqual(0)
  })

  it("if roman string empty", () => {
    expect(romanToInt("")).toStrictEqual(0)
  })

  it.each`
    x                     | expected
    ${"III"}              | ${3}
    ${"LVIII"}            | ${58}
    ${"MCMXCIV"}          | ${1994}
    ${"MMMDCCCLXXXVIII"}  | ${3888}
  `('returns $expected when $x', ({ x, expected }) => {
    expect(romanToInt(x)).toStrictEqual(expected)
  })
})
