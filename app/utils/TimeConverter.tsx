export function timeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();

  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals: [number, string][] = [
    [60, 'second'],
    [60, 'minute'],
    [24, 'hour'],
    [7, 'day'],
    [4.34524, 'week'],
    [12, 'month'],
    [Number.MAX_VALUE, 'year'],
  ];

  let counter = seconds;
  let unit = 'second';

  for (let i = 0; i < intervals.length - 1; i++) {
    if (counter < intervals[i][0]) {
      unit = intervals[i][1];
      break;
    }
    counter = counter / intervals[i][0];
    unit = intervals[i + 1][1];
  }

  const value = Math.floor(counter);
  return `${value} ${unit}${value !== 1 ? 's' : ''} ago`;
}
