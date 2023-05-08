'use client';

import Image from "next/image";

interface ProfileProps {
  src?: string | null;
  name: string;
}

export function Profile({ src, name }: ProfileProps) {
  return (
    <div className="flex items-center gap-1">
      <Image
        src={src || '/images/placeholder.jpg'}
        alt="Avatar"
        height={45}
        width={45}
        className="rounded-md hover:scale-105 duration-150 transition cursor-pointer"
      />

      <div className="flex flex-col items-start">
        <span className="text-xs font-semibold">Olá,</span>
        <h1 className="text-lg font-bold tracking-wide capitalize">{name}</h1>
      </div>
    </div>
  )
}
