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
  en: "I'm Samuel—a creative soul driven by a profound passion for diverse music and the art of sound healing. 🎵 From crafting experimental, alternative, world, and electronic compositions, 🎧 I pour genuine dedication into every endeavor. Alongside my musical pursuits, I delve into programming, seeking to blend technology with creativity to spark innovation and inspiration. 💻 💡 With an unwavering commitment to excellence, I'm on a continuous journey of growth and evolution. Join me as I navigate the ever-expanding horizons of creativity! ✨",
  pl: "Jestem Samuel—kreatywna dusza napędzana głęboką pasją do różnorodnej muzyki i sztuki dźwiękowego uzdrawiania. 🎵 Od tworzenia eksperymentalnych, alternatywnych, światowych i elektronicznych kompozycji, 🎧 wkładam szczere poświęcenie w każde przedsięwzięcie. Oprócz moich muzycznych zainteresowań, zagłębiam się w programowanie, starając się łączyć technologię z kreatywnością, by wywoływać innowacje i inspiracje. 💻 💡 Z niewzruszonym zobowiązaniem do doskonałości, podążam ciągle w dążeniu do rozwoju i ewolucji. Dołącz do mnie, gdy przemierzam nieustannie poszerzające się horyzonty kreatywności! ✨",
  pt: "Eu sou Samuel—uma alma criativa impulsionada por uma paixão profunda pela música diversa e pela arte da cura sonora. 🎵 Da criação de composições experimentais, alternativas, mundiais e eletrônicas, 🎧 dedico-me genuinamente a cada empreendimento. Além dos meus interesses musicais, mergulho na programação, buscando mesclar tecnologia com criatividade para despertar inovação e inspiração. 💻 💡 Com um compromisso inabalável com a excelência, estou em uma jornada contínua de crescimento e evolução. Junte-se a mim enquanto eu navego pelos horizontes em constante expansão da criatividade! ✨",
  jp: "私はサムエル—多様な音楽と音響治療の芸術に深い情熱を持つ創造的な魂です。🎵 実験的、オルタナティブ、ワールド、エレクトロニックな作曲から、🎧 私は全ての取り組みに真剣な情熱を注いでいます。音楽の趣味の傍ら、私はプログラミングにも挑戦し、技術と創造性を融合させて革新とインスピレーションを生み出そうとしています。💻 💡 卓越性への確固たるコミットメントを持ち、私は絶え間ない成長と進化の旅を続けています。創造性の拡大する地平線を航海する私にご一緒に参加してください！✨",
  empty: "",
};

updateTranslations("about.description.0", translations)
