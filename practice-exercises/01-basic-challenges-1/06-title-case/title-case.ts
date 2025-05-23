export function titleCase(str: string): string {
  const strings = str.toLocaleLowerCase().split(' ');

  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i][0].toLocaleUpperCase() + strings[i].slice(1);
  }
  return strings.join(' ');
}
