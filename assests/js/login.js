// const loginpage = document.getElementById("log-in");
// const logoutpage = document.getElementById("log-out");

// function formvalue(e) {
//   e.preventDefault();

//   let emailid = document.getElementById("inputemail").value;
//   let password = document.getElementById("inputpassword").value;
//   let username = document.getElementById("inputusername").value;
//   // console.log(emailid)
//   // console.log(password)
//   // console.log(username)
//   if (emailid && password && username) {
//     console.log("sign in successfully");
//     const data = {
//       username: username,
//       email: emailid,
//       password: password,
//     };

//     cilentinfo.push(data);
//     const clientData = JSON.stringify(cilentinfo);

//     localStorage.setItem("client", clientData);
//     console.log(emailid);
//     console.log(password);
//   } else {
//     console.log("invalid details");
//   }
// }

// function handleSignUp() {
//   loginpage.classList.add("hidden");
//   logoutpage.classList.remove("hidden");
// }
// function handlelogin() {
//   loginpage.classList.remove("hidden");
//   logoutpage.classList.add("hidden");
// }
// const myclint = localStorage.getItem("client");
// const myusers = JSON.parse(myclint);

// console.log(myusers);
// console.log(myclint)
// function signin(s) {
//   // s.preventDefault();

//   let myemail = document.getElementById("email").value;
//   let mypass = document.getElementById("password").value;

//   myusers.map((value) => {
//     console.log(value);
//     // if(myemail && mypass){
//     if (mypass === value.password && myemail === value.email) {
//       console.log("successful");
//       window.location.href = "http://127.0.0.1:5500/index.html";
//     } else {
//       console.log("wrong password");
//     }

//     //   }else{
//     //     // alert("not matched")
//     //   }
//   });
// }

const loginPage = document.getElementById("log-in");
const logoutPage = document.getElementById("log-out");

function formvalue(e) {
  e.preventDefault();

  let email = document.getElementById("inputemail").value;
  let password = document.getElementById("inputpassword").value;
  let username = document.getElementById("inputusername").value;

  if (email && password && username) {
    console.log("Sign up successful");

    // Retrieve existing users from localStorage or initialize an empty array
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Add new user to the array
    users.push({ username: username, email: email, password: password });

    // Save updated user array back to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    console.log(email);
    console.log(password); 
  } else {
    console.log("Invalid details");
  }
}

function signin() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // Retrieve users from localStorage
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if user exists and password matches
  let user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    console.log("Sign in successful");
    // Redirect or show success message
    window.location.href = "http://127.0.0.1:5501/index.html";
  } else {
    console.log("Wrong email or password");
  }
}

function handleSignUp() {
  loginPage.classList.add("hidden");
  logoutPage.classList.remove("hidden");
}

function handleLogin() {
  loginPage.classList.remove("hidden");
  logoutPage.classList.add("hidden");
}
