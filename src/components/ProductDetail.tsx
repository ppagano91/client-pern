import React from 'react'
import { Product } from '../types'
import { formatCurrency } from '../utils'

type ProductDetailProps = {
    product: Product
}

const ProductDetail = ({product}: ProductDetailProps) => {

  const isAvailable = product.availability
  return (
    <tr className="border-b">
    <td className="p-3 text-lg text-gray-800 truncate max-w-xs">
        {product.name}
    </td>
    <td className="p-3 text-lg text-gray-800 max-w-xs">
        {formatCurrency(product.price)}
    </td>
    <td className="p-3 text-lg text-gray-800 max-w-xs">
        {isAvailable ? "Disponible" : "No Disponible"}
    </td>
    <td className="p-3 text-lg text-gray-800 max-w-xs">
        <div className="flex gap-2 items-center">
            <button>Editar</button>
            <button>Eliminar</button>
        </div>
    </td>
</tr>

  )
}

export default ProductDetail