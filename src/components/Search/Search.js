import React from 'react';
import {action} from 'mobx';
import {observer} from 'mobx-react';
import {Icon, Input} from 'antd';
import {SearchData} from "./SearchData";

@observer
export class Search extends React.Component {

    constructor(props) {
        super(props);
        this.data = new SearchData();
    }

    @action.bound
    onChange(e) {
        if (this.props.onChange) {
            this.props.onChange(e);
        }
        this.data.update(e);
    }

    @action.bound
    onPressEnter(e) {
        if (this.props.onPressEnter) {
            this.props.onPressEnter(e);
        }
    }

    @action.bound
    empty() {
        this.data.clear();
    }

    render() {
        const prefix = <Icon type="search" style={{color: '#CFCFCF', fontSize: 16}}/>;
        const suffix = this.data.value ?
            <Icon type="close-circle" style={{color: '#CFCFCF', fontSize: 16}} onClick={this.empty}/> : null;
        return (
            <Input placeholder="Search contact..." size="large" value={this.data.value} prefix={prefix}
                   suffix={suffix}
                   onChange={this.onChange}
                   onPressEnter={this.onPressEnter}/>
        );
    }
}