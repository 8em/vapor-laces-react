import { Button as HeadlessButton } from '@headlessui/react'
import { cn } from '@/lib/utils'

const getButtonClasses = ({
  disabled,
  active,
}: {
  disabled?: boolean
  active?: boolean
}) =>
  cn(
    'w-full lg:w-max py-3 px-5 rounded-3xl transition-colors text-zinc-50',
    disabled
      ? 'bg-gray-400 cursor-not-allowed'
      : (active ? 'bg-primary' : 'bg-blue-500') +
          ' ' +
          (!disabled ? 'hover:bg-primary-active' : '')
  )

const PrimaryButton = ({
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
    className={`${getButtonClasses({ disabled, active })} text-sm`}
    disabled={disabled}
    {...props}
  >
    {children}
  </HeadlessButton>
)

export default PrimaryButton
