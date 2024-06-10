import React from 'react'
import Image from "next/image";

const Home = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col sm:text-left md:text-center xl:text-center mt-10 gap-1">
                <span className="sm:text-xl md:text-2xl xl:text-3xl font-semibold">MyFonts is the largest font marketplace in the world,</span>
                <span className="sm:text-xl md:text-2xl xl:text-3xl font-semibold">offering professional fonts for any project.</span>
                <span className="sm:text-md md:text-md xl:text-xl ">Over 270,000 available fonts, and counting.</span>
            </div>
            <div>
                <div className="flex bg-gray-200 gap-4 mt-20 p-6 overflow-x-hidden md:overflow-x-scroll xl:overflow-x-scroll no-scrollbar sm:w-[842px] md:w-full xl:w-full">
                    <div className="bg-green-200 p-4 rounded-md flex-shrink-0 mx-auto w-full sm:w-[20rem] md:w-[25rem] xl:w-[30rem]">
                        <img
                            src="/a.avif"
                            alt="Vercel Logo"
                            className="dark:invert "

                        />
                        <div className="flex  justify-between mt-4">
                            <span> font</span>
                            <span> font</span>
                        </div>
                        <div className="flex  justify-end">
                            <span>font starting at</span>
                        </div>
                    </div>
                    <div className="bg-green-200 p-4 rounded-md flex-shrink-0 mx-auto w-full sm:w-[20rem] md:w-[25rem] xl:w-[30rem]">
                        <img
                            src="/b.avif"
                            alt="Vercel Logo"
                            className="dark:invert"

                        />
                        <div className="flex  justify-between mt-4">
                            <span> font</span>
                            <span> font</span>
                        </div>
                        <div className="flex  justify-end">
                            <span>font starting at</span>
                        </div>
                    </div>
                    <div className="bg-green-200 p-4 rounded-md flex-shrink-0 mx-auto w-full sm:w-[20rem] md:w-[25rem] xl:w-[30rem]">
                        <img
                            src="/b.avif"
                            alt="Vercel Logo"
                            className="dark:invert"

                        />
                        <div className="flex  justify-between mt-4">
                            <span> font</span>
                            <span> font</span>
                        </div>
                        <div className="flex  justify-end">
                            <span>font starting at</span>
                        </div>
                    </div>
                    <div className="bg-green-200 p-4 rounded-md flex-shrink-0 mx-auto w-full sm:w-[20rem] md:w-[25rem] xl:w-[30rem]">
                        <img
                            src="/b.avif"
                            alt="Vercel Logo"
                            className="dark:invert"

                        />
                        <div className="flex  justify-between mt-4">
                            <span> font</span>
                            <span> font</span>
                        </div>
                        <div className="flex  justify-end">
                            <span>font starting at</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 mt-[5rem] p-4 flex  flex-col flex-col gap-4" >
                <span>Special offer</span>
                <div className=" md:flex xl:flex gap-4">
                    <div>
                        <img src="/c.avif" alt="" />
                        <span className="mt-4">Sherilyn Script Font Duo by Zane </span>
                    </div>
                    <div>
                        <img src="/d.avif" alt="" />
                        <span>Sherilyn Script Font Duo by Zane </span>
                    </div>
                    <div>
                        <img src="/e.avif" alt="" />
                        <span>Sherilyn Script Font Duo by Zane </span>
                    </div>
                    <div>
                        <img src="/c.avif" alt="" />
                        <span>Sherilyn Script Font Duo by Zane</span>
                    </div>
                    <div>
                        <img src="/d.avif" alt="" />
                        <span>Sherilyn Script Font Duo by Zane</span>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Home