import React,{Component} from "react"

class EvenAndOdd extends Component{
    constructor(){
        super();
        this.state ={
            evenArray:[],
            oddArray:[],
            userInput:""
        }
    }

    inputChange(e){
        return this.setState({userInput:e.target.value})
    }
    sortEvenandOdd(){
        let even = [];
        let odd = [];
        let newArray = this.state.userInput.split(",")
        newArray.map((num,i)=>{
          if(num%2 === 0){
            even.push(parseInt(num));
          }
          else if(num%2!==0){
            odd.push(parseInt(num));
          }
          this.setState({evenArray:even,oddArray:odd})
        })
    }

    render(){
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odd</h4>
                <input className="inputLine" onChange={(e)=>this.inputChange(e)}/>
                <button className="confirmationButton" onClick={(e)=>this.sortEvenandOdd(e)}>Split</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}
export default EvenAndOdd;