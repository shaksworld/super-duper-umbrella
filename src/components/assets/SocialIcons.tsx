export default function SocialIcons({ className = "" }: SocialIconsProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 273 54" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="27" cy="27" r="27" fill="white"/><circle cx="100" cy="27" r="27" fill="white"/><circle cx="173" cy="27" r="27" fill="white"/><circle cx="246" cy="27" r="27" fill="white"/><path d="M100 32C102.761 32 105 29.7614 105 27C105 24.2386 102.761 22 100 22C97.2386 22 95 24.2386 95 27C95 29.7614 97.2386 32 100 32Z" stroke="#0B1035" stroke-opacity="0.75" stroke-width="2" stroke-miterlimit="10"/><path d="M105.5 15.5H94.5C91.1863 15.5 88.5 18.1863 88.5 21.5V32.5C88.5 35.8137 91.1863 38.5 94.5 38.5H105.5C108.814 38.5 111.5 35.8137 111.5 32.5V21.5C111.5 18.1863 108.814 15.5 105.5 15.5Z" stroke="#0B1035" stroke-opacity="0.75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M106.5 22C107.328 22 108 21.3284 108 20.5C108 19.6716 107.328 19 106.5 19C105.672 19 105 19.6716 105 20.5C105 21.3284 105.672 22 106.5 22Z" fill="black"/><path d="M250 27L244 23V31L250 27Z" stroke="#0B1035" stroke-opacity="0.75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M233 27C233 30.7194 233.384 32.9017 233.676 34.0233C233.754 34.3296 233.904 34.6129 234.114 34.8497C234.323 35.0866 234.586 35.2701 234.88 35.3851C239.065 36.9932 246 36.949 246 36.949C246 36.949 252.935 36.9932 257.119 35.3851C257.414 35.2701 257.677 35.0866 257.886 34.8498C258.096 34.6129 258.245 34.3296 258.324 34.0233C258.616 32.9017 259 30.7194 259 27C259 23.2805 258.616 21.0982 258.324 19.9766C258.246 19.6703 258.096 19.387 257.886 19.1502C257.677 18.9134 257.414 18.7298 257.12 18.6148C252.935 17.0067 246 17.0509 246 17.0509C246 17.0509 239.065 17.0067 234.881 18.6148C234.586 18.7298 234.323 18.9133 234.114 19.1502C233.904 19.387 233.755 19.6703 233.676 19.9766C233.384 21.0982 233 23.2805 233 27Z" stroke="#0B1035" stroke-opacity="0.75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M27 39C33.6274 39 39 33.6274 39 27C39 20.3726 33.6274 15 27 15C20.3726 15 15 20.3726 15 27C15 33.6274 20.3726 39 27 39Z" stroke="#0B1035" stroke-opacity="0.75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M32 22H30C29.2044 22 28.4413 22.3161 27.8787 22.8787C27.3161 23.4413 27 24.2044 27 25V39" stroke="#0B1035" stroke-opacity="0.75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 29H31" stroke="#0B1035" stroke-opacity="0.75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M174 22.0004C174 20.8516 174.396 19.7378 175.12 18.8464C175.845 17.955 176.854 17.3402 177.979 17.1055C179.104 16.8708 180.275 17.0304 181.295 17.5575C182.316 18.0846 183.124 18.9471 183.584 20L188 20L183.967 24.0328C183.705 28.089 181.908 31.8933 178.943 34.6731C175.977 37.4529 172.065 38.9999 168 39C164 39 163 37.5 163 37.5C163 37.5 167 36 169 33C169 33 161 29 163 18C163 18 168 23 173.998 24L174 22.0004Z" stroke="#0B1035" stroke-opacity="0.75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  );
}

interface SocialIconsProps {
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
