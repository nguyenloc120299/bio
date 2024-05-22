import Image from "next/image";
import React from "react";

const MainHeader = () => {
  return (
    <div className="page-header">
      <div className="page-header__msg" />
      <div className="page-header__title">Home</div>
      <div className="page-header__toolbar">
        <div className="head-notifications flex">
          <span className="notifs_icon">
            <Image src="/assets/icons/account_inform_icon.webp" alt="" width={20} height={30} />
          </span>
          <div className="head-notifications_box " >
            <div className="notification" style={{ display: "block" }}>
              <div className="top">
                <span>Notification</span>
                <button className="update">Mark as all read</button>
              </div>
              <ul />
            </div>
            {/* <div className="notification_empty" style={{ display: "block" }}>
              <Image
                src="https://bio.linkcdn.cc/instabio.cc/static/images/empty_info.png" width={100} height={100}
                alt=""
              />
              <p>There is no notifications message here.</p>
            </div> */}
          </div>
        </div>
        <a href="javascript:;" className="nav_lang">
          <span className="lang_tit">English</span>
          <i className="iconfont icon-zhankai" />
          <ul className="nav_lang-list">
            <li className="nav_lang-item lang-en langactive" data-value="en">
              <span>English</span>
            </li>
            <li className="nav_lang-item lang-vi" data-value="vi">
              <span>Tiếng Việt</span>
            </li>
          </ul>
        </a>
      </div>
    </div>
  );
};

export default MainHeader;
