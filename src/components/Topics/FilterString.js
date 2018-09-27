import React, { Component } from "react";

class FilterString extends Component{
    constructor(){
        super();
        this.state = {
            unFilteredArray: [
                "hello pineapple",
                "there car field",
                "my ffff",
                "namedddddd",
                "isssstetg",
                "Ethansanders"
            ],
            userInput:"",
            filteredArray: []
        }
    }
    changeInput(event){
        this.setState({userInput:event.target.value})
    }
    doFilter(){
        let unFiltered = this.state.unFilteredArray.slice();
        let filtered = unFiltered.filter((str,i)=>{
            return (str.search(this.state.userInput) !== -1)
        })
        this.setState({filteredArray:filtered})
    }
    render(){
        return(
            <div className ="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{this.state.unFilteredArray}</span>
                <input className="inputLine" onChange={(e)=>this.changeInput(e)}></input>
                <button className ="confirmationButton" onClick={(e)=>this.doFilter(e)}>Filter</button>
                <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterString;