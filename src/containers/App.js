import React,{Component} from 'react';
import Card from '../components/Card';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/scroll';

class App extends Component{
    constructor(){
        super();
        this.state = {
            'robots' : [],
            'SearchField' : ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            this.setState({'robots': users })
        });
    }

    onSearchChange = (event) => {
        this.setState({'SearchField':event.target.value})
    }

    render(){
        const filterSearchArr = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.SearchField.toLowerCase())
        })
        return(
            <div>
                <h1>Robo Friends</h1>
                <SearchBox SearchChange = {this.onSearchChange}/>
                <Scroll>
                    <Card robot = {filterSearchArr}></Card>
                </Scroll>
            </div>
        )
    }
}

export default App;