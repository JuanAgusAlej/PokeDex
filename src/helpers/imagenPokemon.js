export const indiceImagen = (index, sum) => {
    index += sum;
    if (index < 9) {
      return "00" + (index + 1);
    } else if (index < 99) {
      return "0" + (index + 1);
    } else {
      return index + 1;
    }
  };