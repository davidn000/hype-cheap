import WebstieFonts from "@/global-exports/website-fonts";
import { MagnifyingGlassIcon, ShoppingBagIcon, HeartIcon,  UserCircleIcon} from "@heroicons/react/24/outline";

export function TopNavBar() {
    return (
        <>
            <div className="flex flex-row place-items-center w-full mt-12 bg-white py-2">
                {/* Logo / Company Business Name */}
                <div className={`${WebstieFonts.Oswald.className}`}>
                    <h1 className="font-bold uppercase text-5xl italic">Hype<br></br>Cheap</h1>
                </div>
                {/* Search Bar */}
                <div className="mx-12 2xl:mx-56 flex-grow">
                    <div className="relative">
                        <input type="text" placeholder="Search for items, brands, or inspiration" className="block w-full p-4 rounded-xl bg-slate-50"/>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                        </div>
                    </div>
                </div>
                {/* Header icons such as cart, liked, and profile */}
                <div className="w-fill">
                    <div className="flex flex-row place-items-center">
                        <div className="mx-2 relative">
                            {/* <button className="bg-gray-50 p-4 rounded-lg">Cart</button> */}
                            <ShoppingBagIcon className="h-6 w-6 text-gray-400 hover:text-gray-800" />
                            <div id="cart-counter" className="pointer-events-none absolute inset-y-3 -right-1">
                                <span className="text-xs inline-flex rounded-full bg-gray-400 px-1 text-gray-50">4</span>
                            </div>
                        </div>
                        <div className="mx-2">
                            {/* <button className="bg-gray-50 p-4 rounded-lg">Liked</button> */}
                            <HeartIcon className="h-6 w-6 text-gray-400 hover:text-red-600" />
                        </div>
                        <div className="mx-2">
                            {/* <button className="bg-gray-50 p-4 rounded-lg">Profile</button> */}
                            <UserCircleIcon className="h-6 w-6 text-gray-400 hover:text-gray-800" />
                        </div>
                    </div>
                </div>
            </div>
        </>);
}