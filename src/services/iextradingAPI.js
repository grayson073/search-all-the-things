

const throwJson = json => { throw json; };
const get = url => fetch(url)
  .then(r => r.ok ? r.json() : r.json().then(throwJson));

export function getStockData(sector) {
  console.log('LOADING API RESULTS...');
  return get(`https://api.iextrading.com/1.0/stock/market/collection/sector?collectionName=${sector}`)
    .then(r => console.log(r));
}