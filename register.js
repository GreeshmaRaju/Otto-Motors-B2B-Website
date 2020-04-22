// JavaScript source code

function User(Username, firstName, LastName, phone, role, company, Membership, SecurityQuestions, Answer, password) {
    this.Username = Username;
    this.firstName = firstName;
    this.LastName = LastName;
    this.phone = phone;
    this.role = role;
    this.company = company;
    this.Membership = Membership;
    this.SecurityQuestions = SecurityQuestions;
    this.Answer = Answer;
    this.password = password;


    this.login = function (inputUsername, inputPwd) {
        if (inputUsername == this.Username) {
            if (inputPwd == this.password) {
                return true;
            }

        }
        return false;

    };
}

let usersobj = [];
let users;
var i;
//localStorage.userdetails = JSON.stringify(userArray);
function UserRegistration() {
    inputUsername = document.getElementById("UserName").value;
    inputPwd = document.getElementById("Password").value;
    firstName = document.getElementById("FirstName").value;
    LastName = document.getElementById("LastName").value;
    phone = document.getElementById("PhoneNO").value;
    role = document.getElementById("Role").value;
    company = document.getElementById("CompanyName").value;
    Membership = document.getElementById("Membership").value;
    SecurityQuestions = document.getElementById("SecurityQuestions").value;
    Answer = document.getElementById("Answer").value;


    let usersobj = {
        username: inputUsername,
        password: inputPwd,
        FirstName: firstName,
        lastName: LastName,
        Phone: phone,
        Role: role,
        Company: company,
        membership: Membership,
        securityQuestions: SecurityQuestions,
        inputAnswer: Answer,
        
    };

    //users.push(usersobj);
    localStorage.userdetail = JSON.stringify(usersobj);

    Membership = document.getElementById("Membership").value;
    msg = "";
    //condition 3
    if (!validateEmail(inputUsername)) {
        alert('Your username must be an email!');
    }
    //condition 1
   else if (firstName.length < 2 || firstName.length > 50) {
        alert('Your First Name must be > 2 chars and < 50 characters!');
    }
    //condition 2
    else if (LastName.length < 2 || LastName.length > 50) {
        alert('Your Last Name must be > 2 chars and < 50 characters!');
    }
   
    //condition 4
    else if (inputUsername.length < 2 || inputUsername.length > 50) {
        alert('Your username must be > 2 chars and < 50 characters!');
    }
    //condition 5
    else if (inputPwd.length < 8 || inputPwd.length > 13) {
        alert('Your password must be > 8 chars and < 13 characters!');
    }
    //condition 6
    else if (!validatePassword(inputPwd))
        alert('the password must contains at least one lower letter, one up letter, one number, and one special character from the following 7 characters !@#\$%\^&\*');

    //condition 7 for any of them blank
    else if (inputUsername.length == "" || inputPwd.length == "" || firstName.length == "" || LastName.length == "" || phone == "" || role == "" || company == "") {
        alert('Please fill in all the fields.');
        return;
    }
    ////phone no.
    //if (!telephoneCheck(phone)) {
    //    alert('Enter 10 digit number');
    //    return false;

    //}

    //condition 8 For existing users
    else if (inputUsername == "adam@gmail.com" || inputUsername == "mike@gmail.com" || inputUsername == "naina@gmail.com" || inputUsername == "peter@gmail.com" || inputUsername == "hary@gmail.com" || inputUsername == "anny@gmail.com" || inputUsername == "vivek@gmail.com" || inputUsername == "esha@gmail.com" || inputUsername == "fedry@gmail.com" || inputUsername == "james@gmail.com" || inputUsername == "John@gmail.com" || inputUsername == "mery@gmail.com" || inputUsername == "kathy@gmail.com" || inputUsername == "kamal@gmail.com" || inputUsername == "mickey@gmail.com" || inputUsername == "charlie@gmail.com" || inputUsername == "chandu@gmail.com" || inputUsername == "nikil@gmail.com" || inputUsername == "naveen@gmail.com" ) {
        alert('Username already exist!')
    }
    //for security question
   /* if (CheckOn(SecurityQuestions)) {
        alert('Please select any of the question. So we can help you when you forgot your password.');
    }*/
    //anser
    else if (Answer == "") {
        msg = "You need to give answer of selected question";
    }
    else {

        msg = "Congartulations!!  Registration Successful."
        window.location.replace("productmgmt.html"); 

    }
    ////////////////////////////////////////////////
    document.getElementById("warningMsg").innerHTML = msg;
    // localStorage.userdetails = JSON.stringify(userArray);
    //init();
}
/*function init() {

   // document.getElementById('tableRow').innerHTML = '';
    if (localStorage.userdetails) {
        userArray = JSON.parse(localStorage.userdetails);
        for (let i in userArray) {
          //  tablecell(
				i,
				userArray[i].Username,
				userArray[i].firstName,
				userArray[i].LastName,
				userArray[i].phone,
                userArray[i].role,
                userArray[i].company,
                userArray[i].Membership,
                userArray[i].password,
               
			//)
        }
    }


}*/
    
   

function validatePassword(password) {
    var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return re.test(password);
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function check() {
    var dropdown = document.getElementById("Role");
    var current_value = dropdown.options[dropdown.selectedIndex].value;
    if (current_value == "Supplier") {

        document.getElementById("companyText").style.display = "block";
    }
    else {

        document.getElementById("companyText").style.display = "none";
    }
}
