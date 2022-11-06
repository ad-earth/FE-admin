export const useToday = () => {
  let now = new Date();
  return now.toISOString().substring(0, 10);
};
