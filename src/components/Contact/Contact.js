import React from 'react';
import {action} from 'mobx';
import {observer, inject} from 'mobx-react';
import {Dropdown, Menu ,Avatar,Badge} from 'antd';
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
        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
                </Menu.Item>
            </Menu>
        );
        return (
            <div className='contact' onClick={this.choose}>

                <div className='icon' >
                    <Badge  dot={true}  status ={"success" }  style={{top: 25}} ><Avatar shape="circle" icon="user" /></Badge>
                </div>
                
                <div className='information'>
                    <div className='hint'>
                        <div className='name'>MaYun</div>
                        <div className='count'>99</div>
                    </div>
                    <div className='overview'>光汇石油</div>
                </div>
                
                <div className='message'>
                    <div className='time'>18:36</div>
                    <Dropdown overlay={menu} placement="bottomCenter">
                        <img alt="" src={require('../../assets/more_if.svg')}/>
                    </Dropdown>
                </div>
            
            </div>
        );
    }
}