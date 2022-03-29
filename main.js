const stringLength = string => {
  if (string.length < 1 || string.length > 10) {
    throw new Error('errore in string length');
  }
  return string.length;
}
module.exports = stringLength;