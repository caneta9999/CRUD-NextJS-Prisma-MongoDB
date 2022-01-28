import React, { useEffect, useState } from 'react';
import Td from '../componentes/td.js'
import Prisma from '../lib/prisma.ts';
const prisma = Prisma
export async function getServerSideProps(){
  //pesquisar os dados
  const query = await prisma.livro.findMany({})
  return {props: {query} }
}
const styleTitulo = {margin: "8px"}
const styleTD = {fontSize: "30px"}
const styleInput = {margin: "5px"}
class Listar extends React.Component{
      constructor(props) {
        super(props)
        this.state = {};
      }
      render(){
        var rows = []
        var i = 0
        if(this.props.query){
          for(i; i < this.props.query.length ; i++){
            rows.push(<Td nome={this.props.query[i].nome} nota={this.props.query[i].nota} hrefEdit={"/edit/" + this.props.query[i].id} hrefDelete={"/delete/" + this.props.query[i].id}/>)
          }
        }
      return(
        <div>
        <h2 style={styleTitulo}>Livros já cadastrados</h2>
          <table>
            <thead>
              <tr>
                <td style={styleTD}>Nome</td>
                <td style={styleTD}>Nota</td>
                <td style={styleTD}>Ação</td>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
          <a href="/">
            <button style={styleInput}>Voltar</button>
          </a>
        </div>
        )}
  }  
export default Listar