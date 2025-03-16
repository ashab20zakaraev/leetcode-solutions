export function palindromeNumber(x) {
	if (x < 0) return false

	const number = String(x).split("")

	let end = number.length - 1

	for (let i = 0; i < number.length; i++) {
		if (number[i] !== number[end]) return false

		end--
	}

	return true
};