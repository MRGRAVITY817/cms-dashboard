export const ShortTextInput = () => {
  return (
    <input
      type="text"
      placeholder="Enter text ..."
      maxLength={40}
      className="w-full p-2 border border-slate-300 rounded-md focus:border-2 focus:border-slate-500 outline-none"
    />
  );
};
