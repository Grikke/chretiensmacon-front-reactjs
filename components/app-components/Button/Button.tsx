import clsx from 'clsx'
import React, { forwardRef, PropsWithChildren } from 'react'
import { isElement } from 'react-dom/test-utils'

export type IButton = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  variant?:
    | 'primary'
    | 'secondary'
    | 'link'
    | 'ghost'
    | 'tertiary'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  className?: string
  active?: boolean
  type?: 'submit' | 'button'
  children: any
  isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<IButton>>(
  (
    {
      variant,
      size = 'md',
      disabled,
      children,
      onClick,
      className,
      active = false,
      type = 'button',
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'button',
          size === 'sm' && 'button-sm',
          size === 'md' && 'button-md',
          size === 'lg' && 'button-lg',
          size === 'xl' && 'button-xl',
          variant === 'primary' && [
            'button-primary',
          ],
          variant === 'secondary' && [
            'button-secondary',
          ],
          variant === 'tertiary' && [
            'button-tertiary',
          ],
          variant === 'ghost' && [
            'button-ghost',
          ],
          variant === 'link' && [
            'button-link'
          ],
          className
        )}
        disabled={disabled}
        onClick={onClick}
        type={type}
        {...rest}
      >
        {isElement(children)
          ? React.cloneElement(children, {
              active: active,
            })
          : children}
      </button>
    )
  }
)
Button.displayName = 'Button'

export default Button
