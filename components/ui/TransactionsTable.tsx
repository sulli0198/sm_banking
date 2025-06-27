import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { cn, formatAmount, getTransactionStatus, removeSpecialCharacters } from '@/lib/utils'
import { transactionCategoryStyles } from '@/constants'

const CategoryBadge = ({category}: CategoryBadgeProps) => {
  const {
    borderColor,
    backgroundColor,
    textColor,
    chipBackgroundColor,
  } = transactionCategoryStyles[category as keyof typeof transactionCategoryStyles] || transactionCategoryStyles.default

  return (
    <div className={cn('category-badge', borderColor, chipBackgroundColor)}>
      <div className={cn('size-2 rounded-full', backgroundColor)} />
      <p className={cn('text-[12px] font-medium', textColor)} >
        {category}
      </p>
    </div>
  )
}

const TransactionsTable = ({transactions}: TransactionTableProps) => {
  return (
    <Table>
  <TableHeader>
    <TableRow>
      <TableHead className="px-2 text-white">Transaction</TableHead>
      <TableHead className='px-2 text-white'>Amount</TableHead>
      <TableHead className='px-2 text-white'>Status</TableHead>
      <TableHead className="px-2 text-white">Date</TableHead>
      <TableHead className="px-2 text-white max-md:hidden">Channel</TableHead>
      <TableHead className='px-2 text-white max-md:hidden'>Category</TableHead>
    </TableRow>
  </TableHeader>

  <TableBody>
    {transactions.map((t: Transaction) => {
      const status = getTransactionStatus(new Date(t.date))
      const amount = formatAmount(t.amount)

      const isDebit = t.type === 'debit'
      const isCredit = t.type === 'credit'

      return (
        <TableRow key={t.id} className={`${isDebit || amount[0] === '-' ? 'bg-[#362121]' : 'bg-[#2c3830]' } !over:bg-none !border-b-Default `}>
          <TableCell className="max-w-[250px] pl-2 pr-10">
            <div className="flex items-center gap-3">
              <h1 className="text-14 truncate font-semibold text-white">
                {removeSpecialCharacters(t.name)}
              </h1>
            </div>
          </TableCell>

          <TableCell
            className={`pl-2 pr-10 font-semibold ${isDebit || amount[0] === '-' ? 
              'text-[#f04438]'
              : 'text-[#039855]'
             }`}
          >
            {isDebit ? `-${amount}` : isCredit ? `+${amount}` : amount}
          </TableCell>

          <TableCell className="pl-2 pr-10">
           <CategoryBadge category={status} /> 
          </TableCell>

          <TableCell className=" min-2-32 pl-2 pr-10">
            {new Date(t.date).toLocaleDateString()}
          </TableCell>

          <TableCell className="pl-2 pr-10 capitalize max-md:hidden">
            {t.paymentChannel}
          </TableCell>

          <TableCell className="pl-2 pr-10 max-md:hidden">
            {t.category}
          </TableCell>
        </TableRow>
      )
    })}
  </TableBody>
</Table>
  )
}

export default TransactionsTable
