import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TransactionTypeSelector from "@/components/TransactionTypeSelector";
import ListingGrid from "@/components/ListingGrid";
import Footer from "@/components/Footer";
import { ListingProps } from "@/components/MarketplaceListing";

const Index = () => {
  const [selectedType, setSelectedType] = useState("all");

  // Mock data for listings
  const mockListings: ListingProps[] = [
    {
      id: "1",
      title: "Brand New iPhone 13 Pro Max",
      price: 999.99,
      image: "https://images.unsplash.com/photo-1607936854279-55e8a4c64888?w=800&auto=format&fit=crop",
      seller: "TechStore",
      type: "buy",
      location: "New York, NY",
    },
    {
      id: "2",
      title: "Vintage Record Collection",
      price: 250.00,
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&auto=format&fit=crop",
      seller: "VinylKing",
      type: "sell",
      location: "Austin, TX",
    },
    {
      id: "3",
      title: "Mountain Bike - 1 Week Rental",
      price: 75.00,
      image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=800&auto=format&fit=crop",
      seller: "OutdoorGear",
      type: "rent",
      location: "Denver, CO",
    },
    {
      id: "4",
      title: "Gaming PC for Gaming Console",
      price: 0.00,
      image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&auto=format&fit=crop",
      seller: "GamerXchange",
      type: "trade",
      location: "Seattle, WA",
    },
    {
      id: "5",
      title: "Antique Gold Watch - Auction",
      price: 1200.00,
      image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=800&auto=format&fit=crop",
      seller: "VintageFinds",
      type: "auction",
      location: "Boston, MA",
    },
    {
      id: "6",
      title: "Web Design Services",
      price: 500.00,
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop",
      seller: "DigitalCreator",
      type: "sell",
      location: "Remote",
    },
    {
      id: "7",
      title: "Bitcoin Hardware Wallet",
      price: 130.00,
      image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?w=800&auto=format&fit=crop",
      seller: "CryptoSecure",
      type: "crypto",
      location: "San Francisco, CA",
    },
    {
      id: "8",
      title: "Gift Basket - Gourmet Chocolates",
      price: 65.00,
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&auto=format&fit=crop",
      seller: "GourmetGifts",
      type: "gift",
      location: "Chicago, IL",
    },
  ];

  const handleTransactionTypeChange = (type: string) => {
    setSelectedType(type);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <TransactionTypeSelector onSelect={handleTransactionTypeChange} selected={selectedType} />
      <ListingGrid listings={mockListings} filter={selectedType} />
      <Footer />
    </div>
  );
};

export default Index;
