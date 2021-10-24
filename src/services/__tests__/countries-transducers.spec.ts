import { prepareFilterCountries, prepareSorting } from '../countries-transducers';

describe('countries-transducers', () => {
  describe('prepareFilterCountries', () => {
    const mockCountries = [
      {
        ID: '8e5004da-d126-460c-991c-b1e0e5aa4a2d',
        Country: 'Afghanistan',
        CountryCode: 'AF',
        Slug: 'afghanistan',
        NewConfirmed: 0,
        TotalConfirmed: 155940,
        NewDeaths: 0,
        TotalDeaths: 7253,
        NewRecovered: 0,
        TotalRecovered: 0,
        Date: '2021-10-24T13:31:22.733Z',
        Premium: {},
      },
      {
        ID: 'd5f14876-83a7-46ea-9be3-3e41edc5046a',
        Country: 'Albania',
        CountryCode: 'AL',
        Slug: 'albania',
        NewConfirmed: 0,
        TotalConfirmed: 181252,
        NewDeaths: 0,
        TotalDeaths: 2870,
        NewRecovered: 0,
        TotalRecovered: 0,
        Date: '2021-10-24T13:31:22.733Z',
        Premium: {},
      },
      {
        ID: '228d29d7-5b84-4330-8d68-a98f9e51a3d4',
        Country: 'Algeria',
        CountryCode: 'DZ',
        Slug: 'algeria',
        NewConfirmed: 0,
        TotalConfirmed: 205750,
        NewDeaths: 0,
        TotalDeaths: 5886,
        NewRecovered: 0,
        TotalRecovered: 0,
        Date: '2021-10-24T13:31:22.733Z',
        Premium: {},
      },
    ];
    it('should sort countries in alphabetic order', function () {
      const search = '';
      const sorting = {
        sortBy: 'Country',
        sortOrder: 'asc',
      };
      const res = prepareFilterCountries(mockCountries, search, sorting);
      const expected = mockCountries;
      expect(res).toEqual(expected);
    });
    it('should sort countries in alphabetic order in reverse', function () {
      const search = '';
      const sorting = {
        sortBy: 'Country',
        sortOrder: 'desc',
      };
      const res = prepareFilterCountries(mockCountries, search, sorting);
      const expected = [
        {
          ID: '228d29d7-5b84-4330-8d68-a98f9e51a3d4',
          Country: 'Algeria',
          CountryCode: 'DZ',
          Slug: 'algeria',
          NewConfirmed: 0,
          TotalConfirmed: 205750,
          NewDeaths: 0,
          TotalDeaths: 5886,
          NewRecovered: 0,
          TotalRecovered: 0,
          Date: '2021-10-24T13:31:22.733Z',
          Premium: {},
        },
        {
          ID: 'd5f14876-83a7-46ea-9be3-3e41edc5046a',
          Country: 'Albania',
          CountryCode: 'AL',
          Slug: 'albania',
          NewConfirmed: 0,
          TotalConfirmed: 181252,
          NewDeaths: 0,
          TotalDeaths: 2870,
          NewRecovered: 0,
          TotalRecovered: 0,
          Date: '2021-10-24T13:31:22.733Z',
          Premium: {},
        },
        {
          ID: '8e5004da-d126-460c-991c-b1e0e5aa4a2d',
          Country: 'Afghanistan',
          CountryCode: 'AF',
          Slug: 'afghanistan',
          NewConfirmed: 0,
          TotalConfirmed: 155940,
          NewDeaths: 0,
          TotalDeaths: 7253,
          NewRecovered: 0,
          TotalRecovered: 0,
          Date: '2021-10-24T13:31:22.733Z',
          Premium: {},
        },
      ];
      expect(res).toEqual(expected);
    });
    it('should sort countries by numbers', function () {
      const search = '';
      const sorting = {
        sortBy: 'TotalConfirmed',
        sortOrder: 'asc',
      };
      const res = prepareFilterCountries(mockCountries, search, sorting);
      const expected = [
        {
          ID: '8e5004da-d126-460c-991c-b1e0e5aa4a2d',
          Country: 'Afghanistan',
          CountryCode: 'AF',
          Slug: 'afghanistan',
          NewConfirmed: 0,
          TotalConfirmed: 155940,
          NewDeaths: 0,
          TotalDeaths: 7253,
          NewRecovered: 0,
          TotalRecovered: 0,
          Date: '2021-10-24T13:31:22.733Z',
          Premium: {},
        },
        {
          ID: 'd5f14876-83a7-46ea-9be3-3e41edc5046a',
          Country: 'Albania',
          CountryCode: 'AL',
          Slug: 'albania',
          NewConfirmed: 0,
          TotalConfirmed: 181252,
          NewDeaths: 0,
          TotalDeaths: 2870,
          NewRecovered: 0,
          TotalRecovered: 0,
          Date: '2021-10-24T13:31:22.733Z',
          Premium: {},
        },
        {
          ID: '228d29d7-5b84-4330-8d68-a98f9e51a3d4',
          Country: 'Algeria',
          CountryCode: 'DZ',
          Slug: 'algeria',
          NewConfirmed: 0,
          TotalConfirmed: 205750,
          NewDeaths: 0,
          TotalDeaths: 5886,
          NewRecovered: 0,
          TotalRecovered: 0,
          Date: '2021-10-24T13:31:22.733Z',
          Premium: {},
        },
      ];
      expect(res).toEqual(expected);
    });
    it('should sort countries by numbers in reverse order', function () {
      const search = '';
      const sorting = {
        sortBy: 'TotalConfirmed',
        sortOrder: 'desc',
      };
      const res = prepareFilterCountries(mockCountries, search, sorting);
      const expected = [
        {
          ID: '228d29d7-5b84-4330-8d68-a98f9e51a3d4',
          Country: 'Algeria',
          CountryCode: 'DZ',
          Slug: 'algeria',
          NewConfirmed: 0,
          TotalConfirmed: 205750,
          NewDeaths: 0,
          TotalDeaths: 5886,
          NewRecovered: 0,
          TotalRecovered: 0,
          Date: '2021-10-24T13:31:22.733Z',
          Premium: {},
        },
        {
          ID: 'd5f14876-83a7-46ea-9be3-3e41edc5046a',
          Country: 'Albania',
          CountryCode: 'AL',
          Slug: 'albania',
          NewConfirmed: 0,
          TotalConfirmed: 181252,
          NewDeaths: 0,
          TotalDeaths: 2870,
          NewRecovered: 0,
          TotalRecovered: 0,
          Date: '2021-10-24T13:31:22.733Z',
          Premium: {},
        },
        {
          ID: '8e5004da-d126-460c-991c-b1e0e5aa4a2d',
          Country: 'Afghanistan',
          CountryCode: 'AF',
          Slug: 'afghanistan',
          NewConfirmed: 0,
          TotalConfirmed: 155940,
          NewDeaths: 0,
          TotalDeaths: 7253,
          NewRecovered: 0,
          TotalRecovered: 0,
          Date: '2021-10-24T13:31:22.733Z',
          Premium: {},
        },
      ];
      expect(res).toEqual(expected);
    });
    it('should search by country', function () {
      const search = 'Alg';
      const sorting = {
        sortBy: 'TotalConfirmed',
        sortOrder: 'desc',
      };
      const res = prepareFilterCountries(mockCountries, search, sorting);
      const expected = [
        {
          ID: '228d29d7-5b84-4330-8d68-a98f9e51a3d4',
          Country: 'Algeria',
          CountryCode: 'DZ',
          Slug: 'algeria',
          NewConfirmed: 0,
          TotalConfirmed: 205750,
          NewDeaths: 0,
          TotalDeaths: 5886,
          NewRecovered: 0,
          TotalRecovered: 0,
          Date: '2021-10-24T13:31:22.733Z',
          Premium: {},
        },
      ];
      expect(res).toEqual(expected);
    });
    it('should search by total confirmed', function () {
      const search = '20';
      const sorting = {
        sortBy: 'TotalConfirmed',
        sortOrder: 'desc',
      };
      const res = prepareFilterCountries(mockCountries, search, sorting);
      const expected = [
        {
          ID: '228d29d7-5b84-4330-8d68-a98f9e51a3d4',
          Country: 'Algeria',
          CountryCode: 'DZ',
          Slug: 'algeria',
          NewConfirmed: 0,
          TotalConfirmed: 205750,
          NewDeaths: 0,
          TotalDeaths: 5886,
          NewRecovered: 0,
          TotalRecovered: 0,
          Date: '2021-10-24T13:31:22.733Z',
          Premium: {},
        },
      ];
      expect(res).toEqual(expected);
    });
  });
  describe('prepare sorting', () => {
    it('should toggle sorting to desc', function () {
      const sortBy = 'Country';
      const sorting = {
        sortBy: 'Country',
        sortOrder: 'asc',
      };
      const res = prepareSorting(sortBy, sorting);
      const expected = {
        sortBy: 'Country',
        sortOrder: 'desc',
      };
      expect(res).toEqual(expected);
    });
    it('should toggle sorting to asc', function () {
      const sortBy = 'Country';
      const sorting = {
        sortBy: 'Country',
        sortOrder: 'desc',
      };
      const res = prepareSorting(sortBy, sorting);
      const expected = {
        sortBy: 'Country',
        sortOrder: 'asc',
      };
      expect(res).toEqual(expected);
    });
    it('should reset sorting to asc', function () {
      const sortBy = 'TotalConfirmed';
      const sorting = {
        sortBy: 'Country',
        sortOrder: 'asc',
      };
      const res = prepareSorting(sortBy, sorting);
      const expected = {
        sortBy: 'TotalConfirmed',
        sortOrder: 'asc',
      };
      expect(res).toEqual(expected);
    });
  });
});
