import Image from 'next/image'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Marquee from 'react-fast-marquee'
// import { Button } from '@headlessui/react'
import PrimaryButton from '@/components/PrimaryButton'
import SecondaryButton from '@/components/SecondaryButton'

export default function Home() {
  return (
    <div>
      <section className="relative">
        <MaxWidthWrapper className="pb-12 pt-2 lg:grid lg:grid-cols-1 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-12 lg:pb-12 relative">
          <div>
            <Image
              className="m-auto"
              src="/hero-image.png"
              alt="Hero Img"
              width={660}
              height={600}
            />
            <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Marquee className="overflow-hidden -z-1">
                <h2 className="text-6xl ">
                  <span>Найки</span> мають бути чистими&nbsp;&nbsp;
                  <span>Найки</span> мають бути чистими&nbsp;&nbsp;
                </h2>
              </Marquee>
            </div>
            <div className="flex justify-center items-center flex-col gap-2">
              <PrimaryButton active>Замовити чистку</PrimaryButton>
              <SecondaryButton active>Викликати кур'єра</SecondaryButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  )
}
