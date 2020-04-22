function randomPassword(length) {
    var chars = "ABCDEFGHIJKLMNOP1234567890";
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    return pass;
}

function generate() {
    document.getElementById("po_num").value = randomPassword(myform.length.value);
    //myform.po_num.value = randomPassword(myform.length.value);
    initPo();

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    var today = mm + '/' + dd + '/' + yyyy;

    document.getElementById("date").innerHTML = today;


}

function initPo() {
    
    let cartList = JSON.parse(localStorage.getItem('cartList'));
    let bill1 = JSON.parse(localStorage.getItem('total'));
    document.getElementById('total').innerHTML = "$ " + bill1[0].total;
    document.getElementById('amountPaid').innerHTML = "$ " + bill1[0].total;

    var cartListtableRow = "";
    for (var i = 0; i < cartList.length; i++) {
        if (cartList[i].Quantity != 0) {
            cartListtableRow += "<tr><td>" + cartList[i].productName + "</td>";
            cartListtableRow += "<td style='text-align:center'>" + "<img src=" + cartList[i].img + "\" width=\"48\" height=\"90\"/>" + "</td>";
            cartListtableRow += "<td>" + cartList[i].Price + "</td>";
            cartListtableRow += "<td>" + cartList[i].Quantity + "</td></tr>";
        }

    }

    var tableHead = "<table class=\"product\"> <thead ><tr> <th>Product Name</th> <th>Image</th>"
        + "<th>Price</th><th>Quantity</th></tr></thead > <tbody >";

    var cartListTable = tableHead + cartListtableRow + "</tbody> </table >";
    document.getElementById("poItems").innerHTML = cartListTable;
}
window.init = initPo();


function upDate() {
    var cartListString = sessionStorage.getItem("cartList");
    var cartList = JSON.parse(cartListString);


    var sum = 0;

    for (var i = 0; i < cartList.length; i++) {
        if (document.getElementById("qty" + i) != null) {
            sum += parseInt(document.getElementById("price" + i).value) * parseInt(document.getElementById("qty" + i).value);
            cartList[i].Quantity = parseInt(document.getElementById("qty" + i).value);
        }
    }

    document.getElementById("subTotal").innerHTML = "$" + sum;


    var tax = sum * 0.0825;
    document.getElementById("tax").innerHTML = parseFloat(Math.round(tax * 100) / 100).toFixed(2);;

    var total = sum + tax;
    document.getElementById("total").innerHTML = "$" + total.toFixed(2);

    //store updated cartList to session
    sessionStorage.setItem("cartList", JSON.stringify(cartList));

}
window.int = update();

