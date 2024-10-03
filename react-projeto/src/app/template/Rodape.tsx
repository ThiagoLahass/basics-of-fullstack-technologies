export default function Rodape() {
    return (
        <footer className='flex justify-end text-zinc-300 text-sm bg-zinc-700 px-6 py-3'>
            <span>Todos os direitos reservados &copy; {new Date().getFullYear()}</span>
        </footer>
    );
}
