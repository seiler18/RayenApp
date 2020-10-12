import React, { Component } from "react";
import Buscador from "./componentes/Buscador";
import Resultado from "./componentes/Resultado";
import rayen from "./componentes/FirmaCurriculo.png";
import FooterPage from "./componentes/Footer";
class App extends Component {
  state = {
    termino : '',
    imagenes: [],
    pagina : ''
  }


  scroll = () => {

    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth','start');
  }
  paginaAnterior = () => {
    //leer el state pagina actual
   
    let pagina = this.state.pagina

    //leer si es una pagina es 1
    if(pagina===1)return null;
    //sumar a la pagina actual 1
    pagina -=1
  
    //agregar el cambio al state
  this.setState({
    pagina
  },()=> {
    this.consultarApi();
    this.scroll();
  });
 /*  console.log(pagina); */
  };

  paginaSiguiente = () => {
    //leer el state pagina actual
   
    let pagina = this.state.pagina
    //sumar a la pagina actual 1
    pagina +=1
  
    //agregar el cambio al state
  this.setState({
    pagina
  },()=> {
    this.consultarApi();
    this.scroll();
  });

    /* console.log(pagina); */
  };

  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=18561824-4de1bb5b34eaa58405117f4f4&q=${termino}&per_page=30&page=${pagina}`;

    //console.log(url);

    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) => this.setState({ imagenes: resultado.hits }));
  };

  datosBusqueda = (termino) => {
    this.setState(
      {
        termino: termino,
        pagina: 1
      },
      () => {
        this.consultarApi();
      }
    );
  };

  render() {
    return (
      <div className="container justify-content-center">
        <div className="jumbotron">
          <div className="container row justify-content-center">
        <img src={rayen} alt="" width="100%" height="80%"/></div>
          <br/>
          <p className="lead text-center">Buscador de Imagenes </p>
          <p className="lead text-center"><a href="https://seiler18.github.io/Curriculo/" rel="noopener noreferrer" target="_blank">Curriculo Jesus Seiler</a></p>
          <Buscador datosBusqueda={this.datosBusqueda} />
        </div>
        <div className="row justify-content-center">
          <Resultado
            imagenes={this.state.imagenes}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
           
          />
          
        </div>
        <FooterPage/>
      </div>
     
      
    );

    
  }
  
}

export default App;
