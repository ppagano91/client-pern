import { useNavigate } from 'react-router-dom'
import { Product } from '../types'
import { formatCurrency } from '../utils'

type ProductDetailProps = {
    product: Product
}

const ProductDetail = ({product}: ProductDetailProps) => {
    const navigate = useNavigate();

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
            <button
                onClick={() => navigate(`/productos/${product.id}/editar`)}
                className='bg-indigo-600 text-white rounded-lg w-full p-2 font-bold text-xs text-center'
            >Editar</button>
            <button>Eliminar</button>
        </div>
    </td>
</tr>

  )
}

export default ProductDetail