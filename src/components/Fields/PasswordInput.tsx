export const PasswordInput = () => {
  return (
    <input
      type="password"
      placeholder="Enter password ..."
      maxLength={40}
      className="w-full p-2 border border-slate-300 rounded-md focus:border-2 focus:border-slate-500 outline-none"
    />
  );
};
