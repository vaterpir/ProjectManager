export const getID = () => Math.floor(Math.random() * 10000000);

export const noAction = () => console.error('not action in props');

export const sortByDateProjects = (projects) =>
  Object.entries(projects).sort(([, prew], [, next]) => {
    return prew.creationDate.date - next.creationDate.date;
  });
