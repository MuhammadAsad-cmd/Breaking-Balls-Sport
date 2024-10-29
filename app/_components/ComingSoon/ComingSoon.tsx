import React from "react";

const ComingSoon = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-deepBlue px-4 text-paleOrange">
        <h1 className="mb-4 text-center text-4xl font-bold md:text-5xl">
          Coming Soon!
        </h1>
        <p className="mx-auto mb-8 max-w-[600px] text-center text-lg md:text-xl">
          🚧 Exciting things are on the way! We can't wait to share our journey
          with you.
        </p>
        <div className="flex items-center space-x-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-skyBlue">
            <span className="text-3xl">🚀</span>
          </div>
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-paleOrange">
            <span className="text-3xl">⏳</span>
          </div>
        </div>
        <p className="mt-8 text-lg">Stay tuned for updates!</p>
      </div>
    </>
  );
};

export default ComingSoon;
