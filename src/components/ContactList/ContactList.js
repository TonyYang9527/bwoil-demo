import React from 'react';
import {action} from 'mobx';
import {observer, inject} from 'mobx-react';
import {Icon} from 'antd';
import {Contact} from "../Contact/Contact";
import { Scrollbars } from 'react-custom-scrollbars';
import './Test.less';

@inject('imdata')
@observer
export class ContactList extends React.Component {

    constructor(props) {
        super(props);
        console.log('ContactList', this.props.imdata);
        this.imdata = this.props.imdata;
    }

    @action.bound
    maximize() {
        this.imdata.status = 3;
    }

    @action.bound
    close() {
        this.imdata.status = 1;
    }

    render() {
        let list = [];
        for (let i = 0; i < 30; i++) {
            let temp = {};
            temp.name = "person" + (i + 1);
            list.push(temp);
        }
        return (
            <div className='contactList'>
                <div className='top'>
                    <Icon type='credit-card' style={{fontSize: 18, marginRight: 8,color: '#c3c3c3',}} onClick={this.maximize}/>
                    <Icon type='close'   style={{fontSize: 18, marginRight: 8,color: '#c3c3c3',}}   onClick={this.close}/>
                </div>
                
                <Scrollbars style={{ width: 250 }}>
                 {list.map((elem, index) => <Contact name={elem.name} key={index} number={index}/>)}
                </Scrollbars>
            </div>
        );
    }
}