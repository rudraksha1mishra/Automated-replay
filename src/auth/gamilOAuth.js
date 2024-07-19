const google = require('googleapis');
const OAuth2 = google.Auth.OAuth2;

const ouath2Client = new oAuth2(
    process.env.GMAIL_CLIENT_ID,
    process.env.GMAIL_CLIENT_SECRET,
    process.env.GMAIL_REDIRECT_URL
)
exports.getGmailAuthUrl = ()=>{
    const scopes = ['https://www.googleapis.com/auth/gmail.readonly', 'https://www.googleapis.com/auth/gmail.send'];
    return ouath2Client.generateAuthUrl({
        access_type : 'offline', 
        scope : scopes 
    });
}

exports.getGmailTokens = async (code)=>{
    const {tokens} = await ouath2Client.getToken(code);
    ouath2Client.setCredentials(tokens);
    return tokens;
}
