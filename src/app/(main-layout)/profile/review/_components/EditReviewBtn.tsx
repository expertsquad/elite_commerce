"use client";
import { Button } from "@/Components/Buttons";
import Modal from "@/Components/Modal";
import React, { useState } from "react";
import EditCommentModalContent from "./EditCommentModalContent";

const EditReviewBtn = ({ allReview }: { allReview: any }) => {
  const [editComment, setEditComment] = useState(false);

  return (
    <div>
      <Button
        onClick={() => setEditComment(true)}
        className="py-2 px-5 bg-gradient-primary hover:bg-gradient-primary-reverse text-white rounded-lg"
      >
        Edit Review
      </Button>
      {editComment && (
        <Modal
          show={editComment}
          setShow={setEditComment}
          alignment="right"
          className="overflow-y-scroll p-3 w-[clamp(350px,80vw,450px)]"
          showCancelBtnINSmallDevice={true}
        >
          <EditCommentModalContent
            reviewData={allReview}
            setEditComment={setEditComment}
          />
        </Modal>
      )}
    </div>
  );
};

export default EditReviewBtn;
