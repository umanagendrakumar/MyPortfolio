import BottomNavbar from "./BottomNavbar";
const Footer = () => {
    return (
        <footer className="text-center sm:text-lg bg-base-300 text-base-content p-4 sticky bottom-0 flex flex-col">
            <BottomNavbar />
            <aside className=" text-sm hidden sm:block">
                <p>Copyright © 2025 - All right reserved by Kambala Uma Nagendra Kumar</p>
            </aside>
        </footer>
    );
}

export default Footer;