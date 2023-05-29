   // Dictionary to store flavor prices
   var flavorPrices = {
    "Classic Milk Tea": 3.50,
    "Taro Milk Tea": 4.00,
    "Matcha Milk Tea": 4.50,
    "Honeydew Milk Tea": 4.00,
    "Thai Milk Tea": 4.50
  };

  var flavors = {}; // Object to store selected flavors and their quantities
  var totalSales = 0; // Variable to store total sales

  function addFlavor(flavor) {
    if (flavors[flavor]) {
      flavors[flavor]++;
    } else {
      flavors[flavor] = 1;
    }
    calculateTotal();
  }

  function calculateTotal() {
    var total = 0;
    for (var flavor in flavors) {
      if (flavors.hasOwnProperty(flavor)) {
        total += flavorPrices[flavor] * flavors[flavor];
      }
    }
    document.getElementById("total").innerText = "Total: $" + total.toFixed(2);
  }

  function printOrder() {
    var printWindow = window.open("", "_blank");
    var orderContent = "<h1>Order Summary</h1>";
    orderContent += "<ul>";
    for (var flavor in flavors) {
      if (flavors.hasOwnProperty(flavor)) {
        orderContent += "<li>" + flavor + " - Quantity: " + flavors[flavor] + "</li>";
      }
    }
    orderContent += "</ul>";
    orderContent += "<h2 id='total'>Total: $" + document.getElementById("total").innerText.split("$")[1] + "</h2>";
    printWindow.document.write(orderContent);
    printWindow.document.close();
    printWindow.print();
  }

  function newTransaction() {
    flavors = {}; // Reset flavors object
    calculateTotal(); // Reset total amount
  }

  function updateTotalSales(amount) {
    totalSales += amount;
    document.getElementById("sales-amount").innerText = "$" + totalSales.toFixed(2);
  }

  function showProfile() {
    // Replace with your profile logic
    alert("Profile");
  }

  function showSales() {
    // Replace with your sales logic
    alert("Sales");
  }

  function showInventory() {
    // Replace with your inventory logic
    alert("Inventory");
  }

  function showSettings() {
    // Replace with your settings logic
    alert("Settings");
  }