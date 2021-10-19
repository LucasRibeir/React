import React, {Fragment} from 'react';

const DataItem =
({id, nome, email, disciplina, situacao, nota1, nota2 ,senha, foto})=>(
<Fragment>
    <h5>Nome : {nome}</h5>
    <img src={foto} className="img-thumbnail shadow" />
    <br/> <b>Id:</b>{id}<br/>
    <br/> <b>Email:</b>{email}<br/>
    <br/> <b>disciplina:</b>{disciplina}<br/>
    <br/> <b>Situacao:</b>{situacao}<br/>
    <br/> <b>Nota1:</b>{nota1}<br/>
    <br/> <b>Nota2:</b>{nota2}<br/>
    <br/> <b>Senha:</b>{senha}<br/>
</Fragment>
)
export default DataItem;