import React from "react";
import UseWindowSize from "./useWindowSize";

function WindowSize() {
  const { width } = UseWindowSize();
  return (
    <>
      <h2>3. Resize the window to see the effect</h2>
      <div className="hook-container">
        {/* visible only when window greater than 500px */}
        {width > 1000 && (
          <>
            <div onClick={() => {}} role="button">
              <span>Testimonials</span>
            </div>
            <div onClick={() => {}} role="button">
              <span>Price</span>
            </div>
            <div>
              <span onClick={() => {}} role="button">
                Question?
              </span>
            </div>
          </>
        )}
        {/* visible at any window size */}
        <div>
          <span className="primary-button" onClick={() => {}} role="button">
            Join Now
          </span>
        </div>
      </div>
    </>
  );
}

export default WindowSize;
