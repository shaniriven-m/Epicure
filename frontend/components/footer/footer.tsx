
import FooterLinks from "./footer-links"
import StoreButtons from "./store-buttons"
import FooterLogo from "./footer-logo"
import FooterAbout from "./footer-about";


export default function Footer() {
    return (

        <footer className="w-full bg-secondary-300">
            <div className="mx-auto px-5 py-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between md:px-[132px] md:h-[365px]">
                    <div className="flex flex-col md:flex-col-reverse ">
                        <div className="md:hidden">
                            <FooterLogo />
                        </div>
                        <StoreButtons />
                        <FooterAbout />
                    </div>
                    <div className="hidden md:flex md:flex-col md:flex-1 md:items-end md:justify-center md:h-full">
                        <FooterLogo />
                    </div>
                </div>
            </div>
            <FooterLinks />
        </footer>
    );
}
