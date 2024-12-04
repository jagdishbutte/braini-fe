export function LogoIcon() {
  return (
    <div className="flex items-center space-x-2">
      <div className="bg-gradient-to-r from-purple-800 to-blue-500 text-zinc-50 p-2 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0v4m0 0H8m4 0h4m-6 4a4 4 0 118 0 4 4 0 11-8 0zm0 6h.01"
          />
        </svg>
      </div>

      <div className="text-3xl font-bold text-gray-500">
        Brain<span className="text-blue-600">-I</span>
      </div>
    </div>
  );
}
