export const splitString = (
  str: string,
  quantityAccentWords: number,
): string[] => {
  const firstWords = str.split(" ").slice(0, quantityAccentWords).join(" ");
  const restOfWords = str.substring(firstWords.length);

  return [firstWords, restOfWords];
};
