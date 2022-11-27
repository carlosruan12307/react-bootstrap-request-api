function Tabela({produtos,preencher}) {
    return(
        <div>
<div className=" row border border-primary bg-dark bg-gradient text-white">

<div className="col-3 border text-center">Id</div>
<div className="col-3 border text-center">Nome</div>
<div className="col-3 border text-center">Marca</div>
<div className="col-3 border text-center">Selecionar</div>
</div>
{produtos.map((post, index) => {
            return(


<div className=" row border border-primary bg-dark bg-gradient text-white">

<div className="col-3 border text-center">{post.idProduto}</div>
<div className="col-3 border text-center">{post.nome}</div>
<div className="col-3 border text-center">{post.marca}</div>
<button className="col-3 border text-center bg-secondary" name="selecionar" type="submit"  onClick={() => {preencher(post)}}>Selecionar</button>
</div>
         
            )
        })
}
</div>
         
       
   

    )
}


export default Tabela;