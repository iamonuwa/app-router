import { Circle } from "@/components/icons/circle";
import Image from "next/image";

export const getModelIcon = (model: string) => {
  switch (model) {
    case "chatgpt":
      return (
        <Image src="/models/chatgpt.png" alt="chatgpt" width={20} height={20} />
      );
    case "tensorflow":
      return (
        <Image
          src="/models/tensorflow.png"
          alt="tensorflow"
          width={20}
          height={20}
        />
      );
    case "bard":
      return <Image src="/models/bard.png" alt="bard" width={20} height={20} />;
    default:
      return <Circle />;
  }
};
