
export default function Input({ label, name, id, error, ...props }) {
    return (
        <div className="control no-margin">
            <label htmlFor={id}>{label}</label>

            <input id={id} {...props} />
            <div className="control-error">
                {error && <p>{error}</p>}
            </div>
        </div>
    );
};