import Image from "next/image";
import { Landing } from "./(landing)/_components/landing";

export default function Home() {
  return (
    <main className=" font-monserat flex min-h-screen flex-col items-center justify-between bg-custom-gray text-custom-black">
        <Landing />
    </main>
  );
}
