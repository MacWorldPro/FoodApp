import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black p-[80px] mt-[30px]">
  <div className="container grid grid-cols-6">
    <div className="flex flex-col space-y-4">
      <h2 className="font-medium text-slate-500">ABOUT</h2>
      <div className="flex flex-col space-y-2 text-sm text-white font-bold">
        <a href="#">Contact Us</a>
        <a href="#">About Us</a>
        <a href="#">Careers</a>
        <a href="#">Flipkart Stories</a>
        <a href="#">Press</a>
        <a href="#">Flipkart Wholesale</a>
        <a href="#">Cleartrip</a>
        <a href="#">Corporate Information</a>
      </div>
    </div>
    <div className="flex flex-col space-y-4">
      <h2 className="font-medium text-slate-500">HELP</h2>
      <div className="flex flex-col space-y-2 text-sm text-white font-bold">
        <a href="#">Payments</a>
        <a href="#">Shipping</a>
        <a href="#">Cancellation &amp; Returns</a>
        <a href="#">FAQ</a>
        <a href="#">Report Infringement</a>
      </div>
    </div>
    <div className="flex flex-col space-y-4">
      <h2 className="font-medium text-slate-500">CONSUMER POLICY</h2>
      <div className="flex flex-col space-y-2 text-sm text-white font-bold">
        <a href="#">Cancellation &amp; Returns</a>
        <a href="#">Terms Of Use</a>
        <a href="#">Security</a>
        <a href="#">Privacy</a>
        <a href="#">Sitemap</a>
        <a href="#">Grievance Redressal</a>
        <a href="#">EPR Compliance</a>
      </div>
    </div>
    <div className="flex flex-col space-y-4 mr-[40px]">
      <h2 className="font-medium text-slate-500">SOCIAL</h2>
      <div className="flex flex-col space-y-2 text-sm text-white font-bold">
        <a href="#">Faccebook</a>
        <a href="#">Twitter</a>
        <a href="#">Youtube</a>
      </div>
    </div>
    <div className="flex flex-col space-y-4">
      <h2 className="font-medium text-slate-500">MAIL Us:</h2>
      <div className="flex flex-col space-y-2 text-sm text-white font-bold">
        <p>
          Flipkart Internet Private Limited, Buildings Alyssa, Begonia &amp;
          Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
          Village, Bengaluru, 560103, Karnataka, India
        </p>
      </div>
    </div>
    <div className="flex flex-col space-y-4">
      <h2 className="font-medium text-slate-500">MAIL Us:</h2>
      <div className="flex flex-col space-y-2 text-sm text-white font-bold">
        <p>
          Flipkart Internet Private Limited, Buildings Alyssa, Begonia &amp;
          Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
          Village, Bengaluru, 560103, Karnataka, India
        </p>
        <p>CIN: U51109KA2012PTC066107</p>
        <p>
          Telephone:<a href="#">044-45614700</a>
        </p>
      </div>
    </div>
  </div>
  <div className="border-t-2 max-w-full mt-10">
    <div className="flex flex-row justify-between text-center text-white">
      <a href="#">Become a Seller</a>
      <a href="#">Advertise</a>
      <a href="#">Gift Cards</a>
      <a href="#">Help Center</a>
      <a href="#">@C 2007-2023 Flipkart.com</a>
    </div>
  </div>
</footer>

  )
}

export default Footer;
