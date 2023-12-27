import { useId, useMemo, useState } from "react";

const passwordSecurity = (password) => {
    //console.log('useMemo render'); // Render only if the password change, by using it inside the useMemo

    if (password.length < 3) {
        return 'Faible';
    } else if (password.length < 6) {
        return 'Moyen';
    }
    return 'Fort';
}

export const Memo = () => {
    const [fisrtName, setFirstName] = useState('John');
    const [password, setPassword] = useState('MotDePasse');

    const security = useMemo(() => {
        return passwordSecurity(password);
    }, [password])

    return (<div className="container my-3 vstack gap-2">
        <h1>UseMemo Test</h1>

        <input
            label="Nom d'utilisateur"
            value={fisrtName}
            onChange={(e) => setFirstName(e.target.value)}
        />

        <input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />

        <strong>Sécurité: {security}</strong>
    </div>)
}