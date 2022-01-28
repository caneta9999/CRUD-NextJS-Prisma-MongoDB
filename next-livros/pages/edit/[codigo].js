import Form from '../../componentes/form.js'
import React from 'react';
import Prisma from '../../lib/prisma.ts';

const prisma = Prisma
export async function getServerSideProps({query}){
  //pesquisar pelo id
  const editQuery = await prisma.livro.findMany({
    where: {
      id: Number(query.codigo)
    }
  })
  return {props: {editQuery} }
}
const styleTitulo = {margin: "8px"}
const styleVoltar = {margin: "8px"}



class Editar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }
  render(){
    var nome = "";
    var nota = "";
    var id = ""
    if(this.props.editQuery){
      nome = this.props.editQuery[0].nome
      nota = this.props.editQuery[0].nota
      id = this.props.editQuery[0].id
    }
    return (
      <div>
        <h1 style={styleTitulo}>Editar o livro {id}</h1>
        <Form nomeSubmit="Atualizar" nome={nome} nota={nota} action={"http://localhost:3000/edit/concluir/" + id}></Form>
        <a href="/listar">
          <button id="btnVoltar" style={styleVoltar}>Voltar</button>
        </a>
      </div>
    )}
}
export default Editar