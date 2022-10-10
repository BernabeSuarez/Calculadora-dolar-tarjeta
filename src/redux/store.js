import { configureStore } from '@reduxjs/toolkit'

import menuReducer from './menu/menuReducer'

export const store = configureStore({
    reducer: {
        menu: menuReducer
    }
})
