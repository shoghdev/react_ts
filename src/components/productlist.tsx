import { useContext } from "react"
import { ProductContext } from "../context"

export const ProductList = () => {
    const context = useContext(ProductContext)
    if(!context) {
        throw Error("undefind")
    }

    const {state, dispatch} = context

    return <div className="col-md-7">
        <p className="h1">Product List</p>
        <div className="row">
            {
                state.products.map(product => 
                    <div className="col-md-4" key={product.id}>
                        <img src={product.photo} style={{width:200, height:200, objectFit:'cover'}}/>
                        <p>{product.name}</p>
                        <p><strong>{product.price} USD</strong></p>
                        <button onClick={()=>dispatch({type:"basket/add", payload:product.id})} className="btn btn-outline-dark">Move</button>
                    </div>
                )
            }
        </div>
</div>
}