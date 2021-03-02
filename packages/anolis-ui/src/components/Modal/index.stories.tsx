import { FC } from "react";
import StoryLayout from "stories/StoryLayout";

import { Modal, useModal } from ".";

export default {
  title: "Themed/Modal"
};

export const Normal: FC = () => {
  return (
    <StoryLayout title="Modal">
      <Modal title="Modal title">
        Text text text
      </Modal>
    </StoryLayout>
  );
};

export const WithModalContext: FC = () => {
  return (
    <StoryLayout>
      <InnerWithModalContext />
    </StoryLayout>
  );
};

const InnerWithModalContext: FC = () => {
  const [open] = useModal(CustomModal);
  return (
    <>
      <button onClick={open}>Open modal</button>
    </>
  );
};

const CustomModal: FC = () => {
  return <Modal>Content</Modal>;
};
