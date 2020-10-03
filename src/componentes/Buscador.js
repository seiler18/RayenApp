import React, { Component } from "react";

class Buscador extends Component {
  busquedaRef = React.createRef();

  obtenerDatos = (e) => {
    e.preventDefault();

    //tomamos el valor del input
    const termino = this.busquedaRef.current.value;
    //lo enviamos al componente principal APP
    this.props.datosBusqueda(termino);
  };

  render() {
    return (
      <form onSubmit={this.obtenerDatos}>
        <div className="row">
          <div className="form-group col-md-8">
            <input
              ref={this.busquedaRef}
              type="text"
              className="form-control form-control-lg"
              placeholder="Ingrese imagen a buscar"
            />
          </div>

          <div className="form-group col-md-4">
            <input
              type="submit"
              className="btn btn-lg btn-success btn-block"
              value="Buscar..."
              placeholder="Ingrese imagen a buscar"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Buscador;
