export const PricePanel = ({
}: {
}) => {
  return (
    <div className="z-10 max-w-[600px] flex space-y-6 flex-col bg-gradient-to-tr  from-slate-300/30 via-gray-400/30 to-slate-600-400/30 p-4  backdrop-blur-md rounded-xl border-slate-100/30 border">
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between">
          <div className="text-2xl font-bold">Tattoo</div>
          <div className="text-2xl font-bold">$100</div>
        </div>
      </div>
    </div>
  );
};
