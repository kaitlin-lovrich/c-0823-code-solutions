/* exported isVowel */
function isVowel(character) {
  const vowels = /[AEIOU]/;
  return vowels.test(character.toUpperCase());
}
