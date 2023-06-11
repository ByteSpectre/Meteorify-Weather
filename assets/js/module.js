export const weekDayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

export const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

export const getDate = function (dateUnix, timezone) {
  const date = new Date((dateUnix + timezone) * 1000);
  const weekDayName = weekDayNames[date.getUTCDay()];
  const monthName = monthNames[date.getUTCMonth()];

  return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
}

export const getTime = function (timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const period = hours >= 12 ? "PM" : "AM";

  return `${hours % 12 || 12}:${minutes} ${period}`;
}

export const getHours = function (timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const period = hours >= 12 ? "PM" : "AM";

  return `${hours % 12 || 12} ${period}`;
}

export const mps_to_kmh = mps => {
  const mph = mps * 3600;
  return mph / 1000;
}

export const aqiText = {
  1: {
      level: "Good",
      message: "Диапазон показывает, что качество воздуха хорошее и не представляет угрозы для здоровья."
  },
  2: {
      level: "Fair",
      message: "Cредний диапазон и приемлемое качество. Некоторые люди могут испытывать дискомфорт."
  },
  3: {
      level: "Moderate",
      message: "Качество воздуха в этом диапазоне вредно для чувствительных групп. Они испытывают дискомфорт при дыхании."
  },
  4: {
      level: "Poor",
      message: "Диапазон указывает на нездоровое качество воздуха, и люди начинают испытывать такие эффекты, как затрудненное дыхание."
  },
  5: {
      level: "Very Poor",
      message: "Качество воздуха в этом диапазоне очень нездоровое, и в случае чрезвычайных ситуаций могут быть выданы предупреждения о вреде для здоровья. Все люди, вероятно, будут затронуты"
  },
}
