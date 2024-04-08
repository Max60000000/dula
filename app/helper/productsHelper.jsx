import { useAppSelector, useAppDispatch } from '../lib/hooks';
import {  initializeProducts,  setProductName,  Product,} from '../lib/features/product/productSlice'

export default function productsHelper() {
  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.product.products)

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('https://getbizzusa-api.lbtechnology.co/products')
      const data = await response.json()
      dispatch(initializeProducts(data))
    }

    fetchProducts()
  }, [dispatch])

  return products
}