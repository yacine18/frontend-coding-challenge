
const dateOffset = 24 * 60 * 60 * 1000 * 30;
const todayDate = new Date();
todayDate.setTime(todayDate.getTime() - dateOffset);
const year = todayDate.getFullYear();
const month =
  todayDate.getMonth() + 1 < 10
    ? "0" + (todayDate.getMonth() + 1)
    : todayDate.getMonth() + 1;
const day = todayDate.getDate();

export const getDate = () => {
  return "created:>" + year + "-" + month + "-" + day;
};
