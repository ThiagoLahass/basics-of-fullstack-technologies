import { IconShoppingCart, IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";

export default function Card() {
    return (
        <div className="flex flex-col gap-4 bg-zinc-800 w-96 p-4 rounded-md">
            <div className="w-full h-52 relative">
                <div className="absolute z-50 px-2 py-0.5 top-2 left-2 bg-black rounded-full text-xs">
                    39% off
                </div>
                <Image
                    src="https://shoemix.fbitsstatic.net/img/p/tenis-casual-nike-air-max-intrlk-lit-branco-air-max-intrlk-lite-75448/291814-1.jpg?w=670&h=670&v=no-change&qs=ignore"
                    alt="Imagem do produto"
                    className="rounded-md object-cover"
                    fill
                />
            </div>
            <div className="flex flex-col gap-2">
                <div className="text-lg">Nike Air MX Super 2500</div>
                <div className="flex justify-between items-center">
                    <div className="flex gap-1 items-baseline">
                        <span className="font-bold text-xl">R$ 199,00</span>
                        <span className="line-through text-sm text-zinc-400">R$ 299,00</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                        <IconStarFilled size={18} className="text-yellow-400" />
                        <IconStarFilled size={18} className="text-yellow-400" />
                        <IconStarFilled size={18} className="text-yellow-400" />
                        <IconStarFilled size={18} className="text-yellow-400" />
                        <IconStarFilled size={18} className="text-yellow-400" />
                        <div className="bg-yellow-300 text-black text-sm px-2 ml-2">
                            5.0
                        </div>
                    </div>
                </div>
                <button className="flex justify-center items-center gap-2 botao">
                    <IconShoppingCart size={23} />
                    <span>Comprar</span>
                </button>
            </div>
        </div>
    )
}