import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Elgg Commerce</h3>
            <p className="text-gray-600 text-sm">
              A marketplace platform for Elgg members to buy, sell, rent, trade, 
              auction, and more with secure PayPal integration.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Transactions</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Buy & Sell</li>
              <li>Rent</li>
              <li>Trade</li>
              <li>Auction & Bid</li>
              <li>Gift & Donate</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>PayPal Business</li>
              <li>Bitcoin</li>
              <li>Other Providers (Coming Soon)</li>
              <li>Escrow Services (Coming Soon)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>FAQs</li>
              <li>Contact Support</li>
              <li>Transaction Safety</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Elgg Commerce. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-gray-500 text-sm">Terms</span>
            <span className="text-gray-500 text-sm">Privacy</span>
            <span className="text-gray-500 text-sm">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
