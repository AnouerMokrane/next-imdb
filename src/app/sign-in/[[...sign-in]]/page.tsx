import { SignIn } from "@clerk/nextjs";
import React from "react";

export default function page() {
  return (
    <div className="flex justify-center mt-20">
      <SignIn path="/sign-in" />
    </div>
  );
}
