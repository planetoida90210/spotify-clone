"use client";

import { useEffect, useState } from "react";

const ModalProivder = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <>Modals</>;
};

export default ModalProivder;
