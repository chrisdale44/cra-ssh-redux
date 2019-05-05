export const dateRange = (startDate, endDate) => {
  if (!startDate || !endDate) {
    return;
  }
  return `${formatDate(startDate)} - ${formatDate(endDate)}`;
};

const formatDate = date => {
  if (date.toLowerCase() === "present") {
    return date;
  }
  const options = { year: "numeric", month: "long" };
  return new Date(date).toLocaleDateString("en-GB", options);
};
