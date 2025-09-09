import { ProductPage } from "@/modules/product/pages";
import Heading from "@/shared/components/common/heading";
const ProductPageRoot = async () => {
  return (
    <>
      <Heading className="text-center py-10 bgDarkMode">Product</Heading>
      <ProductPage />
    </>
  );
};

export default ProductPageRoot;
