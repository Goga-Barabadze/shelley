from pypdf import PdfReader

import requests
import regex
import os

SCIHUB_URLS = [
    "https://sci-hub.st/",
	"https://sci-hub.now.sh/",
	"https://sci-hub.hkvisa.net/",
	"https://www.sci-hub.ru/",
	"https://sci-hub.pages.dev/",
]

CITATION_REGEXES = [
	r"\S.*\.(?=\s)", # AAA
	r".*", # APA
	r".*", # APSA
	r".*", # ASA
	r".*", # Chicago (Turabian) author-date
	r".*", # CSE name-year
	r".*", # Harvard
	r".*", # MLA
	r".*", # ACS
	r".*", # AMA
	r".*", # CSE citation-name or citation-sequence
	r".*", # IEEE
	r".*", # NLM
	r".*", # Vancouver
	r".*", # Bluebook
	r".*", # Chicago (Turiban) notes and bibliography
	r".*", # OSCOLA
]

SHORT_CITATION_REGEXES = [
	r"(?<=\()(?:[A-Za-z,. &\n]{3,}[, \n]{1,}[0-9]{4}[A-Za-z,. 0-9\n;]{0,50}){1,}(?=\))" # e.g. (Name, 2000)
]

DOI_REGEX = r"https:\/\/\n{0,1}doi\.\n{0,1}org\/[\s\S].*\/[\s\S].*"

HEADERS = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'}

def get_text_from_pdf(file_name):
    reader = PdfReader('./data/' + file_name + '.pdf')

    complete_text = ""
    for page in reader.pages:
        complete_text += page.extract_text() + "\n"
    
    return complete_text

def clean_doi(doi):
    doi = doi.replace("\n", "")
    doi = doi.replace("https://doi.org/", "")
    doi = doi.strip()
    return doi

def parse_pdf(name):
    pdf_content = get_text_from_pdf(name)

    with open("./data/" + name + ".txt", "w") as f:
            f.write(pdf_content)

    if (name != "seed"):
        os.remove("./data/" + name + ".pdf")

    dois = regex.findall(DOI_REGEX, pdf_content)
    dois = list(map(clean_doi, dois))

    for doi in dois:
        response = requests.get("https://sci.bban.top/pdf/" + doi + ".pdf", headers=HEADERS)

        if response.status_code != 200:
            continue

        fileSystemSafeDoi = doi.replace(" ", "").replace("/", "")

        with open("./data/" + fileSystemSafeDoi + ".pdf", "wb") as f:
            f.write(response.content)
        
        parse_pdf(fileSystemSafeDoi)

        get_text_from_pdf(fileSystemSafeDoi)


if __name__ == "__main__":
    parse_pdf("seed")
