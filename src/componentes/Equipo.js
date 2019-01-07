import React, { Component } from 'react';

class Equipo extends Component {
    
    render() {
        const { nombre, titulos} = this.props.info;
        return (
           <li className="list-group-item d-flex justify-content-between align-items-center">
            <p className="m-0">
                {nombre}
            </p>
            <span className="badge-danger badge">{titulos}</span>
           </li>
        )
    }
}





export default Equipo;