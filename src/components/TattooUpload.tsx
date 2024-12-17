import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { bodyParts } from "@/helper/bodyPart";
import { stringCoverter } from "@/helper/stringCoverter";

type UploadedImages = {
  [key: string]: string;
};
export const TattooUpload = ({
  handleUploadedImages,
}: {
  handleUploadedImages: any;
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploadedImages, setUploadedImages] = useState<UploadedImages>({});
  const [pendingImages, setPendingImages] = useState<UploadedImages | null>(
    null
  );
  const [selectedBodyPart, setSelectedBodyPart] = useState(""); // State for selected body part

  const onBodyPartSelect = (event: { target: { value: any } }) => {
    const selectedPart = event.target.value;
    setSelectedBodyPart(selectedPart);

    if (selectedPart && fileInputRef.current) {
      // Trigger the click event on the file input
      fileInputRef.current.click();
    }
  };

  const onTattooUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!selectedBodyPart) {
      alert("Please select a body part first.");
      return;
    }

    const files = event.target.files; // FileList | null
    if (files && files[0]) {
      const file = files[0]; // First file from the FileList
      const tempImageUrl = URL.createObjectURL(file);

      // Update the state and call the parent handler
      setUploadedImages((prevImages) => {
        const newImages = { ...prevImages, [selectedBodyPart]: tempImageUrl };
        setPendingImages(newImages); // Store pending updates to be passed to parent later
        return newImages;
      });

      // Reset the input value to ensure the change event triggers again
      event.target.value = "";
    }
  };

  const handleDeleteImage = (part: string) => {
    setUploadedImages((prevImages) => {
      const updatedImages = { ...prevImages };
      delete updatedImages[part]; // Remove the selected part from the state

      setPendingImages(updatedImages);
      return updatedImages;
    });
    // Clear the selected body part if it matches the deleted part
    if (selectedBodyPart === part) {
      setSelectedBodyPart("");
    }
  };

  useEffect(() => {
    if (pendingImages) {
      handleUploadedImages(pendingImages); // Pass updates to parent after render
    }
  }, [pendingImages, handleUploadedImages]);
  return (
    <div className="z-10 max-w-[600px] flex space-y-6 flex-col bg-gradient-to-tr  from-slate-300/30 via-gray-400/30 to-slate-600-400/30 p-4  backdrop-blur-md rounded-xl border-slate-100/30 border">
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between">
          <div className="text-2xl font-bold">Upload Tattoos</div>
        </div>
      </div>
      {/* Tattoo Upload Section */}
      <div className="space-y-4">
        <select
          value={selectedBodyPart}
          onChange={onBodyPartSelect}
          className="w-full px-3 py-2 border rounded-md"
          id="bodyPartSelect"
        >
          <option value="">-- Choose Body Part --</option>
          {bodyParts.map((part) => {
            return (
              <option key={part} value={stringCoverter(part)}>
                {part}
              </option>
            );
          })}
        </select>
      </div>
      {/* Uploaded Images Preview */}
      <div className="space-y-4">
        <div className="grid grid-cols-4 gap-4" id="tattooPreviewPanel">
          {Object.entries(uploadedImages).map(([part, imageUrl]) => (
            <div key={part} className="relative border p-2">
              {/* Close button */}
              <button
                onClick={() => handleDeleteImage(part)}
                className="absolute top-1 right-1 text-white bg-red-600 rounded-full w-6 h-6 flex items-center justify-center"
                id="tattooDelete"
              >
                ✕
              </button>
              <p className="text-center text-sm font-medium">{part}</p>
              <img
                src={imageUrl}
                alt={`Tattoo on ${part}`}
                className="w-full h-32 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Hidden File Input */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef} // Reference to trigger the click programmatically
        onChange={onTattooUpload}
        className="hidden"
      />
    </div>
  );
};
