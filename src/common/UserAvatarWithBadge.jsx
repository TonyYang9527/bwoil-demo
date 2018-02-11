import React from 'react';
import PropTypes from "prop-types";
import { Avatar, Badge } from 'antd';

class UserAvatarWithBadge extends React.Component {
    static defaultProps = {
         shape: 'circle',
         size: 'default',
         icon: null,
         src: null,
         status: 'success' ,
    };
    static propTypes = {
        shape: PropTypes.oneOf(['circle', 'square']),
        size: PropTypes.oneOf(['large', 'small', 'default']),
         icon: PropTypes.string,
         src: PropTypes.string,
         status: PropTypes.string,
    };

    render() {
        let av_size =  this.props.size ;
        let top  ;
        if (av_size ==='large'){
            top =35 ;
        }
         if (av_size === 'small'){
             top = 22;
        } 
        if (av_size === 'default') {
            top = 28;
        } 
        return (
            <Badge  {...this.props} dot={true} style={{ top: top }} >
                <Avatar {...this.props} >
                    {this.props.children}
                </Avatar>
            </Badge>
        );
    }
}
export default UserAvatarWithBadge;


