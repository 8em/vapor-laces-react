import { Button as HeadlessButton } from '@headlessui/react'
import { cn } from '@/lib/utils'

const SecondaryButton = ({
  children,
  disabled = false,
  active = false,
  ...props
}: {
  children: React.ReactNode
  disabled?: boolean
  active?: boolean
  [x: string]: any
}) => (
  <HeadlessButton
    className={cn(
      'w-full lg:w-60 py-3  transition-colors rounded-3xl border border-gray-300',
      disabled
        ? 'bg-gray-300 cursor-not-allowed text-gray-500 border border-gray-400'
        : active
        ? 'bg-transparent text-black'
        : 'bg-gray-100 text-black border border-gray-300',
      'hover:bg-gray-200'
    )}
    disabled={disabled}
    {...props}
  >
    {children}
  </HeadlessButton>
)

export default SecondaryButton
