import FormFisico from "../components/Form/FormFisico";
import FormJurico from "../components/Form/FormJuridico";
import { useState } from 'react';

export default function Cadastro (){

    const [isFisica, setIsFisica] = useState(true);

    const pessoaEscolhida = () => {
        if (isFisica == false){
            return <FormJurico pessoaEscolhida={setIsFisica}/>
        } else if (isFisica == true){
            return <FormFisico pessoaEscolhida={setIsFisica}/>
        }
    }
    
    return(
        <>
        {pessoaEscolhida()}
        </>
    )
}
