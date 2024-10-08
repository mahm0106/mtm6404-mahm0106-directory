function list(clients) {
    return clients.map((client, index) => `
      <li class="list-group-item d-flex justify-content-between" data-index="${index}">
        ${client.name}
        <strong>$${client.balance}</strong>
      </li>
    `).join(''); 
  }
  
  function order(clients, property) {
    return clients.sort((a, b) => {
      if (a[property] < b[property]) {
        return -1;
      } else if (a[property] > b[property]) {
        return 1;
      }
      return 0;
    });
  }
  
  function total(clients) {
    return clients.reduce((sum, client) => sum + client.balance, 0);
};
  
  function info(index) {
    return clients.find((i) => i === index);
  }
  
  function search(query) {
    return clients.filter(client => client.name.toLowerCase().includes(query.toLowerCase())
    );
  }