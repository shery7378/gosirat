import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#f3f7f4] to-white px-6 font-[Inter]">
      <div className="text-center">
        {/* Animated 404 Text */}
        <h1 className="font-[Inter] font-semibold text-[64px] leading-[100%] tracking-[0px] text-center text-[#0c140f] drop-shadow-sm mq450:text-[80px]">
          404
        </h1>
        
        {/* Subheading */}
        <h2 className="mt-4 text-3xl font-bold text-[#101828] tracking-tight mq450:text-2xl">
          Oops! Page not found.
        </h2>
        
        {/* Description */}
        <p className="mt-4 text-lg text-gray-500 max-w-md mx-auto leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Action Button */}
        <div className="mt-10 flex justify-center gap-4">
          <Link 
            href="/" 
            className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 bg-[#176938] border border-transparent rounded-xl hover:bg-[#11532c] hover:shadow-[0_4px_20px_rgba(23,105,56,0.25)] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#176938]"
          >
            <span className="flex items-center gap-2">
              <svg 
                className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Homepage
            </span>
          </Link>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#176938]/5 blur-[120px]" />
        <div className="absolute top-[60%] -right-[10%] w-[40%] h-[40%] rounded-full bg-[#176938]/5 blur-[100px]" />
      </div>
    </div>
  );
}
