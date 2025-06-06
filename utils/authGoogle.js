import { google } from "googleapis"

export default function authGoogle() {
  const oAuth2Client = new google.auth.OAuth2(
    "/*Client ID*/", "/*client secret?*/", "/*redirect uri?*/"
  );

  // Get token from previously stored location? (Or do the OAuth2 flow?)
  oAuth2Client.setCredentials({refresh_token: "/*REFRESH TOKEN HERE*/"})

  const gmail = google.gmail({version: 'v1', auth: oAuth2Client})
  

}