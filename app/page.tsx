"use client"

import Link from 'next/link'
import { useEffect, useState } from "react"
import { useTheme } from "@/components/ThemeContext"

const MOTION_VISUAL_MAP = {
  warm: "/visuals/01.mp4",
  cold: "/visuals/02.mp4",
  joyful: "/visuals/03.mp4",
  carbon: "/visuals/04.mp4",
} as const

type VisualKey = keyof typeof MOTION_VISUAL_MAP | "none"

export default function Home() {
  const { visual } = useTheme()
  const [othersCanLoad, setOthersCanLoad] = useState(false)

  useEffect(() => {
    setOthersCanLoad(false)
  }, [visual])

  const onCurrentCanPlayThrough = () => {
    setOthersCanLoad(true)
  }

  return (
    <div className="relative h-screen w-full overflow-hidden bg-background min-h-[36rem] sm:min-h-[44rem] lg:min-h-[52rem] layout-padding-nexa">
      {(Object.entries(MOTION_VISUAL_MAP) as [VisualKey, string][]).map(
        ([key, src]) => {
          const isCurrent = key === visual
          return (
            <video
              key={key}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-200 ${isCurrent ? "opacity-100" : "opacity-0"}`}
              src={src}
              autoPlay
              muted
              loop
              playsInline
              preload={isCurrent || othersCanLoad ? "auto" : "none"}
              onCanPlayThrough={isCurrent ? onCurrentCanPlayThrough : undefined}
            />
          )
        }
      )}

      <div className="relative z-10 h-full w-full text-foreground">
        <div className="absolute top-2">
          <h1 className="font-bold responsive-heading">
            <div className="space-y-0">
              <span className="block text-nowrap">The Power of Systematic</span>
              <span className="block responsive-title-spacing text-nowrap">Digital Design</span>
            </div>
            <div className="responsive-text-lg font-light max-w-xs sm:max-w-2xl mt-2">
              <span className="block">Step into the world of digital design systems. Experience the power of systematic design yourself.</span>
            </div>
          </h1>
        </div>

        <div className="absolute bottom-4 max-w-48 sm:max-w-full">
          <div className="responsive-text-sm sm:responsive-text">
            <div className="mb-2">
              <span className="font-bold block">Bachelor Thesis 2025</span>
              <span className="font-light block">Practical Design Thesis Project</span>
            </div>
            <div className="mb-2">
              <span className="font-bold block">Author</span>
              <span className="font-light block">Yoana Tacheva</span>
              <div>
                <Link
                  href="https://yochita.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-light block transition-all ease-in-out duration-300 cursor-pointer">
                  yochita.com
                </Link>
              </div>
            </div>
            <div className="mb-2">
              <span className="font-bold block">Mentors</span>
              <div>
                <Link
                  href="https://www.fhnw.ch/de/personen/philipp-stamm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-light transition-all ease-in-out duration-300 cursor-pointer">
                  Prof. Philipp Stamm
                </Link>
              </div>
              <div>
                <Link
                  href="https://www.fhnw.ch/en/people/thomas-bircher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-light transition-all ease-in-out duration-300 cursor-pointer">
                  Thomas Bircher
                </Link>
              </div>
            </div>
            <div className="mb-2">
              <div>
                <Link
                  href="https://www.fhnw.ch/en/about-fhnw/schools/academy-of-art-and-design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold block transition-all ease-in-out duration-300 cursor-pointer">
                  Basel Academy of Arts and Design FHNW
                </Link>
              </div>
              <div>
                <Link
                  href="https://www.fhnw.ch/en/about-fhnw/schools/academy-of-art-and-design/institute-digital-communication-environments"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-light block transition-all ease-in-out duration-300 cursor-pointer">
                  Institute Digital Communication Environments IDCE
                </Link>
              </div>
              <div>
                <Link
                  href="https://www.fhnw.ch/en/degree-programmes/art-and-design/bachelor-of-arts/bachelor-of-arts-fhnw-in-visual-communication"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-light block transition-all ease-in-out duration-300 cursor-pointer">
                  Bachelor Visual Communication and Digital Spaces
                </Link>
              </div>
            </div>
            <div>
              <span className="font-bold block">© 2025</span>
              <span className="font-light block">FHNW HGK Basel</span>
              <span className="font-light block">All rights reserved</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 right-0 text-right">
          <div className="font-light responsive-text-sm sm:responsive-text text-left mb-2">
            main.yochita.com
          </div>
          <svg
            width="25mm"
            height="25mm"
            version="1.1"
            viewBox="0 0 25 25"
            xmlns="http://www.w3.org/2000/svg"
            id="qr-path"
            className="fill-current responsive-icon-qr sm:responsive-icon-qr-lg"
            fillOpacity="1"
            fillRule="nonzero"
            stroke="none"
          > <path d="M0,0H1V1H0zM1,0H2V1H1zM2,0H3V1H2zM3,0H4V1H3zM4,0H5V1H4zM5,0H6V1H5zM6,0H7V1H6zM9,0H10V1H9zM12,0H13V1H12zM13,0H14V1H13zM14,0H15V1H14zM15,0H16V1H15zM18,0H19V1H18zM19,0H20V1H19zM20,0H21V1H20zM21,0H22V1H21zM22,0H23V1H22zM23,0H24V1H23zM24,0H25V1H24zM0,1H1V2H0zM6,1H7V2H6zM10,1H11V2H10zM11,1H12V2H11zM12,1H13V2H12zM13,1H14V2H13zM15,1H16V2H15zM18,1H19V2H18zM24,1H25V2H24zM0,2H1V3H0zM2,2H3V3H2zM3,2H4V3H3zM4,2H5V3H4zM6,2H7V3H6zM8,2H9V3H8zM9,2H10V3H9zM10,2H11V3H10zM12,2H13V3H12zM16,2H17V3H16zM18,2H19V3H18zM20,2H21V3H20zM21,2H22V3H21zM22,2H23V3H22zM24,2H25V3H24zM0,3H1V4H0zM2,3H3V4H2zM3,3H4V4H3zM4,3H5V4H4zM6,3H7V4H6zM9,3H10V4H9zM10,3H11V4H10zM11,3H12V4H11zM14,3H15V4H14zM18,3H19V4H18zM20,3H21V4H20zM21,3H22V4H21zM22,3H23V4H22zM24,3H25V4H24zM0,4H1V5H0zM2,4H3V5H2zM3,4H4V5H3zM4,4H5V5H4zM6,4H7V5H6zM10,4H11V5H10zM15,4H16V5H15zM18,4H19V5H18zM20,4H21V5H20zM21,4H22V5H21zM22,4H23V5H22zM24,4H25V5H24zM0,5H1V6H0zM6,5H7V6H6zM9,5H10V6H9zM13,5H14V6H13zM14,5H15V6H14zM15,5H16V6H15zM16,5H17V6H16zM18,5H19V6H18zM24,5H25V6H24zM0,6H1V7H0zM1,6H2V7H1zM2,6H3V7H2zM3,6H4V7H3zM4,6H5V7H4zM5,6H6V7H5zM6,6H7V7H6zM8,6H9V7H8zM10,6H11V7H10zM12,6H13V7H12zM14,6H15V7H14zM16,6H17V7H16zM18,6H19V7H18zM19,6H20V7H19zM20,6H21V7H20zM21,6H22V7H21zM22,6H23V7H22zM23,6H24V7H23zM24,6H25V7H24zM8,7H9V8H8zM9,7H10V8H9zM10,7H11V8H10zM12,7H13V8H12zM13,7H14V8H13zM0,8H1V9H0zM1,8H2V9H1zM2,8H3V9H2zM4,8H5V9H4zM5,8H6V9H5zM6,8H7V9H6zM7,8H8V9H7zM8,8H9V9H8zM10,8H11V9H10zM11,8H12V9H11zM13,8H14V9H13zM16,8H17V9H16zM17,8H18V9H17zM18,8H19V9H18zM22,8H23V9H22zM0,9H1V10H0zM1,9H2V10H1zM2,9H3V10H2zM3,9H4V10H3zM4,9H5V10H4zM5,9H6V10H5zM7,9H8V10H7zM10,9H11V10H10zM11,9H12V10H11zM13,9H14V10H13zM16,9H17V10H16zM17,9H18V10H17zM18,9H19V10H18zM24,9H25V10H24zM2,10H3V11H2zM3,10H4V11H3zM5,10H6V11H5zM6,10H7V11H6zM7,10H8V11H7zM9,10H10V11H9zM14,10H15V11H14zM18,10H19V11H18zM19,10H20V11H19zM20,10H21V11H20zM22,10H23V11H22zM23,10H24V11H23zM24,10H25V11H24zM7,11H8V12H7zM11,11H12V12H11zM13,11H14V12H13zM14,11H15V12H14zM16,11H17V12H16zM20,11H21V12H20zM23,11H24V12H23zM1,12H2V13H1zM4,12H5V13H4zM6,12H7V13H6zM8,12H9V13H8zM12,12H13V13H12zM13,12H14V13H13zM14,12H15V13H14zM15,12H16V13H15zM16,12H17V13H16zM17,12H18V13H17zM18,12H19V13H18zM21,12H22V13H21zM23,12H24V13H23zM24,12H25V13H24zM1,13H2V14H1zM4,13H5V14H4zM5,13H6V14H5zM7,13H8V14H7zM8,13H9V14H8zM11,13H12V14H11zM12,13H13V14H12zM16,13H17V14H16zM17,13H18V14H17zM18,13H19V14H18zM21,13H22V14H21zM24,13H25V14H24zM0,14H1V15H0zM2,14H3V15H2zM6,14H7V15H6zM9,14H10V15H9zM11,14H12V15H11zM12,14H13V15H12zM13,14H14V15H13zM19,14H20V15H19zM22,14H23V15H22zM23,14H24V15H23zM24,14H25V15H24zM1,15H2V16H1zM3,15H4V16H3zM5,15H6V16H5zM8,15H9V16H8zM9,15H10V16H9zM12,15H13V16H12zM13,15H14V16H13zM15,15H16V16H15zM20,15H21V16H20zM23,15H24V16H23zM0,16H1V17H0zM2,16H3V17H2zM6,16H7V17H6zM7,16H8V17H7zM10,16H11V17H10zM11,16H12V17H11zM12,16H13V17H12zM13,16H14V17H13zM15,16H16V17H15zM16,16H17V17H16zM17,16H18V17H17zM18,16H19V17H18zM19,16H20V17H19zM20,16H21V17H20zM21,16H22V17H21zM8,17H9V18H8zM10,17H11V18H10zM11,17H12V18H11zM13,17H14V18H13zM16,17H17V18H16zM20,17H21V18H20zM21,17H22V18H21zM23,17H24V18H23zM24,17H25V18H24zM0,18H1V19H0zM1,18H2V19H1zM2,18H3V19H2zM3,18H4V19H3zM4,18H5V19H4zM5,18H6V19H5zM6,18H7V19H6zM8,18H9V19H8zM10,18H11V19H10zM13,18H14V19H13zM14,18H15V19H14zM15,18H16V19H15zM16,18H17V19H16zM18,18H19V19H18zM20,18H21V19H20zM21,18H22V19H21zM23,18H24V19H23zM24,18H25V19H24zM0,19H1V20H0zM6,19H7V20H6zM8,19H9V20H8zM9,19H10V20H9zM12,19H13V20H12zM13,19H14V20H13zM14,19H15V20H14zM16,19H17V20H16zM20,19H21V20H20zM21,19H22V20H21zM0,20H1V21H0zM2,20H3V21H2zM3,20H4V21H3zM4,20H5V21H4zM6,20H7V21H6zM8,20H9V21H8zM9,20H10V21H9zM11,20H12V21H11zM12,20H13V21H12zM13,20H14V21H13zM16,20H17V21H16zM17,20H18V21H17zM18,20H19V21H18zM19,20H20V21H19zM20,20H21V21H20zM21,20H22V21H21zM0,21H1V22H0zM2,21H3V22H2zM3,21H4V22H3zM4,21H5V22H4zM6,21H7V22H6zM9,21H10V22H9zM10,21H11V22H10zM15,21H16V22H15zM16,21H17V22H16zM19,21H20V22H19zM20,21H21V22H20zM21,21H22V22H21zM22,21H23V22H22zM0,22H1V23H0zM2,22H3V23H2zM3,22H4V23H3zM4,22H5V23H4zM6,22H7V23H6zM8,22H9V23H8zM9,22H10V23H9zM10,22H11V23H10zM13,22H14V23H13zM15,22H16V23H15zM20,22H21V23H20zM24,22H25V23H24zM0,23H1V24H0zM6,23H7V24H6zM8,23H9V24H8zM11,23H12V24H11zM12,23H13V24H12zM13,23H14V24H13zM14,23H15V24H14zM15,23H16V24H15zM16,23H17V24H16zM18,23H19V24H18zM20,23H21V24H20zM21,23H22V24H21zM23,23H24V24H23zM0,24H1V25H0zM1,24H2V25H1zM2,24H3V25H2zM3,24H4V25H3zM4,24H5V25H4zM5,24H6V25H5zM6,24H7V25H6zM8,24H9V25H8zM9,24H10V25H9zM11,24H12V25H11zM12,24H13V25H12zM13,24H14V25H13zM16,24H17V25H16zM19,24H20V25H19zM23,24H24V25H23zM24,24H25V25H24z" /></svg>
        </div>
      </div>
    </div>
  )
}