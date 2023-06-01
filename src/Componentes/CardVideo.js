import { BoxPrincipal } from "./CardVideo.styled";


function CardVideo(props) {
  function reproduzVideo(props) {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <BoxPrincipal onClick={reproduzVideo}>
      <img src={props.image1} alt={props.textoAlternativo} />
      <h4>{props.titulo}</h4>
    </BoxPrincipal>
  );
}

export default CardVideo;
