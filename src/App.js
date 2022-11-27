
import React from 'react';
import { useState, useEffect } from 'react';
import Boostrap from './boostrapBrincando';
import Formulario from './formulario';
import Tabela from './tabela';

function App() {
  const [produtos, setProdutos] = useState([]);
  const [cad, setCad] = useState(true);
  const [objprod, setObjProd] = useState({
    idProduto: 1,
    nome: "",
    marca: ""


  })
  useEffect(() => {
    console.log(produtos);
  }, [produtos])


  useEffect(() => {
    fetch("http://localhost:8080/listar")
      .then(res => {
        try {
          if (res.ok) {
            return res.json()
          } else {
            throw new Error(res)
          }
        }
        catch (err) {
          console.log(err.message)

        }
      })
      .then(resJson => {
        setProdutos(resJson);
      })
      .catch(err => console.log(err))
  }, []);

  const digitarTeclado = (x) => {
    const { name, value } = x.target;
    setObjProd({ ...objprod, [name]: value })

  }

  const cadastrar = (x) => {
    x.preventDefault();
    fetch('http://localhost:8080/cadastrar', {
      method: 'post',
      body: JSON.stringify(objprod),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => {
        try {
          if (res.ok) {
            return res.json()
          } else {
            throw new Error(res)
          }
        }
        catch (err) {
          console.log(err.message)

        }
      })
      .then(resJson => {
        if (resJson.mensagem !== undefined) {
          alert(resJson.mensagem)
        } else {
          setProdutos([...produtos, resJson])
          alert("yep")
          limparformulario();
        }
      })
      .catch(err => console.log(err))

  }

  const limparformulario = () => {
    setObjProd({
      idProduto: 1,
      nome: "",
      marca: ""


    });
  }

  const preencher = (x) => {
    setObjProd(x)
    setCad(false);
  }

  const apagar = (event) => {
    event.preventDefault();
    fetch('http://localhost:8080/deletar/' + objprod.idProduto, {
      method: 'delete',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => {
        try {
          if (res.ok) {
            return res.json()
          } else {
            throw new Error(res)
          }
        }
        catch (err) {
          console.log(err.message)

        }
      })
      .then(resJson => {
        alert(resJson.mensagem)

        let vetorTemp = [...produtos];

        let indice = vetorTemp.findIndex((p) => {
          return p.codigo === objprod.codigo;




        })
        vetorTemp.slice(indice, 1);

        setProdutos(vetorTemp);
        limparformulario();

      })
      .catch(err => console.log(err))

  }
  return (

    <div >
      <p>{JSON.stringify(produtos)}</p>
      <Formulario digitarTeclado={digitarTeclado} cad={cad} cadastro={cadastrar} obj={objprod} remover={apagar} />
      <Tabela produtos={produtos} preencher={preencher} />
      {/* <Boostrap/> */}
    </div>
  );
}

export default App;
