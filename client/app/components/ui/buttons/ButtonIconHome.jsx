import React from 'react';
import {Link} from 'react-router';

import IconButton  from 'material-ui/IconButton';
import IconHome    from 'material-ui/svg-icons/action/home';



class ButtonIconHome extends React.Component {

  constructor(props) {
    super(props);
    this.state={}
  }
  
  render() {
    
    return(

        <IconButton 
          touch   = {true} 
          style   = {this.props.buttonStyle}
          onClick = {this.props.onClick}
        >
          <IconHome 
            color     = {this.props.color}
            hoverColor= {this.props.hoverColor}
          />
        </IconButton>

    )
  }

}

export default ButtonIconHome;
