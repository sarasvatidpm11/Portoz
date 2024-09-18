import React from "react";

type ImageSectionProps = {
  isLogin: boolean;
};

export default function ImageSection({ isLogin }: ImageSectionProps) {
  return (
    <div
      className={`bg-card-pattern absolute inset-0 transform lg:transition-transform lg:duration-1000 lg:ease-in-out ${
        isLogin ? "lg:translate-x-0" : "lg:translate-x-full"
      } z-0 h-full w-full lg:z-10 lg:w-1/2`}
    ></div>
  );
}
