// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '1v15ju8srb'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-2.amazonaws.com/dev`

export const authConfig = {
  domain: 'massakone.us.auth0.com', // Auth0 domain
  clientId: 'ivrY2s8ZrfnIrQtg9KHeepcs5fE7tOuh', // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
