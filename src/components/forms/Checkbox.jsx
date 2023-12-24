/**
 * @param {boolean} isChecked 
 * @param {(s: boolean) => void} setIsChecked 
 * @param {string} label
 */
export const Checkbox = ({ isChecked, setIsChecked, label, id }) => {
    return (<div className="form-check">
        <input
            id={id}
            type="checkbox"
            className="form-check-input"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
        />

        <label htmlFor={id} className="form-check-label">
            {label}
        </label>
    </div>);
}