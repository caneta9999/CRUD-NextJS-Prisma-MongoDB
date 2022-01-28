import Form from '../componentes/form.js'
import React from 'react';
import ReactDOM from 'react-dom';


function Home() {
  const styleTitulo = {margin: "8px"}
  const styleInput = {margin: "5px"}
  return (
    <div>
      <h1 style={styleTitulo}>Cadastrar</h1>
      <Form nomeSubmit="Enviar" nome="Livro" nota="1" action="http://localhost:3000/cadastrar"></Form>
      <a href="/listar">
        <button style={styleInput}>Listar livros</button>
      </a>
    </div>
  )
}
export default Home