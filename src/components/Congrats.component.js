import React, { useEffect } from "react";
import balloons from "../img/balloons.svg";
import error from "../img/error.svg";
import confetti from "canvas-confetti";

const Congrats = ({ loading }) => {
  useEffect(() => {
    if (loading === "success") {
      let end = Date.now() + 1 * 1000;

      // go Buckeyes!
      let colors = ["#f6a01f", "#ffffff"];

      (function frame() {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 50,
          origin: { x: 0, y: 1 },
          colors: colors,
        });
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 50,
          origin: { x: 1, y: 1 },
          colors: colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }
  }, [loading]);

  return (
    <>
      {loading === false ? null : (
        <div className="congrats">
          <div className="congrats-holder">
            <div>
              {loading === true ? (
                <>
                  <div className="loader"></div>
                </>
              ) : loading === "success" ? (
                <>
                  <img src={balloons} alt="balloons" />
                  <h2>Submitted!</h2>
                </>
              ) : loading === "error" ? (
                <>
                  <img src={error} alt="error" />
                  <h2>Error!</h2>
                </>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Congrats;
