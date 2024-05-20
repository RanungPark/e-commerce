export const findParam = (regex: RegExp, url: string) => {
  const match = url.match(regex);
  if (match) {
    const word = match[1];
    return word;
  } else {
    console.log('No match found');
  }
};
