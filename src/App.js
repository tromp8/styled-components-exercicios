import React from "react";
import CardVideo from "./Componentes/CardVideo";
import { Botao, Footer, GlobalStyle, Header, Main, MenuVertical, PainelVideos } from "./App.styled";


export default function App() {
  const card1 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };

  return (
    <>
      <GlobalStyle/>

      <div className="tela-inteira">
        <Header>
            <h1>LabeTube</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca" />
        </Header>

        <Main>
          <MenuVertical>
              <ul>
                <Botao>Início</Botao>
                <Botao>Em alta</Botao>
                <Botao>Inscrições</Botao>
                <hr />
                <Botao>Originais</Botao>
                <Botao>Histórico</Botao>
              </ul>
          </MenuVertical>

          <PainelVideos>
            <CardVideo
                image1={card1.imagemDoVideo}
                titulo={card1.titulo}
                textoAlternativo={card1.textoAlternativo}
            />
          </PainelVideos>
        </Main>

        <Footer>
            <h4>Oi! Eu moro no footer!</h4>
        </Footer>
      </div>
    </>
    
  );
}
