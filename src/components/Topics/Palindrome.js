import React,{ Component } from "react";

class Palindrome extends Component{
    constructor(){
        super()
        this.state = {
            userInput:"",
            palindrome:""
        }
    }
    changeInput(event){
        this.setState({userInput:event.target.value});
    }
    checkPalindrome(){
        let isPal = "false"
        console.log(Array.from(this.state.userInput).reverse().join(""))
        if(this.state.userInput === Array.from(this.state.userInput).reverse().join("")){
            isPal = "true"
        }
        
        this.setState({palindrome:isPal})
    }
    render(){
        console.log(this.state)
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e)=>this.changeInput(e)}></input>
                <button className="confirmationButton" onClick={(e)=>this.checkPalindrome(e)}>Check</button>
                <span className="resultsBox">{this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome;