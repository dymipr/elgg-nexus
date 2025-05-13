
import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Wallet } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";

const Navbar = () => {
  const { items } = useCart();
  
  return (
    <nav className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Wallet className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">Elgg Commerce</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost">Marketplace</Button>
            </Link>
            <Button variant="ghost">My Transactions</Button>
            <Button variant="ghost">Watchlist</Button>
            <Link to="/cart">
              <Button variant="outline" className="flex items-center gap-2 relative">
                <ShoppingCart className="h-4 w-4" />
                <span>Cart</span>
                {items.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 px-1.5 py-0.5 rounded-full">
                    {items.length}
                  </Badge>
                )}
              </Button>
            </Link>
            <Button className="bg-primary hover:bg-primary/90">Sign In</Button>
          </div>
          
          <div className="flex md:hidden">
            <Button variant="ghost" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
