import * as React from 'react'
import clsx from 'clsx'

export function Badge({ className, children }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={clsx('inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700', className)}>{children}</span>
}
