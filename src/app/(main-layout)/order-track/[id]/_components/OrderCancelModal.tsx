"use client";
import Modal from "@/Components/Modal";
import { IconX } from "@tabler/icons-react";
import React, { useState } from "react";

const OrderCancelModal = ({ id }: { id: string }) => {
  const [show, setShow] = useState(false);
  const [reason, setReason] = useState("");
  const [comment, setComment] = useState("");

  return (
    <div>
      <button onClick={() => setShow(true)} className="">
        <span className="text-[#FF3838]">
          <IconX size={18} className="" />
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
            <form action="">
              <label
                htmlFor="cancelation reason"
                className="text-black-opacity-70"
              >
                Cancellation Reason
              </label>
              <select
                className={`group w-full border border-black-10 mt-2 py-3 px-3 rounded-lg outline-none mb-7`}
                name="cancelation reason"
                id="cancelation reason"
                //   value={cancelReason}
                //   onChange={(e) => setCancelReason(e.target.value)}
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
                    key={opt}
                    value={opt}
                    selected={index === 0}
                    hidden={index === 0}
                    className=""
                  >
                    {opt}
                  </option>
                ))}
              </select>
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
              <button
                type="submit"
                className="text-white bg-gradient-primary w-full py-2 rounded-3xl mt-7 md:mt-11"
              >
                Submit
              </button>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default OrderCancelModal;
