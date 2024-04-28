const { promises: fs } = require('fs');
const path = require('path');

async function updateTranslations(pathToUpdate, translations) {
  const dictionariesPath = path.join(__dirname, 'src/dictionaries');
  const languages = Object.keys(translations);

  try {
    for (const lang of languages) {
      const translationFilePath = path.join(dictionariesPath, `${lang}.json`);
      const translationFileContent = await fs.readFile(translationFilePath, 'utf-8');
      const currentTranslation = JSON.parse(translationFileContent);

      let currentLevel = currentTranslation;
      const pathParts = pathToUpdate.split('.');
      for (let i = 0; i < pathParts.length; i++) {
        const key = pathParts[i];
        if (i === pathParts.length - 1) {
          currentLevel[key] = translations[lang];
        } else {
          if (!currentLevel[key]) {
            currentLevel[key] = {};
          }
          currentLevel = currentLevel[key];
        }
      }

      await fs.writeFile(translationFilePath, JSON.stringify(currentTranslation, null, 2));
    }

    console.log('Translations updated successfully!');
  } catch (err) {
    console.error('Error updating translations:', err);
  }
}

// const translations = {
//   en: 'This is testing text in English!',
//   fr: "C'est un texte de test en français!",
//   it: 'Questo è un testo di prova in italiano!',
//   pl: 'To jest tekst testowy po polsku!',
//   es: '¡Este es un texto de prueba en español!',
//   de: 'Dies ist ein Testtext auf Deutsch!',
//   cs: 'Toto je testovací text v češtině!',
//   uk: 'Це тестовий текст українською мовою!',
//   empty: '',
// };

const translations = {
  en: 'Download',
  fr: 'Télécharger',
  it: 'Scarica',
  pl: 'Pobierz',
  es: 'Descargar',
  de: 'Herunterladen',
  cs: 'Stáhnout',
  uk: 'Завантажити',
  empty: '',
};

updateTranslations('common.download', translations);
