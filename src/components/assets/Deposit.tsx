export default function Deposit({ className = "" }: DepositProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 59 58" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.5 58L22.125 47.125H25.8125V39.875H33.1875V47.125H36.875L29.5 58Z" fill="#0B1035" fill-opacity="0.75"/><path d="M55.3125 3.625V32.625H3.6875V3.625H55.3125ZM59 0H0V36.25H59V0Z" fill="#0B1035" fill-opacity="0.75"/><path d="M29.5 7.25C32.434 7.25 35.2477 8.39576 37.3224 10.4352C39.397 12.4747 40.5625 15.2408 40.5625 18.125C40.5625 21.0092 39.397 23.7753 37.3224 25.8148C35.2477 27.8542 32.434 29 29.5 29H47.9375V25.375H51.625V10.875H47.9375V7.25H29.5Z" fill="#0B1035" fill-opacity="0.75"/><path d="M18.4375 18.125C18.4375 15.2408 19.603 12.4747 21.6776 10.4352C23.7523 8.39576 26.566 7.25 29.5 7.25H11.0625V10.875H7.375V25.375H11.0625V29H29.5C26.566 29 23.7523 27.8542 21.6776 25.8148C19.603 23.7753 18.4375 21.0092 18.4375 18.125Z" fill="#0B1035" fill-opacity="0.75"/></svg>
    </div>
  );
}

interface DepositProps {
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
