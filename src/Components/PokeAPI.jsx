import React, { Component } from 'react';

class PokeAPI extends Component {
    state = {  
        items : [],
        single : "he"
    }
    
    async componentDidMount() {
        const datastore = ""
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
        const data = await response.json()
        this.setState( {items: data.moves})
        
        
        
    }

    moveswithM = (move) => {
         if (move.charAt(0) == 'm'){
            return <div>{move}</div>
         }
         return 
    }

    render() { 
        console.log(this.state.items)
        return ( <div>
            {this.state.items.map(thing => <div>
                { this.moveswithM(thing.move.name) }</div>)}
        </div>  );
    }
}
 
export default PokeAPI;