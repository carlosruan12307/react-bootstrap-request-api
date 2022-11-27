import React from 'react';
import { useState, useEffect } from 'react';
import './App.css'
function Formulario({ cad, digitarTeclado, cadastro, obj, remover }) {


    return (

        <form className='form' >

            <input className='prod form-control ' value={obj.nome} type="text" name="nome" onChange={digitarTeclado} placeholder="nome do produto" />


            <input className='prod form-control' type="text" value={obj.marca} name="marca" onChange={digitarTeclado} placeholder="nome da marca" />

            {
                cad ?
                    <div>



                        <button className='prod btn btn-danger' name="cadastrar" onClick={cadastro}  >Cadastrar</button>
                    </div>
                    :
                    <div>
                        <button className='prod btn btn-primary' name="listar" type="submit"  >Listar</button>
                        <button className='prod btn btn-secondary' name="alterar" type="submit" >Alterar</button>
                        <button className='prod btn btn-danger' name="deletar" onClick={remover} type="submit" >Deletar</button>
                        <button className='prod btn btn-danger' name="voltar" type="submit" >Voltar</button>
                    </div>
            }





        </form>

    )
}

export default Formulario;