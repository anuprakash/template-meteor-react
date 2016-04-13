import { Accounts } from 'meteor/accounts-base';

// Used for email verification, password forgot, enrollementLink


export const emailTemplate = () =>  {
  
  Accounts.emailTemplates.siteName = "Meteor React App";
  Accounts.emailTemplates.from = "Meteor React App <no-reply@app.com>";
  
  Accounts.emailTemplates.resetPassword.subject = function (user) {
      return "Reset your password";
      //return "Welcome to Awesome Town, " + user.profile.name;
  };
  Accounts.emailTemplates.resetPassword.text = function (user, url) {
     return "Hi " + user.username + ", " 
       + "\n\n\n"
       + " To reset your pasword, simply click the link below:\n"
       + url
       + "\n\n See U! \n\n\n";
  };

}



export const emailMailUrl = () =>  {
  // mailgun account
  const MAIL_URL = 'smtp://postmaster@sandboxedff1adce6d54492ad12c36bdfc1e0df.mailgun.org:1e35fc000ad879b602e2f79b93a897ca@smtp.mailgun.org:587';
  process.env.MAIL_URL = MAIL_URL;
}

