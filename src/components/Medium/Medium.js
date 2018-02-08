import React from 'react';
import {observer, inject} from 'mobx-react';

import {ContactList} from "../ContactList/ContactList";
import {FloatDialog} from "../FloatDialog/FloatDialog";

@inject('imdata')
@observer
export class Medium extends React.Component {

    constructor(props) {
        super(props);
        this.imdata = this.props.imdata;
    }

    render() {
        return (
            <div>
                <ContactList/>
                {this.imdata.mediumStatus ? <FloatDialog controller={this.imdata.floatController}/> : ''}
            </div>
        );
    }
}