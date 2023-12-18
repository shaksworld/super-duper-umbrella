export default function Phone_in_talk({ className = "" }: Phone_in_talkProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_6_21)"><path d="M23.3333 18.0833C21.875 18.0833 20.475 17.85 19.1683 17.4183C18.76 17.29 18.305 17.3833 17.9783 17.6983L15.4117 20.265C12.11 18.585 9.40333 15.89 7.72333 12.5767L10.29 9.99833C10.6167 9.695 10.71 9.24 10.5817 8.83167C10.15 7.525 9.91667 6.125 9.91667 4.66667C9.91667 4.025 9.39167 3.5 8.75 3.5H4.66667C4.025 3.5 3.5 4.025 3.5 4.66667C3.5 15.6217 12.3783 24.5 23.3333 24.5C23.975 24.5 24.5 23.975 24.5 23.3333V19.25C24.5 18.6083 23.975 18.0833 23.3333 18.0833ZM22.1667 14H24.5C24.5 8.20167 19.7983 3.5 14 3.5V5.83333C18.515 5.83333 22.1667 9.485 22.1667 14ZM17.5 14H19.8333C19.8333 10.78 17.22 8.16667 14 8.16667V10.5C15.9367 10.5 17.5 12.0633 17.5 14Z" fill="#1521CF"/></g><defs><clipPath id="clip0_6_21"><rect width="28" height="28" fill="white"/></clipPath></defs></svg>
    </div>
  );
}

interface Phone_in_talkProps {
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
