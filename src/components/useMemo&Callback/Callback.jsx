import { useState, memo, useCallback, useMemo } from "react"

export const Callback = () => {
    const [state, setState] = useState('')
    console.log("Callback Render")

    const handleClick = useCallback(() => {
        console.log("Im clicked !")
    }, [])

    const obj = useMemo(() => {
        return { r: 3 }
    }, [])

    return (<div className="container my-3 vstack gap-2">
        <h1>Use Callback</h1>

        <input
            label="Nom d'utilisateur"
            value={state}
            onChange={(e) => setState(e.target.value)}
        />

        <TestCallback onClick={handleClick} obj={obj} />
    </div>)
}

const TestCallback = memo(({ onClick, obj }) => {
    console.log("TestCallback Render")
    return (<div>
        <p>I'm Hakmoune el mahdi, i'm 24years</p>
        <button onClick={onClick}>Click Me !: {obj.r}</button>
    </div>)
})