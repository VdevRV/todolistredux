import React, { Component} from 'react';
import './todolist.css'

export default class ToDoList extends Component{
    constructor(props){
        super(props);

        this.state={
            userInput: 'aaa',
            list: []
        }
    }
    changeUserInput(input){
        this.setState({
            userInput: input
        });
    }

    addToist(input){
        let listArray =this.state.list;
        listArray.push(input);

        this.setState({
            list:listArray,
            userInput:''
        })
    }

    addToist1(input){
        

        let listArray= this.state.list.filter(item =>!input.includes(item));
        

        this.setState({
            list:listArray
        })

    }

    

    render(){
        return(
            <div className="to-do-list-main">
                <h1>ToDoList</h1>

                <input onChange={ (e)=>this.changeUserInput(e.target.value)} value={this.state.userInput} type="text"></input>

                <button onClick={()=>this.addToist(this.state.userInput)}>Add to list</button>


                <table>
                    {this.state.list.map ( (val)=><tr onClick={()=>this.addToist1(val)}>{val}  </tr>)}
                
                </table>


            </div>
        )
    }
}
