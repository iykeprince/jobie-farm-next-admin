import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuth } from "../contexts/auth.context";
import Carts from "../components/Carts/Carts";

const Header: React.FC<any> = () => {
  const { signOut, loading, authUser } = useAuth();
  const router = useRouter();

  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const showLoginDialog = () => setShowLogin(true);
  const showSignUpDialog = () => setShowSignUp(true);

  const handleCloseLoginDialog = () => setShowLogin(false);
  const handleCloseSignupDialog = () => setShowSignUp(false);

  const logout = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <>
      <div className="search-input">
        <div className="search-close">
          <i className="icofont-close-circled"></i>
        </div>
        <form>
          <input type="text" name="text" placeholder="Search Heare" />
          <button className="search-btn" type="submit">
            <i className="icofont-search-2"></i>
          </button>
        </form>
      </div>
      {/*  */}

      {/*  */}
      <div className="mobile-menu transparent-header">
        <nav className="mobile-header">
          <div className="header-logo">
            <a href="index.html">
              <Image
                src="/assets/jobie-agro-logo.png"
                alt="logo"
                width={250}
                height={100}
              />
            </a>
          </div>
          <div className="header-bar">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
        <nav className="mobile-menu">
          <div className="mobile-menu-area">
            <div className="mobile-menu-area-inner">
              <ul className="lab-ul">
                <li className="active">
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                {authUser && (
                  <li>
                    <Link href="/user">My Profile</Link>
                  </li>
                )}
                {authUser && (
                  <li>
                    <a href="/user/orders">Orders</a>
                  </li>
                )}
                {authUser && (
                  <li>
                    <a href="/user/transactions">Transactions</a>
                  </li>
                )}
                {authUser && (
                  <li onClick={logout}>
                    <a href="#">Logout</a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/*  */}
      {/*  */}
      <header className="header-section">
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-3 col-12">
                <div className="logo py-2">
                  <Link href="/">
                    <Image
                      width={250}
                      height={100}
                      src="/assets/jobie-agro-logo.png"
                      alt="logo"
                      style={{ width: "250px" }}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-9 col-12">
                <div className="ht-left">
                  <ul className="lab-ul d-flex flex-wrap justify-content-end">
                    <li className="d-flex flex-wrap align-items-center">
                      <div className="ht-add-thumb mr-2">
                        <Image
                          width={30}
                          height={30}
                          src="/assets/images/header/01.png"
                          alt="address"
                        />
                      </div>
                      <div className="ht-add-content">
                        <span>4 Oriokuku Street,</span>
                        <span className="d-block text-bold">
                          Glass industry road Aba Abia state.
                        </span>
                      </div>
                    </li>
                    <li className="d-flex flex-wrap align-items-center">
                      <div className="ht-add-thumb mr-2">
                        <Image
                          width={30}
                          height={30}
                          src="/assets/images/header/02.png"
                          alt="email"
                        />
                      </div>
                      <div className="ht-add-content">
                        <span>Send Mail </span>
                        <span className="d-block text-bold">
                          hello@jobieagrofarm.com
                        </span>
                      </div>
                    </li>
                    <li className="d-flex flex-wrap align-items-center">
                      <div className="ht-add-thumb mr-2">
                        <Image
                          width={30}
                          height={30}
                          src="/assets/images/header/03.png"
                          alt="call"
                        />
                      </div>
                      <div className="ht-add-content">
                        <span>Make Call </span>
                        <span className="d-block text-bold">
                          +234(0)7088479448
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom bg-theme">
          <div className="header-area">
            <div className="container">
              <div className="primary-menu">
                <div className="main-area w-100">
                  <div className="main-menu d-flex flex-wrap align-items-center justify-content-between w-100">
                    <div className="logo">
                      <Link href="/">
                        <Image
                          width={250}
                          height={250}
                          src="/assets/jobie-agro-logo.png"
                          alt="logo"
                          style={{ width: "250px" }}
                        />
                      </Link>
                    </div>
                    <ul className="lab-ul">
                      <li className="active">
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/about">About</Link>
                      </li>

                      <li>
                        <Link href="/shop" legacyBehavior>
                          <a>Shop</a>
                        </Link>
                      </li>

                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                    {!authUser && (
                      <ul className="lab-ul ml-auto">
                        <li>
                          <Link href="/signup">Sign Up</Link>
                        </li>
                        <li>
                          <Link href="/login">Login</Link>
                        </li>
                      </ul>
                    )}
                    {authUser && (
                      <ul className="lab-ul ml-auto">
                        <li>
                          <Link legacyBehavior href="/user">
                            <a>My profile</a>
                          </Link>
                        </li>
                        <li>
                          <a onClick={logout}>Logout</a>
                        </li>
                      </ul>
                    )}
                    <Carts />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
