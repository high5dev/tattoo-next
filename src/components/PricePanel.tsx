import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { calculateTattooDimensions } from "@/helper/calculateTattoo";
import { bodyDimensions } from "@/helper/bodyPart";
import { formatBodyPartName } from "@/helper/stringCoverter";
export const PricePanel = ({
  tattooScales,
  toggleModel,
}: {
  tattooScales: any;
  toggleModel: string;
}) => {
  const calculateTotalArea = () => {
    return Object.keys(tattooScales).reduce((totalArea, bodyPart) => {
      const { tattooWidth, tattooHeight } = calculateTattooDimensions(
        bodyPart,
        tattooScales,
        bodyDimensions,
        toggleModel
      );
      return totalArea + tattooWidth * tattooHeight;
    }, 0);
  };

  const priceCalculation = async () => {
    const totalArea = calculateTotalArea();

    try {
      const response = await axios.post("/api/send-tattoo-size", { totalArea });
      console.log("Data sent successfully:", response.data);

      const { price } = response.data;
      toast.success(`The calculated price is $${price}`);
    } catch (error) {
      // Check if error is an AxiosError
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const message =
          error.response?.data?.message || "An unexpected error occurred.";

        console.error("Error sending data:", message);

        let errorMessage;
        switch (status) {
          case 400:
            errorMessage = "Invalid input. Please check the total area.";
            break;
          case 405:
            errorMessage = "Method not allowed.";
            break;
          case 500:
            errorMessage = "Internal server error. Please try again later.";
            break;
          default:
            errorMessage = message;
        }

        toast.error(`Error ${status}: ${errorMessage}`);
      } else if (error instanceof Error) {
        // For non-Axios errors
        console.error("Error:", error.message);
        toast.error("An unexpected error occurred. Please try again.");
      } else {
        console.error("An unknown error occurred.");
        toast.error("An unknown error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="z-10 max-w-[600px] flex space-y-6 flex-col bg-gradient-to-tr  from-slate-300/30 via-gray-400/30 to-slate-600-400/30 p-4  backdrop-blur-md rounded-xl border-slate-100/30 border">
      {/* Scale and Total Area Section */}
      <div className="space-y-4" id="tattooSizeViewPanel">
        <label className="block text-lg font-medium text-gray-700 text-center">
          Tattoo Size
        </label>
        {Object.entries(tattooScales).map(([bodyPart, scale]) => {
          const { tattooWidth, tattooHeight } = calculateTattooDimensions(
            bodyPart,
            tattooScales,
            bodyDimensions,
            toggleModel
          );
          const tattooArea = tattooWidth * tattooHeight;
          const formattedBodyPart = formatBodyPartName(bodyPart);
          return (
            <div key={bodyPart} className="space-y-1">
              <p>
                <strong>{formattedBodyPart}</strong>: {tattooArea.toFixed(3)}{" "}
                cm² ({tattooWidth.toFixed(2)} cm x {tattooHeight.toFixed(2)} cm)
              </p>
            </div>
          );
        })}
        {/* Display the total area */}
        <div className="text-lg font-semibold mt-4">
          Total Tattoo Area: {calculateTotalArea().toFixed(2)} cm²
        </div>
      </div>
      {/* Send to Backend Button */}
      <div className="flex justify-center mt-4">
        <button
          id="calcualtePrice"
          onClick={priceCalculation}
          className="px-6 py-2 bg-blue-600 text-white font-medium text-lg rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Price?
        </button>
      </div>
    </div>
  );
};
