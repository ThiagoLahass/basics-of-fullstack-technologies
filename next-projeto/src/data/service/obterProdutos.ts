'use server'

import produtos from "../constants/produtos"
import { esperar } from "./utils"

export default async function obterProdutos() {
    await esperar(3000)
    return produtos
} 