import React from "react";
import MarketplaceListing, { ListingProps } from "./MarketplaceListing";

interface ListingGridProps {
  listings: ListingProps[];
  filter: string;
}

const ListingGrid: React.FC<ListingGridProps> = ({ listings, filter }) => {
  const filteredListings = filter === 'all' 
    ? listings 
    : listings.filter(listing => listing.type === filter);

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Listings</h2>
          <span className="text-sm text-gray-500">
            Showing {filteredListings.length} of {listings.length} listings
          </span>
        </div>
        
        {filteredListings.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredListings.map((listing) => (
              <MarketplaceListing key={listing.id} {...listing} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-600">No listings found</h3>
            <p className="text-gray-500 mt-2">
              There are no {filter} listings available right now.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListingGrid;
