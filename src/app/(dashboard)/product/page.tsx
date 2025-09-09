import { ProductPage } from "@/modules/product/pages";
import { createUser } from "@/modules/user/actions";
import Heading from "@/shared/components/common/heading";
const ProductPageRoot = async () => {
  const user = await createUser({
    clerkId: "clerk_123",
    email: "nguyenvanlien1234@gmail.com",
    username: "nguyenlien",
  });
  console.log("🚀user---->", user);
  return (
    <>
      <Heading className="text-center py-10 bgDarkMode">Product</Heading>
      <ProductPage />
    </>
  );
};

export default ProductPageRoot;
