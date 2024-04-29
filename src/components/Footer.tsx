import { Separator } from "./ui/separator"

const Footer = () => {
    return (
      <section className="font-light text-sm text-[#444240] py-4">
      <Separator className="my-4 w-full" />
        <div className='footer-copyright'>
            <p className='items-center'>Copyright © 2024 - All rights reserved</p>
        </div>
      </section>
    );
  };
  
  export default Footer;