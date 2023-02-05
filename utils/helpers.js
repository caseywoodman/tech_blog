module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString("en-US");
  },
  format_date: (date) => {
    const month = date.toLocaleDateString("en-US", { month: "long" }).toUpperCase();
    const day = date.toLocaleDateString("en-US", { day: "numeric" });
    const year = date.toLocaleDateString("en-US", { year: "numeric" });
    return `${month} ${day}, ${year}`;
  },
  format_date_time: (date) => {
    const month = date.toLocaleDateString("en-US", { month: "long" }).toUpperCase();
    const day = date.toLocaleDateString("en-US", { day: "numeric" });
    const year = date.toLocaleDateString("en-US", { year: "numeric" });
    const time = date.toLocaleTimeString("en-US");
    return `${month} ${day}, ${year} AT ${time}`;
  },
  uppercase: (input) => {
    return input.toUpperCase();
  },
};
