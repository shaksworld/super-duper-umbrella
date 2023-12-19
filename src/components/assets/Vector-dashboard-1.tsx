export default function VectorDashboard1({ className = "" }: Vector1Props) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 28 21.8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.3 19.9932H23.8V5.74958C23.8 4.58897 22.8581 3.64423 21.7 3.64423H16.8V6.36905H21V22.718H27.3C27.6868 22.718 28 22.4131 28 22.0368V20.6744C28 20.298 27.6868 19.9932 27.3 19.9932ZM13.6605 0.962408L5.2605 3.0801C4.63706 3.23721 4.2 3.80176 4.2 4.44975V19.9932H0.7C0.31325 19.9932 0 20.298 0 20.6744V22.0368C0 22.4131 0.31325 22.718 0.7 22.718H15.4V2.33206C15.4 1.41328 14.5442 0.739314 13.6605 0.962408ZM11.55 13.1811C10.9703 13.1811 10.5 12.571 10.5 11.8187C10.5 11.0664 10.9703 10.4563 11.55 10.4563C12.1297 10.4563 12.6 11.0664 12.6 11.8187C12.6 12.571 12.1297 13.1811 11.55 13.1811Z" fill="#9C9C9C"/></svg>
    </div>
  );
}

interface Vector1Props {
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
