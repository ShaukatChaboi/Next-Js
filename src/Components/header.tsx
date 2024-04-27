import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-center items-cente text-orange-500 text-lg uppercase font-semibold  h-20  border-b-8 border-orange-400">
      <div className="w-3/4 flex items-center justify-between gap-7 p-5 ">
        <div className="flex justify-start items-start ">
          <Link href="/">Home</Link>
        </div>
        <div className=" flex justify-between items-center gap-5 p-5">
          <Link className="" href="/performance">
            Performance
          </Link>
          <Link className="" href="/reliability">
            reliabity
          </Link>
          <Link className="" href="/scale">
            scale
          </Link>
        </div>
      </div>
    </div>
  );
}
