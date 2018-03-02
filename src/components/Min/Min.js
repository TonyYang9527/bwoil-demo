import React from 'react';
import {action} from 'mobx';
import {observer, inject} from 'mobx-react';
import {Icon} from 'antd';
import './Min.less';
import {Demo} from "../demo/Demo" ;

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
            <div> 
            <div className=' widget-container min2' onClick={this.change}> </div>
            <Demo name="Bill"></Demo>
           </div>
        )
    }
}