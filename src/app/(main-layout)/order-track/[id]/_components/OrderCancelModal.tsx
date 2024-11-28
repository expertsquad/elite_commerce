"use client";
import { revalidateTagAction } from "@/actions/revalidateTag";
import { updateDataMutation } from "@/actions/updateDataMutation";
import Modal from "@/Components/Modal";
import { IconX } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const OrderCancelModal = ({ id }: { id: string }) => {
  const [show, setShow] = useState(false);
  const [reason, setReason] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCancelOrder = async () => {
    setLoading(true);

    const data = {
      status: "Cancelled",
      reasonOfCancellation: reason,
      comment: comment,
    };
    try {
      const response = await updateDataMutation({
        route: `/online-order/${id}`,
        dataType: "json",
        data: JSON.stringify(data),
        formatted: true,
      });

      if (response?.success) {
        router.push("/profile/order-history/all-orders");
        revalidateTagAction("/profile/order-history/all-orders");
        setShow(false);
      }
    } catch (error) {
      console.error("Error cancelling the order:", error);
    } finally {
      setLoading(false);
      setShow(false);
    }
  };

  return (
    <div>
      <button
        onClick={() => setShow(true)}
        className="flex items-center justify-center"
      >
        <span className="text-danger">
          <IconX size={18} stroke={1} className="" />
        </span>
      </button>
      {show && (
        <Modal
          show={show}
          setShow={setShow}
          alignment="right"
          className=" p-3 w-[clamp(320px,80vw,500px)]"
          showCancelBtnINSmallDevice={true}
        >
          <div>
            <h4 className="text-black-80 text-[18px] font-semibold mb-7 md:mb-11 text-center">
              Cancellation Request
            </h4>
            <div>
              <label
                htmlFor="cancelation reason"
                className="text-black-opacity-70"
              >
                Cancellation Reason
              </label>
              <div
                className={`group w-full border border-black-10 mt-2 py-3 px-3 rounded-lg outline-none mb-7`}
              >
                <select
                  className={`w-full outline-none`}
                  name="reason"
                  id="cancelation reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                >
                  {[
                    "Select Reason",
                    "Change of Mind",
                    "Duplicate Order",
                    "Change my location",
                    "Change / Combine Order",
                    "Delivery time is too long",
                    "Shipping fees",
                    "Change Payment method",
                  ].map((opt, index) => (
                    <option
                      key={index}
                      value={opt}
                      selected={index === 0}
                      hidden={index === 0}
                      className="py-5"
                    >
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <p>
                {" "}
                <label htmlFor="comments" className="text-black-80">
                  Comments(Optional)
                </label>
              </p>
              <textarea
                className="border w-full pl-3 pt-3.5 rounded-lg resize-none outline-none text-black-80 border-black-10 mt-2"
                name="comments"
                id=""
                cols={30}
                rows={6}
                placeholder="(Comments)"
                maxLength={200}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
              <span className="text-right text-sm text-black text-opacity-80">
                {comment.length}/200
              </span>
              <div className="flex items-center justify-center ">
                <button
                  onClick={handleCancelOrder}
                  className={`text-white bg-gradient-primary py-2 rounded-3xl fixed bottom-5 w-[95%] mx-auto ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Loading..." : "Submit Now"}
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default OrderCancelModal;
