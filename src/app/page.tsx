'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import PrimaryButton from '@/components/PrimaryButton'
import SecondaryButton from '@/components/SecondaryButton'
import { cn } from '@/lib/utils'

interface AnimatedTextProps {
  text: string
  delay: number
}

const AnimatedText = ({ text, delay }: AnimatedTextProps) => {
  const lines = text.split('\n')
  return (
    <div>
      {lines.map((line, lineIndex) => (
        <motion.div
          key={lineIndex}
          initial={{ opacity: 0, y: 20 }} // Зменшено початкове зміщення
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3, // Швидша тривалість
            delay: delay + lineIndex * 0.15, // Швидша затримка
            ease: 'easeOut', // Плавніша анімаційна крива
          }}
          className="overflow-hidden"
          style={{ display: 'inline-block' }}
        >
          <div className="block overflow-hidden">{line}</div>
        </motion.div>
      ))}
    </div>
  )
}

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div>
      <section className="relative overflow-hidden">
        <MaxWidthWrapper
          className={cn(
            'lg:grid lg:grid-cols-1 lg:gap-x-0 xl:gap-x-8 relative h-full lg:py-6'
          )}
        >
          <div
            className={cn('flex flex-col-reverse lg:flex lg:flex-row h-full')}
          >
            <div className={cn('flex flex-col justify-center lg:w-2/5 h-full')}>
              <AnimatedText text="vapor laces" delay={0.1} />
              <h2 className="text-5xl pt-2 font-bold">
                <AnimatedText text="Найки повинні бути чистими!" delay={0.3} />
              </h2>
              <div className="pt-4 text-md font-regular text-gray-700">
                <AnimatedText
                  text="Експерти з відновлення взуття у Львові :) Ви отримуєте всесезонний комплексний догляд за взуттям будь-якого типу, розміру та складу."
                  delay={0.45}
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.9,
                  ease: 'easeOut',
                }}
                className={cn(
                  'flex pt-8 gap-4 flex-col-reverse lg:flex lg:flex-row'
                )}
              >
                <PrimaryButton active>Замовити чистку</PrimaryButton>
                <SecondaryButton active>Викликати кур'єра</SecondaryButton>
              </motion.div>
            </div>
            <div className={cn('lg:w-3/5 h-full flex items-center')}>
              <Image
                className="m-auto max-w-2xl"
                src="/hero-image.png"
                alt="Hero Img"
                layout="responsive"
                width={660}
                height={600}
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  )
}
