import React from 'react';
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

    render() {
        return (
            <div className='min'  onClick={this.imdata.openContectList}>
                 <Icon type='user' style={this.imdata.setIconStyle}/>
                 <div>Let’s Chat </div>
            </div>
        )
    }
}