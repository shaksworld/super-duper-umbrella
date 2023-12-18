export default function Vector2({ className = "" }: Vector2Props) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 28 27.25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 0.275047C6.272 0.275047 0 6.37864 0 13.8991C0 21.4196 6.272 27.5232 14 27.5232C21.728 27.5232 28 21.4196 28 13.8991C28 6.37864 21.728 0.275047 14 0.275047ZM14 4.36228C16.324 4.36228 18.2 6.18791 18.2 8.44951C18.2 10.7111 16.324 12.5367 14 12.5367C11.676 12.5367 9.8 10.7111 9.8 8.44951C9.8 6.18791 11.676 4.36228 14 4.36228ZM14 23.7085C10.5 23.7085 7.406 21.9646 5.6 19.3215C5.642 16.6103 11.2 15.1253 14 15.1253C16.786 15.1253 22.358 16.6103 22.4 19.3215C20.594 21.9646 17.5 23.7085 14 23.7085Z" fill="#9C9C9C"/></svg>
    </div>
  );
}

interface Vector2Props {
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
