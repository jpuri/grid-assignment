export function getCountryData() {
  var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(',');
  var data = [];
  for (var i = 0; i < 6; i++) {
    data.push({
      id: i + 1,
      country: countries[i % countries.length],
      date: new Date(2014, i % 12, i % 28),
      amount: Math.random() * 10000,
      active: i % 4 === 0
    });
  }
  return data;
}
