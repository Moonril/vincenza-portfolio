export const SEASONS = {
  winter: {
    months: [11, 0, 1], 

    bannerImage: 'beach-5.png', 

    particleColors: ['#99C2FF', '#0aaec4', '#0a2fc4'], 

    nameColors: ['#0a2fc4', '#0aaec4'],
    titlesColor: '#0aaec4', 
    textColor: '#0aaec4', 

    sideMenuColor: ['#0052CC', '#0aaec4'], 

    cardColor: '#0aaec4', 
    hoverCardColor: '#0052CC',  
    highlightColor: '#86efac',
    hoverHighlightColor: '#22d3ee',

    skillColor: '#0aaec4',
  },
  spring: {
    months: [2, 3, 7],
    
    bannerImage: 'beach-5.png', 

    particleColors: ['#de37a1', '#610dd6'], 

    nameColors: ['#d60d50', '#d60d72'],
    titlesColor: '#c40a48', 
    textColor: '#c40a48', 

    sideMenuColor: ['#7F0099', '#E566FF'], 

    cardColor: '#c40a48', 
    hoverCardColor: '#E566FF',  
    highlightColor: '#86efac',
    hoverHighlightColor: '#22d3ee',

    skillColor: '#d60d72',
    
  },
  summer: {
    months: [5, 6, 8],
 
    bannerImage: 'beach-5.png', 

    particleColors: ['#42f5aa', '#04631a'], 

    nameColors: ['#04631a', '#42f5aa'],
    titlesColor: '#04631a', 
    textColor: '#09d99d', 

    sideMenuColor: ['#04631a', '#42f5aa'], 

    cardColor: '#094ed9', 
    hoverCardColor: '#09d99d',  
    highlightColor: '#86efac',
    hoverHighlightColor: '#22d3ee',

    skillColor: '#42f5aa',
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