const admin = require('firebase-admin');

// firebase service account pk
const type = "service_account";
const project_id = "kogs-94e74";
const private_key_id = "";
const private_key = "";
const client_email = "firebase-adminsdk-yfi86@kogs-94e74.iam.gserviceaccount.com";
const client_id = "108406486084031070012";
const auth_uri = "https://accounts.google.com/o/oauth2/auth";
const token_uri = "https://oauth2.googleapis.com/token";
const auth_provider_x509_cert_url = "https://www.googleapis.com/oauth2/v1/certs";
const client_x509_cert_url = "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-yfi86%40kogs-94e74.iam.gserviceaccount.com";


// credential grants access to Firebase services
admin.initializeApp({
  credential: admin.credential.cert({
      type,
      project_id,
      private_key_id,
      private_key:
        private_key.replace(/\\n/g,'\n'),
      client_email,
      client_id,
      auth_uri,
      token_uri,
      auth_provider_x509_cert_url,
      client_x509_cert_url
  }),
});

module.exports = admin;
