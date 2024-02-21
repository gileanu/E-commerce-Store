import React from "react";

const currnetYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto py-10">
        <p className="text-center test-xs text-black">
          &copy; {currnetYear} [name], [rights] - [terms] [conditions].
        </p>
        <p className="text-center text-xs text-gray-500">
          <a href="https://github.com/gileanu">RR - github.com/gileanu</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
