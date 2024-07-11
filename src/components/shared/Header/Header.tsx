"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { routes } from "./routes";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="bg-black w-full fixed h-16 px-8 md:px-20 flex items-center justify-between z-10">
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Image
          onClick={() => router.push("/")}
          src="/png/rick-logo.png"
          width={110}
          height={30}
          alt="rick-logo"
          priority
          className="cursor-pointer"
          style={{
            width: "auto",
            height: "auto",
          }}
        />
      </motion.div>

      <div className="flex items-center">
        {routes.map((route) => (
          <Link
            href={route.path}
            key={route.label}
            className={`${
              pathname === route.path ? "text-primary" : "text-white"
            } mr-2 md:mr-4 font-semibold`}
          >
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
