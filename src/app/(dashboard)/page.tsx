import IntroFeature from "@/shared/components/common/intro-feature";
import IntroSlider from "@/shared/components/common/intro-slider";
import { IconArrowRight } from "@/shared/components/icons";

const page = () => {
  return (
    <>
      <div className="intro-section py-5">
        <div className="w-[1188px] max-w-full px-2.5 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-2/3 px-4">
              <div className="intro-slider-container slider-container-ratio mb-2 mb-lg-0">
                <IntroSlider />
                <span className="slider-loader"></span>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-3">
              <div className="block relative mb-5">
                <a href="">
                  <img
                    src="http://127.0.0.1:5500/assets/images/demos/demo-3/banners/banner-1.jpg"
                    alt="Banner"
                  />
                </a>
                <div className="inline-block absolute pt-[0.4rem] left-8 top-1/2 z-20 -translate-y-1/2 md:left-12 lg:left-7">
                  <h3 className="text-[#1a1a1a] text-lg font-black tracking-[-0.03em]">
                    <a href="#" className="text-inherit">
                      Edifier <br />
                      Stereo Bluetooth{" "}
                    </a>
                  </h3>
                  <a
                    href="#"
                    className="leading-5 px-3 py-1 text-sm font-medium hover:text-white hover:bg-primary transition-all hover:rounded-3xl -ml-2
                    inline-flex items-center gap-2 text-primary"
                  >
                    <span>Shop Now</span>
                    <IconArrowRight className="size-4" />
                  </a>
                </div>
              </div>
              <div className="block relative mb-5">
                <a href="">
                  <img
                    src="http://127.0.0.1:5500/assets/images/demos/demo-3/banners/banner-2.jpg"
                    alt="Banner"
                  />
                </a>
                <div className="inline-block absolute pt-[0.4rem] left-8 top-1/2 z-20 -translate-y-1/2 md:left-12 lg:left-7">
                  <h3 className="text-[#1a1a1a] text-lg font-black tracking-[-0.03em]">
                    <a href="#" className="text-inherit">
                      GoPro - Fusion 360 <span>Save $70</span>
                    </a>
                  </h3>
                  <a
                    href="#"
                    className="leading-5 px-3 py-1 text-sm font-medium hover:text-white hover:bg-primary transition-all hover:rounded-3xl -ml-2
                    inline-flex items-center gap-2 text-primary"
                  >
                    <span>Shop Now</span>
                    <IconArrowRight className="size-4" />
                  </a>
                </div>
              </div>
              <div className="block relative">
                <a href="">
                  <img
                    src="http://127.0.0.1:5500/assets/images/demos/demo-3/banners/banner-3.jpg"
                    alt="Banner"
                  />
                </a>
                <div className="inline-block absolute pt-[0.4rem] left-8 top-1/2 z-20 -translate-y-1/2 md:left-12 lg:left-7">
                  <h3 className="text-[#1a1a1a] text-lg font-black tracking-[-0.03em]">
                    <a href="#" className="text-inherit">
                      Apple Watch 4 <span>Our Hottest Deals</span>
                    </a>
                  </h3>
                  <a
                    href="#"
                    className="leading-5 px-3 py-1 text-sm font-medium hover:text-white hover:bg-primary transition-all hover:rounded-3xl -ml-2
                    inline-flex items-center gap-2 text-primary"
                  >
                    <span>Shop Now</span>
                    <IconArrowRight className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1188px] max-w-full px-2.5 mx-auto">
        <ul className="flex items-center justify-center mb-3">
          <li>
            <a className="text-2xl font-bold cursor-pointer hover:text-primary transition-all py-2 px-4">
              Featured
            </a>
          </li>
          <li>
            <a className="text-2xl font-bold cursor-pointer hover:text-primary transition-all py-2 px-4">
              On Sale
            </a>
          </li>
          <li>
            <a className="text-2xl font-bold cursor-pointer hover:text-primary transition-all py-2 px-4">
              Top Rated
            </a>
          </li>
        </ul>
        <div className="tab-content tab-content-carousel">
          <div className="pt-10">
            <IntroFeature />
          </div>
          {/* <div
            className="tab-pane p-0 fade"
            id="products-sale-tab"
            role="tabpanel"
            aria-labelledby="products-sale-link"
          >
            <div
              className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
              data-toggle="owl"
              data-owl-options='{
                                                            "nav": true, 
                                                            "dots": true,
                                                            "margin": 20,
                                                            "loop": false,
                                                            "responsive": {
                                                                "0": {
                                                                    "items":2
                                                                },
                                                                "600": {
                                                                    "items":2
                                                                },
                                                                "992": {
                                                                    "items":3
                                                                },
                                                                "1200": {
                                                                    "items":4
                                                                }
                                                            }
                                                        }'
            >
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product-detail.html">
                    <img
                      src="assets/images/demos/demo-3/products/product-4.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist btn-expandable"
                    >
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  <div className="product-action product-action-dark">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                  </div>
                </figure>
                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product-detail.html">
                      Sony - Alpha a5100 Mirrorless Camera
                    </a>
                  </h3>
                  <div className="product-price">$499.99</div>
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val"></div>
                    </div>
                    <span className="ratings-text">( 11 Reviews )</span>
                  </div>
                </div>
              </div>
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product-detail.html">
                    <img
                      src="assets/images/demos/demo-3/products/product-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist btn-expandable"
                    >
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  <div className="product-action product-action-dark">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                  </div>
                </figure>
                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product-detail.html">
                      GoPro - HERO7 Black HD Waterproof Action
                    </a>
                  </h3>
                  <div className="product-price">$349.99</div>
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val"></div>
                    </div>
                    <span className="ratings-text">( 2 Reviews )</span>
                  </div>
                </div>
              </div>
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product-detail.html">
                    <img
                      src="assets/images/demos/demo-3/products/product-3.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist btn-expandable"
                    >
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  <div className="product-action product-action-dark">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                  </div>
                </figure>
                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product-detail.html">Lenovo - 330-15IKBR 15.6"</a>
                  </h3>
                  <div className="product-price">
                    <span className="out-price">$339.99</span>
                    <span className="out-text">Out of Stock</span>
                  </div>
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val"></div>
                    </div>
                    <span className="ratings-text">( 3 Reviews )</span>
                  </div>
                </div>
              </div>
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-new">
                    New
                  </span>
                  <a href="product-detail.html">
                    <img
                      src="assets/images/demos/demo-3/products/product-2.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="assets/images/demos/demo-3/products/product-2-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist btn-expandable"
                    >
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  <div className="product-action product-action-dark">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                  </div>
                </figure>
                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product-detail.html">
                      Apple - Apple Watch Series 3 with White Sport Band
                    </a>
                  </h3>
                  <div className="product-price">$214.99</div>
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val"></div>
                    </div>
                    <span className="ratings-text">( 0 Reviews )</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane p-0 fade"
            id="products-top-tab"
            role="tabpanel"
            aria-labelledby="products-top-link"
          >
            <div
              className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
              data-toggle="owl"
              data-owl-options='{
                                                            "nav": true, 
                                                            "dots": true,
                                                            "margin": 20,
                                                            "loop": false,
                                                            "responsive": {
                                                                "0": {
                                                                    "items":2
                                                                },
                                                                "600": {
                                                                    "items":2
                                                                },
                                                                "992": {
                                                                    "items":3
                                                                },
                                                                "1200": {
                                                                    "items":4
                                                                }
                                                            }
                                                        }'
            >
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product-detail.html">
                    <img
                      src="assets/images/demos/demo-3/products/product-3.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist btn-expandable"
                    >
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  <div className="product-action product-action-dark">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                  </div>
                </figure>
                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product-detail.html">Lenovo - 330-15IKBR 15.6"</a>
                  </h3>
                  <div className="product-price">
                    <span className="out-price">$339.99</span>
                    <span className="out-text">Out of Stock</span>
                  </div>
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val"></div>
                    </div>
                    <span className="ratings-text">( 3 Reviews )</span>
                  </div>
                </div>
              </div>
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product-detail.html">
                    <img
                      src="assets/images/demos/demo-3/products/product-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist btn-expandable"
                    >
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  <div className="product-action product-action-dark">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                  </div>
                </figure>
                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product-detail.html">
                      GoPro - HERO7 Black HD Waterproof Action
                    </a>
                  </h3>
                  <div className="product-price">$349.99</div>
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val"></div>
                    </div>
                    <span className="ratings-text">( 2 Reviews )</span>
                  </div>
                </div>
              </div>
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product-detail.html">
                    <img
                      src="assets/images/demos/demo-3/products/product-4.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist btn-expandable"
                    >
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  <div className="product-action product-action-dark">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                  </div>
                </figure>
                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product-detail.html">
                      Sony - Alpha a5100 Mirrorless Camera
                    </a>
                  </h3>
                  <div className="product-price">$499.99</div>
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val"></div>
                    </div>
                    <span className="ratings-text">( 11 Reviews )</span>
                  </div>
                </div>
              </div>
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-new">
                    New
                  </span>
                  <a href="product-detail.html">
                    <img
                      src="assets/images/demos/demo-3/products/product-2.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="assets/images/demos/demo-3/products/product-2-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist btn-expandable"
                    >
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  <div className="product-action product-action-dark">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                  </div>
                </figure>
                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product-detail.html">
                      Apple - Apple Watch Series 3 with White Sport Band
                    </a>
                  </h3>
                  <div className="product-price">$214.99</div>
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val"></div>
                    </div>
                    <span className="ratings-text">( 0 Reviews )</span>
                  </div>
                </div>
              </div>
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product-detail.html">
                    <img
                      src="assets/images/demos/demo-3/products/product-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist btn-expandable"
                    >
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  <div className="product-action product-action-dark">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                  </div>
                </figure>
                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product-detail.html">
                      GoPro - HERO7 Black HD Waterproof Action
                    </a>
                  </h3>
                  <div className="product-price">$349.99</div>
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val"></div>
                    </div>
                    <span className="ratings-text">( 2 Reviews )</span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default page;
