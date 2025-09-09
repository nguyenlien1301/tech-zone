import { Heart, ShoppingCart, Star } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  isOnSale?: boolean;
  isNew?: boolean;
}

const ProductCard = ({
  name,
  slug,
  category,
  price,
  originalPrice,
  rating,
  reviews,
  image,
  isOnSale = false,
  isNew = false,
}: ProductCardProps) => {
  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center space-x-1">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            className={`${
              i < Math.floor(rating)
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
        {rating}
      </span>
      <span className="text-sm text-gray-500 dark:text-gray-200">
        ({reviews})
      </span>
    </div>
  );

  return (
    <div className="group rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bgDarkMode">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Sale badge */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {isOnSale && (
            <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Sale
            </div>
          )}
          {isNew && (
            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              New
            </div>
          )}
        </div>

        {/* Wishlist button */}
        <button className="absolute z-10 cursor-pointer top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white hover:scale-110 transition-all duration-200">
          <Heart
            size={16}
            className="text-gray-600 hover:text-red-500 transition-colors"
          />
        </button>

        {/* Quick add overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
            Quick Add
          </button>
        </div>
      </div>

      <div className="p-5">
        <div className="mb-3">
          <p className="text-xs font-medium uppercase tracking-wide mb-1 bg-[#1E3E62] inline-block py-1 px-2 rounded-lg">
            {category}
          </p>
          <Link
            href={`/product-detail?slug=${slug}`}
            className="font-semibold text-gray-900 dark:text-gray-200 text-lg leading-tight line-clamp-2 mt-2"
          >
            {name}
          </Link>
        </div>

        <div className="mb-4">
          <StarRating rating={rating} />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900 dark:text-primary">
              ${price}
            </span>
            {originalPrice && (
              <span className="text-sm text-gray-400 dark:text-gray-200 line-through">
                ${originalPrice}
              </span>
            )}
          </div>

          <button className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors cursor-pointer">
            <ShoppingCart size={16} />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
