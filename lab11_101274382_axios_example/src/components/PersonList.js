import React, { Component } from 'react';
import axios from 'axios';

class PersonList extends Component {
    state = {
        persons: [],
    };

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=10')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                const persons = data.results;
                this.setState({ persons });
            })
            .catch((err) => console.error(err));
    }
    

    render() {
        return (
            <div className="container">
                <ul className="list-group">
                    {this.state.persons.map((person, index) => (
                        <li key={index} className="list-group-item">
                            {person.name.first} {person.name.last}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default PersonList;
