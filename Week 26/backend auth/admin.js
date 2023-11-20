const admin = require("firebase-admin");

// firebase service account private key
const type = "service_account";
const project_id = "server-side-auth-dcef3";
const private_key_id = "cb988d3977c5b8ce3c309f9b80a625458863360c";
const private_key =
  "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDdHmwEBpYGyzIX\n2s9Dho/XfJb1mGEg4A1RB0nqkvQMDmPIXgVGXN5sy04KFxfg22AbKKifi4I66mzH\nGHwpsW6TFAa7y6t0kfJLfzyIBi6Ya30BqLiT8riYmFiVRrYHYmY7vQVR+stRErp4\nsLor21AXbP5XiDsKQLV3CG8UV81bDZyRF2i1kjPQ7fThC9QG87DGwyUfCLw1uetH\nrgTI1EBACrq8YLIg0mO5rKzuhyhLdXgFsjueTZeX4wCFoI6DFlVeguuSvPAUxWjB\nxiFXZXSqwwAyj1oSvtVHYtyy4N9NelXDRDcHORfvWNNWDUegobuz7KWxqMP8+oJs\n8kdd8dNBAgMBAAECggEAAdsNgQMlIy11YCnf72sjreVHxwveVM5Mjk+HWUaecbN1\nNutDFBIXc8ZJA2CqPKLarZ+rupsLHr905j7YW+k3SliyrcTJzZKj++o3cdTLc1AD\nno3x7pvs3Kr6o1YSlQFIZlvxvXxjVGzZz8V76n5Or8OkZsun4zAj1bnmZL9P4+G3\nXRKKBRjNgp/OFvAHwkbuYDGtf3xZBDuchXBFoXFKWZj1krsfvZ8g47UEcm6Pnm+i\nDub14/hkbb8cu7xnQXFoIvnsjPgYEawrlTV6PFrZ78DDSqOfQYfm92OUBmdKgek5\nGUyvmwo3PrBfvecKxJtup/AacvSHzV1Pjwe7U6JoeQKBgQD6EijCC1pKAb8WNxih\nuFloC9qqHU4SWC02x4Fh/tgY5RLfKARoa1V5Cnp55MGye9XagjuVTL+9qtXrVFZs\n4tyZfu64bjZ1RL4UhVu432a2Ull5ViohP7oTWhxB0TXACutNecJ/hT3CqaTBW06Q\n1t3Nn/i8qEGz0d/zjoFMyvXccwKBgQDiXIisa3buuwWT2HCLh/9zBzfASIzQsYEu\n5FfkFeQL8hjTWHUz83RM+MgBBoJpPr/3kAWkBgTSagGwQnKhO2EHGURcniyhFqqV\nsEknYhQE0CyIEfZ+Gxck7uJW7wT/DLEBhwwAPwoYV5FtFHIRP+XJIn5vhp6QrsZY\nt6xkD9l4ewKBgEJ/H61xvWGek0SCBB/E2KltNYk037TLE8LUTFhVnvsHtvv2NS3b\nFNBp8+WD6enfOh+vr85kqTvzOI0qUQ0FSmnasfoC/KI0VGM6jwhbB4IF5dr5CZzr\nyDwrIwZxblyRyr5AWXL1aFXiLHhqIjsrl7F9D3SDPW1mqqmmREW6VqR3AoGAa+M2\nsRc3RGmXKvRKD/bt5eFWzSrHEuDHdZYX3fohCyCEfJb4pZ4vnFAm43Y6yfbCgDgA\nuEC2I6Oq0luZTweCI2QDlTE+jDjFbTrsYvz4FaMy1lfZaBl5Wn0RG+YoN3fRFa1M\nJwHkyd1Szu6jv1z5JHhwUq+S+9qRZs+ENtznBekCgYALs8u1fafoI+C6slNGFNT/\nODBnWgwB2UckYcA/MsfrC8ZE1TmO94eLd/AKZ9q4L7O0Iu8RfI7nC/g/m5SiW2FX\nY/oH24sr8gfzAwl3UUvq00Mka3m1Q1TgmcIYTUXZ4bGMLr/9ENY8qR0+spJ0EZ9V\n9AZP9ll90a/swPE6297xXA==\n-----END PRIVATE KEY-----\n";
const client_email =
  "firebase-adminsdk-j0up3@server-side-auth-dcef3.iam.gserviceaccount.com";
const client_id = "111849297598818504369";
const auth_uri = "https://accounts.google.;com/o/oauth2/auth";
const token_uri = "https://oauth2.googleapis.com/token";
const auth_provider_x509_cert_url =
  "https://www.googlea;pis.com/oauth2/v1/certs";
const client_x509_cert_url =
  "https://www.googleapis.com/robot/v1/metadata/x509/f;irebase-adminsdk-j0up3%40server-side-auth-dcef3.iam.gserviceaccount.com";

// credential grants access to Firebase services
admin.initializeApp({
  credential: admin.credential.cert({
    type,
    project_id,
    private_key_id,
    private_key: private_key.replace(/\\n/g, "\n"),
    client_email,
    client_id,
    token_uri,
    auth_provider_x509_cert_url,
    auth_uri,
    client_x509_cert_url,
  }),
});

module.exports = admin;
