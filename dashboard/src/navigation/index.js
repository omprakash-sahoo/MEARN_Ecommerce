import { allNav } from "./allNav";

export const getNav = (role) => {
  const finalNav = [];
  for (let index = 0; index < allNav.length; index++) {
    if (role == allNav[index].role) {
      finalNav.push(allNav[index]);
    }
  }
  return finalNav;
};
