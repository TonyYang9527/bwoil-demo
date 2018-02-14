import React from 'react';
import {Button, Icon} from 'antd';
import './Tools.less';

export class Tools extends React.Component {
    render() {
        return (
            <div className='tools'>
                <div className='func'>
                    <Icon type='smile-o'  style={{fontSize: 16, marginRight: 8}}/>
                    <Icon type='picture'  style={{fontSize: 16, marginRight: 8}}/>
                    <Icon type='link'     style={{fontSize: 14, marginRight: 8}}/>
                    <Button size="small"  style={{ width:73,height:26, marginRight: 8,borderColor:'#0081CC',fontSize:12, color :'#0081CC'}}>Make offer</Button>
                    <Button size="small"  style={{ width:52,height:26, marginRight: 8,borderColor:'#0081CC',fontSize:12, color :'#0081CC'}}>Onsub</Button>
                    <Button size="small"  style={{ width:52,height:26, marginRight: 8,borderColor:'#0081CC',fontSize:12, color :'#0081CC'}}>Failsub</Button>
                    <Button size="small"  style={{ width:52,height:26, marginRight: 8,borderColor:'#0081CC',fontSize:12, color :'#0081CC'}}>Liftsub</Button>
                    <Button size="small"  style={{ width:73,height:26, borderColor:'#0081CC',fontSize:12, color :'#0081CC'}} >Cleanfix</Button>

                    <Button size="small" type='primary'   style={{ width:52,height:26, marginLeft: 18,marginRight: 18,fontSize:12}}>Send</Button>
                </div>
             </div>
        );
    }
}