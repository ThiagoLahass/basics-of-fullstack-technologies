import { ReactNode } from "react"
import Cabecalho from "./Cabecalho"
import Rodape from "./Rodape"
import Menu from "./Menu"

interface PaginaProps {
    children: ReactNode
    className?: string
}

export default function Pagina(props: PaginaProps){
    return (
        <div className="flex flex-col min-h-screen">
            <Cabecalho className="h-16"/>
            <div className="flex flex-1 boxed">
                <Menu className="hidden lg:block lg:w-52 xl:w-64 py-7"/>
                <main 
                    className={`
                        flex-1 py-7
                        ${props.className ?? ''}    
                    `}
                >
                    {props.children}
                </main>
            </div>
            <Rodape className="h-10" />
        </div>
    )
}