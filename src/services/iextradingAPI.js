

const throwJson = json => { throw json; };
const get = url => fetch(url)
  .then(r => r.ok ? r.json() : r.json().then(throwJson));

export function getSectorData(sector) {
  return get(`https://api.iextrading.com/1.0/stock/market/collection/sector?collectionName=${sector}`);
}

export function getStockData(symbol) {
  return get(`https://api.iextrading.com/1.0/stock/${symbol}/batch?types=company,book,news,chart`);
}
