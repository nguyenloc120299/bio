import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="h-bg">
        <div className="bg-0" />
        <div className="bg-1">
          <div className="bg">
            <div />
          </div>
        </div>
        <div className="bg-2" />
      </div>

      <nav className="navbar">
        <div className="container">
          <a className="navbar-brand" href="/">
            Speed Page
          </a>
          <button
            className="navbar-toggler"
            data-target="#my-nav"
            data-toggle="collapse"
          >
            <span className="bar1" /> <span className="bar2" />
            <span className="bar3" />
          </button>

          {/* ---class='collapse navbar-collapse' */}
          <div id="my-nav" className=" navbar-collapse"> 
            <ul className="navbar-nav">
              {/* <li className="nav-item">
                <a
                  className="nav-link"
                  href="/login/?utm_source=linkbio&utm_medium=nav"
                >
                  Log in
                </a>
              </li> */}
              <li className="nav-item">
                <a
                  className="nav-link signup bg--shadow-41"
                  href="/signup/?utm_source=linkbio&utm_medium=nav"
                >
                  Get Start
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="header">
        <div className="container flex">
          <div className="flex50 left">
            <div className="intro">
              <h1>
                Link In Bio <span className="bg--block-bottom">Best Tool</span>
              </h1>
              <h4>
                All-in-one link marketing solution to get more fans, increase
                streams, and grow your sales.
              </h4>
              <div className="intro-start">
                <p>
                  <span>linkbio.site</span>/
                  <span className="register-input">yourname</span>
                  <span className="cursor--blinking">|</span>{" "}
                  <a href="/signup/?utm_source=linkbio&utm_medium=basttool">
                    Get started
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="flex50 right">
            <div className="intro">
              <div className="header-image">
                <div className="header-image-bg" />
                <div className="header-img1 header-img1-0">
                  <div className="header-img1-bg">
                    <img
                      className="header-img1-bg-0"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/header-thm0.png"
                      alt=""
                    />
                  </div>
                  <figure className="header-animate ">
                    <img
                      className="animate-tiktok"
                      src="https://bio.linkcdn.cc/instabio.cc/www/header-store.png"
                    />
                    <img
                      className="animate-shopee"
                      src="https://bio.linkcdn.cc/instabio.cc/www/header-shopee.png"
                    />
                    <img
                      className="animate-twitter"
                      src="https://bio.linkcdn.cc/instabio.cc/www/header-wish.png"
                    />
                  </figure>
                </div>
                <div className="header-img1 header-img1-1 fadeInOut">
                  <div className="header-img1-bg">
                    <img
                      className="header-img1-bg-0"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/header-thm0.png"
                      alt=""
                    />
                  </div>
                  <figure className="header-animate ">
                    <img
                      className="animate-bigimg"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/header-shop.png"
                    />
                    <img
                      className="animate-shopee"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/header-earn.png"
                    />
                    <img
                      className="animate-twitter"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/header-shopify.png"
                    />
                  </figure>
                </div>
                <div className="header-img1 header-img1-2 fadeInOut">
                  <div className="header-img1-bg">
                    <img
                      className="header-img1-bg-0"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/header-thm1.png"
                      alt=""
                    />
                  </div>
                  <figure className="header-animate ">
                    <img
                      className="animate-bigimg"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/header-img.png"
                    />
                    <img
                      className="animate-cdown"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/header-countdown.png"
                    />
                    <img
                      className="animate-twitter"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/header-ig.png"
                    />
                  </figure>
                </div>
                <div className="header-img1 header-img1-3 fadeInOut">
                  <div className="header-img1-bg">
                    <img
                      className="header-img1-bg-0"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/header-thm2.png"
                      alt=""
                    />
                  </div>
                  <figure className="header-animate ">
                    <img
                      className="animate-bigimg"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/header-img2.png"
                    />
                    <img
                      className="animate-shopee"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/header-img1.png"
                    />
                    <img
                      className="animate-twitter"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/header-spotify.png"
                    />
                  </figure>
                </div>
                <div className="header-img1 header-img1-4 fadeInOut">
                  <div className="header-img1-bg">
                    <img
                      className="header-img1-bg-0"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/header-thm0.png"
                      alt=""
                    />
                  </div>
                  <figure className="header-animate ">
                    <img
                      className="animate-bigimg"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/header-shop.png"
                    />
                    <img
                      className="animate-shopee"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/header-earn.png"
                    />
                    <img
                      className="animate-twitter"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/header-shopify.png"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="main">
        <div className="container">
          <div className="row flex links">
            <div className="col flex50">
              <div className="intro left">
                <div className="mc-image links-image">
                  <div className="links-image-bg mc-bg--black">
                    <img src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/mc-0.png" />
                  </div>
                  <figure className="links-animate">
                    <img
                      className="links-animate-img1 links-zoomIn"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/mc-0-social.png"
                    />
                    <img
                      className="links-animate-img2 links-zoomIn"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/mc-0-link.png"
                    />
                    <img
                      className="links-animate-img3 links-zoomIn"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/mc-0-anl.png"
                    />
                    <img
                      className="links-animate-img4 links-zoomIn"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/mc-0-case.png"
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="col flex50">
              <div className="intro right">
                <div className="intro-header">
                  <h3>
                    Instant{" "}
                    <span className="bg--block-bottom">Link Creation</span>
                  </h3>
                </div>
                <p className="text">
                  Create your link page in 1 minute. No code, no developers.
                </p>
                <p className="text">
                  Centralize online content. Short, user-friendly links for easy
                  access.
                </p>
                <p className="text">Simplify your online presence now!</p>
                <p className="signup">
                  <a
                    href="/signup/?utm_source=linkbio&utm_medium=instantlink"
                    className="bg--shadow-41"
                  >
                    Get Started &gt;&gt;
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="row flex customise">
            <div className="col flex50">
              <div className="intro left">
                <div className="intro-header">
                  <h3>
                    <span className="bg--block-bottom">
                      Brand Customization
                    </span>
                  </h3>
                </div>
                <p className="text">
                  Effortlessly edit content, customize with sleek templates, and
                  seamlessly showcase your brand using Instabio Theme Editor.
                  Boost your online presence today!
                </p>
                <p className="signup">
                  <a
                    href="/signup/?utm_source=linkbio&utm_medium=brandcust"
                    className="bg--shadow-41"
                  >
                    Get Started &gt;&gt;
                  </a>
                </p>
              </div>
            </div>
            <div className="col flex50">
              <div className="intro right">
                <div className="mc-image customise-image">
                  <div className="customise-image-bg mc-bg--black">
                    <img
                      className=""
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/mc-1.png"
                    />
                  </div>
                  <figure className="customise-animate">
                    <img
                      className="customise-animate-img1 links-zoomIn1"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/mc-1-style.png"
                    />
                    <img
                      className="customise-animate-img2 links-zoomIn1"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/mc-1-theme.png"
                    />
                    <img
                      className="customise-animate-img3 links-zoomIn1"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/mc-1-block.png"
                    />
                    <img
                      className="customise-animate-img4 links-zoomIn1"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/mc-1-color.png"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div className="row flex business">
            <div className="col flex50">
              <div className="intro left">
                <div className="mc-image business-image">
                  <div className="business-image-bg  mc-bg--black">
                    <img
                      className=""
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/mc-2.png"
                    />
                  </div>
                  <figure className="business-animate">
                    <img
                      className="business-animate-img1 fadeInOut_3"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/mc-2-tiktok.png"
                    />
                    <img
                      className="business-animate-img2 fadeInOut_3"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/mc-2-twitch.png"
                    />
                    <img
                      className="business-animate-img3 fadeInOut3"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/mc-2-support.png"
                    />
                    <img
                      className="business-animate-img4 fadeInOut3"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/mc-2-prods.png"
                    />
                    <img
                      className="business-animate-img5 fadeInOut3"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/mc-2-youtube.png"
                    />
                    <img
                      className="business-animate-img6 fadeInOut3"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/mc-2-paypal.png"
                    />
                    <img
                      className="business-animate-img7 fadeInOut3"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/mc-2-chat.png"
                    />
                    <img
                      className="business-animate-img8 fadeInOut3"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/mc-2-stripe.png"
                    />
                    <img
                      className="business-animate-img9 fadeInOut3"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/mc-2-contact.png"
                    />
                    <img
                      className="business-animate-img10 fadeInOut3"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/mc-2-mailchimp.png"
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="col flex50">
              <div className="intro right">
                <div className="intro-header">
                  <h3>
                    Grow <span className="bg--block-bottom">your business</span>
                  </h3>
                </div>
                <p className="text">
                  Integrate TikTok Shop, enhance payments, add contact info,
                  boost leads with chat, and grow YouTube subscribers. Elevate
                  your success now!
                </p>
                <p className="signup">
                  <a
                    href="/signup/?utm_source=linkbio&utm_medium=business"
                    className="bg--shadow-41"
                  >
                    Get Started &gt;&gt;
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="row flex traffic">
            <div className="col flex50">
              <div className="intro left">
                <div className="intro-header">
                  <h3>
                    <span className="bg--block-bottom">
                      Empowered Marketing
                    </span>
                  </h3>
                </div>
                <p className="text">
                  Harness data-driven insights to captivate and retain your
                  audience. With real-time tracking, you will make informed
                  updates and enjoy unrivaled engagement.
                </p>
                <p className="signup">
                  <a
                    href="/signup/?utm_source=linkbio&utm_medium=market"
                    className="bg--shadow-41"
                  >
                    Get Started &gt;&gt;
                  </a>
                </p>
              </div>
            </div>
            <div className="col flex50">
              <div className="intro right">
                <div className="mc-image traffic-image">
                  <div className="traffic-image-bg mc-bg--black">
                    <img
                      className=""
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/mc-3.png"
                    />
                  </div>
                  <figure className="traffic-animate">
                    <img
                      className="traffic-animate-img1"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/mc-3-mobile.png"
                    />
                    <img
                      className="traffic-animate-img2"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/mc-3-twitch.png"
                    />
                    <img
                      className="traffic-animate-img3"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/mc-3-ga.png"
                    />
                    <img
                      className="traffic-animate-img4 links-zoomIn1"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/mc-3-total.png"
                    />
                    <img
                      className="traffic-animate-img5 links-zoomIn1"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/mc-3-pc.png"
                    />
                    <img
                      className="traffic-animate-img6 links-zoomIn1"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/mc-3-pv.png"
                    />
                    <img
                      className="traffic-animate-img7 links-zoomIn1"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/mc-3-sf.png"
                    />
                    <img
                      className="traffic-animate-img8 links-zoomIn1"
                      src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/mc-3-snap.png"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div className="row cases" style={{ display: "none" }}>
            <div className="cases-title">
              <h6>Let is work together</h6>
              <h1>Instabio is a perfect fit for the industry</h1>
            </div>
            <div className="cases-list">
              <div className="owl-carousel-case owl-carousel owl-theme owl-loaded">
                <div className="owl-stage-outer">
                  <div className="owl-stage" />
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <div className="main-box">
          <div className="spotlight">
            <div className="container">
              <h1>What our customers say about us</h1>
              <div className="spotlight-reviews">
                <ul>
                  <li className="" tabIndex={-1} data-idx={0}>
                    <div className="reviews-item">
                      <div className="reviews-info flex">
                        <div className="reviews-avatar flex">
                          <img
                            src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/fiona.png"
                            alt="Fiona"
                          />
                        </div>
                        <div className="reviews-position">
                          <p className="reviews-name">Fiona</p>
                          <p>Seller</p>
                        </div>
                      </div>
                      <div className="reviews-txt">
                        <p>
                          ƠI love this app; it is great and handy when your
                          customers want to get in touch or simply click a link
                          to view your products or services.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="" tabIndex={-1} data-idx={1}>
                    <div className="reviews-item">
                      <div className="reviews-info flex">
                        <div className="reviews-avatar flex">
                          <img
                            src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/john.png"
                            alt="John"
                          />
                        </div>
                        <div className="reviews-position">
                          <p className="reviews-name">John</p>
                          <p>Designer</p>
                        </div>
                      </div>
                      <div className="reviews-txt">
                        <p>
                          The intuitive design and user-friendly interface
                          ensure that even new users can navigate the app with
                          ease.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="" tabIndex={-1} data-idx={2}>
                    <div className="reviews-item">
                      <div className="reviews-info flex">
                        <div className="reviews-avatar flex">
                          <img
                            src="https://bio.linkcdn.cc/instabio.cc/www/GiorgioCaniglia.png"
                            alt="Giorgio Caniglia"
                          />
                        </div>
                        <div className="reviews-position">
                          <p className="reviews-name">Giorgio Caniglia</p>
                          <p>Marketing Director</p>
                        </div>
                      </div>
                      <div className="reviews-txt">
                        <p>
                          The responsive customer support team is always ready
                          to assist, making the overall experience even better.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="" tabIndex={-1} data-idx={3}>
                    <div className="reviews-item">
                      <div className="reviews-info flex">
                        <div className="reviews-avatar flex">
                          <img
                            src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/michael-turner.png"
                            alt="Michael Turner"
                          />
                        </div>
                        <div className="reviews-position">
                          <p className="reviews-name">Michael Turner</p>
                          <p>Artist</p>
                        </div>
                      </div>
                      <div className="reviews-txt">
                        <p>
                          I have never used a better Linkbio tool for my music.
                          Its extensive features perfectly cater to my needs.
                          Highly recommended!
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="" tabIndex={-1} data-idx={4}>
                    <div className="reviews-item">
                      <div className="reviews-info flex">
                        <div className="reviews-avatar flex">
                          <img
                            src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/jason-lee.png"
                            alt="Jason Lee"
                          />
                        </div>
                        <div className="reviews-position">
                          <p className="reviews-name">Jason Lee</p>
                          <p>Content Creator</p>
                        </div>
                      </div>
                      <div className="reviews-txt">
                        <p>
                          I am a content creator, loves the high level of
                          customization options that allow me to tailor the app
                          to my unique requirements.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="" tabIndex={-1} data-idx={5}>
                    <div className="reviews-item">
                      <div className="reviews-info flex">
                        <div className="reviews-avatar flex">
                          <img
                            src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/sarah.png"
                            alt="Sarah"
                          />
                        </div>
                        <div className="reviews-position">
                          <p className="reviews-name">Sarah</p>
                          <p>Sales Executive</p>
                        </div>
                      </div>
                      <div className="reviews-txt">
                        <p>
                          The app is features have boosted my sales strategies,
                          making my job smoother and more successful.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="main-box index-bottom">
          <div className="container ">
            <div className="bottom-faqs">
              <div className="bottom-faqs--title">FAQ</div>
              <div className="bottom-faqs--list">
                <div className="bottom-faqs--item closed">
                  <div className="faqs-item--top">
                    <div className="faqs-item--title">What is Instabio?</div>
                    <button className="faqs-item--action">
                      <span />
                      <span />
                    </button>
                  </div>
                  <div className="faqs-item--txt">
                    <p>
                      Instabio is a linking tool that lets you show everything
                      you are sharing in one place. You can add the Instabio link
                      to your social media bios and your fans can visit your
                      link page to learn everything about you. An all-in-one
                      link marketing solution to get more fans, increase
                      streams, and grow your sales.
                    </p>
                  </div>
                </div>
                <div className="bottom-faqs--item closed">
                  <div className="faqs-item--top">
                    <div className="faqs-item--title">
                      Why should I use Instabio?
                    </div>
                    <button className="faqs-item--action">
                      <span />
                      <span />
                    </button>
                  </div>
                  <div className="faqs-item--txt">
                    <p>
                      Instabio fits perfectly across all industries. Sellers can
                      promote products, website to get more leads and sales;
                      Musicians can share music, events, tickets to reach more
                      listeners; Creators can share their latest work and set up
                      a Support me feature to get your fans to support your
                      work. It helps you get more viewers, subscribers,
                      followers and engagement on all your social platforms.
                    </p>
                  </div>
                </div>
                <div className="bottom-faqs--item closed">
                  <div className="faqs-item--top">
                    <div className="faqs-item--title">
                      Can I add multiple links to my Instabio?
                    </div>
                    <button className="faqs-item--action">
                      <span />
                      <span />
                    </button>
                  </div>
                  <div className="faqs-item--txt">
                    <p>
                      2 link pages for free users and 10 link pages for Pro
                      users. Premium users have unlimited link pages. There is
                      no limit to the content of each link page and an unlimited
                      number of links can be added.
                      <br />
                      We recommend having 3-7 links on your link page at a time.
                      This makes it easy for your followers to find all of your
                      content, products, and services. Including too many
                      options may slow them down.
                    </p>
                  </div>
                </div>
                <div className="bottom-faqs--item closed">
                  <div className="faqs-item--top">
                    <div className="faqs-item--title">
                      Where can I use my Instabio link to drive more traffic?
                    </div>
                    <button className="faqs-item--action">
                      <span />
                      <span />
                    </button>
                  </div>
                  <div className="faqs-item--txt">
                    <p>
                      Add the Instabio link to your profile or bio section on
                      any social platform or at the top of your other social
                      media pages to make it easy for all of your followers to
                      see and engage with your most important content. If you
                      send out an email list, you can include your Instabio link
                      so your subscribers can find more of your content. You can
                      even use QR codes to drive more traffic offline.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div> */}
      </div>
      <footer className="footer">
  <div className="company-box">
    <div className="company">
      <hr className="company-hr-top" />
      <div className="company-linkbio flex">
        <div className="company-linkbio--logo flex30">
          <div className="footer-logo">Instabio - Linkbio</div>
          <div className="footer-intro--txt">
            All-in-one link marketing solution to get more fans, increase
            streams, and grow your sales.
          </div>
        </div>
        <div className="company-linkbio--links flex70 flex">
          <ul className="footer-intro">
            <li>Solutions</li>
            <li>
              <a href="/prom/solutions/?utm_source=linkbio&utm_medium=footer#store">
                Store
              </a>
            </li>
            <li>
              <a href="/prom/solutions/?utm_source=linkbio&utm_medium=footer#music">
                Music
              </a>
            </li>
            <li>
              <a href="/prom/solutions/?utm_source=linkbio&utm_medium=footer#business">
                Business
              </a>
            </li>
            <li>
              <a href="/prom/solutions/?utm_source=linkbio&utm_medium=footer#fitness">
                Health &amp; Fitness
              </a>
            </li>
            <li>
              <a href="/prom/solutions/?utm_source=linkbio&utm_medium=footer#creative">
                Creative
              </a>
            </li>
            <li>
              <a href="/prom/solutions/?utm_source=linkbio&utm_medium=footer#food">
                Restaurant &amp; Food
              </a>
            </li>
            <li>
              <a href="/prom/solutions/?utm_source=linkbio&utm_medium=footer#creator">
                Creator &amp; Influencer
              </a>
            </li>
          </ul>
          <ul className="footer-intro">
            <li>Explore</li>
            <li>
              <a href="/prom/link-types/?utm_source=linkbio&utm_medium=linktypes">
                Link Types
              </a>
            </li>
            <li>
              <a href="/prom/explore/?utm_source=linkbio&utm_medium=explore">
                Inspirations
              </a>
            </li>
            <li>
              <a href="/prom/price/?utm_source=linkbio&utm_medium=price">
                Price &amp; Plan
              </a>
            </li>
          </ul>
          <ul className="footer-intro">
            <li>Company</li>
            <li>
              <a
                target="_blank"
                href="https://help.instabio.cc/?utm_source=linkbio&utm_medium=help"
              >
                Help center
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="/prom/report/?utm_source=linkbio&utm_medium=report"
              >
                Report a violation
              </a>
            </li>
          </ul>
          <ul className="footer-intro">
            <li>Legal</li>
            <li>
              <a
                target="_blank"
                href="/legal/privacy/?utm_source=linkbio&utm_medium=privacy"
              >
                Privacy policy
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="/legal/service/?utm_source=linkbio&utm_medium=terms"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="/legal/gdpr-form/?utm_source=linkbio&utm_medium=gdpr"
              >
                GDPR Request form
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="company-intro flex">
        <div className="flex30">
          <ul className="footer-language">
            <li>
              <a className="nav_menu nav_lang">
                <i className="more"> English</i>
                <ul className="nav_lang-list hidden">
                  <li
                    className="nav_lang-item lang-en langactive"
                    data-value="en"
                  >
                    <span /> <span>English</span>
                  </li>
                  <li className="nav_lang-item lang-pt" data-value="pt">
                    <span /> <span>Português</span>
                  </li>
                  <li className="nav_lang-item lang-id" data-value="id">
                    <span /> <span>Bahasa Indonesia</span>
                  </li>
                  <li className="nav_lang-item lang-ko" data-value="ko">
                    <span /> <span>한국어</span>
                  </li>
                  <li className="nav_lang-item lang-ja" data-value="ja">
                    <span /> <span>日本語</span>
                  </li>
                  <li className="nav_lang-item lang-de" data-value="de">
                    <span /> <span>Deutsch</span>
                  </li>
                  <li className="nav_lang-item lang-fr" data-value="fr">
                    <span /> <span>Français</span>
                  </li>
                  <li className="nav_lang-item lang-es" data-value="es">
                    <span /> <span>Español</span>
                  </li>
                  <li className="nav_lang-item lang-it" data-value="it">
                    <span /> <span>Italiano</span>
                  </li>
                  <li
                    className="nav_lang-item lang-zh-hant"
                    data-value="zh-hant"
                  >
                    <span /> <span>繁體中文</span>
                  </li>
                  <li className="nav_lang-item lang-zh" data-value="zh">
                    <span /> <span>简体中文</span>
                  </li>
                  <li className="nav_lang-item lang-ru" data-value="ru">
                    <span /> <span>Pусский</span>
                  </li>
                  <li className="nav_lang-item lang-ar" data-value="ar">
                    <span /> <span>العربية</span>
                  </li>
                  <li className="nav_lang-item lang-vi" data-value="vi">
                    <span /> <span>Tiếng Việt</span>
                  </li>
                  <li className="nav_lang-item lang-th" data-value="th">
                    <span /> <span>ภาษาไทย</span>
                  </li>
                  <li className="nav_lang-item lang-da" data-value="da">
                    <span /> <span>Dansk</span>
                  </li>
                  <li className="nav_lang-item lang-no" data-value="no">
                    <span /> <span>norsk</span>
                  </li>
                  <li className="nav_lang-item lang-cs" data-value="cs">
                    <span /> <span>čeština</span>
                  </li>
                  <li className="nav_lang-item lang-tr" data-value="tr">
                    <span /> <span>Türkçe</span>
                  </li>
                  <li className="nav_lang-item lang-sv" data-value="sv">
                    <span /> <span>Swedish</span>
                  </li>
                  <li className="nav_lang-item lang-uk" data-value="uk">
                    <span /> <span>Українська</span>
                  </li>
                  <li className="nav_lang-item lang-nl" data-value="nl">
                    <span /> <span>Nederlands</span>
                  </li>
                  <li className="nav_lang-item lang-ms" data-value="ms">
                    <span /> <span>Bahasa Melayu</span>
                  </li>
                  <li className="nav_lang-item lang-hi" data-value="hi">
                    <span /> <span>Hindī</span>
                  </li>
                </ul>
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="flex70">
          <ul className="flex footer-social">
            <li>
              <a
                href="https://apps.apple.com/app/apple-store/id1455604586?pt=118696762&ct=InstaBioWebSite&mt=8"
                target="_blank"
              >
                <img src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/appstore.png" />
              </a>
            </li>
            <li>
              <a
                href="https://play.google.com/store/apps/details?id=com.qumai.instabio&referrer=utm_source%3DInstaBioWebsite"
                target="_blank"
              >
                <img src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/googleplay.png" />
              </a>
            </li>
            <li>
              <a
                href="https://instabio.cc/examplelink?utm_source=linkbio&utm_medium=example"
                target="_blank"
              >
                <img src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/linkbio.png" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/linkbio.co/?utm_source=linkbio&utm_medium=instagram"
                target="_blank"
              >
                <img src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/footer-ig.png" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/linkbio.co?utm_source=linkbio&utm_medium=facebook"
                target="_blank"
              >
                <img src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/footer-fb.png" />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@instabioofficial?utm_source=linkbio&utm_medium=tiktok"
                target="_blank"
              >
                <img src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/footer-tt.png" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/linkinbioApp?utm_source=linkbio&utm_medium=twiiter"
                target="_blank"
              >
                <img src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/footer-x.png" />
              </a>
            </li>
            <li>
              <a href="mailto:support@instabio.cc" target="_blank">
                <img src="https://bio.linkcdn.cc/instabio.cc/www/v4.1/footer-email.png" />
              </a>
            </li>
          </ul>
        </div> */}
      </div>
      <div className="company-copy">
        <div className="copyright">
          © 2024 Instabio - Speed Code. All Rights Reserved.
        </div>
      </div>
    </div>
  </div>
</footer>

    </>
  );
};

export default HomePage;
