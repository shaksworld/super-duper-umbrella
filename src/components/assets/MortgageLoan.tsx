export default function MortgageLoan({ className = "" }: MortgageLoanProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M86.7344 85.3125C84.4726 85.3099 82.3041 84.4103 80.7047 82.8109C79.1054 81.2115 78.2057 79.0431 78.2031 76.7812V15.6406C78.1998 12.6248 77.0002 9.73352 74.8677 7.60103C72.7353 5.46853 69.8439 4.26901 66.8281 4.26562H8.53127C8.15416 4.26563 7.7925 4.41543 7.52585 4.68208C7.2592 4.94874 7.10939 5.3104 7.10939 5.6875C7.10939 6.0646 7.2592 6.42626 7.52585 6.69292C7.7925 6.95957 8.15416 7.10938 8.53127 7.10938C10.7931 7.11196 12.9616 8.01162 14.5609 9.61098C16.1603 11.2103 17.0599 13.3788 17.0625 15.6406V50.4472L3.4502 59.9758C3.14584 60.1888 2.93696 60.5126 2.86827 60.8777C2.79958 61.2428 2.87652 61.6203 3.08264 61.9294L5.92639 66.195C6.1356 66.5088 6.46086 66.7266 6.83064 66.8005C7.20042 66.8744 7.58442 66.7984 7.89818 66.5893L8.53127 66.1671V86.7344C8.53127 87.1115 8.68107 87.4731 8.94773 87.7398C9.21438 88.0064 9.57604 88.1562 9.95314 88.1562H86.7344C87.1115 88.1562 87.4732 88.0064 87.7398 87.7398C88.0065 87.4731 88.1563 87.1115 88.1563 86.7344C88.1563 86.3573 88.0065 85.9956 87.7398 85.729C87.4732 85.4623 87.1115 85.3125 86.7344 85.3125ZM16.0475 7.10938H66.8281C69.09 7.11196 71.2584 8.01162 72.8578 9.61098C74.4571 11.2103 75.3568 13.3788 75.3594 15.6406V61.6738C73.2211 58.442 70.0458 56.0349 66.3564 54.8492C62.6671 53.6635 58.6839 53.77 55.0632 55.151L33.5186 40.0695C33.2796 39.9022 32.9949 39.8124 32.7031 39.8124C32.4114 39.8124 32.1267 39.9022 31.8877 40.0695L19.9063 48.4566V15.6406C19.9068 14.026 19.5628 12.4298 18.8974 10.9586C18.232 9.48747 17.2604 8.17518 16.0475 7.10938ZM7.50379 63.4345L6.21965 61.5084L32.7031 42.97L52.1619 56.5906C51.4045 57.0612 50.6849 57.5901 50.0097 58.1725L33.4919 47.1607C33.2583 47.005 32.9839 46.9219 32.7031 46.9219C32.4224 46.9219 32.1479 47.005 31.9144 47.1607L7.50379 63.4345ZM36.9688 85.3125H28.4375V65.4062C28.4384 64.6523 28.7383 63.9295 29.2714 63.3964C29.8045 62.8633 30.5273 62.5634 31.2813 62.5625H34.125C34.879 62.5634 35.6017 62.8633 36.1349 63.3964C36.668 63.9295 36.9679 64.6523 36.9688 65.4062V85.3125ZM39.8125 85.3125V65.4062C39.8108 63.8983 39.2111 62.4527 38.1448 61.3865C37.0786 60.3202 35.6329 59.7204 34.125 59.7188H31.2813C29.7734 59.7204 28.3277 60.3202 27.2615 61.3865C26.1952 62.4527 25.5955 63.8983 25.5938 65.4062V85.3125H11.375V64.2714L32.7031 50.0527L47.9847 60.2402C46.4616 62.083 45.3431 64.2256 44.7022 66.5288C44.0612 68.8321 43.9121 71.2444 44.2645 73.6091C44.6168 75.9737 45.4628 78.2378 46.7474 80.2541C48.032 82.2704 49.7265 83.9939 51.7207 85.3125H39.8125ZM46.9219 71.0938C46.9219 68.2815 47.7558 65.5325 49.3182 63.1942C50.8806 60.856 53.1012 59.0335 55.6994 57.9573C58.2975 56.8812 61.1564 56.5996 63.9146 57.1482C66.6728 57.6968 69.2063 59.051 71.1948 61.0396C73.1833 63.0281 74.5376 65.5616 75.0862 68.3198C75.6348 71.078 75.3532 73.9369 74.2771 76.535C73.2009 79.1332 71.3784 81.3538 69.0402 82.9162C66.7019 84.4786 63.9528 85.3125 61.1406 85.3125C57.3709 85.3082 53.7568 83.8088 51.0912 81.1432C48.4256 78.4776 46.9262 74.8635 46.9219 71.0938ZM70.5606 85.3125C72.6837 83.9009 74.4663 82.0348 75.7794 79.8493C76.3753 81.9637 77.5695 83.8608 79.2182 85.3125H70.5606Z" fill="white"/><path d="M21.3281 65.4062H15.6406C15.2635 65.4062 14.9019 65.5561 14.6352 65.8227C14.3686 66.0894 14.2188 66.451 14.2188 66.8281V72.5156C14.2188 72.8927 14.3686 73.2544 14.6352 73.521C14.9019 73.7877 15.2635 73.9375 15.6406 73.9375H21.3281C21.7052 73.9375 22.0669 73.7877 22.3335 73.521C22.6002 73.2544 22.75 72.8927 22.75 72.5156V66.8281C22.75 66.451 22.6002 66.0894 22.3335 65.8227C22.0669 65.5561 21.7052 65.4062 21.3281 65.4062ZM19.9062 71.0938H17.0625V68.25H19.9062V71.0938Z" fill="white"/><path d="M61.1406 66.8281H63.9844C64.3615 66.8281 64.7231 66.6783 64.9898 66.4117C65.2564 66.145 65.4062 65.7834 65.4062 65.4062C65.4062 65.0291 65.2564 64.6675 64.9898 64.4008C64.7231 64.1342 64.3615 63.9844 63.9844 63.9844H62.5625V62.5625C62.5625 62.1854 62.4127 61.8237 62.146 61.5571C61.8794 61.2904 61.5177 61.1406 61.1406 61.1406C60.7635 61.1406 60.4019 61.2904 60.1352 61.5571C59.8686 61.8237 59.7188 62.1854 59.7188 62.5625V64.2289C58.7705 64.5647 57.9714 65.2247 57.4626 66.0925C56.9538 66.9603 56.768 67.9799 56.9382 68.9714C57.1083 69.9628 57.6233 70.8623 58.3923 71.5108C59.1613 72.1593 60.1347 72.5152 61.1406 72.5156C61.5177 72.5156 61.8794 72.6654 62.146 72.9321C62.4127 73.1987 62.5625 73.5604 62.5625 73.9375C62.5625 74.3146 62.4127 74.6763 62.146 74.9429C61.8794 75.2096 61.5177 75.3594 61.1406 75.3594H58.2969C57.9198 75.3594 57.5581 75.5092 57.2915 75.7758C57.0248 76.0425 56.875 76.4041 56.875 76.7812C56.875 77.1584 57.0248 77.52 57.2915 77.7867C57.5581 78.0533 57.9198 78.2031 58.2969 78.2031H59.7188V79.625C59.7188 80.0021 59.8686 80.3638 60.1352 80.6304C60.4019 80.8971 60.7635 81.0469 61.1406 81.0469C61.5177 81.0469 61.8794 80.8971 62.146 80.6304C62.4127 80.3638 62.5625 80.0021 62.5625 79.625V77.9586C63.5108 77.6228 64.3099 76.9628 64.8187 76.095C65.3275 75.2272 65.5132 74.2076 65.3431 73.2161C65.173 72.2247 64.6579 71.3252 63.889 70.6767C63.12 70.0282 62.1466 69.6723 61.1406 69.6719C60.7635 69.6719 60.4019 69.5221 60.1352 69.2554C59.8686 68.9888 59.7188 68.6271 59.7188 68.25C59.7188 67.8729 59.8686 67.5112 60.1352 67.2446C60.4019 66.9779 60.7635 66.8281 61.1406 66.8281Z" fill="white"/><path d="M25.5938 19.9062H69.6719C70.049 19.9062 70.4106 19.7564 70.6773 19.4898C70.9439 19.2231 71.0938 18.8615 71.0938 18.4844V12.7969C71.0938 12.4198 70.9439 12.0581 70.6773 11.7915C70.4106 11.5248 70.049 11.375 69.6719 11.375H25.5938C25.2166 11.375 24.855 11.5248 24.5883 11.7915C24.3217 12.0581 24.1719 12.4198 24.1719 12.7969V18.4844C24.1719 18.8615 24.3217 19.2231 24.5883 19.4898C24.855 19.7564 25.2166 19.9062 25.5938 19.9062ZM27.0156 14.2188H68.25V17.0625H27.0156V14.2188Z" fill="white"/><path d="M68.25 22.75H27.0156C26.6385 22.75 26.2769 22.8998 26.0102 23.1665C25.7436 23.4331 25.5938 23.7948 25.5938 24.1719C25.5938 24.549 25.7436 24.9106 26.0102 25.1773C26.2769 25.4439 26.6385 25.5938 27.0156 25.5938H68.25C68.6271 25.5938 68.9888 25.4439 69.2554 25.1773C69.5221 24.9106 69.6719 24.549 69.6719 24.1719C69.6719 23.7948 69.5221 23.4331 69.2554 23.1665C68.9888 22.8998 68.6271 22.75 68.25 22.75Z" fill="white"/><path d="M68.25 28.4375H27.0156C26.6385 28.4375 26.2769 28.5873 26.0102 28.854C25.7436 29.1206 25.5938 29.4823 25.5938 29.8594C25.5938 30.2365 25.7436 30.5981 26.0102 30.8648C26.2769 31.1314 26.6385 31.2812 27.0156 31.2812H68.25C68.6271 31.2812 68.9888 31.1314 69.2554 30.8648C69.5221 30.5981 69.6719 30.2365 69.6719 29.8594C69.6719 29.4823 69.5221 29.1206 69.2554 28.854C68.9888 28.5873 68.6271 28.4375 68.25 28.4375Z" fill="white"/><path d="M68.25 34.125H27.0156C26.6385 34.125 26.2769 34.2748 26.0102 34.5415C25.7436 34.8081 25.5938 35.1698 25.5938 35.5469C25.5938 35.924 25.7436 36.2856 26.0102 36.5523C26.2769 36.8189 26.6385 36.9688 27.0156 36.9688H68.25C68.6271 36.9688 68.9888 36.8189 69.2554 36.5523C69.5221 36.2856 69.6719 35.924 69.6719 35.5469C69.6719 35.1698 69.5221 34.8081 69.2554 34.5415C68.9888 34.2748 68.6271 34.125 68.25 34.125Z" fill="white"/><path d="M68.25 39.8125H48.3438C47.9666 39.8125 47.605 39.9623 47.3383 40.229C47.0717 40.4956 46.9219 40.8573 46.9219 41.2344C46.9219 41.6115 47.0717 41.9731 47.3383 42.2398C47.605 42.5064 47.9666 42.6562 48.3438 42.6562H68.25C68.6271 42.6562 68.9888 42.5064 69.2554 42.2398C69.5221 41.9731 69.6719 41.6115 69.6719 41.2344C69.6719 40.8573 69.5221 40.4956 69.2554 40.229C68.9888 39.9623 68.6271 39.8125 68.25 39.8125Z" fill="white"/></svg>
    </div>
  );
}

interface MortgageLoanProps {
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
