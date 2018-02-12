import React from 'react';
import {action} from 'mobx';
import {observer} from 'mobx-react';
import {Avatar} from 'antd';
import './Test.css';

import {Data} from './Data';
import {Schedule} from "../Schedule/Schedule";

@observer
export class Test extends React.Component {

    constructor(props) {
        super(props);
        this.data = new Data();

        this.data.width = 400;
        this.data.height = 400;
        this.data.left = (this.data.clientWidth - this.data.width) / 2;
        this.data.top = (this.data.clientHeight - this.data.height) / 2;

        // let that = this;
        // window.onresize = function () {
        //     that.data.clientWidth = document.documentElement.clientWidth;
        //     that.data.clientHeight = document.documentElement.clientHeight;
        // }
    }

    @action.bound
    down(e) {
        this.data.focus(e);
    }

    @action.bound
    move(e) {
        this.data.takeAction(e);
    }

    @action.bound
    up(e) {
        this.data.blur();
    }

    @action.bound
    leave(e) {
        console.log('离开', e.target);
        this.data.blur();
    }

    @action.bound
    click(){
        console.log('头像被点击');
    }

    render() {
        return (
            <div className='container'>
                <div className='moving' style={{
                    width: this.data.width + 'px', height: this.data.height + 'px',
                    left: this.data.left + 'px', top: this.data.top + 'px',
                    background: this.data.background
                }}
                     onMouseDown={this.down}
                     onMouseMove={this.move}
                     onMouseUp={this.up}
                     onMouseLeave={this.leave}>
                    <Avatar style={{width: 48, height: 48}} src={require('../../assets/guest.jpg')} onClick={this.click}/>
                </div>

            </div>
        );
    }
}