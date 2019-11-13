const Precio = (props) => {
    const {price, percent_change_1h, percent_change_24h, percent_change_7d} = props.precio;
return(
    <div className="alert alert-success d-md-flex justify-content-between">

          <p className="list-inline-item">Precio actual: <span className="badge badge-light">US$D./ {price.toFixed(2)}</span> </p>
          <p className="list-inline-item">Variacion 1h: <span className="badge badge-light">% {percent_change_1h.toFixed(2)}</span> </p>
          <p className="list-inline-item">Variacion 24h: <span className="badge badge-light">% {percent_change_24h.toFixed(2)}</span> </p>
          <p className="list-inline-item">Variacion 7d: <span className="badge badge-light">% {percent_change_7d.toFixed(2)}</span> </p>
     
          </div>
)
}
export default Precio;
