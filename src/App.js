import React, {Component} from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from './robots';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ""
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});  
    } 

    render() {
        const filterRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase()
                .includes(this.state.searchfield.toLocaleLowerCase());
        });

        return (
            <div className = "tc pa2 bg-light-yellow">
                <h1>Robot Friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filterRobots} />
                <footer className="tc ma3">By Miguel</footer>
            </div>
        )   
    }
}

export default App;