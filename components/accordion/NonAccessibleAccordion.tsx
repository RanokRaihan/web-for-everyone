"use client";
import { useState } from "react";

const NonAccessibleAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container mx-auto p-8">
      <div className="mb-4">
        <div
          onClick={toggleAccordion}
          className="cursor-pointer bg-gray-100 p-4 border border-gray-300"
        >
          <h2 className="text-xl font-semibold">Accordion Header</h2>
        </div>
        {isOpen && (
          <div className="bg-white p-4 border border-t-0 border-gray-300">
            <p>
              This is the content of the accordion. It can be expanded or
              collapsed by clicking the header above.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NonAccessibleAccordion;
