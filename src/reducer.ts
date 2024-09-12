import { IAction, IBasket, IState } from "./types";

export const reducer = (state:IState, action:IAction):IState => {
    switch(action.type) {
        case 'basket/add':
            const product = state.products.find(item => item.id == action.payload)
            const inBasket = state.basket.find(item => item.id == action.payload)
            let   updatedBasket:IBasket[]= [...state.basket];
            
            if(product && inBasket) {
                updatedBasket = state.basket.map(item =>
                    item.id === product.id
                        ? { ...item, count: item.count + 1 }
                        : item
                )
            }else if(!inBasket) {
                updatedBasket = [...state.basket, { ...product, count: 1 } as IBasket]
            }else {
                return state
            }
            return {
                ...state,
                basket: updatedBasket
            }
        
        default:
            return state
    }
}