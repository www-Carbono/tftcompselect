export const convertText = (textToConvert: string) => {
  const finalArray: string[] = [];
  const textArray = textToConvert.split(' ');

  textArray.forEach((element) => {
    const a = element.split('TFT')[1];
    if (a) {
      const b = a.replace(/\d+_/g, ''); // Usa la expresión regular correcta
      finalArray.push(b);
    }
  });

  return finalArray.join().replaceAll(',', ' ').replaceAll(/\s\s+/g, ' '); // Cambié textArray a finalArray para devolver el array modificado
};
