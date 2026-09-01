const rows = 5;

for (let i = 1; i <= rows; i++) {
  let starLine = '';
  for (let j = 0; j < i; j++) {
    starLine += '*';
  }
  console.log(starLine);
}