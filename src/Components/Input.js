export default function Input(props) {
  const { placeholder, type = 'text', className, required, ...rest } = props;

  let classNames = '';
  if (!className) {
    classNames = 'input';
  } else {
    classNames = `input ${className}`;
  }

  return (
    <label className="label">
      <input
        type={type}
        placeholder={placeholder}
        className={classNames}
        required={required}
        {...rest}
      />
    </label>
  );
}
