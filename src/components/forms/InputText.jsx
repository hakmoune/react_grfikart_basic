/**
 * @param {string} placeholder 
 * @param {string} value 
 * @param {(s: string) => void} setValue 
 */
export const InputText = ({ placeholder, value, setValue }) => {
    return (<div>
        <input
            type="text"
            className="form-control"
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    </div>);
}