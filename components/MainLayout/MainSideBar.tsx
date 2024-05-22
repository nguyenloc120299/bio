import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MainSideBar = () => {
  return (
    <div className="page_sidebar ">
        <div className="header_logo">
          <Link href="/" className='w-[80px] h-[80px]'>
          <Image
            src={'/assets/images/logo.png'}
            width={80}
            height={80}
            alt=""
          />
            <h2 className='!ml-0'>Speed</h2>
          </Link>
        </div>
        <div className="page-sidebar navbar-collapse">
          <ul className="sidebar-menu">
            <li className="nav-item active">
              <a data-pjax="" href="/back/biohome/" className="nav-link">
                <div className="nav-item__bg clearfix">
                  <i className="iconfont icon-a-mylinks" />
                  <span className="title">My Links</span>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a data-pjax="" href="/back/biotheme/" className="nav-link">
                <div className="nav-item__bg clearfix">
                  <i className="iconfont icon-template" />
                  <span className="title">Template</span>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a data-pjax="" href="/back/mymessage/" className="nav-link">
                <div className="nav-item__bg clearfix">
                  <i className="iconfont icon-message1" />
                  <span className="title">Message</span>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a data-pjax="" href="/back/myshop/" className="nav-link">
                <div className="nav-item__bg clearfix">
                  <i className="iconfont icon-my-shop" />
                  <span className="title">Store</span>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a data-pjax="" href="/back/order/" className="nav-link">
                <div className="nav-item__bg clearfix">
                  <i className="iconfont icon-order" />
                  <span className="title">Order</span>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a data-pjax="" href="/back/add-ons/" className="nav-link">
                <div className="nav-item__bg clearfix">
                  <i className="iconfont icon-tools" />
                  <span className="title">Add-ons</span>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a data-pjax="" href="/back/wallet/" className="nav-link">
                <div className="nav-item__bg clearfix">
                  <i className="iconfont icon-wallet" />
                  <span className="title">My Wallet</span>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a data-pjax="" href="/back/biodomain/" className="nav-link">
                <div className="nav-item__bg clearfix">
                  <i className="iconfont icon-settings1" />
                  <span className="title">Settings</span>
                </div>
              </a>
            </li>
          </ul>
          <div className="sidebar-account">
            <div className="account-box">
              <div className="account-info">
                <div className="account-info__avatar">
                  <img
                    src="https://bio.linkcdn.cc/upload/20240521/09263182892"
                    className="account-info__avatar--img"
                    alt=""
                  />
                </div>
                <div className="account-info__name">Account</div>
                <div className="account-info__icon">
                  <img
                    src="https://bio.linkcdn.cc/instabio.cc/static/images/arrow-square-up.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="account-menu" style={{ display: "none" }}>
                <ul>
                  <li className="menu-item">
                    <a data-pjax="" href="/back/bioaccount/">
                      <div className="menu-item__inner">
                        <i className="iconfont icon-a-myaccount" />
                        <span>My Account</span>
                      </div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a data-pjax="" href="/back/subs/">
                      <div className="menu-item__inner">
                        <i className="iconfont icon-billing" />
                        <span>Billing</span>
                      </div>
                    </a>
                  </li>
                  <li className="menu-item menu-item--feedback">
                    <div className="menu-item__inner">
                      <i className="iconfont icon-feedback" />
                      <span>Feedback</span>
                    </div>
                  </li>
                  <li className="menu-item">
                    <a href="https://help.instabio.cc" target="_blank">
                      <div className="menu-item__inner">
                        <i className="iconfont icon-question" />
                        <span>Help center</span>
                      </div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <div className="menu-item__inner">
                      <i className="iconfont icon-logout2" />
                      <span>Logout</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default MainSideBar