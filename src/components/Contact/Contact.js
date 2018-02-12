import React from 'react';
import {action} from 'mobx';
import {observer, inject} from 'mobx-react';
import {Dropdown, Menu,Avatar} from 'antd';
import './Contact.less';


@inject('imdata')
@observer
export class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.imdata = this.props.imdata;
    }

    close() {
        console.log("close  function  is building ......")
    }
    @action.bound
    choose() {
        this.imdata.mediumStatus = true;
    }

    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">Rename Group</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">Clear History</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">Clear History</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">Exit Group</a>
                </Menu.Item>
            </Menu>
        );
        return (
            <div className='contact' onClick={this.choose}>
                <div className='icon'>
                    <Avatar style={{width: 32, height: 32}} src={require('../../assets/guest.jpg')}/>
                    <div/>
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
                    <Dropdown overlay={menu} placement="bottomCenter"  >
                    <img alt="" src={require('../../assets/more_if.svg')}/>
                    </Dropdown>
                </div>
            </div>
        );
    }
}