export const clearString = (string: string) => {
  const data = [];
  const stringcleaned = string.split('&');
  stringcleaned.forEach((element) => {
    data.push(element.split('_')[1]);
  });
  return data.join(' ');
};
