import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4 h-[30vh]">
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-sm mb-4 text-center mt-20">
          &copy; {new Date().getFullYear()} All Rights Reserved to Nizam Chowdhury
        </div>

      </div>
    </footer>
  );
};

export default Footer;
