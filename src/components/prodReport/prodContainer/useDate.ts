export const useDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const minMonth = "0" + (today.getMonth() - 3);
  const day = ("0" + today.getDate()).slice(-2);
  return `[${year}-${minMonth}-${day},${year}-${month}-${day}]`;
};
