import MasterPage from "../components/Master";
import fetch from "isomorphic-unfetch";
import Precio from "../components/Precio";
import Noticias from "../components/Noticias";
import Eventos from "../components/Eventos";
const Index = (props) => {

  return (
    <MasterPage>
      <div className="row">
        <div className="col-12">
          <h5>Precio del bitcoin</h5>
          <Precio precio={props.precioBitcoin} />
        </div>
        <div className="col-md-8">
          <h4>Noticias</h4>
          <Noticias noticias={props.noticiasBitcoin} />
        </div>
        <div className="col-md-4">
 <h4>Eventos</h4>
         <Eventos eventos={props.eventos} />
       
        </div>
      </div>
    </MasterPage>
  );
};
Index.getInitialProps = async () => {
  const precio = await fetch("https://api.coinmarketcap.com/v2/ticker/1/");
  const resPrecio = await precio.json();
  const noticias = await fetch("https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=9bdccd4bdab14312aa9b74ace5d92118&language=es");
  const resNoticias = await noticias.json();
  const eventos = await fetch("https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&sort_by=date&location.address=Spain&token=JQFZGKCCL3NXDIE6KMVQ");
  const resEventos = await eventos.json();

  return {
    precioBitcoin: resPrecio.data.quotes.USD,
    noticiasBitcoin: resNoticias.articles,
    eventos: resEventos.events
  }
}
export default Index;
