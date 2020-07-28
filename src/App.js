import React, { Component } from 'react';
import "antd/dist/antd.css"
import {Input ,Button,List} from 'antd'
import Store from "./store/index"
import {addListAction,changeValueAction,getMTListAction} from './action'
import axios from 'axios'
class TodoList extends Component {
  constructor(props) {
    super(props) 
    this.state=Store.getState()
    this.changeValue=this.changeValue.bind(this)
    this.handleChange=this.handleChange.bind(this)
    this.getMTList=this.getMTList.bind(this)
    this.addList=this.addList.bind(this)
    // this.getList=this.getList.bind(this)
    Store.subscribe(this.handleChange)
    // Store.subscribe(()=>{this.setState(Store.getState())})
  }
  changeValue(e) {
    // console.log(e);
    // //action
    // const action={
    //   type:'change_input',
    //   value:e.target.value
    // }
    Store.dispatch(addListAction(e.target.value))
  }
  handleChange() {
    // console.log(Store.state);
   
    this.setState(Store.getState())
    this.state.inputValue=""
  }
  addList() {
    // let action={
    //   type:'add_list',
    //   // value:this.state.inputValue
    // }
    Store.dispatch(changeValueAction())
  }
  getMTList(){
    console.log('zlkk');

      axios.get('/ajax/comingList', {
        params: {
          ci: 30,
          token: '',
          limit: 10,
          optimus_uuid:
            '3E8E9BC0C25A11EAB8ADD73ACE51A8FF925E9905F87C40E7939FDC84872208DC',
          optimus_risk_level: 71,
          optimus_code: 10
        }
      })
     .then((res)=>{
      //  action={
      //    type:'MEI_TUAN'
      //  }
        console.log(res,111);
          const data = res.data.coming;
          const action = getMTListAction(data);
          Store.dispatch(action)
      })
    
  }

  
  componentDidMount(){
    this.getMTList()
  }
  render() {
    return (
      <div>
           <h1>todoList</h1>
        <Input 
        value={this.state.inputValue}
        // placeholder="aaaa"
        style={{"width":"300px"}}
        onChange={this.changeValue}
        ></Input>
        <Button type="primary" onClick={this.addList}>添加</Button>
        <List
        style={{"width":"400px",margin:'20px 0'}}
        bordered
        dataSource={this.state.list}
        renderItem={item => (
          <List.Item>
           {item}
          </List.Item>
        )}
      />
      <ul>
       {
         this.state.data.map((item,index)=>{
           return (
             <li key={item.id}>{item.nm}</li>
           )
         })
       }
      </ul>
      </div>
    );
  }
}

export default TodoList;


