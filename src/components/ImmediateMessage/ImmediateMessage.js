import React from 'react';
import {observer, Provider} from 'mobx-react';

import './ImmediateMessage.less';
import {IMData} from "./IMData";//IM的相关控制数据

import {Min} from "../Min/Min";//最小化
import {Medium} from "../Medium/Medium";//小窗
import {Max} from "../Max/Max";//最大化

import {FloatDialogController} from "../FloatDialog/FloatDialogController";//小窗时对话框的控制器

@observer
export class ImmediateMessage extends React.Component {

    constructor(props) {
        super(props);
        this.imdata = new IMData();
        this.floatDialogController = new FloatDialogController();
        console.log('Homeimdata', this.imdata);
    }

    render() {
        switch (this.imdata.status) {
            case 1:
                return (
                    <Provider imdata={this.imdata} floatDialogController={this.floatDialogController}>
                        <Min/>
                    </Provider>);
            case 2:
                return (
                    <Provider imdata={this.imdata} floatDialogController={this.floatDialogController}>
                        <Medium/>
                    </Provider>
                );
            case 3:
                return (
                    <Provider imdata={this.imdata} floatDialogController={this.floatDialogController}>
                        <Max/>
                    </Provider>
                );
            default:
                return (
                    <Provider imdata={this.imdata} floatDialogController={this.floatDialogController}>
                        <Min/>
                    </Provider>);
        }
    }
}
