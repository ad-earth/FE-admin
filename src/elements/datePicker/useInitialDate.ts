export const useInitialDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month1 = "0" + today.getMonth();
  const month2 = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);
  return [`${year}-${month1}-${day}`, `${year}-${month2}-${day}`];
};
