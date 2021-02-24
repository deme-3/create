import moment from "moment";
export const intervalGenerator = (datas) => {
  const arr = [];

  const diff =
    moment(datas.end, "HH:mm").diff(moment(datas.start, "HH:mm")) /
    1000 /
    60 /
    60;
  const mins = diff * 60;
  const intervals = mins / datas.interval;

  if (intervals !== Infinity && intervals > 0) {
    let start = moment(datas.start, "HH:mm");

    for (let index = 0; index < intervals; index++) {
      if (index > 0) {
        start.add(datas.interval, "minutes");
      }

      let end = Object.assign(start);

      arr.push({
        start: start.format("HH:mm"),
        startFormated: start.toDate(),

        end: end.add(datas.interval, "minutes").format("HH:mm"),
        endFormated: end.toDate(),

        availability: datas.availability,
        active: true
      });

      start = start.subtract(datas.interval, "minutes");
    }
  }

  return arr;
};
