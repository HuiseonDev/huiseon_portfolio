import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import useScrollObserver from "@/hooks/useScrollObserver";
import { useRef } from "react";

const Layout = () => {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const isScrolled = useScrollObserver(sentinelRef);
  return (
    <div>
      <Header isScrolled={isScrolled} />
      <div ref={sentinelRef} style={{ height: "1px" }} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
