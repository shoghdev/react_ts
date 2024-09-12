import { useContext } from "react"
import { ProductContext } from "../context"
import { IBasket } from '../types'

export const Basket = () => {
    const context = useContext(ProductContext)
    if(!context) {
        throw new Error("Not found")
    }

    const { state, dispatch } = context

    return <div className="col-md-5">
                <table className="table table-dark table-bordered">
                    <thead>
                        <tr>
                            <th>product</th>
                            <th>price</th>
                            <th>count</th>
                            <th>subtotal</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        state.basket.map((product:IBasket) => 
                                    <tr key={product.id}>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.count}</td>
                                        <td>{product.price * product.count}</td>
                                        {/* <td>
                                            <button onClick={()=>onCountUp(id)} className='btn btn-primary'>+</button>
                                            <button onClick={()=>onCountDown(id)} className='btn btn-secondary m-3'>-</button>
                                            <button onClick={()=>onRemove(id)} className='btn btn-danger'>x</button>
                                        </td> */}
                                    </tr>
                        )}
                    </tbody>
                </table>
            </div>
}