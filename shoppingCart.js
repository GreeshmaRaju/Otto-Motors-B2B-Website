console.log("Welcome to shopping cart");

function deleteRow(btn, index) {
    var row = btn.parentNode.parentNode;
    var r = confirm("Are you sure you wish to remove this item from your Shopping Cart?");
    if (r == true) {
        row.parentNode.removeChild(row);
    }
    deleteItem(index);
    upDate();
}

function deleteItem(index) {
    var cartListString = localStorage.getItem("cartList");
    var cartList = JSON.parse(cartListString);
    var cartListNew = new Array(cartList.length - 1);
    var counter = 0;
    for (var i = 0; i < cartList.length; i++) {
        if (i != index)
            cartListNew[counter++] = cartList[i];
    }
    localStorage.setItem("cartList", JSON.stringify(cartListNew));
}


function upDate() {
    var cartListString = localStorage.getItem("cartList");
    var cartList = JSON.parse(cartListString);

    var sum = 0;

    for (var i = 0; i < cartList.length; i++) {
        if (document.getElementById("qty" + i) != null) {
            sum += parseInt(document.getElementById("Price" + i).value) * parseInt(document.getElementById("qty" + i).value);
            cartList[i].Quantity = parseInt(document.getElementById("qty" + i).value);
        }
    }

    document.getElementById("subTotal").innerHTML = "$" + sum;


    var tax = sum * 0.0825;
    document.getElementById("tax").innerHTML = "$" + parseFloat(Math.round(tax * 100) / 100).toFixed(2);

    var total = sum + tax;
    document.getElementById("total").innerHTML = "$" + total.toFixed(2);
    console.log(total);
    let totalsession = [{ total: total.toFixed(2) }];
    localStorage.setItem('total', JSON.stringify(totalsession));
    //store updated cartList to session
    localStorage.setItem("cartList", JSON.stringify(cartList));
   
}


function init() {
    localStorage.getItem("productcart");
    var cartList = [];
  
    cartListString = localStorage.getItem("productcart");
    if (cartListString!=null)
        cartList = JSON.parse(cartListString);
    else {

        var Speedometer = new Product("Speedometer", 150, 100, "Caterpillar", "Speedometer Odometer-Speedometer ");
        var Tyres = new Product("Tyres", 180, 10, "Michellin", "Michellin Size:P185/65r15 Serv.Desc:84W");
        var Headlight = new Product("Headlight", 680, 20, "American Locomotive", "Silverado 1500/2500/3500 New Headlights Set Driver Left Passenger Right Pair Assembly");
        var Engines = new Product("Engines", 1000, 50, "Michellin", " Michellin Dodge Challenger 3.5L Engine Timing Belt Tensioner TBT1150A -22");
        var Dashboard = new Product("Dashboard", 1600, 25, "Caterpillar", "Caterpillar 9' Mech - Less In - Dash System For Full - Size GM Trucks - I209 - GM");
        var Paint = new Product("Paint", 800, 15, "Michellin", "Color Coat - Plastic & Vinyl Flexible Coating, Medium Dark Pewter, 12 oz. Aerosol");
        var Brakes = new Product("Brakes", 650, 5, "Caterpillar", "Power Stop Autospecialty Brake Kits - KOE2385");

        //function Product(productName, Price, Inventory, Supplier, Description) {
        //    this.productName = productName;
        //    this.Price = Price;
        //    this.Inventory = Inventory;
        //    this.Supplier = Supplier;
        //    this.Description = Description;
        //}

        cartList = [Speedometer, Tyres, Engines, Dashboard];
        localStorage.setItem("cartList", JSON.stringify(cartList));
    }
    localStorage.setItem("cartList", JSON.stringify(cartList));

    var tableHeader = "<thead><tr><th>Product Name</th><th>Image</th><th>Price</th><th>Quantity</th><th>Remove</th></tr></thead>";
    var tableBody = "";

    for (var i = 0; i < cartList.length; i++) {
        //render items
        tableBody += "<tr><td>" + cartList[i].productName + "</td>";
        tableBody += "<td>" + "<img src=\"" + cartList[i].img + "\" width=\"48\" height=\"90\"/>" + "</td>";
        tableBody += "<td><input id=\"Price" + i + "\" type=\"hidden\" value=\"" + cartList[i].Price + "\" /> $" + cartList[i].Price + ".00</td>";
        tableBody += "<td><input id=\"qty" + i + "\" class='form-control' type=\"number\" value=\"" + cartList[i].Quantity + "\" min=\"1\" max=\"99\" width: 10px alt=\"edit\" width=\"5\" height=\"15\"></td>";
        tableBody += "<td><a href='#' onclick='deleteRow(this," + i + ")'><i class='fa fa-trash-o' style='font- size:60px; color: red'></i></a></td></tr>";
    }


    var table = "<table class='table table-striped'>" + tableHeader + tableBody + "</table>";

    document.getElementById("newCart").innerHTML = table;
    upDate();
}

window.init = init();
console.log("Shopping cart js loaded");
