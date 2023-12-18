export default function Line4({ className = "" }: Line4Props) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 295 0" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="0.5" x2="295" y2="0.5" stroke="#0B1035" stroke-opacity="0.75"/></svg>
    </div>
  );
}

interface Line4Props {
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
