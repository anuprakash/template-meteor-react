import React from 'react';
import {Link} from 'react-router';

import IconButton  from 'material-ui/IconButton';
import IconUpload  from 'material-ui/svg-icons/image/remove-red-eye';



class ButtonIconShowcase extends React.Component {

  constructor(props) {
    super(props);
    this.state={}
  }
  
  render() {
    
    return(

        <IconButton 
          touch   = {true} 
          onClick = {this.props.onClick}
        >
          <IconUpload 
            color     = {this.props.color}
            hoverColor= {this.props.hoverColor}
          />
        </IconButton>

    )
  }

}

export default ButtonIconShowcase;
