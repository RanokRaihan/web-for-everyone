"use client";
const SkipToMainContent = () => {
  const skipToMain = () => {
    const mainContent = document.getElementsByTagName("main")[0];
    if (mainContent) {
      mainContent.setAttribute("tabindex", "-1"); // Make it focusable
      mainContent.focus();
      mainContent.removeAttribute("tabindex"); // Remove after focusing to maintain regular tab flow
    }
  };
  return (
    <button onClick={skipToMain} className="skip-button">
      Skip to main content
    </button>
  );
};

export default SkipToMainContent;
