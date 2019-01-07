import React, { Component } from 'react';
import Equipo from './Equipo';

class Equipos extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.equipos.map((equipo) => (
                    <Equipo 
                        info={equipo}
                        key={equipo.nombre}
                    />
                ))}
            </React.Fragment>
        )
    }
}

export default Equipos;