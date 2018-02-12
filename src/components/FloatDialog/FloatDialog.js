import React from 'react';
import {action} from 'mobx';
import {inject, observer} from 'mobx-react';
import {Icon, Button} from 'antd';

import './FloatDialog.less';
import {Message} from "../Message/Message";

@inject('imdata', 'floatDialogController')
@observer
export class FloatDialog extends React.Component {

    constructor(props) {
        super(props);
        this.imdata = this.props.imdata;
        this.controller = this.props.floatDialogController;
        this.controller.width = 400;
        this.controller.height = 400;
        this.controller.left = (this.controller.clientWidth - this.controller.width) / 2;
        this.controller.top = (this.controller.clientHeight - this.controller.height) / 2;
    }

    @action.bound
    down(e) {
        console.log('down', e.target);
        switch (e.target) {
            case this.floatDialog:
            case this.top:
            case this.tools:
                this.controller.x = e.pageX;
                this.controller.y = e.pageY;
                this.controller.underControl = true;
                break;
            default:
                return;
        }
    }

    @action.bound
    move(e) {
        if (this.controller.underControl) {
            let offsetX = e.pageX - this.controller.x;
            let offsetY = e.pageY - this.controller.y;

            this.controller.x = e.pageX;
            this.controller.y = e.pageY;

            if (this.controller.left + offsetX < 0) {
                this.controller.left = 0;
            } else if (this.controller.left + offsetX > this.controller.clientWidth - this.controller.width) {
                this.controller.left = this.controller.clientWidth - this.controller.width;
            } else {
                this.controller.left += offsetX;
            }

            if (this.controller.top + offsetY < 0) {
                this.controller.top = 0;
            } else if (this.controller.top + offsetY > this.controller.clientHeight - this.controller.height) {
                this.controller.top = this.controller.clientHeight - this.controller.height;
            } else {
                this.controller.top += offsetY;
            }
        }
    }

    @action.bound
    up(e) {
        this.controller.underControl = false;
    }

    @action.bound
    leave() {
        this.controller.underControl = false;
    }

    @action.bound
    back() {
        this.imdata.mediumStatus = false;
    }

    @action.bound
    close() {
        this.imdata.status = 1;
    }

    render() {
        let list = [];
        for (let i = 0; i < 20; i++) {
            let temp = {};
            temp.time = new Date();
            temp.message = 'guest' + (i + 1);
            temp.fromOwner = (i % 2 === 0);
            list.push(temp);
        }
        return (
            <div className='floatDialog' ref={floatDialog => this.floatDialog = floatDialog}
                 style={{
                     width: this.controller.width + 'px', height: this.controller.height + 'px',
                     left: this.controller.left + 'px', top: this.controller.top + 'px',
                     background: this.controller.background
                 }}
                 onMouseDown={this.down}
                 onMouseMove={this.move}
                 onMouseUp={this.up}
                 onMouseLeave={this.leave}>
                <div className='top' ref={top => this.top = top}>
                    <Icon type='arrow-left' style={{fontSize: 18, marginLeft: 8}} onClick={this.back}/>
                    <Icon type='close' style={{fontSize: 18, marginRight: 8}} onClick={this.close}/>
                </div>
                <div className='messages'>
                    {list.map((elem, index) => <Message fromOwner={elem.fromOwner} message={elem.message}
                                                        key={index}/>)}
                </div>
                <div className='tools' ref={tools => this.tools = tools}>

                </div>
                <div className='input'>
                    <textarea className='text'/>
                    <Button type='primary' style={{alignSelf: 'flex-end'}}>发送</Button>
                </div>
            </div>
        );
    }
}