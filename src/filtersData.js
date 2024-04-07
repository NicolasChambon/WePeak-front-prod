export default [
  {
    title: { value: 'distance', label: 'Distance' },
    options: [
      { value: '5', label: 'Moins de 5 km' },
      { value: '10', label: 'Moins de 10 km' },
      { value: '20', label: 'Moins de 20 km' },
      { value: '50', label: 'Moins de 50 km' },
      { value: '100', label: 'Moins de 100 km' },
    ],
  },
  {
    title: { value: 'difficulty', label: 'Difficulté' },
    options: [
      { value: 'facile', label: 'Facile' },
      { value: 'moyen', label: 'Moyen' },
      { value: 'difficile', label: 'Difficile' },
    ],
  },
  {
    title: { value: 'groupSize', label: 'Taille du groupe' },
    options: [
      { value: '2-5', label: '5 personnes et moins' },
      { value: '6-10', label: 'Entre 6 et 10 personnes' },
      { value: '11', label: 'Plus de 10 personnes' },
    ],
  },
  {
    title: { value: 'sport', label: 'Sport' },
    options: [
      { value: 'backCountrySkiing', label: 'Ski de randonnée' },
      { value: 'climbing', label: 'Escalade' },
      { value: 'trail', label: 'Trail' },
    ],
  },
];
