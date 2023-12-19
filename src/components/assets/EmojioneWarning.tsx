export default function EmojioneWarning({
  className = "",
}: EmojioneWarningProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 30 31.5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.2344 30.7655C28.7812 30.7655 29.4844 29.5843 28.7812 28.1569L16.2656 2.31709C15.5625 0.889746 14.4375 0.889746 13.7344 2.31709L1.21875 28.1569C0.515623 29.5843 1.21875 30.7655 2.76562 30.7655H27.2344Z" fill="#FFCE31"/><path d="M16.9685 11.8657L15.656 20.9712C15.5154 21.8571 14.4373 21.8571 14.2966 20.9712L13.031 11.8657C12.7966 8.32195 17.2029 8.32195 16.9685 11.8657Z" fill="#231F20"/><path d="M14.9998 26.7298C13.9124 26.7298 13.031 25.8043 13.031 24.6626C13.031 23.521 13.9124 22.5955 14.9998 22.5955C16.0871 22.5955 16.9685 23.521 16.9685 24.6626C16.9685 25.8043 16.0871 26.7298 14.9998 26.7298Z" fill="#231F20"/></svg>
    </div>
  );
}

interface EmojioneWarningProps {
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
