type DatedEntry = {
  date?: string;
};

type SortDirection = "ascending" | "descending";

const seasonMonths: Record<string, number> = {
  winter: 1,
  spring: 4,
  summer: 7,
  fall: 10,
  autumn: 10,
};

const getDateValue = (date?: string) => {
  const normalizedDate = date?.trim();

  if (!normalizedDate || /in progress/i.test(normalizedDate)) {
    return null;
  }

  const yearMatch = normalizedDate.match(/\b(\d{4})\b/);
  if (!yearMatch) return null;

  const numericMonthMatch = normalizedDate.match(/\d{4}[-.](\d{1,2})\b/);
  const season = Object.keys(seasonMonths).find((name) =>
    normalizedDate.toLowerCase().includes(name),
  );
  const month = numericMonthMatch
    ? Number(numericMonthMatch[1])
    : season
      ? seasonMonths[season]
      : 0;

  return Number(yearMatch[1]) * 100 + month;
};

export const sortEntriesByDate = <T extends DatedEntry>(
  entries: T[],
  direction: SortDirection,
) =>
  entries
    .map((entry, originalIndex) => ({
      entry,
      originalIndex,
      dateValue: getDateValue(entry.date),
    }))
    .sort((a, b) => {
      if (a.dateValue === null) return b.dateValue === null ? a.originalIndex - b.originalIndex : 1;
      if (b.dateValue === null) return -1;

      const dateComparison =
        direction === "ascending"
          ? a.dateValue - b.dateValue
          : b.dateValue - a.dateValue;

      return dateComparison || a.originalIndex - b.originalIndex;
    })
    .map(({ entry }) => entry);
