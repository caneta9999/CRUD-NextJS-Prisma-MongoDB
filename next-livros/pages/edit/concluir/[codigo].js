import Prisma from '../../../lib/prisma.ts';
const prisma = Prisma
const stylePage = {padding: "8px"}
function Concluir(){
  return(
    <div style={stylePage}>
      <p>Editado com sucesso!</p>
      <a href="/listar">
        <button>Voltar</button>
      </a>

    </div>
  )
}
export async function getServerSideProps({query}){
  //receber os dados
  var codigo = query.codigo
  var nome = query.nomeInput
  var nota = Number(query.notaInput)
  if(isNaN(nota) || nota>5 || nota<1){
    nota = 1
  }
  if(nome.length > 50 || nome.length < 1){
    nome = "Livro"
  }
  //atualizar
  const updateLivro = await prisma.livro.update({
    where: {
      id: Number(codigo)
    },
    data: {
      nome: nome,
      nota: Number(nota)
    },
  })
  return {props: {query} }
}
export default Concluir