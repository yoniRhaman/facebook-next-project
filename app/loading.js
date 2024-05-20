"use client";
import { usePathname } from "next/navigation";
export default function Loading() {
  const pathname = usePathname();
  return (
    <div className="column center middleware-height">
      {getSkeletonByPage(pathname)}
    </div>
  );
}


