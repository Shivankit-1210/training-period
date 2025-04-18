import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="bg-[rgb(29,41,61)] text-white py-3 text-center">
        <p class="text-sm">&copy; 2025 Innostax software labs. All rights reserved.</p>
        <div class="mt-2 space-x-4">
          <a href="#" class="hover:underline">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="#" class="hover:underline">
            Terms of Service
          </a>
          <span>|</span>
          <a href="#" class="hover:underline">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
