import React, { useEffect } from "react";

function Redirect() {
  useEffect(() => {
    window.location.href = "https://google.com";
  }, []);

  return (
    <div>
      <h2>Contact</h2>
    </div>
  );
}

export default Redirect;
