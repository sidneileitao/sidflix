import React from 'react';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import dadosIniciais from './dados_iniciais.json';
import dadosTextos from './dados_textos.json';


function App() {
  return (
    <div>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="O que é"
      />

      <Carousel
        category={dadosIniciais.categorias[0]}
      />
      <Carousel
        category={dadosIniciais.categorias[1]}
      />
       <Carousel
        category={dadosIniciais.categorias[2]}
      />
      
    </div>
  );
}

export default App;
