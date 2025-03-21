const ROMAN_MAPPER = new Map([
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000],
])

export function romanToInt(romanString) {
  if (!romanString.length || romanString.length > 15) {
    return 0
  }

  let sum = 0

  for (let i = 0; i < romanString.length; i++) {
    if (ROMAN_MAPPER.get(romanString[i]) < ROMAN_MAPPER.get(romanString[i+ 1])) {
      sum -= ROMAN_MAPPER.get(romanString[i])
    } else {
      sum += ROMAN_MAPPER.get(romanString[i])
    }
  }

  return sum
}