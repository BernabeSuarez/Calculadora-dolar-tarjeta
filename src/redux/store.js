import { configureStore } from '@reduxjs/toolkit'

import menuReducer from './menu/menuReducer'
import dolarReducer from './dolar/dolarReducer'

export const store = configureStore({
    reducer: {
        menu: menuReducer,
        dolar: dolarReducer
    }
})
