import React from 'react';
import {action} from 'mobx';
import {observer, inject} from 'mobx-react';
import {Icon} from 'antd';
import './Contact.less';


@inject('imdata')
@observer
export class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.imdata = this.props.imdata;
    }

    @action.bound
    choose() {
        console.log(this.props.number);
        this.imdata.mediumStatus = true;
    }

    render() {
        let {name} = this.props;
        return (
            <div className='contact' onClick={this.choose}>
                <div className='icon'>
                    <Icon type='user' style={{fontSize: 30, color: '#08c'}}/>
                    <div/>
                </div>
                <div className='information'>
                    <div className='name'>{name}</div>
                    <div className='company'>光汇石油</div>
                </div>
                <div className='message'>
                    <div className='time'>18:36</div>
                    <div className='count'>1</div>
                </div>
            </div>
        );
    }
}