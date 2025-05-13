
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";

export interface ListingProps {
  id: string;
  title: string;
  price: number;
  image: string;
  seller: string;
  type: string;
  location: string;
}

const MarketplaceListing: React.FC<ListingProps> = ({
  id,
  title,
  price,
  image,
  seller,
  type,
  location,
}) => {
  const { addToCart } = useCart();

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      buy: "bg-blue-500",
      sell: "bg-green-500",
      rent: "bg-purple-500",
      trade: "bg-amber-500",
      auction: "bg-red-500",
      bid: "bg-pink-500",
      gift: "bg-emerald-500",
      donate: "bg-teal-500",
      crypto: "bg-orange-500",
    };
    return colors[type] || "bg-gray-500";
  };

  const handleAddToCart = () => {
    addToCart({
      id,
      title,
      price,
      image,
      seller,
      type,
      location,
    });
  };

  return (
    <Card className="transaction-card overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <Badge className={`absolute top-2 left-2 ${getTypeColor(type)}`}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </Badge>
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm hover:bg-white/40"
        >
          <Heart className="h-4 w-4" />
        </Button>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg truncate">{title}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="font-bold text-lg">
            ${price.toFixed(2)}
          </span>
          <span className="text-sm text-gray-500">{location}</span>
        </div>
        <p className="text-sm text-gray-500 mt-1">Seller: {seller}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between gap-2">
        <Button className="w-full" size="sm" onClick={handleAddToCart}>
          <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
        </Button>
        <Link to={`/listing/${id}`}>
          <Button variant="outline" size="sm" className="px-3">
            <Eye className="h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default MarketplaceListing;
