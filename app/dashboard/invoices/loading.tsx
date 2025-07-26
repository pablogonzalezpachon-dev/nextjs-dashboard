import { lusitana } from "@/app/ui/fonts";
import { CreateInvoice } from "@/app/ui/invoices/buttons";
import Pagination from "@/app/ui/invoices/pagination";
import Search from "@/app/ui/search";
import DashboardSkeleton, { InvoicesTableSkeleton } from "@/app/ui/skeletons";

export default function Loading() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8"></div>
      <InvoicesTableSkeleton />
      <div className="mt-5 flex w-full justify-center"></div>
    </div>
  );
}
