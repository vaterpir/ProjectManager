export const getID = () => Math.floor(Math.random() * 10000000);

export const sortByDateProjects = (projects) => Object.entries(projects).sort(
  ([, prew], [, next]) => prew.creationDate.date - next.creationDate.date,
);
