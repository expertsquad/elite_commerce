"use client";
import { Button } from "@/Components/Buttons";
import Modal from "@/Components/Modal";
import React, { useState } from "react";
import AddCommentModalContent from "./AddCommentModalContent";
import EditCommentModalContent from "./EditCommentModalContent";

const ButtonSection = ({
  isReviewed,
  orderStatus,
  comment,
}: {
  isReviewed: boolean;
  orderStatus: string;
  comment: React.ReactNode;
}) => {
  // add comment modal state
  const [addComments, setAddComments] = useState(false);
  // edit comment
  const [editComment, setEditComment] = useState(false);

  return (
    <div>
      {isReviewed === false && orderStatus === "Delivered" ? (
        <Button
          onClick={() => setAddComments(true)}
          className="py-2 px-5 bg-gradient-primary text-white rounded-lg"
        >
          Review Now
        </Button>
      ) : isReviewed === false && orderStatus !== "Delivered" ? (
        <Button className="py-2 px-5 bg-gradient-primary text-white rounded-lg disabled cursor-not-allowed opacity-50">
          Review Now
        </Button>
      ) : (
        <Button
          onClick={() => setEditComment(true)}
          className="py-2 px-5 bg-gradient-primary text-white rounded-lg"
        >
          Edit Review
        </Button>
      )}

      {/* Add comment modal start here */}

      {addComments && (
        <Modal
          show={addComments}
          setShow={setAddComments}
          alignment="right"
          className="overflow-y-scroll p-3 w-[clamp(350px,80vw,450px)]"
          showCancelBtnINSmallDevice={true}
        >
          <AddCommentModalContent />
        </Modal>
      )}
      {/* edit  modal start here */}
      {editComment && (
        <Modal
          show={editComment}
          setShow={setEditComment}
          alignment="right"
          className="overflow-y-scroll p-3 w-[clamp(350px,80vw,450px)]"
          showCancelBtnINSmallDevice={true}
        >
          <EditCommentModalContent comment={comment} />
        </Modal>
      )}
    </div>
  );
};

export default ButtonSection;
