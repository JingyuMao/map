export default function PopupScreen() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md overflow-hidden rounded-3xl shadow-2xl bg-white">
        {/* Top Image */}
        <div className="h-56 w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
            alt="Popup Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Content */}
        <div className="bg-[#FAFAFA] px-6 py-5 flex items-start gap-4">
          {/* Icon */}
          <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-7 h-7 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6l4 2"
              />
            </svg>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-xl font-semibold text-[#ae8f5b] mb-2" style={{ fontFamily: 'Akkurat, sans-serif' }}>
              Exclusive Journey
            </h2>
            <p className="text-sm leading-6 text-gray-600">
              Discover immersive experiences curated for modern travelers.
              Enjoy seamless luxury, breathtaking destinations, and unforgettable moments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
