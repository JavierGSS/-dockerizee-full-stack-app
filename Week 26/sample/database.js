(function () {
  const firebaseConfig = {
    apiKey: "AIzaSyD7cfMEattgoP5qUk4tOYsZ_4A_F7vfD-c",
    authDomain: "courso-f6bb9.firebaseapp.com",
    projectId: "courso-f6bb9",
    storageBucket: "courso-f6bb9.appspot.com",
    messagingSenderId: "402473916448",
    appId: "1:402473916448:web:cdf4dc7a421ac359e04445",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // handle on db
  const db = firebase.database();

  // get elements
  const write = document.getElementById("write");
  const read = document.getElementById("read");
  const status = document.getElementById("status");
  const message = document.getElementById("message");

  // write to db
  write.addEventListener("click", (e) => {
    const messages = db.ref("messages");
    const id = new Date().getTime();
    messages
      .child(id)
      .set({ message: message.value })
      .then(function () {
        status.innerHTML = "Wrote to DB";
      });
  });

  read.addEventListener("click", (e) => {
    status.innerHTML = "";
    const messages = db.ref("messages");
    messages.once("value").then(function (dataSnapshot) {
      var data = dataSnapshot.val();
      console.log(data);
      var keys = Object.keys(data);
      console.log(keys);
      keys.forEach(function (key) {
        console.log(data[key]);
        status.innerHTML += JSON.stringify(data[key]) + "<br/>";
      });
    });
  });
})();
