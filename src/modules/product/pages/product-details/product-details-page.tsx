"use client";

import ProductDetailsContainer from "./components";

const ProductDetailsPage = () => {
  //   const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  //   console.log("🚀selectedProduct---->", selectedProduct);
  //   const handleProductClick = (productId: string) => {
  //     setSelectedProduct(productId);
  //   };
  //   const handleBackToProducts = () => {
  //     setSelectedProduct(null);
  //   };
  //   const selectedProductData = products.find((item) => item.slug === slug);
  //   console.log("🚀selectedProductData---->", selectedProductData);
  //   return (
  // <ProductDetailsContainer
  //   product={selectedProductData}
  //   onBack={handleBackToProducts}
  // />
  //   );
  //   if (selectedProduct && selectedProductData) {
  //     return (
  //       <ProductDetailsContainer
  //         product={selectedProductData}
  //         onBack={handleBackToProducts}
  //       />
  //     );
  //   }
  return <ProductDetailsContainer />;
};

export default ProductDetailsPage;
