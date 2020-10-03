import React, { Component } from "react";
import Buscador from "./componentes/Buscador";
import Resultado from "./componentes/Resultado";
import rayen from "./componentes/rayen.png";
class App extends Component {
  state = {
    termino: "",
    imagenes: [],
    pagina: "",
  };

  paginaAnterior = () => {
    //leer el state pagina actual
    //restar a la pagina actual 1
    //agregar el cambio al state
  };

  paginaSiguiente = () => {
    //leer el state pagina actual
    let pagina = this.state.pagina;

    //sumar a la pagina actual 1

    pagina += 1;
    //agregar el cambio al state
    this.setState({ 
      pagina 
    
    });

    console.log(pagina);
  };

  consultarApi = () => {
    const termino = this.state.termino;
//me falto terminar la paginacion
   /* const pagina = this.state.pagina; */
    const url = `https://pixabay.com/api/?key=18561824-4de1bb5b34eaa58405117f4f4&q=${termino}`;

    //console.log(url);

    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) => this.setState({ imagenes: resultado.hits }));
  };

  datosBusqueda = (termino) => {
    this.setState(
      {
        termino: termino,
        pagina: 1,
      },
      () => {
        this.consultarApi();
      }
    );
  };

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <div className="container row justify-content-center">
        <img src={rayen} alt="" width="100%" height="80%"/></div>
          <br/>
          <p className="lead text-center">Buscador de Imagenes para Rayen SALUD</p>

          <Buscador datosBusqueda={this.datosBusqueda} />
        </div>
        <div className="row justify-content-center">
          <Resultado
            imagenes={this.state.imagenes}
            paginaAnterior={this.props.paginaAnterior}
            paginaSiguiente={this.props.paginaSiguiente}
          />
        </div>
      </div>
    );
  }
}

export default App;
