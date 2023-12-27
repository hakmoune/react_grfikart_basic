import { useReducer } from "react";

const reducer = (state, action) => {
    if (action.type === 'REMOVE_TODO') {
        return {
            ...state,
            todos: state.todos.filter(todo => todo !== action.payload)
        }
    }

    return state
}

export const Reducer = () => {
    // useReducer Nous retourne le "state" plus la fonction responsable de modifier le state
    const [state, dispatch] = useReducer(reducer, {
        todos: [
            {
                name: "Faire les courses",
                checked: false
            },
            {
                name: "Ranger les courses",
                checked: false
            },
            {
                name: "Manger les courses",
                checked: false
            },
        ]
    });

    return (<div className="container">
        <h1>Test Reducer</h1>

        <ul>
            {state?.todos.map((todo, index) =>
                <li key={index}>
                    {todo.name}

                    <button onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo })}>
                        Supprimer
                    </button>
                </li>
            )}
        </ul>
    </div>)
}