import React from 'react';
import {action} from 'mobx';
import {Provider} from 'mobx-react';
import {Button} from 'antd';

import {FloatDialogController} from "./FloatDialog/FloatDialogController";
import {FloatDialog} from "./FloatDialog/FloatDialog";

import {Min} from "./Min/Min";//最小化状态
import {Contact} from "./Contact/Contact";//单个联系人
import {ContactList} from "./ContactList/ContactList";//联系人列表

export class Test extends React.Component {

    constructor(props) {
        super(props);
        this.controller = new FloatDialogController();
    }

    @action.bound
    increase() {
        this.controller.width += 10;
    }

    @action.bound
    decrease() {
        this.controller.width -= 10;
    }

    @action.bound
    taller() {
        this.controller.height += 10;
    }

    @action.bound
    shorter() {
        this.controller.height -= 10;
    }

    render() {
        return (
            <Provider controller={this.controller}>
                <div>
                    <FloatDialog/>
                    <Button type='primary' onClick={this.increase}>变宽</Button>
                    <Button onClick={this.decrease}>变窄</Button>
                    <Button type='primary' onClick={this.taller}>变高</Button>
                    <Button onClick={this.shorter}>变矮</Button>
                    <Min/>
                    <Contact name='张三'/>
                    <ContactList/>
                </div>
            </Provider>
        );
    }
}