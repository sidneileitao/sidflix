import React from 'react';
import Menu from './components/Menu';
import Carousel from './components/Carousel';
import dadosIniciais from './dados_iniciais.json'

function App() {
  return (
    <div>
      <Menu />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />
      <h1>Hello Word</h1>
      Alguma coisa...
    </div>
  );
}

export default App;
