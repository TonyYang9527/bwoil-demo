import React from 'react';
import {Steps, Icon} from 'antd';
import './Schedule.less';

const Step = Steps.Step;

//对话框上的步骤栏
export class Schedule extends React.Component {

    render() {
        let current = this.props.current === undefined ? 3 : this.props.current;
        return (
            <div className='schedule'>
             <div >
              <Steps current={current} size='small' style={{width:400}} > 
                    <Step title='Chat'   />
                    <Step title='Offer'     />
                    <Step title='Onsub'    />
                    <Step title='Liftsub'  />
                </Steps>
                </div>
                 <div>
                   <Icon type="info-circle" style={{fontSize: 16, color: '#D3D3D3'}} />
                </div>
            </div>
         
        );
    }
}