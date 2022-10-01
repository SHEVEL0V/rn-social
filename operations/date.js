/** @format */

export const getTime = (value) => {
  const date = new Date(value);
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "майа",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  const addLeadingZero = (d) => (d < 10 ? "0" + d : d);

  const Y = date.getFullYear();
  const M = months[date.getMonth() + 1];
  const D = addLeadingZero(date.getDate());
  const h = date.getHours();
  const m = date.getMinutes();

  return `${D} ${M} ${Y} | ${h}:${m}`;
};
