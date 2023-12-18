export default function Business({ className = "" }: BusinessProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4_10)"><path d="M14 8.16667V3.5H2.33337V24.5H25.6667V8.16667H14ZM7.00004 22.1667H4.66671V19.8333H7.00004V22.1667ZM7.00004 17.5H4.66671V15.1667H7.00004V17.5ZM7.00004 12.8333H4.66671V10.5H7.00004V12.8333ZM7.00004 8.16667H4.66671V5.83333H7.00004V8.16667ZM11.6667 22.1667H9.33337V19.8333H11.6667V22.1667ZM11.6667 17.5H9.33337V15.1667H11.6667V17.5ZM11.6667 12.8333H9.33337V10.5H11.6667V12.8333ZM11.6667 8.16667H9.33337V5.83333H11.6667V8.16667ZM23.3334 22.1667H14V19.8333H16.3334V17.5H14V15.1667H16.3334V12.8333H14V10.5H23.3334V22.1667ZM21 12.8333H18.6667V15.1667H21V12.8333ZM21 17.5H18.6667V19.8333H21V17.5Z" fill="#9C9C9C"/></g><defs><clipPath id="clip0_4_10"><rect width="28" height="28" fill="white"/></clipPath></defs></svg>
    </div>
  );
}

interface BusinessProps {
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
