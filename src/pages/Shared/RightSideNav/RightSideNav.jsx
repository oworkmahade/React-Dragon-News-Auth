const RightSideNav = () => {
  return (
    <div className="p-4 border-2 border-gray-600">
      <div className="p-4 border border-green-600 border-1 login-with">
        <h2>Login With</h2>
        <div className="flex flex-col items-start justify-center gap-4">
          <button className="w-full btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            Button
          </button>
          <button className="w-full btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            Button
          </button>
        </div>
      </div>
      <div className="p-4 mt-4 border border-red-600">
        <h2>Find Us On</h2>
      </div>
    </div>
  );
};

export default RightSideNav;
