import React from 'react';
import './Message.less';


export class Message extends React.Component {

    render() {
        let fromOwner = this.props.fromOwner;
        let message = this.props.message === undefined ? '' : this.props.message;
        //{ fromOwner ? 'guest': 'master'}
        return (
                <div className= { fromOwner ? 'guest': 'master'}>
                    <div >
                        <span className='message'>{message}</span>
                        <span className='time'>09:00 unread</span>
                    </div>
                </div> 
        )
    }
}