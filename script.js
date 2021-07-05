var inpDeposit = document.getElementById("wit_dep");
var inpUser = document.getElementById("userName");
var inpPass = document.getElementById("password");
var accounts = {}
function singUp() {
    var username = inpUser.value;
    var password = inpPass.value;
    accounts = { name: username, password: password, bal: 0 }
    var checkName = localStorage.getItem(username);
    if (!checkName) {
        if (username && password) {
            localStorage.setItem(username, JSON.stringify(accounts));
            localStorage.setItem("id", 0);
            alert("You are succesfully registered")
            location.reload();
        }
    }
    else {
        alert("username already exists")
        location.reload();
    }
};

function signIn() {
    var username = inpUser.value;
    var password = inpPass.value;
    var checkName = localStorage.getItem(username);
    if (username && password) {
        if (checkName) {
            checkName2 = checkName.slice(9, 9 + username.length);
            var checkBal = checkName.slice(31 + username.length + password.length, checkName.length - 1)
            var checkPass = checkName.slice(23 + username.length, 23 + username.length + password.length)
            if (username == checkName2 && password == checkPass) {
                localStorage.setItem("id", 1);
                localStorage.setItem("userLogName", checkName2)
                localStorage.setItem("userLogBal", checkBal)
                localStorage.setItem("userLogPass", checkPass)
                window.open("login.html", "_self");
            }
            else {
                alert("Login failed")
            }
        }
        else {
            alert("Login failed")
            location.reload();
        }
    }
}

function logOut() {
    localStorage.setItem("id", 0)
    localStorage.removeItem("userLogName");
    localStorage.removeItem("userLogBal");
    localStorage.removeItem("userLogPass");
    window.open("signin.html", "_self")
}
function deposit() {
    var deposit = inpDeposit.value;
    if (deposit < 1) {
        alert("invalid amount")
    }
    else {
        var amount = parseInt(deposit) + parseInt(upBal);
        accounts = { name: localStorage.getItem("userLogName"), password: localStorage.getItem("userLogPass"), bal: amount }
        localStorage.setItem(localStorage.getItem("userLogName"), JSON.stringify(accounts));
        alert(deposit + " Rs. Has been depositted to your account");
    }
    location.reload();
}


function withdraw() {
    var withdraw = inpDeposit.value;
    if(withdraw < 1){
        alert("Invalid amount");
    }
    else if (parseInt(withdraw) > upBal) {
        alert("Amount is greater than your balance!");
    }
    else {
        var amount = parseInt(upBal) - parseInt(withdraw);
        accounts = { name: localStorage.getItem("userLogName"), password: localStorage.getItem("userLogPass"), bal: amount }
        localStorage.setItem(localStorage.getItem("userLogName"), JSON.stringify(accounts));
        alert(withdraw + " Rs. Has been withdrawn from your account");
    }
    location.reload();
}

// var testObject = {name:"nouman",pass:"123",bal:200};

// // Put the object into storage
// localStorage.setItem(testObject.name, JSON.stringify(testObject));

// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject');

// console.log(JSON.parse(retrievedObject));
// // console.log(testObject)
// console.log(localStorage.getItem("adil"))
// var a = localStorage.getItem("adil")
// console.log("pass:",a.slice(9,a.length-2))