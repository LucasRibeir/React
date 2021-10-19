import React from 'react';
import DataItem from './DataItem';

const DataList = ({list}) => {
    return list.map(({id, nome, email, disciplina, 
        situacao, nota1, nota2, senha, foto}) => (
          <DataItem
            id = {id}
            nome = {nome}
            email = {email}
            disciplina = {disciplina}
            nota1 = {nota1}
            nota2 = {nota2}
            senha = {senha}
            situacao = {situacao}
            foto = {foto}
          ></DataItem>  
        ))
}

export default DataList;