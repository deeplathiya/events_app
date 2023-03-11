import React from "react"
import { FooterPage } from '../footer/footer-page';
import { HeaderPage } from '../header/header-page';



const MainLayout = ({ children }) => {
  return (
    <>
        <HeaderPage />
        <main>
            {children}
        </main>
        <FooterPage />
    </>
    
  );
};

export default MainLayout;