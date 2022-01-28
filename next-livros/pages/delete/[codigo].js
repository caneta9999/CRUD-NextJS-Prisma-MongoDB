import Prisma from '../../lib/prisma.ts';
const prisma = Prisma
const stylePage = {padding: "8px"}
function Deletar(){
  return(
    <div style={stylePage}>
      <p>Deletado com sucesso!</p>
      <a href="/listar">
        <button>Voltar</button>
      </a>

    </div>
  )
}
export async function getServerSideProps({query}){
  //receber os dados
  var codigo = query.codigo
  //deletar
  const deletLivro = await prisma.livro.delete({
  where: {
    id: Number(codigo)
  }})
  return {props: {query} }
}
export default Deletar