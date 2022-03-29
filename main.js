const stringLength = string => {
  if (string.length < 1 || string.length > 10) {
    return null;
  }
  return string.length;
}

module.exports = stringLength