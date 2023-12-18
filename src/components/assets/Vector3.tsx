export default function Vector3({ className = "" }: Vector3Props) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 28 21.8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.3 19.2682H23.8V5.02462C23.8 3.86402 22.8581 2.91928 21.7 2.91928H16.8V5.6441H21V21.993H27.3C27.6868 21.993 28 21.6882 28 21.3118V19.9494C28 19.573 27.6868 19.2682 27.3 19.2682ZM13.6605 0.237456L5.2605 2.35515C4.63706 2.51226 4.2 3.0768 4.2 3.7248V19.2682H0.7C0.31325 19.2682 0 19.573 0 19.9494V21.3118C0 21.6882 0.31325 21.993 0.7 21.993H15.4V1.6071C15.4 0.688328 14.5442 0.0143611 13.6605 0.237456ZM11.55 12.4561C10.9703 12.4561 10.5 11.846 10.5 11.0937C10.5 10.3414 10.9703 9.73133 11.55 9.73133C12.1297 9.73133 12.6 10.3414 12.6 11.0937C12.6 11.846 12.1297 12.4561 11.55 12.4561Z" fill="#9C9C9C"/></svg>
    </div>
  );
}

interface Vector3Props {
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
