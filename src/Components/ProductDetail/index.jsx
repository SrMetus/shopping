export const ProductDetail = () => {
  return (
    <aside className="top-[68px] w-[360px] h-[calc(100vh-68px)] flex flex-col fixed right-0 border border-black rounded-lg bg-white right-0.5">
      <div className="flex justify-between items-center p-3">
        <h2 className="text-xl font-medium">Product Details</h2>
        <button className="text-sm text-gray-500 hover:text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </aside>
  );
};
