
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center gap-10 my-11">
   <Link href="/clientSide"><div className="bg-slate-900 text-white h-20 w-96 flex items-center justify-center rounded-lg cursor-pointer">Client Side Rendering</div></Link> 
   <Link href="/serverSide"> <div className="bg-slate-900 text-white h-20 w-96 flex items-center justify-center rounded-lg cursor-pointer">Server Side Rendering</div> </Link>
   <Link href="/staticSite"> <div className="bg-slate-900 text-white h-20 w-96 flex items-center justify-center rounded-lg cursor-pointer">Static Site Generation</div></Link>

    </div>
  );
}
