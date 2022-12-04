/**
 * "Count the number of hours in a year that are not weekends or holidays."
 *
 * The function takes two arguments:
 *
 * @param {number} `year`: a number representing the year
 * @param {string[]} `holidays`: an array of strings representing the holidays
 *
 * The function returns a number representing the number of hours in the year that are not weekends or
 * holidays
 * @param year - the year to calculate the hours for
 * @param holidays - an array of strings, each representing a holiday in the format 'MM/DD'
 * @returns The number of hours in a year.
 */
export default function countHours (year, holidays) {
  let hours = 0
  for (const holiday of holidays) {
    const date = new Date(`${holiday}/${year}`)
    const isLeap = new Date(date).getDate() === 29
    const isWeekday = date.getDay() > 0 && date.getDay() < 6

    if (!(isLeap || isWeekday)) continue
    hours += 2
  }
  return hours
}
