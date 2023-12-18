export default function Group3({ className = "" }: Group3Props) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_17_119)"><path d="M24.375 36.875C25.87 36.875 27.2744 36.2137 28.2281 35.0612L28.5019 34.7306L28.2906 34.3563C28.1812 34.16 28.125 33.9563 28.125 33.75C28.125 33.2288 28.4587 32.7581 28.955 32.58L29.3406 32.3919L29.37 31.9863C29.3731 31.9494 29.375 31.9125 29.375 31.875C29.375 29.1181 27.1319 26.875 24.375 26.875C21.6181 26.875 19.375 29.1181 19.375 31.875C19.375 34.6319 21.6181 36.875 24.375 36.875ZM28.1119 31.6006C27.3569 32.0431 26.875 32.8587 26.875 33.75C26.875 34.0212 26.92 34.2863 27.0094 34.5438C26.31 35.235 25.3688 35.625 24.375 35.625C22.3069 35.625 20.625 33.9431 20.625 31.875C20.625 31.3831 20.7225 30.9144 20.8956 30.4831C21.3056 31.3044 22.1463 31.875 23.125 31.875C24.5037 31.875 25.625 30.7538 25.625 29.375C25.625 28.9769 25.5256 28.5975 25.3531 28.2575C26.8562 28.6656 27.9888 29.9856 28.1119 31.6006ZM24.375 29.375C24.375 30.0644 23.8144 30.625 23.125 30.625C22.4356 30.625 21.875 30.0644 21.875 29.375C21.875 29.2631 21.8975 29.15 21.93 29.0375C22.3906 28.64 22.9481 28.3525 23.5625 28.2156C24.045 28.3975 24.375 28.8556 24.375 29.375Z" fill="#1521CF"/><path d="M38.8475 30.3719L38.7313 30.2519C38.1413 29.6719 37.5194 29.1369 36.8744 28.6381V11.875H33.1244V26.3306C32.7144 26.1363 32.2969 25.9588 31.8744 25.7925V14.375H28.1244V24.7206C27.7113 24.6444 27.2938 24.5825 26.8744 24.5312V16.875H23.1244V24.4169C19.5244 24.6331 16.095 25.7756 13.1244 27.7356V24.375C13.1244 22.6519 11.7225 21.25 9.99937 21.25H8.74937V14.375H12.4625C13.4306 14.375 14.3844 14.0481 15.1488 13.4537L19.11 10.3725C19.58 10.0069 19.8706 9.48312 19.9594 8.90625L23.125 9.30188V10.625H28.125C28.125 11.3144 28.6856 11.875 29.375 11.875H30.625C31.3144 11.875 31.875 11.3144 31.875 10.625V1.875C31.875 1.18562 31.3144 0.625 30.625 0.625H29.375C28.6856 0.625 28.125 1.18562 28.125 1.875H23.125V3.19813L13.125 4.44813V8.05188L14.1019 8.17375L11.8331 9.87562C11.7263 9.95562 11.5931 10 11.4581 10H9.93062C10.7437 9.205 11.25 8.09875 11.25 6.875C11.25 4.4625 9.28687 2.5 6.875 2.5C4.46312 2.5 2.5 4.4625 2.5 6.875C2.5 8.16813 3.06688 9.32812 3.96188 10.13C2.05 10.5975 0.625 12.3206 0.625 14.375V23.125V36.875C0.625 38.2537 1.74625 39.375 3.125 39.375C4.50375 39.375 5.625 38.2537 5.625 36.875V26.25H8.125L8.12437 29.9988C8.12375 30.9075 8.63062 31.7331 9.4 32.1706C9.455 32.6094 9.62438 33.0306 9.90188 33.3781L10.0181 33.4981C13.8712 37.2881 18.9706 39.375 24.375 39.375C29.7794 39.375 34.8787 37.2881 38.7313 33.4994L38.8481 33.3787C39.1875 32.9531 39.375 32.4188 39.375 31.875C39.375 31.3312 39.1875 30.7969 38.8475 30.3719ZM29.375 1.875H30.625L30.6256 10.625H29.375V1.875ZM34.375 13.125H35.625V27.7362C35.2175 27.4675 34.7988 27.2194 34.375 26.9812V13.125ZM29.375 15.625H30.625V25.3487C30.2125 25.2169 29.7962 25.0937 29.375 24.9887V15.625ZM30.625 31.875C30.625 35.3213 27.8213 38.125 24.375 38.125C20.9287 38.125 18.125 35.3213 18.125 31.875C18.125 28.4287 20.9287 25.625 24.375 25.625C27.8213 25.625 30.625 28.4287 30.625 31.875ZM24.375 18.125H25.625V24.4169C25.21 24.3919 24.7938 24.375 24.375 24.375V18.125ZM24.375 3.125H28.125V9.375H24.375V3.125ZM14.375 6.94812V5.55188L23.125 4.45812V8.0425L19.8019 7.62687C19.4438 6.8175 18.6362 6.25 17.6956 6.25H17.4344C16.9394 6.25 16.4488 6.41375 16.0519 6.71063L15.5406 7.09375L14.375 6.94812ZM3.75 6.875C3.75 5.15188 5.15188 3.75 6.875 3.75C8.59812 3.75 10 5.15188 10 6.875C10 8.59812 8.59812 10 6.875 10C5.15188 10 3.75 8.59812 3.75 6.875ZM4.375 36.875C4.375 37.5644 3.81437 38.125 3.125 38.125C2.43562 38.125 1.875 37.5644 1.875 36.875V25.6087C2.39875 26.0056 3.04375 26.25 3.75 26.25H4.375V36.875ZM8.125 25H3.75C2.71625 25 1.875 24.1588 1.875 23.125V14.375C1.875 12.6519 3.27688 11.25 5 11.25H11.4581C11.8619 11.25 12.2612 11.1169 12.5831 10.875L16.8019 7.71125C16.9837 7.575 17.2081 7.5 17.435 7.5H17.6962C18.2769 7.5 18.75 7.9725 18.75 8.55375C18.75 8.88125 18.6019 9.18437 18.3431 9.38562L14.3819 12.4669C13.8362 12.8913 13.155 13.125 12.4631 13.125H7.5V22.5H10C11.0337 22.5 11.875 23.3412 11.875 24.375V28.6375C11.2306 29.1362 10.6088 29.6712 10.0188 30.2513L9.90188 30.3719C9.8025 30.4963 9.72062 30.6313 9.64812 30.7713C9.4775 30.555 9.37313 30.2869 9.37375 29.9994L9.375 26.25C9.375 25.5606 8.81437 25 8.125 25ZM10.8944 32.6069L10.8581 32.5712C10.7075 32.3712 10.625 32.125 10.625 31.875C10.625 31.625 10.7075 31.3788 10.8581 31.1788L10.895 31.1425C13.2994 28.7781 16.2219 27.1244 19.4 26.2781C17.855 27.6525 16.875 29.6494 16.875 31.875C16.875 34.1006 17.855 36.0969 19.4 37.4719C16.2213 36.625 13.2987 34.9713 10.8944 32.6069ZM37.8919 32.5712L37.855 32.6075C35.4506 34.9719 32.5281 36.6256 29.35 37.4719C30.895 36.0975 31.875 34.1006 31.875 31.875C31.875 29.6494 30.895 27.6525 29.35 26.2781C32.5281 27.125 35.4506 28.7787 37.8556 31.1431L37.8919 31.1788C38.0425 31.3788 38.125 31.625 38.125 31.875C38.125 32.125 38.0425 32.3712 37.8919 32.5712Z" fill="#1521CF"/></g><defs><clipPath id="clip0_17_119"><rect width="40" height="40" fill="white"/></clipPath></defs></svg>
    </div>
  );
}

interface Group3Props {
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