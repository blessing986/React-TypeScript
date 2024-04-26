import { useEffect, useRef } from "react";

export const DornRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!); // (null!) allows us to call focus() without optional chainning

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};
