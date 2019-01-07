import React , { Component } from 'react';

//crear el context
const LaLigaContext = React.createContext();
export { LaLigaContext };

class LaLigaProvider extends Component {
    state = {
        equipos : [
          {
            nombre: 'Real Madrid',
            titulos: 35
          },
          {
            nombre: 'Barcelona',
            titulos: 25
          },
          {
            nombre: 'Atletico de Madrid',
            titulos: 10
          }
        ]
      }

    render() {
        return (
            <LaLigaContext.Provider value={{
                state: this.state.equipos
            }}>
                {this.props.children}
            </LaLigaContext.Provider>
        )
    }
}

export default LaLigaProvider;