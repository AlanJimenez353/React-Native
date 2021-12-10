import React,{Fragment,useState} from "react";

export const Contador = () =>{


    const[numero,setNumero]=useState(0);

    const Aumentar= () =>{
        setNumero(numero+1);
    }
    const Reducir= () =>{
        setNumero(numero-1);
    }
    return(
        <Fragment>
            <div className="diiv my-5">
            <h2>Cantidad del contador:  {numero}</h2>
            <button onClick={Aumentar} className="mx-5">Aumentar</button>
            <button onClick={Reducir}>Reducir</button>
            </div>
        </Fragment>
    )
}
export default Contador;