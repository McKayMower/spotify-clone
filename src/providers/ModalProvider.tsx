"use client";

import { useEffect, useState } from "react";

import Modal from "@/components/Modal";

function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // no modals can be seen/rendered during server-side rendering
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <Modal
        title="Text Model"
        description="test description"
        isOpen
        onChange={() => {}}
      >
        Test Children
      </Modal>
    </>
  );
}

export default ModalProvider;
