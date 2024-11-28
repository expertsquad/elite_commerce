"use client";
import { Button } from "@/Components/Buttons";
import Modal from "@/Components/Modal";
import React, { useState } from "react";
import EditCommentModalContent from "./EditCommentModalContent";
import { IconEdit } from "@tabler/icons-react";

const EditReviewBtn = ({ allReview }: { allReview: any }) => {
  const [editComment, setEditComment] = useState(false);

  return (
    <div>
      <Button
        onClick={() => setEditComment(true)}
        className="p-2 md:py-1.5 md:px-3 lg:py-2 lg:px-5 bg-gradient-primary hover:bg-gradient-primary-reverse text-white rounded-lg whitespace-nowrap"
      >
        <span className="hidden md:block">Edit Review</span>
        <span className="block md:hidden">
          <IconEdit />
        </span>
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
