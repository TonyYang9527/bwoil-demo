import React from 'react';
import {observer, inject} from 'mobx-react';
import {Icon ,Avatar} from 'antd';
import './Max.less';

import {Search} from "../Search/Search";//搜索框
import {Schedule} from "../Schedule/Schedule";//进度条
import {Contact} from "../Contact/Contact";//联系人模板
import {Message} from "../Message/Message";//消息模板
import {Tools} from "../Tools/Tools";//工具栏模板
import { Scrollbars } from 'react-custom-scrollbars';

@inject('imdata')
@observer

export class Max extends React.Component {
    
    addContact() {
    console.log("add  contact function  is building ......")
    }

    componentDidMount(){
        this.refs.messageScroll.scrollToBottom(); 
    }

    render() {
        let list = [];//模拟联系人名单
        for (let i = 0; i < 11; i++) {
            let temp = {};
            temp.name = "person" + (i + 1);
            list.push(temp);
        }

        let messages = [];//模拟消息状态
        for (let i = 0; i < 20; i++) {
            let temp = {};
            temp.time = new Date();
            temp.message = 'messagedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd' + (i + 1);
            temp.fromOwner = (i % 2 === 0);
            messages.push(temp);
        }
        return (
            <div className='max'>
                <div className='list'>
                
                    <div className='head'>
                        <div>
                           <Avatar className ="userIcon"  icon="user"  size="large"  />
                            <span className ="userName">George Sparks</span>
                        </div>
                        <Icon  type='plus' style={{fontSize: 18, color: '#C0C0C0', marginRight: 12,marginLeft: 10}}   onClick={()=>{alert("add user is  building");}}  />
                    </div>

                    <div className='search'>
                        <Search  />
                    </div>
                  
                   <Scrollbars style={{ width: 250, height: 662 }}>
                        {list.map((elem, index) => <Contact name={elem.name} key={index} number={index}/>)}
                    </Scrollbars>
                </div>


                <div className='dialog'>
                    <div className='steps'>
                        <Schedule/>
                    </div>
                   
                    <div className='messages'  >
                    <Scrollbars  ref="messageScroll"   >
                      {messages.map((elem, index) =><Message fromOwner={elem.fromOwner} message={elem.message} key={index}/>)}
                    </Scrollbars>
                    </div>

                    <div className='tool'>
                       <Tools/>
                    </div>

                    <div className='text'>
                      <textarea/>
                    </div>

                </div>
                <div className='info'>      

                     <div className="info-header" >
                     <span>
                       <Icon type="close"  size="large" style={{fontSize:16,marginTop: 7}} onClick={()=>{alert("close is  building ");}}/>
                     </span>
                     <span>
                        <Icon type="minus"   size="large" style={{fontSize:16 ,marginTop: 7}} onClick={()=>{alert("minus is  building");}} />
                     </span>
                    </div>
                
                    <div className="info-cargo">
                       <div  className="info-cargo-user">
                         <Avatar   icon="user"  size="large"  />
                         <span>George Sparks</span>
                       </div>

                       <div className="info-cargo-detail" >  
                            <div>                            
                            <span> Cargo </span> 
                               <label>Cargo </label> 
                          </div>

                          <div>                            
                            <span> Cargo </span> 
                               <label>Cargo </label> 
                          </div>
                       </div>
                     
                    </div>
                    
                     <div className="info-vessel">
                    </div>

                </div>
            </div>
        );
    }
}