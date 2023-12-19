export default function VectorDashboard({ className = "" }: VectorProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 28 27.25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 0C6.272 0 0 6.1036 0 13.6241C0 21.1446 6.272 27.2482 14 27.2482C21.728 27.2482 28 21.1446 28 13.6241C28 6.1036 21.728 0 14 0ZM14 4.08723C16.324 4.08723 18.2 5.91286 18.2 8.17446C18.2 10.4361 16.324 12.2617 14 12.2617C11.676 12.2617 9.8 10.4361 9.8 8.17446C9.8 5.91286 11.676 4.08723 14 4.08723ZM14 23.4335C10.5 23.4335 7.406 21.6896 5.6 19.0465C5.642 16.3353 11.2 14.8503 14 14.8503C16.786 14.8503 22.358 16.3353 22.4 19.0465C20.594 21.6896 17.5 23.4335 14 23.4335Z" fill="#9C9C9C"/></svg>
    </div>
  );
}

interface VectorProps {
  className: string;
}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
