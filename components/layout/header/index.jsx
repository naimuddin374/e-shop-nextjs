import React from "react";

import TopNav from "./top_nav";
import BottomNav from "./bottom_nav";

const Header = () => {
  return (
    <header className="my-[20px]">
      <TopNav />
      <BottomNav />
    </header>
  );
};

export default Header;
