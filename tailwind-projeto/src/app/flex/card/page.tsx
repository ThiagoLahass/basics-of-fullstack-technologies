import Card from '@/components/flex/Card'
import Pagina from '@/components/template/Pagina'
import Titulo from '@/components/template/Titulo'

export default function PaginaCard() {
    return (
        <Pagina className="flex flex-col gap-7">
            <Titulo texto="Card com Flexbox" descricao="Exemplo do uso prático do flexbox" />
            <div>
                <Card />
            </div>
        </Pagina>
    )
}
