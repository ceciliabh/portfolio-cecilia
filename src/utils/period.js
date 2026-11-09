const MONTHS = { ene: 0, feb: 1, mar: 2, abr: 3, may: 4, jun: 5, jul: 6, ago: 7, sep: 8, oct: 9, nov: 10, dic: 11 };

// "Oct 2025" -> meses absolutos (año * 12 + mes)
export function parseMonth(label) {
  const [m, y] = label.trim().toLowerCase().split(/\s+/);
  return Number(y) * 12 + MONTHS[m];
}

// Duración legible de un periodo (ambos meses inclusivos)
export function durationLabel(start, end) {
  const total = parseMonth(end) - parseMonth(start) + 1;
  const years = Math.floor(total / 12);
  const months = total % 12;
  const y = years ? `${years} ${years === 1 ? "año" : "años"}` : "";
  const m = months ? `${months} ${months === 1 ? "mes" : "meses"}` : "";
  return [y, m].filter(Boolean).join(" ");
}
