"use client";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <div>
      <h1>투두리스트입니다</h1>
      <button onClick={() => router.push("/report")}>할일통계</button>
    </div>
  );
};

export default Header;
