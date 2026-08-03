export const SEASONS = {
  winter: {
    months: [11, 0, 1], // Dec, Jan, Feb 
    particleColors: ['#a5c9ff', '#e0f0ff', '#ffffff'],
    nameColors: ['#a5c9ff', '#e0f0ff'], 
    sideMenuColor: ['#a5c9ff', '#e0f0ff'], //
    cardColor: '',
    activeCardColor: '',
    accentColors: ['#a5c9ff', '#e0f0ff'],
  },
  spring: {
    months: [2, 3, 4],
    particleColors: ['#ffb7d5', '#b6f2b6', '#fff59d'],
    nameColors: ['#a5c9ff', '#e0f0ff'],
    sideMenuColor: ['#ffb7d5', '#ffb7d5'], //
    cardColor: '',
    activeCardColor: '',
    accentColors: ['#a5c9ff', '#e0f0ff'],
  },
  summer: {
    months: [5, 6, 7],
    backgroundImage: 'beach-5.png',
    //particleColors: ['#A5DEF3', '#06232D', '#4ecdc4'],
    particleColors: ['#a5c9ff', '#e0f0ff', '#ffffff'],
    aboutColors: ['#a5c9ff', '#e0f0ff'],
    sideMenuColor: ['#ffb7d5', '#ffb7d5'],
    cardColor: '',
    activeCardColor: '',
    accentColors: ['#a5c9ff', '#e0f0ff'],
},
autumn: {
    backgroundImage: 'yellow-leaves.jpg',
    months: [8, 9, 10],
    nameColors: ['#a5c9ff', '#e0f0ff'],
    sideMenuColor: ['#ef4444', '#fecaca'], //
    cardColor: '',
    activeCardColor: '',
    accentColors: ['#a5c9ff', '#e0f0ff'],
  },
};

export const getCurrentSeason = (date = new Date()) => {
  const month = date.getMonth();
  return Object.keys(SEASONS).find(season =>
    SEASONS[season].months.includes(month)
  );
};

export const getSeasonTheme = (date = new Date()) => {
  const season = getCurrentSeason(date);
  return SEASONS[season];
};