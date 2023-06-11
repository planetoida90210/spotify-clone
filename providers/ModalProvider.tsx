"use client";

import { useEffect, useState } from "react";

import Modal from "@/components/Modal";
const ModalProivder = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Modal title="Test Modal" description="Test desc" isOpen onChange={() => {}}>
        Test children
      </Modal>
    </>
  );
};

export default ModalProivder;
