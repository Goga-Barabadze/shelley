export function shuffle(array: unknown[]) {
	const cloned = JSON.parse(JSON.stringify(array))

	let currentIndex = cloned.length
  
	while (currentIndex != 0) {
		const randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex--;
  
		[cloned[currentIndex], cloned[randomIndex]] = [cloned[randomIndex], cloned[currentIndex]]
	}

	return cloned
}