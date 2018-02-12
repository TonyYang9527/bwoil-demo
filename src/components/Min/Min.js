import React from 'react';
import {action} from 'mobx';
import {observer, inject} from 'mobx-react';
import {Icon} from 'antd';
import './Min.less';

@inject('imdata')
@observer
export class Min extends React.Component {

    constructor(props) {
        super(props);
        this.imdata = this.props.imdata;
        console.log('imdata', this.imdata);
    }

    @action.bound
    change() {
        if (this.imdata.status === 1) {
            this.imdata.status = 2;
        } else {
            this.imdata.status = 1;
        }
    }

    render() {
        return (
            <div className='min' onClick={this.change}>
                <Icon type='user' style={{fontSize: 16, color: '#08c', marginLeft: 16, marginRight: 16}}/>
                <div>Chat</div>
            </div>
        )
    }
}