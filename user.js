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