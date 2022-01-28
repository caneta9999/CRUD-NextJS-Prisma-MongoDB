import Prisma from '../lib/prisma.ts';
const prisma = Prisma
const stylePage = {padding: "8px"}
function Cadastrar(){
  return(
    <div style={stylePage}>
      <p>Cadastrado com sucesso!</p>
      <a href="/">
        <button>Voltar</button>
      </a>

    </div>
  )
}
export async function getServerSideProps({query}){
  //receber os dados
  var nome = query.nomeInput
  var nota = Number(query.notaInput)
  if(isNaN(nota) || nota>5 || nota<1){
    nota = 1
  }
  if(nome.length > 50 || nome.length < 1){
    nome = "Livro"
  }
  //cadastrar
  const newLivro = await prisma.livro.create({
  data: {
    nome: nome,
    nota: nota}
  })
  return {props: {query} }
}
export default Cadastrar