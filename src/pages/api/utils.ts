export function spinalCase(str: string) {
  const replaceCamelCase = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  const replaceSpacesUnderscores = replaceCamelCase.replace(/\s|_/g, '-');
  return replaceSpacesUnderscores.toLowerCase();
}
