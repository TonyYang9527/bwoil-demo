import React  from 'react';
import { observer } from 'mobx-react';
import { observable ,action } from "mobx";
import logo from './logo.svg';
import './Demo.css';


const person = observable({
  name: "John",
  get word() {
    return "Welcome " + this.name;
  }
});

const actions = {
  change: action(val => {
    setTimeout(() => {
      person.name = val;
    }, 10);
  })
}

const Demo = observer(({name}) => { 
  return (
    <div className="Demo">
      <div className="Demo-header">
        <img src={logo} className="Demo-logo" alt="logo" />
        <h2 style={{color :'white'}} >{name} says: {person.word}</h2>
      </div>
      <p className="Demo-intro">
        <input type="text" value={person.name} onChange={e => actions.change(e.target.value)} />
      </p>
    </div>
  );
});

export { Demo };
