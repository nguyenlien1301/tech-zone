"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/components/ui/breadcrumb";
import Link from "next/link";
import FilterAside from "./filter-aside";
import ProductCard from "./product-cart";

export const products = [
  {
    id: "1",
    name: "Classic Leather Jacket",
    slug: "classic-leather-jacket",
    category: "Outerwear",
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    reviews: 128,
    image:
      "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=400",
    images: [
      "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    description:
      "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing. Sed lectus.",
    colors: ["Yellow", "Black", "Brown"],
    sizes: ["XS", "S", "M", "L", "XL"],
    isOnSale: true,
    isNew: true,
  },
  {
    id: "2",
    name: "Sport Running Shoes",
    slug: "sport-running-shoes",
    category: "Shoes",
    price: 149,
    originalPrice: 199,
    rating: 4.9,
    reviews: 256,
    image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400",
    images: [
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    description:
      "High-performance running shoes designed for comfort and durability. Perfect for daily training and long-distance running.",
    colors: ["Red", "Black", "White"],
    sizes: ["7", "8", "9", "10", "11"],
    isOnSale: true,
    isNew: false,
  },
  {
    id: "3",
    name: "Casual Cotton T-Shirt",
    slug: "casual-cotton-t-shirt",
    category: "Clothing",
    price: 29,
    originalPrice: 39,
    rating: 4.5,
    reviews: 192,
    image:
      "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400",
    images: [
      "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    description:
      "Comfortable cotton t-shirt perfect for everyday wear. Made from premium quality cotton with a relaxed fit.",
    colors: ["White", "Black", "Gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    isOnSale: true,
    isNew: true,
  },
  {
    id: "4",
    name: "Fitness Tracker Watch",
    slug: "fitness-tracker-watch",
    category: "Accessories",
    price: 199,
    originalPrice: 249,
    rating: 4.7,
    reviews: 156,
    image:
      "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=400",
    images: [
      "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    description:
      "Advanced fitness tracker with heart rate monitoring, GPS, and waterproof design. Track your workouts and daily activities.",
    colors: ["Black", "Silver", "Rose Gold"],
    sizes: ["S", "M", "L"],
    isOnSale: true,
    isNew: true,
  },
  {
    id: "5",
    name: "Winter Puffer Jacket",
    slug: "winter-puffer-jacket",
    category: "Outerwear",
    price: 179,
    originalPrice: 229,
    rating: 4.6,
    reviews: 98,
    image:
      "https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&w=400",
    images: [
      "https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    description:
      "Warm and stylish puffer jacket perfect for cold weather. Features down insulation and water-resistant exterior.",
    colors: ["Navy", "Black", "Olive"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    isOnSale: true,
    isNew: false,
  },
  {
    id: "6",
    name: "Slim Fit Jeans",
    slug: "slim-fit-jeans",
    category: "Clothing",
    price: 79,
    originalPrice: 99,
    rating: 4.4,
    reviews: 112,
    image:
      "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400",
    images: [
      "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    description:
      "Classic slim fit jeans made from premium denim. Comfortable stretch fabric with a modern cut.",
    colors: ["Blue", "Black", "Gray"],
    sizes: ["28", "30", "32", "34", "36"],
    isOnSale: true,
    isNew: true,
  },
];

const ProductPageContainer = () => {
  return (
    <>
      <div className="py-5 border-b border-gray-300 dark:border-gray-700">
        <div className="container">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/" className="hover:text-primary transition-all">
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Product</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <>
        <div className="container">
          <div className="wrapper block h-screen pb-20 md:grid lg:pb-0 md:grid-cols-[250px_1fr] lg:grid-cols-[280px_1fr] transition-all duration-300 ease-in-out">
            <FilterAside />
            <main className="flex-1 pt-6">
              <div className="mb-8">
                <div className="flex items-center justify-between px-5">
                  <div>
                    <h2 className="text-2xl font-bold mb-1">
                      Featured Products
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      Showing{" "}
                      <span className="text-primary font-semibold">
                        {products.length}
                      </span>{" "}
                      products found of 56 Products
                    </p>
                  </div>
                  <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white">
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                    <option>Best Rating</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 xl:grid-cols-3">
                {products.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </main>
          </div>
        </div>
      </>
    </>
  );
};

export default ProductPageContainer;
