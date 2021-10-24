import { TCountry, TSort } from '../types';

export const prepareFilterCountries = (
  countries: TCountry[],
  search: string,
  sorting: TSort
): TCountry[] => {
  return countries
    .filter((country) => {
      if (!search) {
        return true;
      }
      if (
        country.Country.toLowerCase().includes(search.toLowerCase()) ||
        country.TotalConfirmed.toString().includes(search)
      ) {
        return true;
      }
    })
    .sort((countryA, countryB) => {
      const a = countryA[sorting.sortBy as keyof TCountry];
      const b = countryB[sorting.sortBy as keyof TCountry];
      if (typeof a === 'string') {
        const res = a.localeCompare(b as string);
        if (res === 0) {
          return 0;
        }
        if (sorting.sortOrder === 'asc') {
          return res;
        } else {
          return res * -1;
        }
      }
      if (a < b) {
        return sorting.sortOrder === 'asc' ? -1 : 1;
      }
      if (a > b) {
        return sorting.sortOrder === 'asc' ? 1 : -1;
      }
      return 0;
    });
};

export const prepareSorting = (sortBy: keyof TCountry, sorting: TSort): TSort => {
  return {
    sortBy,
    sortOrder: sorting.sortBy === sortBy ? (sorting.sortOrder === 'asc' ? 'desc' : 'asc') : 'asc',
  };
};
