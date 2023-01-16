export default function Button(props) {
  const { children, className, ...rest } = props;

  let classNames = '';
  if (!className) {
    classNames = 'btn';
  } else {
    classNames = `btn ${className}`;
  }

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
}
