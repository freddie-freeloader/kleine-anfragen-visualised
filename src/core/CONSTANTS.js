export const PARTY_GROUPS = [
  ['AfD', 'ABW', 'BMV', 'Freie Wähler/BMV'],
  ['FDP', 'FDP/DVP'],
];

export const SORTED_PARTIES = [
  'NPD',
  'BIW',
  'Freie Wähler/BMV',
  'BMV',
  'ABW',
  'AfD',
  'BVB/FW',
  'FW',
  'Freie Wähler',
  'FDP/DVP',
  'FDP',
  'CSU',
  'CDU/CSU',
  'CDU',
  'SPD',
  'SSW',
  'Bündnis 90/Die Grünen',
  'Piraten',
  'Die Linke',
  'fraktionslos',
];

export const COLOR = new Map([
  ['NPD', 'hsl(37, 64%, 45%)'],
  ['BIW', 'hsl(37, 64%, 45%)'],
  ['Freie Wähler/BMV', 'hsl(208, 61%, 45%)'],
  ['BMV', 'hsl(208, 61%, 45%)'],
  ['ABW', 'hsl(208, 61%, 45%)'],
  ['AfD', 'hsl(208, 61%, 45%)'],
  ['BVB/FW', 'hsl(28, 97%, 48%)'],
  ['FW', 'hsl(28, 97%, 48%)'],
  ['Freie Wähler', 'hsl(28, 97%, 48%)'],
  ['FDP/DVP', 'hsl(43, 91%, 68%)'],
  ['FDP', 'hsl(48, 81%, 62%)'],
  ['CSU', 'hsl(0, 0%, 30%)'],
  ['CDU/CSU', 'hsl(0, 0%, 30%)'],
  ['CDU', 'hsl(0, 0%, 30%)'],
  ['SPD', 'hsl(4, 61%, 45%)'],
  ['SSW', 'hsl(242, 13%, 45%)'],
  ['Bündnis 90/Die Grünen', 'hsl(107, 44%, 45%)'],
  ['Piraten', 'hsl(28, 97%, 48%)'],
  ['Die Linke', 'hsl(283, 30%, 48%)'],
  ['fraktionslos', 'hsl(242, 13%, 45%)'],
]);

export const LIGHT_COLOR = new Map([
  ['NPD', 'hsl(36, 64%, 86%)'],
  ['BIW', 'hsl(36, 64%, 86%)'],
  ['Freie Wähler/BMV', 'hsl(208, 60%, 86%)'],
  ['BMV', 'hsl(208, 60%, 86%)'],
  ['ABW', 'hsl(208, 60%, 86%)'],
  ['AfD', 'hsl(208, 60%, 86%)'],
  ['BVB/FW', 'hsl(28, 97%, 86%)'],
  ['FW', 'hsl(28, 97%, 86%)'],
  ['Freie Wähler', 'hsl(28, 97%, 86%)'],
  ['FDP/DVP', 'hsl(43, 91%, 86%)'],
  ['FDP', 'hsl(48, 87%, 91%)'],
  ['CSU', 'hsl(0, 0%, 86%)'],
  ['CDU/CSU', 'hsl(0, 0%, 86%)'],
  ['CDU', 'hsl(0, 0%, 86%)'],
  ['SPD', 'hsl(4, 81%, 86%)'],
  ['SSW', 'hsl(245, 13%, 81%)'],
  ['Bündnis 90/Die Grünen', 'hsl(106, 44%, 86%)'],
  ['Piraten', 'hsl(28, 97%, 86%)'],
  ['Die Linke', 'hsl(281, 31%, 86%)'],
  ['fraktionslos', 'hsl(245, 13%, 81%)'],
]);

export const LABEL_POSITIONS = new Map([
  ['baden-wurttemberg-16', [
    { party: 'AfD', row: 0 },
    { party: 'FDP/DVP', row: 1 },
    { party: 'CDU', row: 0 },
    { party: 'SPD', row: 0 },
    { party: 'Bündnis 90/Die Grünen', row: 0 },
  ]],
  ['baden-wurttemberg-15', [
    { party: 'FDP/DVP', row: 1 },
    { party: 'CDU', row: 0 },
    { party: 'SPD', row: 0 },
    { party: 'Bündnis 90/Die Grünen', row: 0 },
  ]],
  ['bayern-17', [
    { party: 'Freie Wähler', row: 1 },
    { party: 'CSU', row: 0 },
    { party: 'SPD', row: 0 },
    { party: 'Bündnis 90/Die Grünen', row: 0 },
  ]],
  ['brandenburg-6', [
    { party: 'AfD', row: 0 },
    { party: 'CDU', row: 0 },
    { party: 'SPD', row: 0 },
    { party: 'Bündnis 90/Die Grünen', row: 1 },
    { party: 'Die Linke', row: 0 },
  ]],
  ['bremen-19', [
    { party: 'FDP', row: 0 },
    { party: 'CDU', row: 0 },
    { party: 'SPD', row: 0 },
    { party: 'Bündnis 90/Die Grünen', row: 0 },
    { party: 'Die Linke', row: 0 },
  ]],
  ['hessen-19', [
    { party: 'FDP', row: 0 },
    { party: 'CDU', row: 0 },
    { party: 'SPD', row: 0 },
    { party: 'Bündnis 90/Die Grünen', row: 1 },
    { party: 'Die Linke', row: 0 },
  ]],
  ['mecklenburg-vorpommern-7', [
    { party: 'AfD', row: 0 },
    { party: 'CDU', row: 0 },
    { party: 'Die Linke', row: 0 },
  ]],
  ['mecklenburg-vorpommern-6', [
    { party: 'NPD', row: 0 },
    { party: 'CDU', row: 0 },
    { party: 'SPD', row: 0 },
    { party: 'Bündnis 90/Die Grünen', row: 1 },
    { party: 'Die Linke', row: 0 },
  ]],
  ['saarland-15', [
    { party: 'CDU', row: 0 },
    { party: 'SPD', row: 0 },
    { party: 'Bündnis 90/Die Grünen', row: 2 },
    { party: 'Piraten', row: 1 },
    { party: 'Die Linke', row: 0 },
  ]],
  ['saarland-14', [
    { party: 'FDP', row: 0 },
    { party: 'CDU', row: 0 },
    { party: 'SPD', row: 0 },
    { party: 'Bündnis 90/Die Grünen', row: 1 },
    { party: 'Die Linke', row: 0 },
  ]],
  ['sachsen-6', [
    { party: 'AfD', row: 0 },
    { party: 'CDU', row: 0 },
    { party: 'SPD', row: 0 },
    { party: 'Bündnis 90/Die Grünen', row: 1 },
    { party: 'Die Linke', row: 0 },
  ]],
  ['sachsen-anhalt-7', [
    { party: 'AfD', row: 0 },
    { party: 'CDU', row: 0 },
    { party: 'SPD', row: 0 },
    { party: 'Bündnis 90/Die Grünen', row: 1 },
    { party: 'Die Linke', row: 0 },
  ]],
  ['sachsen-anhalt-6', [
    { party: 'CDU', row: 0 },
    { party: 'SPD', row: 0 },
    { party: 'Bündnis 90/Die Grünen', row: 1 },
    { party: 'Die Linke', row: 0 },
  ]],
  ['schleswig-holstein-19', [
    { party: 'AfD', row: 0 },
    { party: 'FDP', row: 0 },
    { party: 'CDU', row: 0 },
    { party: 'SPD', row: 0 },
    { party: 'SSW', row: 1 },
    { party: 'Bündnis 90/Die Grünen', row: 0 },
  ]],
  ['schleswig-holstein-18', [
    { party: 'FDP', row: 0 },
    { party: 'CDU', row: 0 },
    { party: 'SPD', row: 0 },
    { party: 'SSW', row: 2 },
    { party: 'Bündnis 90/Die Grünen', row: 1 },
    { party: 'Piraten', row: 0 },
  ]],
  ['thuringen-6', [
    { party: 'AfD', row: 0 },
    { party: 'CDU', row: 0 },
    { party: 'SPD', row: 0 },
    { party: 'Bündnis 90/Die Grünen', row: 1 },
    { party: 'Die Linke', row: 0 },
  ]],
]);
