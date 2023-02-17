import Modal from "../Modal";
import React, { useState } from "react";
import Button from "../../atoms/Button";
export default {
  title: "Organisms/Modal",
  component: Modal,
};

const Template = (args) => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setisOpen(true)}>Open Modal</Button>
      <Modal {...args} isVisible={isOpen} onClose={setisOpen}>
        Content
      </Modal>
    </>
  );
};

export const Default = Template;
