import React from 'react';

import {sendVerificationEmail} from '/client/api/accounts';
import {Colors}   from '/client/app/Theme';
import ButtonFlat from '/client/app/components/ui/buttons/ButtonFlat';



class VerifyEmail extends React.Component{
  
  constructor(props) {
    super(props);
    this.sendVerificationEmail = this.sendVerificationEmail.bind(this);
    this.state = {};
  }  

  sendVerificationEmail(){
    const userId = this.props.userId;
    const email  = this.props.email;
    
    sendVerificationEmail(
      userId, 
      email, 
      (err)=>{
        if(!err){
          this.props.openSnackBar('A email has been send to you!');
          console.log('sendVerificationEmail ok');
        }
        else{
          this.props.openSnackBar('Ouups.. Something went wrong.');
          console.log(err);
        }
      }
    );
  }
  
  render() {
    return (
      
      <div id = "VerifyEmail">
        { !this.props.isEmailVerified ?
            <ButtonFlat 
              className = "btn-action"
              label     = "Verify Email"
              onClick   = {this.sendVerificationEmail}
              backgroundColor={this.props.btnBackgroundColor}
              style     = {{width: '100%'}}
            /> 
          :
            ''
        }
      </div> 
      
    )
  }
  
  
}


export default VerifyEmail;
