// list(): uses map() to return an HTML string for all clients
function list(clients) {
  return clients
    .map(
      (client, index) => `
      <li class="list-group-item d-flex justify-content-between" data-index="${index}">
        ${client.name}
        <strong>$ ${client.balance}</strong>
      </li>`
    )
    .join('');
}

// order(): uses sort() to return a new array of clients sorted by a given property
function order(clients, property) {
  return [...clients].sort((a, b) => {
    if (typeof a[property] === 'string') {
      return a[property].localeCompare(b[property]); // alphabetical sort
    }
    return a[property] - b[property]; // numeric sort
  });
}

// total(): uses reduce() to return the total balance of all clients
function total(clients) {
  return clients.reduce((sum, client) => sum + client.balance, 0);
}

// info(): uses find() to return a single client object based on its index
function info(index) {
  const idx = Number(index);
  return clients.find((client, i) => i === idx);
}

// search(): uses filter() to return clients whose names include the search query
function search(query) {
  const lower = query.toLowerCase();
  return clients.filter(client => client.name.toLowerCase().includes(lower));
}


