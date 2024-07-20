// Randomize negative data by negating statements
const fs = require("fs")
const pdf = require("pdf-parse")
const https = require("https")

export type CSV_ENTRY = {
	statement: string;
	isCorrect: boolean;
	source: string;
}

export const DOI_REGEX = /https:\/\/\n{0,1}doi\.\n{0,1}org\/[\s\S].*\/[\s\S].*/g

export const CITATION_REGEXES = [
	/\S.*\.(?=\s)/g, // AAA
	/.*/g, // APA
	/.*/g, // APSA
	/.*/g, // ASA
	/.*/g, // Chicago (Turabian) author-date
	/.*/g, // CSE name-year
	/.*/g, // Harvard
	/.*/g, // MLA
	/.*/g, // ACS
	/.*/g, // AMA
	/.*/g, // CSE citation-name or citation-sequence
	/.*/g, // IEEE
	/.*/g, // NLM
	/.*/g, // Vancouver
	/.*/g, // Bluebook
	/.*/g, // Chicago (Turiban) notes and bibliography
	/.*/g, // OSCOLA
]

export const SHORT_CITATION_REGEXES = [
	/(?<=\()(?:[A-Za-z,. &\n]{3,}[, \n]{1,}[0-9]{4}[A-Za-z,. 0-9\n;]{0,50}){1,}(?=\))/g // e.g. (Name, 2000)
]

export const SCIHUB_URLS = [
	"https://sci-hub.st/",
	"https://sci-hub.now.sh/",
	"https://sci-hub.hkvisa.net/",
	"https://www.sci-hub.ru/",
	"https://sci-hub.pages.dev/",
]

const dataBuffer = fs.readFileSync("./scripts/data/seed.pdf")
const rawData = await pdf(dataBuffer)

const dois = rawData.text.match(DOI_REGEX)
	.map((doi) => doi.replace("\n", ""))
	.map((doi) => doi.replace(" ", ""))

// CITATION_REGEXES.forEach(citationRegex => {
// 	if (String(citationRegex) === String(/.*/g)) return

// 	console.log(rawData.text.match(citationRegex))
// })

SHORT_CITATION_REGEXES.forEach(regex => {
	const shortCitations = rawData.text.match(regex)
		.map((shortCitation) => shortCitation.replace("\n", ""))
		.map((shortCitation) => shortCitation.replace("see ", ""))
		.map((shortCitation) => shortCitation.replace("also ", ""))
		.map((shortCitation) => shortCitation.replace("e.g., ", ""))
		.map((shortCitation) => shortCitation.replace("  ", " "))
		.map((shortCitation) => shortCitation.trim())

	// console.log(shortCitations)
})

dois.forEach(async element => {
	const doi = element.replace("https://doi.org/", "")
	const linkToPDF = `https://sci.bban.top/pdf/${doi}.pdf`
	
	const localPath = doi
		.replaceAll("/", "")
		.replaceAll("-", "")
		.replaceAll("(", "")
		.replaceAll(")", "")
		.replaceAll(".", "")
	
	https.get(linkToPDF, response => {
		const stream = fs.createWriteStream(`./scripts/data/${localPath}.pdf`)
		response.pipe(stream)
	}).on("error", () => fs.unlink(localPath))

	await new Promise(r => setTimeout(r, 2000))
})
