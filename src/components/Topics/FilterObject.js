import React,{ Component } from "react";

class FilterObject extends Component {
    constructor(){
        super();
        this.state = {
            unFilteredArray: [
                {dog:"Poodle",cat:"Fluffy",pig:"Yorkshire"},
                {dog:"Poodle",cow:"Jersey",cat:"Fluffy"},
                {chicken:"Rhode Island Red",cow:"Jersey",cat:"Fluffy"}
            ],
            userInput: "",
            filteredArray: []
        }
    }
    inputChange(event){
        this.setState({userInput:event.target.value});
    }
    doFilter(){
        let unFiltered = this.state.unFilteredArray.slice();
        let filtered = unFiltered.filter((obj,i)=>{
            let hasProp = true;
            for(let key in obj){
                if(key === this.state.userInput){
                    hasProp = false
                }
            }
            return hasProp;

        })
        this.setState({filteredArray:filtered})
 
    }


    render(){
        console.log(this.state)
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={(e)=>this.inputChange(e)}></input>
                <button className="confirmationButton" onClick={(e)=>this.doFilter(e)}></button>
                <span className="resultsBox filterObjectRB">{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterObject;