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
import { formatAmount, getTransactionStatus } from '@/lib/utils'

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

  {transactions.map((t: Transaction) => {
    const status = getTransactionStatus(new Date(t.date))
    const amount = formatAmount(t.amount)

    const isDebit = t.type === 'debit';
    const isCredit = t.type === 'credit';

    return(
    <TableRow key={t.id}>
      <TableCell className="font-medium">
        <div>
            <h1>
                {t.name}
            </h1>
        </div>
      </TableCell>
    </TableRow>
    )
  })}
  {/* <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody> */}
</Table>
  )
}

export default TransactionsTable
