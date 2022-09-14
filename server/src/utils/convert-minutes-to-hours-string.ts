export function convertMinutesToHoursString(minutesAmount: number): string {
  const hours: number = Math.floor(minutesAmount / 60);
  const minutes: number = minutesAmount % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}`;
}
