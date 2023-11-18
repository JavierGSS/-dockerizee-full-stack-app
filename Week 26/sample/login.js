(function () {
  const firebaseConfig = {
    apiKey: "AIzaSyD7cfMEattgoP5qUk4tOYsZ_4A_F7vfD-c",
    authDomain: "courso-f6bb9.firebaseapp.com",
    databaseURL: "https://courso-f6bb9-default-rtdb.firebaseio.com",
    projectId: "courso-f6bb9",
    storageBucket: "courso-f6bb9.appspot.com",
    messagingSenderId: "402473916448",
    appId: "1:402473916448:web:cdf4dc7a421ac359e04445",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Get UI elements
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const login = document.getElementById("login");
  const logout = document.getElementById("logout");
  const signup = document.getElementById("signup");

  login.addEventListener("click", (e) => {
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(
      email.value,
      password.value
    );
    promise.catch((e) => console.log(e.message));
  });

  signup.addEventListener("click", (e) => {
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(
      email.value,
      password.value
    );
    promise.catch((e) => console.log(e.message));
  });

  logout.addEventListener("click", (e) => firebase.auth().signOut());

  firebase.auth().onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
      console.log(firebaseUser);
      logout.style.display = "inline";
      login.style.display = "none";
      signup.style.display = "none";
    } else {
      console.log("User not logged in");
      logout.style.display = "none";
      login.style.display = "inline";
      signup.style.display = "inline";
    }
  });
})();
