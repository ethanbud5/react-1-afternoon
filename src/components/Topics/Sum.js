import React, {Component} from "react";

class Sum extends Component{
    constructor(){
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }
    inputChange(event){
        //console.log(event.target.tagName)
        this.setState({[event.target.name]:(event.target.value)})
    }

    addNum(){
        //console.log((this.state.number1+this.state.number2))
        this.setState({sum:(parseInt(this.state.number1)+parseInt(this.state.number2))})
    }
    
    render(){
        console.log(this.state)
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" name="number1" onChange={(e)=>this.inputChange(e)}></input>
                <input className="inputLine" name="number2" onChange={(e)=>this.inputChange(e)}></input>
                <button className="confirmationButton" onClick={(e)=>this.addNum(e)}></button>
                <span className="resultsBox">{this.state.sum}</span>
            </div>
        )
    }
}

export default Sum;