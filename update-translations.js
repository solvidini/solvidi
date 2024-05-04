const { promises: fs } = require("fs")
const path = require("path")

async function updateTranslations(pathToUpdate, translations) {
	const dictionariesPath = path.join(__dirname, "src/dictionaries")
	const languages = Object.keys(translations)

	try {
		for (const lang of languages) {
			const translationFilePath = path.join(dictionariesPath, `${lang}.json`)
			const translationFileContent = await fs.readFile(
				translationFilePath,
				"utf-8",
			)
			const currentTranslation = JSON.parse(translationFileContent)

			let currentLevel = currentTranslation
			const pathParts = pathToUpdate.split(".")
			for (let i = 0; i < pathParts.length; i++) {
				const key = pathParts[i]
				if (i === pathParts.length - 1) {
					currentLevel[key] = translations[lang]
				} else {
					if (!currentLevel[key]) {
						currentLevel[key] = {}
					}
					currentLevel = currentLevel[key]
				}
			}

			await fs.writeFile(
				translationFilePath,
				JSON.stringify(currentTranslation, null, 2),
			)
		}

		console.log("Translations updated successfully!")
	} catch (err) {
		console.error("Error updating translations:", err)
	}
}

// const translations = {
// 	en: "Latest releases",
// 	pl: "Najnowsze wydania",
// 	pt: "Últimos lançamentos",
// 	jp: "最新リリース",
// 	empty: "",
// }

// const translations = {
// 	en: "",
// 	pl: "",
// 	pt: "",
// 	jp: "",
// 	empty: "",
// }

const translations = {
  en: "Listen to the latest releases",
  pl: "Posłuchaj ostatnich wydań",
  pt: "Ouça os últimos lançamentos",
  jp: "最新リリースを聴く",
  empty: "",
};

updateTranslations("music.listen", translations)
