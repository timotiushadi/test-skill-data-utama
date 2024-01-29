export default function Checkbox({
    className = "",
    name,
    checked = false,
    handleChange,
    value,
    ...props
}) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 " +
                className
            }
            name={name}
            value={value}
            onChange={(e) => handleChange(e)}
            defaultChecked={checked}
        />
    );
}
