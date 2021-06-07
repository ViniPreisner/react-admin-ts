import React, {
    useState,
    useEffect,
    useMemo,
    useRef,
    useContext, 
    useReducer
}
from 'react'


interface User {
    name: string;
    login: string;
    avatar_url: string;
}

const Produtos: React.FC = () => {

    const [user, setUser] = useState<User>()
    const inputRef = useRef<HTMLInputElement>(null)

    interface Cart {
        products: string[];
        shipping_value?: number;
    }

    type CartActionType = {
        type: 'ADD_PRODUCT' | 'REMOVE_PRODUCT'
    }

    const cart = useReducer(
        (state: Cart, action: CartActionType) => {
            switch(action.type) {
                case 'ADD_PRODUCT':
                    return {
                        ...state,
                        products: [...state.products, 'Produto novo']
                    }
                default:
                    return state
            }
        },
        { // valor inicial do objeto
            products: ['asd'],
            shipping_value: 0
        }
    )

        async function loadData() {
            const response = await fetch('https://api.github.com/users/vinipreisner')
            const data = await response.json()

            setUser(data)
        }

    useEffect(() => {
        loadData()
    }, [])

    inputRef.current?.focus()

    return (
        <div>
            <h1>Produtos</h1>
            <form>
                <input ref={inputRef}>
                </input>
            </form>
        </div>
    )
}

export default Produtos