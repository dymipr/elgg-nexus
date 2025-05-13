import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="hero-gradient text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Trade, Buy, Sell, and More with Elgg Commerce
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Connect with other Elgg members to buy, sell, rent, trade, auction, and more.
              Secure transactions powered by PayPal and more payment options.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                variant="secondary"
                className="font-medium"
              >
                Browse Marketplace
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 hover:bg-white/20 border-white/30 font-medium"
              >
                List an Item
              </Button>
            </div>
          </div>
          
          <div className="md:w-5/12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-xl">
              <div className="text-center mb-4">
                <h2 className="text-2xl font-bold">Quick Stats</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-sm opacity-80">Active Listings</p>
                  <p className="text-3xl font-bold">1,240+</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-sm opacity-80">Transactions</p>
                  <p className="text-3xl font-bold">8,530+</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-sm opacity-80">Active Auctions</p>
                  <p className="text-3xl font-bold">35</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-sm opacity-80">Members</p>
                  <p className="text-3xl font-bold">5,120+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
