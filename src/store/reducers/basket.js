import { createSlice, current } from "@reduxjs/toolkit";

const basketSlice = createSlice ({
    name: 'basket',
    initialState: {
        basket: [],
        count: 0,
        pricesProducts: 0,
    },
    reducers: {
        addProduct(state, action) {
            state.basket.push(action.payload)// то что будем передавать когда будем запускать (карточку)
            state.count = state.basket.reduce ((sum) => { // при активации кнопочки счетчик меняется на +1
                return sum +=1
            },0);
            state.pricesProducts = state.basket.reduce((sum,current)=>{ // при активации кнопочки сумма ПРИБАВЛЯЕТСЯ на ту сумму нужной карточки 
                return sum + +current.price
            },0);
        },
        removeProductBasket (state, action) {
            state.basket = state.basket.filter((item) => item.idx !==action.payload// удаляет карточку 
            );
            state.count =state.basket.reduce ((sum) => { // при активации кнопочки счетчик меняется на -1
                return sum +=1
            },0);
            state.pricesProducts = state.basket.reduce ((sum,current) => { // при активации кнопочки сумма УМЕНЬШАЕТСЯ на ту сумму нужной карточки 
                return sum + +current.price
            },0);
        },
    }
})

export const { addProduct, removeProductBasket, toggleModalVisability} = basketSlice.actions
export default basketSlice.reducer