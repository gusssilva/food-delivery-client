export default function trucateString(str, num) {
  if (str.length <= num)
    return str;
  else
    return str.slice(0, num) + '...';
}
