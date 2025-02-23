import { getFavorites } from "@/lib/actions/favorite";
import React from "react";

export default async function page() {
  const favorites = await getFavorites();
  console.log(favorites);
  return (
    <>
      <h1>Favorites</h1>
    </>
  );
}
