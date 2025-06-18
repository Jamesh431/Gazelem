import { google } from "googleapis";

/*
Initialize using google api here, then using Googles push notifications for emails push new emails to console. Remember to import into index and call initialization and push notifications
*/

const fetchData = await fetch('./client.json')
const data = await fetchData.json()
const web = data.web

const googleAuth = new google.auth.OAuth2(web.client_id, web.client_secret, "urn:ietf:wg:oauth:2.0:oob")

const accountGmail = google.gmail({ version: 'v1', auth });

async function googleInit() {
  // need to pull api key from config.json for gmail, and any other needed information


  googleAuth.setCredentials()

  const res = await gmail.users.watch({
    userId: 'me',
    requestBody: {
      labelIds: ['INBOX'], // this currently only notifies on new inbox messages
      topicName: `projects/${web.project_id}}/topics/${web.topic_name}`,
    },
  });


  console.log('Gmail Watch started:', res.data);
}


export {googleAuth, accountGmail, googleInit}