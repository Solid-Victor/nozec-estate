"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { usePathname } from "next/navigation";

function Header() {
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);
  return (
    <div className="p-6 px-10 flex justify-between shadow-sm fixed top-0 w-full z-10 bg-white">
        {/* Nav List Start */}
      <div className="flex gap-10 items-center">
        <Image src={"/nozec-logo.jpg"} alt="logo" width={50} height={50} />
        <ul className="hidden md:flex gap-10">
          <Link href="/">
            <li className={`hover:text-primary font-medium text-sm cursor-pointer ${path === '/'&& "text-primary"}`}>
              For Sale
            </li>
          </Link>
          <Link href="/forrent">
            <li className={`hover:text-primary font-medium text-sm cursor-pointer ${path === '/forrent'&& "text-primary"}`}>
              For Rent
            </li>
          </Link>
          <Link href="/agentfinder">
            <li className={`hover:text-primary font-medium text-sm cursor-pointer ${path === '/agentfinder'&& "text-primary"}`}>
              Agent Finder
            </li>
          </Link>
        </ul>
      </div>
      {/* Nav List End */}
      <div className="flex gap-2">
        <Button className="flex gap-2">
          <Plus className="h-5 w-5" /> Post Your Ad
        </Button>
        <Button variant="outline">Login</Button>
      </div>
    </div>
  );
}

export default Header;
