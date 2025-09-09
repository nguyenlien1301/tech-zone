import { ChevronDown, ChevronUp, Star } from "lucide-react";
import React, { useState } from "react";

interface FilterAsideProps {
  className?: string;
}

const FilterAside = ({ className = "" }: FilterAsideProps) => {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    brands: true,
    price: true,
    colors: true,
    sizes: true,
    rating: true,
  });

  const [priceRange, setPriceRange] = useState({ min: 0, max: 750 });
  const [currentRange, setCurrentRange] = useState({ min: 0, max: 750 });
  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handlePriceChange = (type: "min" | "max", value: number) => {
    setCurrentRange((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const clearAllFilters = () => {
    // Reset all filters to default state
    setCurrentRange({ min: 0, max: 750 });
    // You can add more reset logic here for other filters
  };
  const categories = [
    "Clothing",
    "Shoes",
    "Accessories",
    "Sportswear",
    "Outerwear",
    "Formal Wear",
    "Casual Wear",
  ];

  const brands = [
    "Nike",
    "Adidas",
    "Puma",
    "Under Armour",
    "New Balance",
    "Levi&apos;s",
    "H&M",
    "Zara",
  ];

  const colors = [
    { name: "Black", value: "bg-black" },
    { name: "White", value: "bg-white border-gray-300" },
    { name: "Red", value: "bg-red-500" },
    { name: "Blue", value: "bg-blue-500" },
    { name: "Green", value: "bg-green-500" },
    { name: "Yellow", value: "bg-yellow-400" },
    { name: "Purple", value: "bg-purple-500" },
    { name: "Orange", value: "bg-orange-500" },
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const ratings = [
    { stars: 5, label: "5 & Up" },
    { stars: 4, label: "4 & Up" },
    { stars: 3, label: "3 & Up" },
    { stars: 2, label: "2 & Up" },
  ];

  const FilterSection = ({
    title,
    isExpanded,
    onToggle,
    children,
  }: {
    title: string;
    isExpanded: boolean;
    onToggle: () => void;
    children: React.ReactNode;
  }) => (
    <div className="mb-8">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full font-semibold text-lg mb-4 transition-colors cursor-pointer"
      >
        {title}
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isExpanded && <div>{children}</div>}
    </div>
  );

  const StarRating = ({ count }: { count: number }) => (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={`${
            i < count ? "text-yellow-400 fill-yellow-400" : "text-gray-500"
          }`}
        />
      ))}
    </div>
  );

  return (
    <aside
      className={`py-6 pr-6 md:w-[250px] lg:w-[280px] h-full overflow-y-auto border-r border-gray-300 dark:border-gray-700 ${className}`}
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Shop Products</h2>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Filters</h3>
          <button
            onClick={clearAllFilters}
            className="text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors cursor-pointer"
          >
            Clear All
          </button>
        </div>
      </div>

      {/* Categories */}
      <FilterSection
        title="Categories"
        isExpanded={expandedSections.categories}
        onToggle={() => toggleSection("categories")}
      >
        <div className="space-y-3">
          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center cursor-pointer group"
            >
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
              />
              <span className="ml-3 group-hover:text-primary transition-colors">
                {category}
              </span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Brands */}
      <FilterSection
        title="Brands"
        isExpanded={expandedSections.brands}
        onToggle={() => toggleSection("brands")}
      >
        <div className="space-y-3">
          {brands.map((brand) => (
            <label
              key={brand}
              className="flex items-center cursor-pointer group"
            >
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
              />
              <span className="ml-3 group-hover:text-primary transition-colors">
                {brand}
              </span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Price */}
      <FilterSection
        title="Price"
        isExpanded={expandedSections.price}
        onToggle={() => toggleSection("price")}
      >
        <div className="space-y-4">
          <div className="text-gray-300">
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Price Range:{" "}
            </span>
            <span className="text-orange-400 font-semibold">
              ${currentRange.min} - ${currentRange.max}
            </span>
          </div>

          <div className="relative">
            {/* Range Slider Track */}
            <div className="w-full h-2 bg-gray-700 rounded-full relative">
              <div
                className="absolute h-2 bg-orange-400 rounded-full"
                style={{
                  left: `${(currentRange.min / priceRange.max) * 100}%`,
                  width: `${
                    ((currentRange.max - currentRange.min) / priceRange.max) *
                    100
                  }%`,
                }}
              />
            </div>

            {/* Min Range Input */}
            <input
              type="range"
              min={priceRange.min}
              max={priceRange.max}
              value={currentRange.min}
              onChange={(e) =>
                handlePriceChange("min", parseInt(e.target.value))
              }
              className="absolute top-0 w-full h-2 bg-transparent appearance-none cursor-pointer range-slider"
              style={{ zIndex: 1 }}
            />

            {/* Max Range Input */}
            <input
              type="range"
              min={priceRange.min}
              max={priceRange.max}
              value={currentRange.max}
              onChange={(e) =>
                handlePriceChange("max", parseInt(e.target.value))
              }
              className="absolute top-0 w-full h-2 bg-transparent appearance-none cursor-pointer range-slider"
              style={{ zIndex: 2 }}
            />
          </div>

          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
            <span>${priceRange.min}</span>
            <span>${priceRange.max}</span>
          </div>
        </div>
      </FilterSection>
      {/* Colors */}
      <FilterSection
        title="Colors"
        isExpanded={expandedSections.colors}
        onToggle={() => toggleSection("colors")}
      >
        <div className="grid grid-cols-4 gap-4">
          {colors.map((color) => (
            <div key={color.name} className="text-center">
              <button
                className={`w-12 h-12 rounded-full border-2 border-gray-600 hover:border-white transition-colors cursor-pointer ${color.value}`}
                title={color.name}
              />
              <span className="text-xs text-gray-600 mt-1 block dark:text-gray-300">
                {color.name}
              </span>
            </div>
          ))}
        </div>
      </FilterSection>

      {/* Sizes */}
      <FilterSection
        title="Sizes"
        isExpanded={expandedSections.sizes}
        onToggle={() => toggleSection("sizes")}
      >
        <div className="grid grid-cols-3 gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              className="py-2 px-4 border border-gray-600 rounded text-gray-600 hover:bg-gray-700 cursor-pointer hover:text-white hover:border-gray-400 transition-all dark:text-gray-300"
            >
              {size}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Rating */}
      <FilterSection
        title="Rating"
        isExpanded={expandedSections.rating}
        onToggle={() => toggleSection("rating")}
      >
        <div className="space-y-3">
          {ratings.map((rating) => (
            <label
              key={rating.label}
              className="flex items-center cursor-pointer"
            >
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
              />
              <div className="ml-3 flex items-center space-x-2">
                <StarRating count={rating.stars} />
                <span className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                  {rating.label}
                </span>
              </div>
            </label>
          ))}
        </div>
      </FilterSection>
    </aside>
  );
};

export default FilterAside;
