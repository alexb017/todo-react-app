export default function Input(props) {
  const { placeholder, type, className, required, ...rest } = props;

  let classNames = '';
  if (!className) {
    classNames = 'input';
  } else {
    classNames = `input ${className}`;
  }

  let types = '';
  if (!type) {
    types = 'text';
  } else {
    types = `${type}`;
  }

  return (
    <label className="label">
      <input
        type={types}
        placeholder={placeholder}
        className={classNames}
        required={required}
        {...rest}
      />
    </label>
  );
}
