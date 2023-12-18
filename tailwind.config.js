module.exports = {
  content: ["./**/*.{js,jsx,ts,tsx,html,svelte,vue}"],
  theme: {
    extend: {
      fontFamily: { poppins: "Poppins" },
      backgroundImage: {
        "thought-catalog-23kdvfc-395a-unsplash":
          'url("https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/2:4.webp")',
        "mask-group": 'url("https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/17:99.webp")',
        "mask-group-0": 'url("https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/17:69.webp")',
        "mask-group-1": 'url("https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/22:333.webp")',
        "footer-image": 'url("/assets/FooterImage.svg")',
        "salem-logo":
          "url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/f0ddccbd97eeafb39de3d218dbc67f9a71450a1e.webp)",
      },
    },
  },
  plugins: [],
  mode: "jit",
};
