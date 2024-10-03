import Formulario from '../template/Formulario';
import Pagina from '../template/Pagina';

export default function PaginaFormulario() {
    return (
        <Pagina>
            <div>
                <h1 className="text-2xl font-bold">Formulário</h1>
                <Formulario />
            </div>
        </Pagina>
    );
}
