export default function Input({ type, placeholder, className }) {
  return (
    <input
      type={type}
      className={`border border-white rounded-md p-1 ${className}`}
      placeholder={placeholder}
    />
  );
}
