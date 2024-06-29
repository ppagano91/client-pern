import { useNavigate, Form, ActionFunctionArgs, redirect, useFetcher } from 'react-router-dom'
import { Product } from '../types'
import { formatCurrency } from '../utils'
import { deleteProduct } from '../services/ProductService'

type ProductDetailProps = {
    product: Product
}

export async function action({params}: ActionFunctionArgs) {
    if (params.id !== undefined){
        await deleteProduct(Number(params.id));
        return redirect('/');
    }
}

const ProductDetail = ({product}: ProductDetailProps) => {
    const fetcher = useFetcher();
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
        <fetcher.Form method='POST'>
            <button
                type='submit'
                name='id'
                value={product.id}
                className={`${isAvailable ? 'text-green-600' : 'text-red-600'} rounded-lg p-2 text-xs uppercase font-bold w-full border border-black-100 hover:cursor-pointer`}
            >
                {isAvailable ? "Disponible" : "No Disponible"}
            </button>
        </fetcher.Form>
    </td>
    <td className="p-3 text-lg text-gray-800 max-w-xs">
        <div className="flex gap-2 items-center">
            <button
                onClick={() => navigate(`/productos/${product.id}/editar`)}
                className='bg-indigo-600 text-white rounded-lg w-full p-2 font-bold text-xs text-center'
            >Editar</button>
            <Form
                className='w-full'
                method='POST'
                onSubmit={(e) => {
                    if(!confirm(`¿Desea eliminar el producto '${product.name}'?`)){
                        e.preventDefault();
                    }
                }}
                action={`productos/${product.id}/eliminar`}>
                <input 
                    type='submit'
                    value={"Eliminar"}                    
                    className='bg-red-600 text-white rounded-lg w-full p-2 font-bold text-xs text-center hover:cursor-pointer'
                    />
            </Form>    
        </div>
    </td>
</tr>

  )
}

export default ProductDetail