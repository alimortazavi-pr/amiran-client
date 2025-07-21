"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export function ClarityInit() {
  useEffect(() => {
    Clarity.init("sic93flu8q");
  }, []);

  return null;
}
