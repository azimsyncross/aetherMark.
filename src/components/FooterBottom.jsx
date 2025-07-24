// It's a good practice to have icons as separate components

// const MastercardIcon = () => (
//   <svg
//     width="56"
//     height="36"
//     viewBox="0 0 56 36"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     aria-label="Mastercard"
//     role="img"
//   >
//     <rect width="56" height="36" rx="4" fill="white" />
//     <circle cx="23" cy="18" r="9" fill="#EB001B" />
//     <circle
//       cx="33"
//       cy="18"
//       r="9"
//       fill="#F79E1B"
//       style={{ mixBlendMode: "multiply" }}
//     />
//   </svg>
// );

const FooterBottom = () => {
  return (
    <footer className="bg-[#0B0F19]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Side: Payment Options */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold text-cyan-300 mb-2">
              Payment Options
            </h3>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <img src="/visa.svg" alt="Visa" className="w-12 h-8" />
              <img
                src="/mastercard.svg"
                alt="Mastercard"
                className="w-12 h-8"
              />
              {/* <MastercardIcon /> */}
            </div>
          </div>

          {/* Right Side: Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-500">
              © 2025 AetherMark. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBottom;
