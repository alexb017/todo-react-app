export default function Button(props) {
  const { children, className, ...rest } = props;

  return (
    <button className={`btn ${className}`} {...rest}>
      {children}
    </button>
  );
}
