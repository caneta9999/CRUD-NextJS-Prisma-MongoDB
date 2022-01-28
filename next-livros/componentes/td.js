export default function Td(props){
    var styleTD2 = {border: "2px solid black"}
    return (
            <tr>
                <td style={styleTD2}>{props.nome}</td>
                <td style={styleTD2}>{props.nota}</td>
                <td style={styleTD2}>
                    <button id="btnEdit"><a href={props.hrefEdit}>Editar</a></button> 
                    -
                    <button id="btnDelete"><a href={props.hrefDelete}>Deletar</a></button>
                </td>
            </tr>
    )
}
