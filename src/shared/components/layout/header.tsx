import Image from "next/image";
import Link from "next/link";

import { menuItems } from "@/shared/constants/menu-constant";
import { MenuItem, ModeToggle } from "../common";
import { IconArrowRight, IconCart, IconPhone, IconSearch } from "../icons";

const Header = () => {
  return (
    <header className="w-full">
      <div className="font-light text-2xl leading-2.5 tracking-normal text-gray-dark mb-0.5 py-4 px-0 border-b border-gray-200 dark:border-gray-700">
        <div className="container flex items-center justify-between ">
          <div className="flex-none w-[calc((100% + 20px)/4)] max-w-[calc((100% + 20px)/4)] m-0">
            <a
              href="tel:0989596912"
              className="text-sm flex items-center gap-2 transition-all hover:text-primary"
            >
              <IconPhone className="size-4" />
              <span>Hotline: 098 9596 912</span>
            </a>
          </div>
          <div className="mt-auto flex items-center justify-end gap-5">
            <ModeToggle />
          </div>
          {/* <div className="flex items-center self-stretch ml-auto"> */}
          {/* <!-- Not LogIn - */}
          {/* <ul className="flex items-center self-stretch relative">
              <li className="flex items-center self-stretch pr-[2.2rem] relative">
                <a
                  href="#signin-modal"
                  data-toggle="modal"
                  className="px-0 flex text-sm"
                >
                  <i className="icon-user"></i>
                  <span className="flex">Login | Resgister </span>
                </a>
              </li>
            </ul> */}

          {/* <!-- Logged In --> */}
          {/* <ul className="top-menu">
                            <li>
                                <a href="#" className="top-link-menu"><i className="icon-user"></i>Tran Nghia </a>
                                <ul>
                                    <li>
                                        <ul>
                                            <li><a href="dashboard.html">Account Details</a></li>
                                            <li><a href="dashboard.html">Your Orders</a></li>
                                            <li><a href="dashboard.html">Wishlist <span>(3)</span></a></li>
                                            <li><a href="#">Sign Out</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>  */}
          {/* </div> */}
        </div>
      </div>

      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="w-[1188px] max-w-full px-2.5 xl:max-w-[1200px] mx-auto flex items-center relative justify-between">
          <div className="">
            {/* <button className="mobile-menu-toggler">
              <span className="sr-only">Toggle mobile menu</span>
              <i className="icon-bars"></i>
            </button> */}
            <Link href="/" className="">
              <img src="/techzone-logo.svg" alt="logo" />
            </Link>
          </div>
          <nav className="hidden lg:block">
            <ul className="flex items-center">
              {menuItems.map((item) => (
                <MenuItem
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  url={item.url}
                />
              ))}
              {/* <li className="relative block">
                <a
                  href="index.html"
                  className="text-sm font-semibold uppercase py-5 px-3 hover:text-primary transition-all block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="about.html"
                  className="text-sm font-semibold uppercase hover:text-primary py-5 px-3 transition-all block"
                >
                  About Us
                </a>
              </li>
              <li>
                <Link
                  href="/product"
                  className="text-sm font-semibold uppercase py-5 px-3 hover:text-primary transition-all block"
                >
                  Product
                </Link>
              </li>
              <li>
                <a
                  href="blog.html"
                  className="text-sm font-semibold uppercase py-5 px-3 hover:text-primary transition-all block"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="contact.html"
                  className="text-sm font-semibold uppercase py-5 px-3 hover:text-primary transition-all block"
                >
                  Contact Us
                </a>
              </li> */}
            </ul>
          </nav>
          <div className="flex items-center gap-6">
            <div className="header-search">
              <a
                href="#"
                className="search-toggle hover:text-primary"
                title="Search"
              >
                <IconSearch className="size-6" />
              </a>
              {/* <form action="#" method="get">
                <div className="header-search-wrapper">
                  <label htmlFor="q" className="sr-only">
                    Search
                  </label>
                  <input
                    type="search"
                    className="form-control"
                    name="q"
                    id="q"
                    placeholder="Search in..."
                    required
                  />
                </div>
              </form> */}
            </div>
            <div className="flex items-center dropdown cart-dropdown group relative self-stretch">
              <Link href="#" className="flex items-center hover:text-primary">
                <IconCart className="size-6" />
                <span className="flex items-center justify-center size-5 rounded-full font-semibold text-white bg-primary text-xs ml-2">
                  2
                </span>
              </Link>
              <div className="dropdown-menu w-[300px] block absolute right-0 pt-2 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 p-5 top-full z-50">
                <div className="dropdown-cart-products">
                  <div className="flex items-center border-b mt-2">
                    <div className="product-cart-details">
                      <h4 className="font-semibold text-sm leading-5">
                        <a href="product-detail.html">
                          Beige knitted elastic runner shoes
                        </a>
                      </h4>
                      <span className="font-normal text-gray-400 text-sm">
                        <span className="cart-product-qty">1</span> x $84.00{" "}
                      </span>
                    </div>
                    <figure className="product-image-container">
                      <a
                        href="product-detail.html"
                        className="block w-full h-auto"
                      >
                        <Image
                          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="product"
                          width={100}
                          height={100}
                        />
                      </a>
                    </figure>
                    <a href="#" className="" title="Remove Product">
                      <i className="icon-close"></i>
                    </a>
                  </div>
                  <div className="flex items-center border-b mt-2">
                    <div className="product-cart-details">
                      <h4 className="font-semibold text-sm leading-5">
                        <a href="product-detail.html">
                          Beige knitted elastic runner shoes
                        </a>
                      </h4>
                      <span className="font-normal text-gray-400 text-sm">
                        <span className="cart-product-qty">1</span> x $84.00{" "}
                      </span>
                    </div>
                    <figure className="product-image-container">
                      <a
                        href="product-detail.html"
                        className="block w-full h-auto"
                      >
                        <Image
                          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="product"
                          width={100}
                          height={100}
                        />
                      </a>
                    </figure>
                    <a href="#" className="btn-remove" title="Remove Product">
                      <i className="icon-close"></i>
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2 pb-3 text-lg font-bold text-primary">
                  <span className="uppercase">Total</span>
                  <span>$160.00</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <a
                    href="cart.html"
                    className="flex items-center justify-center text-center px-5 py-2 font-semibold text-sm leading-[1.5] tracking-[-0.01em] rounded-none whitespace-normal transition-all duration-300 bg-primary text-white w-full"
                  >
                    View Cart
                  </a>
                  <a
                    href="checkout.html"
                    className="flex items-center justify-center text-center px-5 py-2 font-semibold text-sm leading-[1.5] tracking-[-0.01em] rounded-none whitespace-normal transition-all duration-300 bg-primary text-white w-full gap-2"
                  >
                    <span>Checkout</span>
                    <IconArrowRight className="size-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
