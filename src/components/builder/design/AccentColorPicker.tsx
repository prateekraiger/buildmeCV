import React from "react";
import useResumeStore from "../../../store/resumeStore";
import { SwatchIcon } from "../../Icons";

const colors = [
  { name: "Jet Black", value: "#000000" },
  { name: "Ocean Blue", value: "#669bbc" },
  { name: "Sunset Orange", value: "#fca311" },
  { name: "Forest Green", value: "#149e65" },
  { name: "Royal Purple", value: "#9d4edd" },
  { name: "Crimson", value: "#780000" },
];

export const AccentColorPicker: React.FC = () => {
  const { resume, setAccentColor } = useResumeStore();

  return (
    <div>
      <h4 className="text-md font-semibold text-secondary mb-2 flex items-center gap-2">
        <SwatchIcon className="w-5 h-5" /> Accent Color
      </h4>
      <div className="flex flex-wrap gap-3">
        {colors.map((color) => (
          <button
            key={color.value}
            type="button"
            title={color.name}
            onClick={() => setAccentColor(color.value)}
            className={`w-8 h-8 rounded-full transition-transform transform hover:scale-110 ${
              resume.accentColor === color.value
                ? "ring-2 ring-offset-2 ring-offset-primary ring-text-light"
                : ""
            }`}
            style={{ backgroundColor: color.value }}
          />
        ))}
      </div>
    </div>
  );
};
