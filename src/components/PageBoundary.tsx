const CLASSES = {
  button:
    "w-full bg-red-500 hover:bg-red-600 text-white font-semibold  py-3 px-4 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-lg transition duration-200 ease-in-out transform hover:scale-[1.02] cursor-pointer",
};

function PageBoundary() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <section className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8 flex items-center justify-center flex-col gap-3">
          <div className="bg-red-100 p-3 rounded-full">
            <svg
              className="w-8 h-8 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-gray-800">
            Oops! Something went wrong
          </h2>

          <p className="text-gray-600 mb-4">An unexpected error occurred</p>

          <button
            onClick={() => window.location.reload()}
            className={CLASSES.button}
          >
            Try Again
          </button>
        </div>
      </section>
    </div>
  );
}

export default PageBoundary;
