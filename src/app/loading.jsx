import Image from "next/image"

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <div className="w-full h-full bg-red-400">
        <Image height={40} width={40} src="logo.svg" alt="logo" />
    </div>
  }