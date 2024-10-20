import Image from "next/image";
import loadingLogo from "@/assets/Images/Elite White.gif";

export default function Loading() {
  return (
    // <div className="fixed inset-0 z-50 h-dvh w-dvw flex items-center justify-center bg-white-transparent backdrop-blur-md">
    //   <div className="flex items-center">
    //     <span className="text-3xl mr-4">Loading</span>
    //     <svg
    //       className="animate-spin h-8 w-8 text-gray-800"
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //     >
    //       <circle
    //         className="opacity-25"
    //         cx="12"
    //         cy="12"
    //         r="10"
    //         stroke="currentColor"
    //         strokeWidth="4"
    //       ></circle>
    //       <path
    //         className="opacity-75"
    //         fill="currentColor"
    //         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    //       ></path>
    //     </svg>
    //   </div>
    // </div>
    <div className="flex items-center justify-center h-screen">
      <div>
        <Image src={loadingLogo} alt="loading" width={150} height={150} />
      </div>
    </div>
  );
}
