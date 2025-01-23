import { Translations, getTranslation } from ".";

const translations: Translations = {
  en: {
    "test.message": "This is a test",
  },
  es: {
    "test.message": "Esto es una prueba",
  },
  pt: {
    "test.message": "Isto é um teste",
  },
};

describe("getTranslation", () => {
  it("should return the English translation if no locale is provided", () => {
    const result = getTranslation({ id: "test.message" }, translations);
    expect(result).toBe("This is a test");
  });

  it("should return the English translation for locale 'en'", () => {
    const result = getTranslation({ locale: "en", id: "test.message" }, translations);
    expect(result).toBe("This is a test");
  });

  it("should return the Spanish translation for locale 'es'", () => {
    const result = getTranslation({ locale: "es", id: "test.message" }, translations);
    expect(result).toBe("Esto es una prueba");
  });

  it("should return the Portuguese translation for locale 'pt'", () => {
    const result = getTranslation({ locale: "pt", id: "test.message" }, translations);
    expect(result).toBe("Isto é um teste");
  });

  it("should return the id if no matching translation is found", () => {
    const result = getTranslation({ locale: "en", id: "non.existent.message" }, translations);
    expect(result).toBe("non.existent.message");
  });
});
