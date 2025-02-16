import React from "react";

export default function loading() {
  return (
    <div>
      <div className="flex items-center justify-center mt-20">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    </div>
  );
}
