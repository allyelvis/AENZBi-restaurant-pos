document.addEventListener('DOMContentLoaded', () => {
  const contentContainer = document.getElementById('content-container');

  document.getElementById('orders').addEventListener('click', () => loadContent('orders.html'));
  document.getElementById('sales').addEventListener('click', () => loadContent('sales.html'));
  document.getElementById('tables').addEventListener('click', () => loadContent('tables.html'));
  document.getElementById('users').addEventListener('click', () => loadContent('users.html'));
  document.getElementById('config').addEventListener('click', () => loadContent('config.html'));
  document.getElementById('items').addEventListener('click', () => loadContent('items.html'));
  document.getElementById('stock').addEventListener('click', () => loadContent('stock.html'));
  document.getElementById('inventory').addEventListener('click', () => loadContent('inventory.html'));
  document.getElementById('reports').addEventListener('click', () => loadContent('reports.html'));
  document.getElementById('itemMenu').addEventListener('click', () => loadContent('itemMenu.html'));
  document.getElementById('accounting').addEventListener('click', () => loadContent('accounting.html'));
  document.getElementById('suppliers').addEventListener('click', () => loadContent('suppliers.html'));
  document.getElementById('customers').addEventListener('click', () => loadContent('customers.html'));
  document.getElementById('taxes').addEventListener('click', () => loadContent('taxes.html'));
  document.getElementById('retail').addEventListener('click', () => loadContent('retail.html'));

  function loadContent(page) {
    fetch(page)
      .then(response => response.text())
      .then(html => {
        contentContainer.innerHTML = html;
      })
      .catch(error => {
        console.error('Error loading content:', error);
        contentContainer.innerHTML = '<p>Error loading content. Please try again later.</p>';
      });
  }
});
