import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function LogIn(props) {
  const [isDisable, setIsDisable] = useState(0);
  //   const [isValid, setIsValid] = useState(0);
  useEffect(() => {
    setIsDisable(
      props.username.name.length > 0 && props.password.password.length > 0
    );
  }, [props.username.name, props.password.password]);

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="whats your name?"
          onChange={(e) => props.username.setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => props.password.setPassword(e.target.value)}
          required
        />
        <button>
          <Link to={isDisable && "/playlist"}>get in</Link>
        </button>
      </form>
    </div>
  );
}
