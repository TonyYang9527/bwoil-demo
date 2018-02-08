import React from 'react';
import {observer, inject} from 'mobx-react';
import {Icon, Button, Menu, Dropdown} from 'antd';
import './Max.less';

import {Contact} from "../Contact/Contact";//联系人模板
import {Message} from "../Message/Message";//消息模板
import {SendMessage} from "../SendMessage/SendMessage";
import {SendPicture} from "../SendPicture/SendPicture";
import {SendScreenShot} from "../SendScreenShot/SendScreenShot";
import {SendLink} from "../SendLink/SendLink";

@inject('imdata')
@observer
export class Max extends React.Component {

    render() {
        let list = [];//模拟联系人名单
        for (let i = 0; i < 36; i++) {
            let temp = {};
            temp.name = "person" + (i + 1);
            list.push(temp);
        }

        let messages = [];//模拟消息状态
        for (let i = 0; i < 20; i++) {
            let temp = {};
            temp.time = new Date();
            temp.message = 'guest' + (i + 1);
            temp.fromOwner = (i % 2 === 0);
            messages.push(temp);
        }

        const menu = (//模拟
            <Menu>
                <Menu.Item>
                    <span>Press the Enter button to send the message</span>
                </Menu.Item>
                <Menu.Item>
                    <span>Press the Ctrl+Enter button to send the message</span>
                </Menu.Item>
            </Menu>
        );
        return (
            <div className='max'>
                <div className='list'>
                    <div className='head'>
                        <div>
                            <Icon type='user' style={{fontSize: 48, marginLeft: 12}}/>
                            <div>名字</div>
                        </div>
                        <Icon type='plus' style={{fontSize: 48, marginRight: 12}}/>
                    </div>
                    <div className='search'>
                        <Icon type='search' style={{fontSize: 36, marginLeft: 6}}/>
                        <input placeholder='请输入待查找内容'/>
                    </div>
                    <div className='contact-list'>
                        {list.map((elem, index) => <Contact name={elem.name} key={index} number={index}/>)}
                    </div>
                </div>
                <div className='dialog'>
                    <div className='messages'>
                        {messages.map((elem, index) => <Message fromOwner={elem.fromOwner} message={elem.message}
                                                                key={index}/>)}
                    </div>
                    <div className='tools'>
                        <div>
                            <SendMessage/>
                            <SendPicture/>
                            <SendScreenShot/>
                            <SendLink/>
                        </div>
                        <div>
                            <Button type='primary'>发送</Button>
                            <Dropdown overlay={menu}>
                                <Icon type="down"/>
                            </Dropdown>
                        </div>
                    </div>
                    <div className='text'>
                        <textarea/>
                    </div>
                </div>
                <div className='info'>
                </div>
            </div>
        );
    }
}