interface Report {
  total: number;
  odds: number[];
  evens: number[];
  range: number[];
  average: number;
}

function getRangeReport(start: number, end: number): Report {
  const report: Report = {
    total: 0,
    odds: [],
    evens: [],
    range: [],
    average: 0,
  };

  const range: number = 0;
  for (let i = start; i < end; i++) {
    range.push(start + end);
  }
  return i;
}
