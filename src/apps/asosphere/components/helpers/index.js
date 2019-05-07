export const allTrue = obj => {
  for (var o in obj) if (!obj[o]) return false;
  return true;
};
