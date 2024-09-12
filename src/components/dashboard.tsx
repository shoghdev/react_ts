import { Basket } from "./basket"
import { ProductList} from "./productlist"

export const Dashboard = () => {
    return <div>
                <h1>Online shop</h1>
                <div className='row'>
                    <ProductList />
                    <Basket />
                </div>
            </div>
}