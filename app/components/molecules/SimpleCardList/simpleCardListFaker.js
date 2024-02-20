const getRandomName = () => {
  const names = [
    'John',
    'Jane',
    'Alice',
    'Bob',
    'Eva',
    'Michael',
    'Sophia',
    'David',
    'Olivia',
    'William',
  ];
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
};

export const simpleCardsArray = Array.from({length: 10}, (_, index) => ({
  image: require('../../../assets/images/profimg.jpg'),
  name: getRandomName(),
}));
