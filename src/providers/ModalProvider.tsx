"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/components/AuthModal";

function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // no modals can be seen/rendered during server-side rendering
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <AuthModal />
    </>
  );
}

export default ModalProvider;
