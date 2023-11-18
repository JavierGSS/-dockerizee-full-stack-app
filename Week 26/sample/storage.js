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

  // Create a root reference
  var storage = firebase.storage();
  var storageRef = storage.ref();

  // Get IUI elements
  const file = document.getElementById("file");
  const upload = document.getElementById("upload");
  const download = document.getElementById("download");
  const status = document.getElementById("status");
  const image = document.getElementById("image");

  // Upload file
  upload.addEventListener("click", (e) => {
    //file reference
    var ref = storageRef.child("globe");
    let photo = document.getElementById("file").files[0];

    // upload
    ref.put(photo).then(function (snapshot) {
      console.log("Uploaded to storage");
      status.innerHTML = "Uploaded to storage";
    });
  });

  // Download file
  download.addEventListener("click", (e) => {
    var ref = storage.ref("globe");
    ref
      .getDownloadURL()
      .then(function (url) {
        // insert url into <img> tag to "download"
        image.src = url;
        status.innerHTML = "Downloaded from storage";
      })
      .catch(function (error) {
        console.log(error);
      });
  });
})();
