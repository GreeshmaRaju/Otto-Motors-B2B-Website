// supplier and distributor script

﻿$(document).ready(function () {
	$(".suppIn").fadeOut()
	$(".distIn").fadeOut()
	$(".supp").click(function () {
		$(".dist").animate({
			height: 'toggle'
		});
		$(".suppIn").fadeToggle()
	});
	$(".dist").click(function () {
		$(".supp").animate({
			height: 'toggle'
		});
		$(".suppIn").fadeToggle()
	});
});


//javascript format for validation of signup page

function user(userName, firstName, lastName, phone, role, password, company, pwdQuestionArray) {
    this.userName = userName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.role = role;
    this.password = password;
    this.company = company;
    this.pwdQuestionArray = pwdQuestionArray;
    this.validate = function (inputUname, inputPwd) {
        if (this.userName === inputUname) {
            if (this.password === inputPwd) {
                return true;
            }
            else return false;
        }
        else return false;
    };
}

var Q11 = new Question("Q1", "Kathy"); var Q12 = new Question("Q2", "Houston"); var Q13 = new Question("Q3", "John");
var Q21 = new Question("Q1", "Kathy"); var Q22 = new Question("Q2", "Houston"); var Q23 = new Question("Q3", "John");
var Q31 = new Question("Q1", "Kathy"); var Q32 = new Question("Q2", "Houston"); var Q33 = new Question("Q3", "John");
var Q41 = new Question("Q1", "Kathy"); var Q42 = new Question("Q2", "Houston"); var Q43 = new Question("Q3", "John");
var Q51 = new Question("Q1", "Kathy"); var Q52 = new Question("Q2", "Houston"); var Q53 = new Question("Q3", "John");
var Q61 = new Question("Q1", "Kathy"); var Q62 = new Question("Q2", "Houston"); var Q63 = new Question("Q3", "John");
var Q71 = new Question("Q1", "Kathy"); var Q72 = new Question("Q2", "Houston"); var Q73 = new Question("Q3", "John");
var Q81 = new Question("Q1", "Kathy"); var Q82 = new Question("Q2", "Houston"); var Q83 = new Question("Q3", "John");
var Q91 = new Question("Q1", "Kathy"); var Q92 = new Question("Q2", "Houston"); var Q93 = new Question("Q3", "John");
var Q101 = new Question("Q1", "Kathy"); var Q102 = new Question("Q2", "Houston"); var Q103 = new Question("Q3", "John");


var user1_questionArray = [Q11, Q12, Q13];
var user2_questionArray = [Q21, Q22, Q23];
var user3_questionArray = [Q31, Q32, Q33];
var user4_questionArray = [Q41, Q42, Q43];
var user5_questionArray = [Q51, Q52, Q53];
var user6_questionArray = [Q61, Q62, Q63];
var user7_questionArray = [Q71, Q72, Q73];
var user8_questionArray = [Q81, Q82, Q83];
var user9_questionArray = [Q91, Q92, Q93];
var user10_questionArray = [Q101, Q102, Q103];

var userList = [];

window.onload = function () {
    var userListJSON = localStorage.getItem("userList");
    //if (userListJSON != null) {
    //    userList = JSON.parse(userListJSON);
    //}
    //else {
    //super admin
    priya = new user("aa@aa.com", "Priya", "MP", "414-930-6748", "SuperAdmin", "1234", "Actron", user1_questionArray);
    //Buyer admins
    nafiya = new user("bb@bb.com", "Nafiya", "Shaik", "414-748-6291", "BuyerAdmin", "1234", "Berkleey", user2_questionArray);
    naina = new user("naina@gmail.com", "Naina", "Kora", "232-930-6748", "BuyerAdmin", "1234", "Klett", user3_questionArray);
    john = new user("john@gmail.com", "John", "Abhraham", "123-567-8901", "BuyerAdmin", "1234", "abhraham", user3_questionArray);
	greeshma = new user("greeshma@gmail.com", "greeshma", "g", "4444444444", "BuyerAdmin", "1234", "Berkleey", user2_questionArray);
    madhu = new user("madhu@gmail.com", "madhu", "m", "1111111111", "BuyerAdmin", "1234", "Berkleey", user2_questionArray);
    fara = new user("fara@gmail.com", "fara", "f", "2222222222", "BuyerAdmin", "1234", "Berkleey", user2_questionArray);
    anu = new user("anu@gmail.com", "anu", "a", "3333333333", "BuyerAdmin", "1234", "Berkleey", user2_questionArray);
    pallavi = new user("pallavi@gmail.com", "pallavi", "p", "5555555555", "BuyerAdmin", "1234", "Berkleey", user2_questionArray);
    paati = new user("paati@gmail.com", "paati", "p", "1234567899", "BuyerAdmin", "1234", "Berkleey", user2_questionArray);
    gayathri = new user("gayathri@gmail.com", "gayathri", "g", "6666655555", "BuyerAdmin", "1234", "Berkleey", user2_questionArray);
    krishna = new user("rohithkrishna123@gmail.com", "krishna", "k", "5555555555", "BuyerAdmin", "1234", "Berkleey", user2_questionArray);



    //supplier admins
    kenny = new user("kenny@gmail.com", "Kenny", "Roy", "930-6748-412", "SupplierAdmin", "1234", "BMW", user4_questionArray);
    peter = new user("peter@gmail.com", "Peter", "John", "249-930-9581", "SupplierAdmin", "1234", "MERCEDES", user5_questionArray);
    ammu = new user("ammu@gmail.com", "ammu", "Roy", "930-6748-612", "SupplierAdmin", "1234", "NISSAN", user4_questionArray);
    kranthi = new user("kranthi@gmail.com", "kranthi", "k", "938-6748-612", "SupplierAdmin", "1234", " VOLVO", user4_questionArray);
    varsha = new user("varsha@gmail.com", "varsha", "v", "930-6733-612", "SupplierAdmin", "1234", "ZOOM CAR", user4_questionArray);
    mohith = new user("mohith@gmail.com", "mohith", "m", "830-6748-612", "SupplierAdmin", "1234", "UBER", user4_questionArray);
    sagar = new user("sagar@gmail.com", "sagar", "s", "930-6666-612", "SupplierAdmin", "1234", "HONDA", user4_questionArray);
    rikith = new user("rikith@gmail.com", "rikith", "r", "930-6866-612", "SupplierAdmin", "1234", "CHEVORLET", user4_questionArray);

    //regular users
    hary = new user("hary@gmail.com", "Hary", "Mike", "414-435-3292", "Buyer", "1234", "CHEVORLET", user6_questionArray);
    anny = new user("anny@gmail.com", "Anny", "Jack", "414-930-6748", "Buyer", "1234", "CHEVORLET", user7_questionArray);
    pavan = new user("pavan@gmail.com", "pavan", "p", "417-435-3292", "Buyer", "1234", "CHEVORLET", user6_questionArray);
    anvitha = new user("anvitha@gmail.com", "anvitha", "R", "234-789-3232", "Buyer", "1234", "CHEVORLET", user8_questionArray);
    surag = new user("surag@gmail.com", "surag", "s", "417-435-3244", "Buyer", "1234", "CHEVORLET", user6_questionArray);
    ranbir = new user("ranbir@gmail.com", "ranbir", "kapoor", "417-465-3282", "Buyer", "1234", "CHEVORLET", user6_questionArray);
    deepika = new user("deepika@gmail.com", "deepika", "d", "417-632-3292", "Buyer", "1234", "VOLVO", user6_questionArray);
    nikhil = new user("nikhil@gmail.com", "nikhil", "anvitha", "417-675-3292", "Buyer", "1234", "VOLVO", user6_questionArray);
    mohammad = new user("mohammad@gmail.com", "mohammad", "m", "517-435-3292", "Buyer", "1234", "VOLVO", user6_questionArray);
    karishma = new user("karishma@gmail.com", "karishma", "k", "417-435-3542", "Buyer", "1234", "VOLVO", user6_questionArray);
    jaya = new user("jaya@gmail.com", "jaya", "j", "417-469-3292", "Buyer", "1234", "VOLVO", user6_questionArray);
    manju = new user("manju@gmail.com", "manju", "m", "417-435-9090", "Buyer", "1234", "VOLVO", user6_questionArray);
    alkeya = new user("alkeya@gmail.com", "alkeya", "R", "234-799-3232", "Buyer", "1234", "BMW", user8_questionArray);
    naziya = new user("naziya@gmail.com", "naziya", "n", "234-789-3332", "Buyer", "1234", "BMW", user8_questionArray);
    vishaal = new user("vishaal@gmail.com", "vishaal", "v", "234-788-3232", "Buyer", "1234", "BMW", user8_questionArray);
    rajeev = new user("rajeev@gmail.com", "rajeev", "R", "238-789-3232", "Buyer", "1234", "BMW", user8_questionArray);
    rakesh = new user("rakesh@gmail.com", "rakesh", "R", "234-789-3732", "Buyer", "1234", "NISSAN", user8_questionArray);
    karthik = new user("karthik@gmail.com", "karthik", "k", "234-700-3232", "Buyer", "1234", "NISSAN", user8_questionArray);
    mary = new user("mary@gmail.com", "mary", "m", "141-789-3232", "Buyer", "1234", "NISSAN", user8_questionArray);
    venkat = new user("venkat@gmail.com", "venkat", "v", "141-789-8232", "Buyer", "1234", "NISSAN", user8_questionArray);
    amulya = new user("amulya@gmail.com", "amulya", "a", "141-787-3232", "Buyer", "1234", "UBER", user8_questionArray);
    sun = new user("sun@gmail.com", "sun", "s", "141-581-3232", "Buyer", "1234", "HONDA", user8_questionArray);
    aishu = new user("aishu@gmail.com", "aishu", "a", "541-789-3232", "Buyer", "1234", "HONDA", user8_questionArray);
    asha = new user("asha@gmail.com", "asha", "a", "141-789-3632", "Buyer", "1234", "HONDA", user8_questionArray);
    deepak = new user("deepak@gmail.com", "deepak", "d", "141-789-3832", "Buyer", "1234", "HONDA", user8_questionArray);
    manasa = new user("manasa@gmail.com", "manasa", "m", "841-789-3232", "Buyer", "1234", "ZOOM CAR", user8_questionArray);
    geetha = new user("geetha@gmail.com", "geetha", "g", "141-789-3202", "Buyer", "1234", "ZOOM CAR", user8_questionArray);
    guru = new user("guru@gmail.com", "guru", "g", "141-789-3932", "Buyer", "1234", "ZOOM CAR", user8_questionArray);
    inara = new user("inara@gmail.com", "inara", "i", "741-789-3232", "Buyer", "1234", "ZOOM CAR", user8_questionArray);
    jeelu = new user("jeelu@gmail.com", "jeelu", "j", "141-709-3332", "Buyer", "1234", "ZOOM CAR", user8_questionArray);
    kav = new user("kav@gmail.com", "kav", "k", "941-789-3232", "Buyer", "1234", "MERCEDES", user8_questionArray);
    keerthi = new user("keerthi@gmail.com", "keerthi", "k", "941-789-3232", "Buyer", "1234", "MERCEDES", user8_questionArray);
    lav = new user("lav@gmail.com", "lav", "l", "832-438-0233", "Buyer", "1234", "MERCEDES", user8_questionArray);
    likki = new user("likki@gmail.com", "likki", "l", "832-430-0233", "Buyer", "1234", "MERCEDES", user8_questionArray);
    mahadev = new user("mahadev@gmail.com", "mahadev", "m", "832-738-0233", "Buyer", "1234", "MERCEDES", user8_questionArray);
    manu = new user("manu@gmail.com", "manu", "l", "830-438-0233", "Buyer", "1234", "MERCEDES", user8_questionArray);
    muskan = new user("muskan@gmail.com", "muskan", "m", "832-438-8233", "Buyer", "1234", "MERCEDES", user8_questionArray);
    navi = new user("navi@gmail.com", "navi", "n", "832-408-0233", "Buyer", "1234", "MERCEDES", user8_questionArray);
    rahul = new user("rahul@gmail.com", "rahul", "r", "832-418-0233", "Buyer", "1234", "MERCEDES", user8_questionArray);
    sarath = new user("sarath@gmail.com", "sarath", "s", "832-436-0233", "Buyer", "1234", "MERCEDES", user8_questionArray);
    arun = new user("arun@gmail.com", "arun", "a", "832-478-0233", "Buyer", "1234", "MERCEDES", user8_questionArray);
    anirudh = new user("anirudh@gmail.com", "anirudh", "a", "932-438-0233", "Buyer", "1234", "HONDA", user8_questionArray);
    roshan = new user("roshan@gmail.com", "roshan", "r", "832-498-0233", "Buyer", "1234", "HONDA", user8_questionArray);
    charan = new user("charan@gmail.com", "charan", "c", "132-438-0233", "Buyer", "1234", "HONDA", user8_questionArray);
    amar = new user("amar@gmail.com", "amar", "a", "832-438-4233", "Buyer", "1234", "HONDA", user8_questionArray);
    zoheb = new user("zoheb@gmail.com", "zoheb", "z", "830-438-0233", "Buyer", "1234", "HONDA", user8_questionArray);
    rishi = new user("rishi@gmail.com", "rishi", "r", "832-468-0233", "Buyer", "1234", "HONDA", user8_questionArray);
    aditya = new user("aditya@gmail.com", "aditya", "a", "904-888-6417", "Buyer", "1234", "HONDA", user8_questionArray);
    mahesh = new user("mahesh@gmail.com", "mahesh", "m", "906-888-6417", "Buyer", "1234", "HONDA", user8_questionArray);
    sitara = new user("sitara@gmail.com", "sitara", "s", "904-888-7417", "Buyer", "1234", "ZOOM CAR", user8_questionArray);
    teju = new user("teju@gmail.com", "teju", "t", "904-878-6417", "Buyer", "1234", "ZOOM CAR", user8_questionArray);
    gautham = new user("gautham@gmail.com", "gautham", "g", "904-788-6417", "Buyer", "1234", "ZOOM CAR", user8_questionArray);
    nithin = new user("nithin@gmail.com", "nithin", "n", "804-888-6417", "Buyer", "1234", "ZOOM CAR", user8_questionArray);
    vijay = new user("vijay@gmail.com", "vijay", "v", "904-808-6817", "Buyer", "1234", "ZOOM CAR", user8_questionArray);


    //suppliers
    nasmeera = new user("cc@cc.com", "nasmeera", "Saliha", "414-345-6732", "Supplier", "1234", " ZOOM CAR", user9_questionArray);
    gre = new user("gre@gmail.com", "gree", "madhu", "414-345-6732", "Supplier", "1234", "Toyota", user9_questionArray);

    mery = new user("mery@gmail.com", "Mery", "Michael", "414-969-8956", "Supplier", "1234", "ZOOM CAR", user10_questionArray);
    shahid = new user("shahid@gmail.com", "shahid", "Michael", "414-999-8956", "Supplier", "1234", " HONDA", user10_questionArray);
    jhoshna = new user("jhoshna@gmail.com", "jhoshna", "j", "414-969-8906", "Supplier", "1234", "MERCEDES ", user10_questionArray);
    jyo = new user("jyo@gmail.com", "jyo", "j", "414-569-0956", "Supplier", "1234", "BMW", user10_questionArray);
    userList = [priya, nafiya, naina, john, greeshma, madhu, fara, anu, pallavi, paati, gayathri, krishna, kenny, peter, ammu, kranthi, varsha, mohith, sagar,
        rikith, hary, anny, pavan, anvitha, surag, ranbir, deepika, nikhil, mohammad, karishma, jaya, manju, alkeya, naziya, vishaal, rajeev, rakesh, karthik,
        mary, venkat, amulya, sun, aishu, asha, deepak, manasa, geetha, guru, inara, jeelu, kav, keerthi, lav,
        likki, mahadev, manu, muskan, navi, rahul, sarath, arun, anirudh, roshan, charan, amar, zoheb, rishi, aditya, mahesh, sitara, teju, gautham, nithin, vijay, nasmeera, gre,mery,shahid, jhoshna, jyo];
        localStorage.setItem("userList", JSON.stringify(userList));
   // }
}




function clickCounter() {

    login();
    if (typeof (Storage) !== "undefined") {
        if (sessionStorage.clickcount && sessionStorage.clickcount != '4' && sessionStorage.clickcount >= '1') {
            sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;

        }
        else if (sessionStorage.clickcount == 4) {
            document.getElementById("warningMsg").innerHTML = "You have entered the wrong password 5 time(s) in this session. So your account is locked.";
            btnLogin.disabled = true;
        }
        else {
            sessionStorage.clickcount = 1;
            // document.getElementById("warningMsg").innerHTML = "Username and password pair not found";

        }
        //document.getElementById("warningMsg").innerHTML = "You have clicked the button " + sessionStorage.clickcount + " time(s) in this session.";
    }
    else {
        document.getElementById("warningMsg").innerHTML = "Sorry, your browser does not support web storage...";

    }



}


function login() {

    var inputUserName = document.getElementById("txtUsername").value;
    var inputPassword = document.getElementById("txtPassword").value;
    var msg = "";
    msg = loginValid(inputUserName, inputPassword);
    document.getElementById("warningMsg").innerHTML = msg;

}


//validate whether the input username is email
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//validate whether the password meets the requirements

function validatePassword(password) {
    var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return re.test(password);
}

//checking login of user


function loginValid(user, pwd) {
    var mmm = "";
    var userRole = "";
    var userFoundFlag = false;
    for (i = 0; i < userList.length; i++) {

        if (userList[i].userName == user && pwd == userList[i].password) {
            mmm = "Login is Successfull";
            userFoundFlag = true;
            navUser = userList[i].userName;
            navUserRole = userList[i].role;
            sessionStorage.setItem("userdetails", JSON.stringify(userList[i]));
            //datastring = sessionStorage.getItem("userdetails");
            //data = JSON.parse(datastring);

            //   // document.writeln(data["userName"]);

            userPage(navUser, navUserRole);

            break;


        }
    }
    if (!userFoundFlag) {
        mmm = "Username and password pair not found";


        return mmm;

    }

    //Navigate to user page based on the user role

    function userPage(user, role) {
        var msg = "";
        if (role === "SuperAdmin") {
            sessionStorage.setItem("user", JSON.stringify(user));
            sessionStorage.setItem("role", JSON.stringify(role));
            sessionStorage.setItem("userdetails", JSON.stringify(userList[i]));
            //window.localStorage.setItem("mail", JSON.stringify(user));
            window.location.replace("./user.html");

        }
        else if (role === "BuyerAdmin") {
            sessionStorage.setItem("user", JSON.stringify(user));
            sessionStorage.setItem("role", JSON.stringify(role));
            //window.localStorage.setItem("mail", JSON.stringify(user));
            sessionStorage.setItem("userdetails", JSON.stringify(userList[i]));
            window.location.replace("./user.html");
        }
        else if (role === "SupplierAdmin") {
            sessionStorage.setItem("user", JSON.stringify(user));
            sessionStorage.setItem("role", JSON.stringify(role));
            //window.localStorage.setItem("mail", JSON.stringify(user));
            sessionStorage.setItem("userdetails", JSON.stringify(userList[i]));
            window.location.replace("./company_management.html");
        }
        else if (role === "Buyer") {
            sessionStorage.setItem("user", JSON.stringify(user));
            sessionStorage.setItem("role", JSON.stringify(role));
            sessionStorage.setItem("userdetails", JSON.stringify(userList[i]));
            sessionStorage.setItem("userdetails", JSON.stringify(userList[i]));
            window.location.replace("./user.html");

        }
        else if (role === "Supplier") {
            sessionStorage.setItem("user", JSON.stringify(user));
            sessionStorage.setItem("role", JSON.stringify(role));
            sessionStorage.setItem("userdetails", JSON.stringify(userList[i]));
            sessionStorage.setItem("userdetails", JSON.stringify(userList[i]));
            window.location.replace("../company_management.html");

        }



    }

}

function Question(QuestionNo, Key) {
    this.QuestionNo = QuestionNo;
    this.Key = Key;
}

//forgot password
function forgotPassword() {
    var userName = document.getElementById("txtUsername").value;
    if (userName.length != 0) {
        var modal = document.getElementById('myModal');

        // Get the button that opens the modal
        var btn = document.getElementById("btnForgotPwd");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal
        btn.onclick = function () {
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }


    if (userName.length === 0) {
        var msg = "Your username is empty!";
        document.getElementById("warningMsg").innerHTML = msg;
        return;
				
    }
    else {
        userFoundFlag = false;
        for (var i = 0; i < userList.length; i++) {
            if (userList[i].userName == userName) {
                userFoundFlag = true;
                btnForgotPwd.disabled = false;
                sessionStorage.setItem("currentUser", JSON.stringify(userList[i]));

            }
        }
        if (!userFoundFlag) {
            var msg = "User is not found!";
            document.getElementById("warningMsg").innerHTML = msg;
            btnForgotPwd.disabled = true;
            return;
        }
    }

}

//Reset Password

function resetPassword() {
    userString = sessionStorage.getItem("currentUser");
    user = JSON.parse(userString);
    questionArray = user.pwdQuestionArray;

    var ddl = document.getElementById("questionList");
    var selectedQuestion = ddl.options[ddl.selectedIndex].value;

    for (var i = 0; i < questionArray.length; i++) {
        if (questionArray[i].QuestionNo == selectedQuestion) {
            if (questionArray[i].Key == document.getElementById("passwordAnswer").value) {
                var msg = "Congratulation! We have sent you a password via email!";
                document.getElementById("msg").innerHTML = msg;
                return;
            }
        }
    }
    var msg = "Sorry your answer is wrong, please try again!";
    document.getElementById("msg").innerHTML = msg;

}
