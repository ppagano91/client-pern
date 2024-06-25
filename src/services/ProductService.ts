import { safeParse } from "valibot"
import { DraftProductSchema } from "../types"

type ProductData = {
    [k: string]: FormDataEntryValue 
}

export async function addProduct(data: ProductData){
    try {
        const result = safeParse(DraftProductSchema, {
            name: data.name,
            price: Number(data.price)
        })
        console.log(result)

        if(result.success){
            throw new Error("Datos no válidos")
        }
    } catch (error) {
        console.log(error)
    }
}