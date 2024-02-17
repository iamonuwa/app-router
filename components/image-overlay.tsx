import { FC, useCallback, useRef, useState } from "react";

import Image from "next/image";

interface Props {
  src: string;
  overlayColor: string;
}

export const ImageOverlay: FC<Props> = ({ overlayColor, src }) => {
  const [overlayWidth, setOverlayWidth] = useState<number>(0);
  const imageRef = useRef<HTMLImageElement>(null);
  const handleRef = useRef(null);

  const handleMouseDown = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = useCallback((event: { clientX: number }) => {
    if (imageRef.current && handleRef.current) {
      const { left, width } = imageRef.current.getBoundingClientRect();
      const newWidth = Math.max(0, Math.min(width, event.clientX - left));
      setOverlayWidth(newWidth);
    }
  }, []);

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      ref={imageRef}
      className="relative w-full h-full select-none"
      onMouseLeave={() => setOverlayWidth(0)}
    >
      <Image src={src} alt="Color Overlay" width={500} height={500} className="w-full h-full rounded-md" />
      <div
        className="absolute top-0 left-0 h-full rounded-md"
        style={{
          width: `${overlayWidth}px`,
          backgroundColor: overlayColor,
        }}
      />
      <div
        ref={handleRef}
        className="absolute top-1/2 left-1 -translate-y-1/2 w-1 h-10 bg-white rounded-full cursor-pointer"
        style={{ marginLeft: `${overlayWidth - 6}px` }}
        onMouseDown={handleMouseDown}
      />
    </div>
  );
};
