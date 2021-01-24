export const sortByDate = (array) => Object.entries(array)
  .sort((item1, item2) => item1[1].date - item2[1].date)
  .reverse()
  .map((item) => item[1]);
