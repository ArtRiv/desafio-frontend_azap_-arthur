"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export function InputWithButton() {
  const [inputValue, setInputValue] = useState<string>('');
  const router = useRouter();


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate();
  }

  const navigate = () => {
    if (inputValue) {
      const encodedQuery = encodeURIComponent(inputValue);
      router.push(`/results?q=${encodedQuery}`);
    }
  }
  return (
    <form className="flex w-full max-w-sm items-center space-x-2" onSubmit={handleSubmit}>
      <Input
        type="search"
        onChange={(event) => setInputValue(event.target.value)}
        onDragEnter={navigate}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
      />
      <Button type="submit" onSubmit={handleSubmit}>
        pesquisar
      </Button>
    </form>
  )
}
