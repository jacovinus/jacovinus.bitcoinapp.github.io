const Evento = (props) => {
    const {name, description, url, source } = props.info;
return(
 <div className="list-group-item">
     <a href={url} target="_blank">
         {name.text}
     </a>
     <p>
         {description.text}
     </p>
     <p>
         {source}
     </p>
 </div>
)
}
export default Evento;