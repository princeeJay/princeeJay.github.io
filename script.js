   //login
   function login(event) {
    event.preventDefault(); // Prevent form submission
  
    // Perform validation and authentication
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Check if credentials are valid (replace with your authentication logic)
    if (username === "admin" && password === "password") {
      // Redirect to new transaction page
      window.location.href = "Pos.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  }
  
   
   
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


    document.addEventListener("DOMContentLoaded", showProfile);

    function showProfile() {
      // Example data, replace with your own logic to retrieve user profile data
      var userProfile = {
        name: "Jacob Opinion",
        email: "prince@example.com",
        phone: "123-456-7890",
        address: "123 Street, City, State, ZIP"
      };

      var profileContent = "<h2>Profile Information</h2>";
      profileContent += "<p><strong>Name:</strong> " + userProfile.name + "</p>";
      profileContent += "<p><strong>Email:</strong> " + userProfile.email + "</p>";
      profileContent += "<p><strong>Phone:</strong> " + userProfile.phone + "</p>";
      profileContent += "<p><strong>Address:</strong> " + userProfile.address + "</p>";

      var profileContainer = document.getElementById("profile-container");
      profileContainer.innerHTML = profileContent;
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