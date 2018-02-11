import React from 'react';
import PropTypes from "prop-types";
import {Avatar} from 'antd';

class UserAvatar extends React.Component {
    static defaultProps = {
      shape: 'circle' ,
      size:'default' ,
      icon : null,
      src :null ,
    };
   static propTypes  = {
        shape:PropTypes.oneOf(['circle', 'square']), 
        size:PropTypes.oneOf(['large', 'small','default']),
        icon:PropTypes.string , 
        src:PropTypes.string,
    };

 render() {
   return ( 
     <Avatar {...this.props} >
       {this.props.children}
     </Avatar>
    );
   }
}
export default UserAvatar;

  
