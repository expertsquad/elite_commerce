import React from "react";

const ReviewFileUploder = ({ name, inputRef }: any) => {
  return <input type="file" name={name} multiple ref={inputRef} />;
};

export default ReviewFileUploder;
