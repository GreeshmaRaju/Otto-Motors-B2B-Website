let userList = [];
let selectIndex = -1;
let clickedArray;
let select;

let index;
function init() {


    document.getElementById('tableRow').innerHTML = '';
    if (!localStorage.userRecords) {
        data();
    }
    if (localStorage.userRecords) {
        allUserList = JSON.parse(localStorage.userRecords);
        sameCompanyUserList = [];
        //filter out users only belongs to same company
        currentUser = JSON.parse(sessionStorage.getItem('userdetails'));
        if (currentUser.role != "SuperAdmin") {
            for (i = 0; i < allUserList.length; i++) {
                if (currentUser.company == allUserList[i].company) {
                    sameCompanyUserList.push(allUserList[i]);
                }
            }
        }
        else
            sameCompanyUserList = allUserList;   

        for (let i in sameCompanyUserList) {
            tablecell(
                i,
                sameCompanyUserList[i].userName,
                sameCompanyUserList[i].firstName,
                sameCompanyUserList[i].lastName,
                sameCompanyUserList[i].phone,
                sameCompanyUserList[i].role,
                sameCompanyUserList[i].company
                
            )
        }
        
    }

    onUserRole(sameCompanyUserList.length);
    //check the role
    //document.getElementById('username').innerHTML = 'Welcome ' + company[0].name;(for heading welcome xxxxx)
   
}


function data() {

    var userListJSON = localStorage.getItem("userList");
    if (userListJSON != null) {
        userList = JSON.parse(userListJSON);
    }
    
    localStorage.setItem('userRecords', JSON.stringify(userList));
}

function addCompany() {



    userName = document.getElementById('username').value;
    firstName = document.getElementById('firstname').value;
    lastName = document.getElementById('lastname').value;
    phone = document.getElementById('phone').value;
    role = document.getElementById('role').value;
    company = document.getElementById('companys').value;
    




    if (ValidateEmail(userName) && validName(firstName) && telephoneCheck(phone) && validRole(role) && validCompany(company)) {

        let companyobj = {
            userName: userName,
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            role: role,
            company: company,
            

        };


        if (selectIndex === -1) {
            sameCompanyUserList.push(companyobj);
        } else {
            sameCompanyUserList.slice(selectedIndex, 1, companyobj);
        }

        localStorage.userRecords = JSON.stringify(sameCompanyUserList);
        init();
        onclear();
        
    }

}

function tablecell(index, userName, firstName, lastName, phone, role, company) {



    let table = document.getElementById('tableRow');
    let row = table.insertRow();

    let companyusernamecell = row.insertCell(0);
    let companyfirstnamecell = row.insertCell(1);
    let companylastnamecell = row.insertCell(2);
    let companyphonecell = row.insertCell(3);
    let companyrolecell = row.insertCell(4);
    let companycompanyscell = row.insertCell(5);
    let editcell = row.insertCell(6);
    let deletecell = row.insertCell(7);
    



    companyusernamecell.innerHTML = userName;
    companyfirstnamecell.innerHTML = firstName;
    companylastnamecell.innerHTML = lastName;
    companyphonecell.innerHTML = phone;
    companyrolecell.innerHTML = role;
    companycompanyscell.innerHTML = company;
    

    deletecell.innerHTML = '<input type="submit" id="deletebtn" class="btn btn-danger deletebtnclass" onclick="onDelete(' + index + ')" value="Delete">';
    editcell.innerHTML = '<input type="submit" id="editbtn" class="btn editbtnclass" data-toggle="modal" data-target="#EditBookModal" onclick="onEdit(' + index + ')" value="Edit">';

}


function onDelete(index) {
    var result = confirm("Are you sure you want to delete this user?");
    if (result) {
        //Logic to delete the item


        sameCompanyUserList.splice(index, 1);

        localStorage.userRecords = JSON.stringify(sameCompanyUserList);

        init();
    }
}

function onEdit(index) {
    let currentCompany = sameCompanyUserList[index];
    clickedArray = index;
    document.getElementById('hiddentValue').value = clickedArray;
    document.getElementById('editusername').value = currentCompany.userName;
    document.getElementById('editfirstname').value = currentCompany.firstName;
    document.getElementById('editlastname').value = currentCompany.lastName;
    document.getElementById('editphone').value = currentCompany.phone;
    document.getElementById('editrole').value = currentCompany.role;
    document.getElementById('editcompanys').value = currentCompany.company;
    

}

function onclear() {
    document.getElementById('username').value = "";
    document.getElementById('firstname').value = "";
    document.getElementById('lastname').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('role').value = "";
    document.getElementById('companys').value = "";
    
}

function onSaveEdit() {

    clickedArray = document.getElementById('hiddentValue').value
    userName = document.getElementById('editusername').value;
    firstName = document.getElementById('editfirstname').value;
    lastName = document.getElementById('editlastname').value;
    phone = document.getElementById('editphone').value;
    role = document.getElementById('editrole').value;
    company = document.getElementById('editcompanys').value;
    


    sameCompanyUserList[clickedArray].userName = userName;
    sameCompanyUserList[clickedArray].firstName = firstName;
    sameCompanyUserList[clickedArray].lastName = lastName;
    sameCompanyUserList[clickedArray].phone = phone;
    sameCompanyUserList[clickedArray].role = role;
    sameCompanyUserList[clickedArray].company = company;
    



    localStorage.userRecords = JSON.stringify(sameCompanyUserList);
    init();
    
    

}

function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}

function telephoneCheck(number) {
    if (/^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(number)) {
        return true;
    }
    alert('Enter 10 digit number');
    return false;

}

function validName(name) {
    if (name != "") {
        return true;


    } else {
        return alert('Enter first name');

    }

}

function validRole(role) {
    if ((role.toLowerCase() == "buyer") || (role.toLowerCase() == "supplier") || (role.toLowerCase() == "supplieradmin") || (role.toLowerCase() == "buyeradmin")) {
        return true;


    } else {
        alert('role should be either Buyer , Supplier or SupplierAdmin or BuyerAdmin');
        return false;

    }

}

function validCompany(type) {
    if (type != "") {
        return true;


    } else {
        alert('Should enter company name');
        return false;

    }

}

//display roles

function checkUsers()
{

    //getting the loggedin user information
    loginString = sessionStorage.getItem("userdetails");
    loggedinUser = JSON.parse(loginString);


    // getting the user details information
    userString = sessionStorage.getItem("userRecords");
    UserDB = JSON.parse(userString);

    
    //for (i = 0; i < userString.length; i++)
    //{
    //    if ((loggedinUser.role == "SupplierAdmin") && (userString[i].role == "Supplier"))
    //    {
    //        localStorage.setItem('userRecords', JSON.stringify(UserDB));

    //    }
     
    //    else if ((loggedinUser.role == "BuyerAdmin") && (userString[i].role == "Buyer")) {
    //        localStorage.setItem('userRecords', JSON.stringify(userList));
    //    }
        
    
    //    else if ((loggedinUser.role == "SuperAdmin") || (userString[i].role == "Buyer") || (userString[i].role == "Supplier") || (userString[i].role == "SupplierAdmin") || (userString[i].role == "BuyerAdmin")) {
    //        localStorage.setItem('userRecords', JSON.stringify(userList));
    //    }

    //}
}
function onUserRole(userLength) {


    userRole = JSON.parse(sessionStorage.getItem('role'));
    user = JSON.parse(sessionStorage.getItem('userdetails'));


    if (userRole == null) {
        document.getElementById("addUser").style.visibility = 'hidden';


        var editbtnhd = document.getElementsByClassName("editbtnclass");
        var deletebtnhd = document.getElementsByClassName("deletebtnclass");

        for (let i in deletebtnhd) {
            deletebtnhd[i].style.visibility = 'hidden';
            editbtnhd[i].style.visibility = 'hidden';

        }
    } else if (userRole.toLowerCase() == 'buyer') {
        document.getElementById("addUser").style.visibility = 'hidden';

        var editbtnhd = document.getElementsByClassName("editbtnclass");
        var deletebtnhd = document.getElementsByClassName("deletebtnclass");

        for (let i in deletebtnhd) {
            deletebtnhd[i].style.visibility = 'hidden';
            editbtnhd[i].style.visibility = 'hidden';
            //addCarbtn[i].style.visibility = 'visible';
        }
    } else if (userRole.toLowerCase() == 'buyeradmin') {
        document.getElementById("addUser").style.visibility = 'hidden';

        var editbtnhd = document.getElementsByClassName("editbtnclass");
        var deletebtnhd = document.getElementsByClassName("deletebtnclass");

        for (let i in deletebtnhd) {
            deletebtnhd[i].style.visibility = 'visible';
            editbtnhd[i].style.visibility = 'visible';

        }
    } else if (userRole.toLowerCase() == 'supplieradmin') {
        document.getElementById("addUser").style.visibility = 'hidden';

        var editbtnhd = document.getElementsByClassName("editbtnclass");
        var deletebtnhd = document.getElementsByClassName("deletebtnclass");

        for (let i in deletebtnhd) {
            deletebtnhd[i].style.visibility = 'visible';
            editbtnhd[i].style.visibility = 'visible';

        }
    }
    else if (userRole.toLowerCase() == 'superadmin') {
        document.getElementById("addUser").style.visibility = 'visible';

        var editbtnhd = document.getElementsByClassName("editbtnclass");
        var deletebtnhd = document.getElementsByClassName("deletebtnclass");

        for (var i = 0; i < userLength; i++) {
            deletebtnhd[i].style.visibility = ' visible';
            editbtnhd[i].style.visibility = 'visible';

        }
    } else if (userRole.toLowerCase() == 'supplier') {
        document.getElementById("addUser").style.visibility = 'hidden';
        var editbtnhd = document.getElementsByClassName("editbtnclass");
        var deletebtnhd = document.getElementsByClassName("deletebtnclass");

        for (var i = 0; i < userLength; i++) {


            deletebtnhd[i].style.visibility = 'hidden';
            editbtnhd[i].style.visibility = 'hidden';

        }

    }
}

