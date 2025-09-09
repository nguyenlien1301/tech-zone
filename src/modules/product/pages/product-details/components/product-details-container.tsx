// "use client";
// import {
//   ArrowLeft,
//   Heart,
//   Minus,
//   Plus,
//   Share2,
//   ShoppingCart,
//   Star,
// } from "lucide-react";
// import { useState } from "react";

// interface ProductDetailProps {
//   product: {
//     id: string;
//     name: string;
//     category: string;
//     price: number;
//     originalPrice?: number;
//     rating: number;
//     reviews: number;
//     images: string[];
//     description: string;
//     colors: string[];
//     sizes: string[];
//     isOnSale?: boolean;
//     isNew?: boolean;
//   };
//   onBack: () => void;
// }

// const ProductDetailsContainer = ({ product, onBack }: ProductDetailProps) => {
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [selectedColor, setSelectedColor] = useState(0);
//   const [selectedSize, setSelectedSize] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const [activeTab, setActiveTab] = useState("description");

//   const StarRating = ({
//     rating,
//     size = 16,
//   }: {
//     rating: number;
//     size?: number;
//   }) => (
//     <div className="flex items-center space-x-1">
//       <div className="flex">
//         {[...Array(5)].map((_, i) => (
//           <Star
//             key={i}
//             size={size}
//             className={`${
//               i < Math.floor(rating)
//                 ? "text-yellow-400 fill-yellow-400"
//                 : "text-gray-300"
//             }`}
//           />
//         ))}
//       </div>
//       <span className="text-sm font-medium text-gray-300">{rating}</span>
//       <span className="text-sm text-gray-500 ">
//         ({product.reviews} reviews)
//       </span>
//     </div>
//   );

//   const colorOptions = [
//     { name: "Yellow", value: "bg-yellow-400" },
//     { name: "Black", value: "bg-black" },
//     { name: "Brown", value: "bg-amber-700" },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-900">
//       {/* Breadcrumb */}
//       <div className="bg-gray-800 border-b border-gray-700">
//         <div className="max-w-7xl mx-auto px-4 py-4">
//           <div className="flex items-center space-x-2 text-sm">
//             <button
//               onClick={onBack}
//               className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
//             >
//               <ArrowLeft size={16} />
//               <span>Back</span>
//             </button>
//             <span className="text-gray-500">/</span>
//             <span className="text-gray-400">Home</span>
//             <span className="text-gray-500">/</span>
//             <span className="text-gray-400">Product</span>
//             <span className="text-gray-500">/</span>
//             <span className="text-white">{product.name}</span>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
//           {/* Product Images */}
//           <div className="space-y-4">
//             {/* Main Image */}
//             <div className="relative overflow-hidden rounded-2xl">
//               <img
//                 src={product.images[selectedImage]}
//                 alt={product.name}
//                 className="w-full h-96 lg:h-[500px] object-cover"
//               />
//               {/* Badges */}
//               <div className="absolute top-4 left-4 flex flex-col space-y-2">
//                 {product.isOnSale && (
//                   <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
//                     Sale
//                   </div>
//                 )}
//                 {product.isNew && (
//                   <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
//                     New
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Thumbnail Images */}
//             <div className="flex space-x-4 overflow-x-auto">
//               {product.images.map((image, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setSelectedImage(index)}
//                   className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors"
//                 >
//                   <img
//                     src={image}
//                     alt={`${product.name} ${index + 1}`}
//                     className="w-full h-full object-cover"
//                   />
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Product Info */}
//           <div className="space-y-6">
//             <div>
//               <h1 className="text-2xl lg:text-3xl font-bold mb-2 text-gray-900">
//                 {product.name}
//               </h1>
//               <StarRating rating={product.rating} />
//             </div>

//             <div className="flex items-center space-x-4">
//               <span className="text-3xl font-bold text-gray-90">
//                 ${product.price}
//               </span>
//               {product.originalPrice && (
//                 <span className="text-xl line-through text-gray-500">
//                   ${product.originalPrice}
//                 </span>
//               )}
//             </div>

//             <p className="text-base leading-relaxed text-gray-600">
//               {product.description}
//             </p>

//             {/* Color Selection */}
//             <div>
//               <h3 className="text-lg font-semibold mb-3 text-gray-900">
//                 Color:
//               </h3>
//               <div className="flex space-x-3">
//                 {colorOptions.map((color, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setSelectedColor(index)}
//                     className="w-10 h-10 rounded-full border-2 transition-colors border-orange-400 ring-2 ring-orange-200"
//                     title={color.name}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Size Selection */}
//             <div>
//               <h3 className="text-lg font-semibold mb-3 text-gray-900">
//                 Size:
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {["XS", "S", "M", "L", "XL"].map((size) => (
//                   <button
//                     key={size}
//                     onClick={() => setSelectedSize(size)}
//                     className="px-4 py-2 border rounded-lg font-medium transition-colors border-orange-400 bg-orange-50 text-orange-600"
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Quantity */}
//             <div>
//               <h3 className="text-lg font-semibold mb-3 text-gray-900">Qty:</h3>
//               <div className="flex items-center space-x-4">
//                 <div className="flex items-center border rounded-lg border-gray-600">
//                   <button
//                     onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                     className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
//                   >
//                     <Minus size={16} />
//                   </button>
//                   <span className="px-4 py-2 font-medium text-gray-900">
//                     {quantity}
//                   </span>
//                   <button
//                     onClick={() => setQuantity(quantity + 1)}
//                     className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
//                   >
//                     <Plus size={16} />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex space-x-4">
//               <button className="flex-1 bg-orange-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 transition-colors flex items-center justify-center space-x-2">
//                 <ShoppingCart size={20} />
//                 <span>ADD TO CART</span>
//               </button>
//               <button className="p-3 border rounded-lg transition-colors border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-400">
//                 <Heart size={20} />
//               </button>
//             </div>

//             {/* Product Meta */}
//             <div className="pt-6 border-t space-y-2 border-gray-700">
//               <div className="flex items-center space-x-2">
//                 <span className="font-medium text-gray-600">Category:</span>
//                 <span className="text-gray-900">{product.category}</span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <span className="font-medium text-gray-600">Share:</span>
//                 <div className="flex space-x-2">
//                   <button className="p-2 rounded-full transition-colors text-gray-500 hover:text-gray-900">
//                     <Share2 size={16} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Product Tabs */}
//         <div className="mt-12">
//           <div className="border-b border-gray-700">
//             <div className="flex space-x-8">
//               {["description", "shipping", "reviews"].map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className="py-4 px-2 border-b-2 font-medium capitalize transition-colors border-orange-400 text-orange-400"
//                 >
//                   {tab === "shipping" ? "Shipping & Returns" : tab}
//                   {tab === "reviews" && ` (${product.reviews})`}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="py-8">
//             {activeTab === "description" && (
//               <div className="space-y-4">
//                 <h3 className="text-xl font-semibold text-gray-900">
//                   Product Information
//                 </h3>
//                 <p className="text-base leading-relaxed text-gray-600">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
//                   odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
//                   turpis. Suspendisse urna viverra non, semper suscipit, posuere
//                   a, pede. Donec nec justo eget felis facilisis fermentum.
//                   Aliquam porttitor mauris sit amet orci. Aenean dignissim
//                   pellentesque felis. Phasellus ultrices nulla quis nibh.
//                   Quisque a lectus. Donec consectetuer ligula vulputate sem
//                   tristique cursus.
//                 </p>
//                 <ul className="list-disc list-inside space-y-2 text-gray-600">
//                   <li>
//                     Nunc nec porttitor turpis. In eu risus enim. In vitae mollis
//                     elit.
//                   </li>
//                   <li>Vivamus finibus vel mauris ut vehicula.</li>
//                   <li>
//                     Nullam a magna porttitor, dictum risus nec, faucibus sapien.
//                   </li>
//                 </ul>
//               </div>
//             )}
//             {activeTab === "shipping" && (
//               <div className="space-y-4">
//                 <h3 className="text-xl font-semibold text-gray-900">
//                   Shipping & Returns
//                 </h3>
//                 <p className="text-base leading-relaxed text-gray-600">
//                   Free shipping on orders over $50. Standard delivery takes 3-5
//                   business days. Express delivery available for an additional
//                   fee.
//                 </p>
//               </div>
//             )}
//             {activeTab === "reviews" && (
//               <div className="space-y-4">
//                 <h3 className="text-xl font-semibold text-gray-900">
//                   Reviews ({product.reviews})
//                 </h3>
//                 <p className="text-base leading-relaxed text-gray-600">
//                   Customer reviews will be displayed here.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailsContainer;

const ProductDetailsContainer = () => {
  return <div>ProductDetailsContainer</div>;
};

export default ProductDetailsContainer;
