export const toCapital = (str) => {
    if (typeof str !== 'string' || str.length === 0) {
      return ''; // Retorna una cadena vacía si `str` no es una cadena o está vacía.
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  