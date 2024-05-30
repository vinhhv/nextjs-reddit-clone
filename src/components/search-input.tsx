"use client";

import { search } from "@/actions";
import { Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";

export default function SearchInput() {
  const searchParams = useSearchParams();
  return (
    <form action={search}>
      <Input name="term" defaultValue={searchParams.get("term") || ""} />
    </form>
  );
}
