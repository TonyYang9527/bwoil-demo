import React from 'react';
import './Message.less';
export class Message extends React.Component {
    render() {
        let fromOwner = this.props.fromOwner;
        let message = this.props.message === undefined ? '' : this.props.message;
        return (
            fromOwner ?
                <div className='guest'>
                    <div>
                        <span className='message'>{message}</span>
                        <span className='time'>09:00</span>
                    </div>
                </div> :
                <div className='master'>
                    <div>
                        <span className='message'>{message}</span>
                        <span className='time'>09:00</span>
                    </div>
                </div>
        )
    }
}