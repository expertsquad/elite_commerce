import Image from "next/image";
import loadingLogo from "@/assets/Images/Elite-logo.gif";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <Image src={loadingLogo} alt="loading" width={150} height={150} />
      </div>
    </div>
  );
}
