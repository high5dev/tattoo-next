export const ControlPanel = ({
  toggleModel,
  handleToggleModel,
  toggleDebug,
  handleToggleDebug,
  togglePivot,
  handleTogglePivot,
}: {
  toggleModel: string;
  handleToggleModel: any;
  toggleDebug: boolean;
  handleToggleDebug: any;
  togglePivot: boolean;
  handleTogglePivot: any;
}) => {
  return (
    <div className="z-10 max-w-[600px] flex space-y-6 flex-col bg-gradient-to-tr  from-slate-300/30 via-gray-400/30 to-slate-600-400/30 p-4  backdrop-blur-md rounded-xl border-slate-100/30 border">
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between">
          <div className="text-2xl font-bold text-center">Adjustment</div>
        </div>
        <label className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              checked={toggleModel === "female"}
              onChange={handleToggleModel}
              className="sr-only"
            />
            <div className="block bg-black w-14 h-8 rounded-full"></div>
            <div
              className={`absolute left-1 top-1 w-6 h-6 rounded-full transition-transform duration-300 transform ${
                toggleModel === "female"
                  ? "translate-x-6 bg-red-600"
                  : "bg-gray-700"
              }`}
            ></div>
          </div>
          <span
            className="ml-3 font-medium bg-gradient-to-r from-red-600 via-gray-700 to-black bg-clip-text text-transparent"
            id="toggleModel"
          >
            {toggleModel === "male" ? "Switch to Female" : "Switch to Male"}
          </span>
        </label>
        <label className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              checked={toggleDebug === false}
              onChange={handleToggleDebug}
              className="sr-only"
            />
            <div className="block bg-black w-14 h-8 rounded-full"></div>
            <div
              className={`absolute left-1 top-1 w-6 h-6 rounded-full transition-transform duration-300 transform ${
                toggleDebug === true
                  ? "translate-x-6 bg-red-600"
                  : "bg-gray-700"
              }`}
            ></div>
          </div>
          <span
            className="ml-3 font-medium bg-gradient-to-r from-red-600 via-gray-700 to-black bg-clip-text text-transparent"
            id="toggleDebug"
          >
            {toggleDebug === false ? "Show debug" : "Hide debug"}
          </span>
        </label>
        <label className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              checked={togglePivot === true}
              onChange={handleTogglePivot}
              className="sr-only"
            />
            <div className="block bg-black w-14 h-8 rounded-full"></div>
            <div
              className={`absolute left-1 top-1 w-6 h-6 rounded-full transition-transform duration-300 transform ${
                togglePivot === true
                  ? "translate-x-6 bg-red-600"
                  : "bg-gray-700"
              }`}
            ></div>
          </div>
          <span
            className="ml-3 font-medium bg-gradient-to-r from-red-600 via-gray-700 to-black bg-clip-text text-transparent"
            id="togglePivot"
          >
            {togglePivot === false ? "Show Controller" : "Hide Controller"}
          </span>
        </label>
      </div>
    </div>
  );
};
