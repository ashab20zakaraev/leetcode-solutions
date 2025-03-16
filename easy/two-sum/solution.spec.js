import { expect, describe, it } from "vitest"
import { twoSum } from "./solution"

describe("Testing TwoSum method", () => {
  it("check target undefined", () => {
    expect(twoSum([3,2,4])).toStrictEqual([])
  })

  it.each`
    nums            | target  | expected
    ${[2,7,11,15]}  | ${9}    | ${[0,1]}
    ${[3,2,4]}      | ${6}    | ${[1,2]}
    ${[3,3]}        | ${6}    | ${[0,1]}
    ${[]}           | ${6}    | ${[]}
  `('returns $expected when $nums is added $target', ({ nums, target, expected }) => {
    expect(twoSum(nums, target)).toStrictEqual(expected)
  })
})
