import React from "react";

function Pop() {
  const [isDisplayed, setIsDisplayed] = React.useState(true);

  if (!isDisplayed) {
    return null; // Don't render anything if not displayed
  }
  return (
    <>
      {isDisplayed && (
        <div className="bg-black">

          <div className="relative max-w-310 mx-auto" >
            <h5 className="text-center bg-black text-white p-1 ">Sign up and get 20% off to your first order.
              <span className="underline">Sign Up Now</span>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" onClick={() => setIsDisplayed(false)}>
                <img src="/img/X.png" alt="" />
              </span>
            </h5>

          </div>
        </div>
      )}
    </>
  )
}

export default Pop
