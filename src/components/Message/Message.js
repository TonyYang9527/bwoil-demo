import React from 'react';
import './Message.less';

const guest = require('../../assets/guest.jpg');
const master = require('../../assets/master.jpg');

export class Message extends React.Component {
    render() {
        let fromOwner = this.props.fromOwner;
        let message = this.props.message;
        return (
            fromOwner ?
                <div className='guest'>
                    <img src={guest} alt=''/>
                    <div>{message}</div>
                </div> :
                <div className='master'>
                    <div>{message}</div>
                    <img src={master} alt=''/>
                </div>
        )
    }
}