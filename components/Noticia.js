const Noticia = props => {
  const {
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    source
  } = props.noticia;
  let image =
    urlToImage !== "" || urlToImage.status !== "404" ? (
      <img src={urlToImage} alt="image" className="card-img-top" />
    ) : (
      <p>Imagen no disponible</p>
    );
  return (
    <div className="card col-md-5 mr-2 mb-3">
    <div className="card-image">
    {image}
    </div>
      

      <div className="card-body">
        <div className="card-title h3">
          <a href={url} target="_blank">
            {title}
          </a>
        </div>
        <p className="card-text">{source.name}</p>
        <p className="card-text">{description}</p>
        <p className="card-text">{publishedAt}</p>
      </div>
    </div>
  );
};
export default Noticia;
