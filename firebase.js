const firebaseConfig = {
  apiKey: "AIzaSyDwC3yVAvO4BlUUbGGs3mjQ3zNb82zDPf4",
  authDomain: "angularjs-5228b.firebaseapp.com",
  databaseURL: "https://angularjs-5228b-default-rtdb.firebaseio.com",
  projectId: "angularjs-5228b",
  storageBucket: "angularjs-5228b.appspot.com",
  messagingSenderId: "294342302010",
  appId: "1:294342302010:web:ae42e1c9064d5f717bd803",
  measurementId: "G-HCXS4H000M"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var analysisdb=firebase.database().ref("angularjs");
document.getElementById("angularjs").addEventListener("submit",submitform);

function login() {
    const username= document.getElementById("email").value;
    const pwd = document.getElementById("pwd").value;

    firebase
      .auth()
      .signInWithEmailAndPassword(username, pwd)
      .then((userCredential) => {
        // Signed in
        window.location.href="form.html";
      })
      .catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage);
      });
  }
function submitform(e){
  e.preventDefault();
  var first_name = document.getElementById("fname").value;
  var last_name = document.getElementById("lname").value;
  var user_name = document.getElementById("uname").value;
  var con_email = document.getElementById("email").value;
  var con_phn = document.getElementById("con-ph").value;
  var con_pass = document.getElementById("con-pwd").value;
  var con_cnfpass = document.getElementById("con-cnfpwd").value;
  if (first_name.trim() == null || first_name.trim() == "") {
    alert("Please enter First name!!");
  } else if (last_name.trim() == null || last_name.trim() == "") {
    alert("Please enter last name!!");
  }else if (user_name.trim() == null || user_name.trim() == "") {
    alert("Please enter user name!!");
  } else if (con_phn.trim() == null || con_phn.trim() == "") {
    alert("Please enter valid phone number!");
  } else if (isNaN(con_phn)) {
    alert("Please enter valid phone number!");
  } else if (con_pass.trim() != con_cnfpass.trim()) {
    alert("Password and Confirm password doesn't match");
  } else {
  firebase
        .auth()
        .createUserWithEmailAndPassword(con_email, con_cnfpass)
        .then(function (userCredential) {
          // Signed in
         // console.log("details validated");
             saveinfo(first_name, last_name,user_name, con_email,con_phn,con_pass,con_cnfpass);
             document.getElementById("angularjs").reset();
             window.location.href="login.html";
              })
        .catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage);

        });
  }
}
const saveinfo=(first_name, last_name,user_name, con_email,con_phn,con_pass,con_cnfpass) =>{
  var newform=analysisdb.push();
  newform.set({
          first_name : first_name,
          last_name :last_name,
          user_name : user_name,
          con_email : con_email,
          con_phn :con_phn,
          con_pass : con_pass,
          con_cnfpass : con_cnfpass
  });
}

const getElementVal=(id) =>{
  return document.getElementById(id).value;
}
