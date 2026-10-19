import { STATES_AND_AREAS_DATA } from '../data/southSudanData';

export const exportAdministrativeDataToCsv = () => {
  const headers = [
    'Territory Tier',
    'Territory Name',
    'Region',
    'Special Administrative Area',
    'Capital / HQ',
    'Current Governor / Chief Admin',
    'Assembly Seats',
    'County Name',
    'County HQ',
    'County Type',
    'Payam Name',
    'Sample Bomas'
  ];

  const rows: string[][] = [];

  STATES_AND_AREAS_DATA.forEach(state => {
    state.counties.forEach(county => {
      county.payams.forEach(payam => {
        rows.push([
          state.isSpecialAdministrativeArea ? 'Special Administrative Area' : 'State',
          `"${state.name}"`,
          `"${state.region}"`,
          state.isSpecialAdministrativeArea ? 'Yes' : 'No',
          `"${state.capital}"`,
          `"${state.currentLeaderName}"`,
          state.assemblySeats.toString(),
          `"${county.name}"`,
          `"${county.headquarters}"`,
          `"${county.countyType || 'Rural County'}"`,
          `"${payam.name}"`,
          `"${payam.sampleBomas.join('; ')}"`
        ]);
      });
    });
  });

  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `south_sudan_states_counties_payams_registry_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
