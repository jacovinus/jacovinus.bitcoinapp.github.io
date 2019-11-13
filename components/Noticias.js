import Noticia from "./Noticia";

const Noticias = (props) => {
const {noticias} = props;
  return (
    <div className="row">
      {noticias.map(noticia => (
        <Noticia key={noticia.url} noticia={noticia} />
      ))}
    </div>
  );
};
export default Noticias;
