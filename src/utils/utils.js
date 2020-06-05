const months = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

export const formatTimeStamp = (timeMS = 0) => {
  if (timeMS <= 0) {
    return null;
  } else {
    const date = new Date(timeMS);
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = date.getDate();
    const hour = date.getHours();
    const mins = date.getMinutes();
    const secs = date.getSeconds();
    const ms = date.getMilliseconds();
    const formattedTimestamp = `${year}-${month}-${day} ${hour}:${mins}:${secs}.${ms}`;
    return formattedTimestamp;
  }
};
