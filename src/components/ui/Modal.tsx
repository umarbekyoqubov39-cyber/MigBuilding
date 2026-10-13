import { useEffect, useRef, type ReactNode } from 'react'
import { X } from 'lucide-react'

import { cx } from '../../lib/cx'

interface Props {
  open: boolean
  onClose: () => void
  /** id of the element that names the dialog. */
  labelledBy: string
  className?: string
  children: ReactNode
}

/**
 * Accessible modal built on the native <dialog>: focus is trapped, Escape closes it,
 * and focus returns to the opener afterwards.
 */
export function Modal({ open, onClose, labelledBy, className, children }: Props) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  return (
    <dialog
      ref={ref}
      aria-labelledby={labelledBy}
      onCancel={(e) => {
        e.preventDefault()
        onClose()
      }}
      onClick={(e) => {
        // A click on the dialog element itself is a click on the backdrop.
        if (e.target === e.currentTarget) onClose()
      }}
      className={cx('m-auto bg-transparent p-0 text-white', className)}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Yopish"
        className="absolute top-3 right-3 z-20 grid size-11 place-items-center rounded-full bg-black/60 text-white/80 transition hover:bg-black/80 hover:text-white"
      >
        <X className="size-5" aria-hidden />
      </button>
      {children}
    </dialog>
  )
}
