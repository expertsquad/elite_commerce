import Modal from "@/Components/Modal";
import React from "react";

const Page = () => {
  const [show, setShow] = React.useState(false);

  return (
    <div>
      <Modal alignment="left" show={show} setShow={setShow}>
        Hello
      </Modal>
    </div>
  );
};

export default Page;
