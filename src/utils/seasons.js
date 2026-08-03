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
 
    bannerImage: 'beach-5.png', 

    particleColors: ['#f2233a', '#f99768'], 

    nameColors: ['#C8005B', '#ef4444'],
    titlesColor: '#ea580c', 
    textColor: '#f97316', 

    sideMenuColor: ['#ef4444', '#fecaca'], 

    cardColor: '#854d0e', 
    hoverCardColor: '#991b1b',  
    highlightColor: '#86efac',
    hoverHighlightColor: '#22d3ee',

    skillColor: '#7c2d12',
},
autumn: {
    months: [8, 9, 10],

    bannerImage: 'yellow-leaves.jpg', 

    particleColors: ['#f2233a', '#f99768'], 

    nameColors: ['#C8005B', '#ef4444'],
    titlesColor: '#ea580c', 
    textColor: '#f97316', 

    sideMenuColor: ['#ef4444', '#fecaca'], 

    cardColor: '#854d0e', 
    hoverCardColor: '#991b1b',  
    highlightColor: '#86efac',
    hoverHighlightColor: '#22d3ee',

    skillColor: '#7c2d12',
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