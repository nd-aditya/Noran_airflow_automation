export const getCurrentFormattedTime = () => {
  return new Date().toLocaleString("en-US", {
    day: "2-digit",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    month: "short",
  });
};
export const formatDate = (date: Date): string => {
  // Get the year, month, and day components
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const day = String(date.getUTCDate()).padStart(2, "0");

  // Return the formatted date string
  return `${year}-${month}-${day}`;
};
