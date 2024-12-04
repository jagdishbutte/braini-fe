function Input({
  placeholder,
  reference
}: {
  reference?: any;
  placeholder: string;
}) {
  return (
    <div>
      <input
        placeholder={placeholder}
        type={"text"}
        className="px-4 py-2 border rounded-md outline-zinc-200"
        ref={reference}
      ></input>
    </div>
  );
}

export default Input