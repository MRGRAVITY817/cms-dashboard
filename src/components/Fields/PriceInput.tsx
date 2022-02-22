export const PriceInput = () => {
  return (
    <div className="flex items-center justify-start gap-4">
      <input
        type="number"
        min={0}
        className=" p-2 border border-slate-300 rounded-md focus:border-2 focus:border-slate-500 outline-none"
      />
      <p className="text-xl">USD</p>
    </div>
  );
};
