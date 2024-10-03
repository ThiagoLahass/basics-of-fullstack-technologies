import Contador from "@/components/Contador";
import Pagina from "../template/Pagina";

export default function PaginaContador(){
    return (
        <Pagina>
            <div>
                <Contador valorInicial={1000}/>
                <Contador valorInicial={1}/>
                <Contador />
            </div>
        </Pagina>
    )
}