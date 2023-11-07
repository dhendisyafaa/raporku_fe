import { phoneNumberAdmin } from "@/configs/config";
import { useRouter } from "next/router";
import { Button } from "../ui/button";

const HowToComponent = () => {
  const { push } = useRouter();
  return (
    <div className="flex flex-col items-center m-auto justify-center gap-5 text-center min-h-[50vh] md:w-[70%] lg:w-[60%]">
      <p className="text-navy text-2xl lg:text-4xl font-medium lg:font-semibold">
        Bagaimana pembuatan akun siswa, guru, dan admin sekolah?
      </p>
      <p className="text-lg text-grey leading-snug">
        Hubungi admin dibawah untuk siswa atau guru yang baru bergabung dalam
        lingkungan sekolah ini, atau untuk mendapatkan akses sebagai admin!
      </p>
      <Button
        variant="orange"
        onClick={() => push(`${phoneNumberAdmin}`)}
        size="lg"
        className="flex gap-2 items-center"
      >
        <svg width={24} height={24} fill="none">
          <path
            d="M19.05 4.91A9.816 9.816 0 0012.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 012.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.07-.11-.22-.16-.47-.28z"
            fill="#F8F8F8"
          />
        </svg>
        Hubungi Admin
      </Button>
      <p className="text-xs text-grey">
        Tautan ini akan membawa Anda ke WhatsApp
      </p>
    </div>
  );
};

export default HowToComponent;
