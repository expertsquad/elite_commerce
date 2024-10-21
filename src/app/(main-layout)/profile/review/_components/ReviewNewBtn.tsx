"use client";
import { Button } from "@/Components/Buttons";
import Modal from "@/Components/Modal";
import React, { useState } from "react";
import AddCommentModalContent from "./AddCommentModalContent";

const ReviewNewBtn = ({
  reviewStatus,
  reviewNow,
  id,
  orderId,
  productId,
}: {
  reviewStatus: "Pending" | "Reviewed" | "Deleted";
  reviewNow: any;
  id: any;
  productId: string;
  orderId: string;
}) => {
  const [addComments, setAddComments] = useState(false);

  return (
    <div>
      {reviewStatus === "Pending" && (
        <Button
          onClick={() => setAddComments(true)}
          className="py-2 px-5 bg-gradient-primary text-white rounded-lg"
        >
          Review Now
        </Button>
      )}

      {addComments && (
        <Modal
          show={addComments}
          setShow={setAddComments}
          alignment="right"
          className="overflow-y-scroll p-3 w-[clamp(350px,80vw,450px)]"
          showCancelBtnINSmallDevice={true}
        >
          <AddCommentModalContent
            reviewNow={reviewNow}
            id={id}
            setAddComments={setAddComments}
          />
        </Modal>
      )}
    </div>
  );
};

export default ReviewNewBtn;
