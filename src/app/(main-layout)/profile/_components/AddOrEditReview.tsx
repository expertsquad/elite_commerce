import React from "react";

const AddOrEditReview = ({ value }: { value: boolean }) => {
  return (
    <div className="flex items-center justify-center">
      {value ? (
        <button className="bg-positive text-white py-2 px-2.5 rounded-md">
          Edit Review
        </button>
      ) : (
        <button className="bg-gradient-primary text-white hover:bg-gradient-primary-reverse py-2 px-2.5 rounded-md">
          Start Review
        </button>
      )}
    </div>
  );
};

export default AddOrEditReview;
