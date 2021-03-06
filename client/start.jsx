import { Meteor }   from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import React    from 'react';
import ReactDOM from 'react-dom';
import {Routes} from './app/Routes';

// Set Material-Ui theme
import getMuiTheme      from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


// if Landing on app from forgotMail link email
Accounts.onResetPasswordLink((token)=>{
  
  // Triggered when users arrive from a forgotMail link (email). Should be on top of 'Meteor.startup()'
  // in App.jsx/componentWillMount() : redirection to '/forgot-password' is 'onResetPasswordLink'==true
  
  Session.set({
    onResetPasswordLink: true,
    onResetPasswordLinkToken: token
  })
  
});

Accounts.onEmailVerificationLink((token, done)=>{

    Session.set({
      onEmailVerificationLink: true,
    })
    
    Accounts.verifyEmail(token, (err)=>{
        if(!err){
          console.log('verifyEmail ok');
          console.log('todo : trigger snackbar after verifyEmail');
        }
        else{
          console.log('Error : ' + err);
        }
    });
  
});
  

// Detect Touch events
injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


// App Start
Meteor.startup(function () {
  // Use Meteor.startup to render the component after the page is ready
  ReactDOM.render(  
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Routes/>
    </MuiThemeProvider>
  , 
    document.getElementById("App-wrapper")
  );
});
