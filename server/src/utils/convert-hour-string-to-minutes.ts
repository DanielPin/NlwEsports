export function convertHoursStringToMinutes(hourString: string): number {
  const [hours, minutes] = hourString.split(":").map(Number);

  const minutesAmount: number = hours * 60 + minutes;

  return minutesAmount;
}
