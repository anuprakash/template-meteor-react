import React from 'react';
import {Link} from 'react-router';

import IconButton  from 'material-ui/IconButton';
import IconCode    from 'material-ui/svg-icons/action/code';



class ButtonIconCode extends React.Component {

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
          <IconCode 
            color     = {this.props.color}
            hoverColor= {this.props.hoverColor}
          />
        </IconButton>

    )
  }

}

export default ButtonIconCode;
