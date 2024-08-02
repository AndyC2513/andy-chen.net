import React from "react";

export default function Footer() {
  return (
    <div
      className="relative h-[400px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] -top-[100vh]">
        <div className="h-[400px] sticky top-[calc(100vh-400px)]">
          <div className="bg-[#dbdbdb] py-8 px-12 h-full w-full flex flex-col justify-between">
            <div className="flex justify-center">
              <div className="flex flex-col gap-2 text-center">
                <h3 className="mb-2 text-3xl text-[#000000] font-bold">
                  Thanks to all Sketchfab users for their 3D assets:
                </h3>
                <div className="font-poppins text-[10px] md:text-2xl mb-2">
                  <p>Volcano Island Lowpoly - Animateria</p>
                  <p>Nature Compatible Engine (animated) - Conrad Justin</p>
                  <p>SkyBox In The Cloud - Paul</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-end">
              <h1 className="text-black text-[10vw] md:text-[8vw] lg:text-[6vw] xl:text-[4vw] leading-[0.8] mt-10 font-serif text-center">
                Credits
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
