import { NextApiRequest, NextApiResponse } from "next";

// Example price calculation constants
const BASE_PRICE_PER_CM2 = 10; // Base price per square cm
const DISCOUNT_THRESHOLD = 500; // Total area threshold for discounts
const DISCOUNT_PERCENTAGE = 10; // 10% discount

// Price calculation function
const calculatePrice = (totalArea: number): number => {
  let price = totalArea * BASE_PRICE_PER_CM2;

  // Apply discount if totalArea exceeds the threshold
  if (totalArea > DISCOUNT_THRESHOLD) {
    const discount = (price * DISCOUNT_PERCENTAGE) / 100;
    price -= discount;
  }

  return parseFloat(price.toFixed(2)); // Return price rounded to 2 decimal places
};

// API handler
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { totalArea } = req.body;

    // Input validation
    if (!totalArea || typeof totalArea !== "number" || totalArea <= 0) {
      return res.status(400).json({ message: "Invalid total area provided." });
    }

    try {
      const price = calculatePrice(totalArea); // Calculate price based on total area

      return res.status(200).json({
        success: true,
        message: "Price calculated successfully",
        price,
      });
    } catch (error) {
      console.error("Error calculating price:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
