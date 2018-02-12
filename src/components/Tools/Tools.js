import React from 'react';
import {Button, Icon} from 'antd';
import './Tools.less';

export class Tools extends React.Component {


    render() {
        return (
            <div className='tools'>
                <div className='func'>
                    <Icon type='smile-o' style={{fontSize: 24, marginRight: 15}}/>
                    <Icon type='picture' style={{fontSize: 24, marginRight: 15}}/>
                    <Icon type='link' style={{fontSize: 24, marginRight: 15}}/>
                    <Button>Make offer</Button>
                    <Button>Onsub</Button>
                    <Button>Failsub</Button>
                    <Button>Liftsub</Button>
                    <Button>Cleanfix</Button>
                </div>
                <Button type='primary'>Send</Button>
            </div>
        );
    }
}