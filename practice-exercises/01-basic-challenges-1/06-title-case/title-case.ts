export function titleCase(str: string): string {
  for (let i = 0; i < str.length; i++) {
    if (str[0]) {
      str[0].toUpperCase();
    } else {
      str[i].toLowerCase();
    }
  }
  return str;
}
