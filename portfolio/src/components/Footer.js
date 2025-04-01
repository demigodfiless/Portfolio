import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-[#060608] text-white">
        <div className="max-w-screen-xl mx-auto py-12 px-5">
            {/* top section */}
            <div className="flex flex-wrap flex-col md:flex-row justify-between 
                items-center border-b border-gray-700 pb-6">
                {/* top section */}       
                <div className="flex flex-wrap md:space-x-6 gap-4 text-gray teext-sm font-medium">
                    <Link href="#" className="hover:text-white text-lg">Behance</Link>
                    <Link href="#" className="hover:text-white text-lg">LinkedIn</Link>
                    <Link href="#" className="hover:text-white text-lg">Email</Link>
                    <Link href="#" className="hover:text-white text-lg">X</Link>
                    <Link href="#" className="hover:text-white text-lg">Dribble</Link>
                </div>

                {/* contact form */}
                <div className="flex items-center mt-4 md:mt-0">
                    <input type="text" placeholder="Get in Touch" className="bg-gray-800 text-white px-4 py-4 
                    rounded-full focus:outline-none w-64 md:w-80"/>
                </div>
            </div>

            {/* bottom section */}
            <div className="flex flex wrap flex-col gap-4 md:flex-row justify-between items-center mt-5 text-gray-500-text-sm">
                 <div className="flex items-center space-x-2">
                    <div className="w-8 h-0.5 bg-white"></div>
                    <Link href="/" className="text-lg font-semibold">JADE</Link>
                </div>

                <div className="mt-5 md:mt-0 text-center md:text-right">
                    <p>© David Joseph 2025</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer