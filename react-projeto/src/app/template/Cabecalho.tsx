import { IconBrandReact } from "@tabler/icons-react";

export default function Cabecalho() {
    return (
        <header className="flex justify-between items-center bg-zinc-700 px-6 py-2">
            <div className="flex items-center gap-2">
                <IconBrandReact size={34} stroke={1} className="text-blue-300"/>
                <span className="font-black">React Essencial</span>
            </div>
            <div className="flex justify-center items-center bg-purple-400 w-10 h-10 rounded-full">US</div>
        </header>
    );
}
