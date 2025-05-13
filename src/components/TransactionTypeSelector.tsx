import React from "react";
import { Button } from "@/components/ui/button";
import { Tag, ShoppingCart, CircleDollarSign, Handshake, GalleryHorizontalEnd, Gift, Heart, BaggageClaim, Bitcoin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface TransactionTypeProps {
  onSelect: (type: string) => void;
  selected: string;
}

const TransactionTypeSelector: React.FC<TransactionTypeProps> = ({ onSelect, selected }) => {
  const transactionTypes = [
    { id: 'all', name: 'All', icon: <Tag className="h-5 w-5" /> },
    { id: 'buy', name: 'Buy', icon: <ShoppingCart className="h-5 w-5" /> },
    { id: 'sell', name: 'Sell', icon: <Tag className="h-5 w-5" /> },
    { id: 'rent', name: 'Rent', icon: <BaggageClaim className="h-5 w-5" /> },
    { id: 'trade', name: 'Trade', icon: <Handshake className="h-5 w-5" /> },
    { id: 'auction', name: 'Auction', icon: <GalleryHorizontalEnd className="h-5 w-5" /> },
    { id: 'bid', name: 'Bid', icon: <CircleDollarSign className="h-5 w-5" /> },
    { id: 'gift', name: 'Gift', icon: <Gift className="h-5 w-5" /> },
    { id: 'donate', name: 'Donate', icon: <Heart className="h-5 w-5" /> },
    { id: 'crypto', name: 'Crypto', icon: <Bitcoin className="h-5 w-5" /> }
  ];

  return (
    <div className="py-8 bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Transaction Types</h2>
          <p className="text-muted-foreground text-center max-w-2xl">
            Choose how you want to interact with other members in the marketplace
          </p>
          <Separator className="mt-4 w-24 bg-primary/30" />
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-3">
          {transactionTypes.map((type) => (
            <Button
              key={type.id}
              variant={selected === type.id ? "default" : "outline"}
              className={`flex flex-col h-auto py-4 transition-all duration-200 ${
                selected === type.id 
                  ? "bg-primary text-primary-foreground shadow-md" 
                  : "hover:bg-accent hover:text-accent-foreground"
              }`}
              onClick={() => onSelect(type.id)}
            >
              <div className={`mb-2 p-2 rounded-full ${
                selected === type.id 
                  ? "bg-primary-foreground/20" 
                  : "bg-muted"
              }`}>
                {type.icon}
              </div>
              <span className="font-medium">{type.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionTypeSelector;
