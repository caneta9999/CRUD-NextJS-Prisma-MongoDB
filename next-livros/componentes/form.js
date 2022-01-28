export default function Form(props){
    const styleInput = {margin: "5px", minWidth:"100px"}
    const styleTitulo = {margin: "8px"}
    return (
        <form action={props.action}>
            <label htmlFor="nomeInput" style={styleTitulo} method="POST">Nome: </label>
			<input type="text" defaultValue={props.nome} style={styleInput} name="nomeInput" id="nomeInput" placeholder="Nome do livro" maxLength="50" required/>
            <br/>

            <label htmlFor="notaInput" style={styleTitulo}>Nota: </label>
            <input type="number" defaultValue={props.nota} style={styleInput} name="notaInput" id="notaInput" placeholder="Nota do livro" min="1" max="5" required></input>
            <br/>

            <input type="submit" style={styleInput} value={props.nomeSubmit}/>
        </form>
    )
}
