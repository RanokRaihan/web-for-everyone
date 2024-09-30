"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

type AccordionItemProps = {
  title: string;
  content: string;
  id: string;
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  id,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = `accordion-content-${id}`;
  const buttonId = `accordion-button-${id}`;

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <button
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={toggleAccordion}
        className="w-full text-left bg-gray-100 p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-between"
      >
        <h2 className="text-xl font-semibold">{title}</h2>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      {isOpen && (
        <div
          id={contentId}
          role="region"
          aria-labelledby={buttonId}
          className="bg-white p-4 border border-t-0 border-gray-300 pt-2"
        >
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const AccessibleAccordion = () => {
  return (
    <div className="container mx-auto p-8">
      <AccordionItem
        title="newton's first law"
        content="An object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force."
        id="first-law"
      />
      <AccordionItem
        title="Newton's Second Law"
        content="The acceleration of an object as produced by a net force is directly proportional to the magnitude of the net force, in the same direction as the net force, and inversely proportional to the mass of the object."
        id="second-law"
      />
      <AccordionItem
        title="Newton's Third Law"
        content="For every action, there is an equal and opposite reaction."
        id="third-law"
      />
    </div>
  );
};

export default AccessibleAccordion;
