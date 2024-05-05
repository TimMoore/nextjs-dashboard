import { fetchCustomers, fetchFilteredCustomers } from '@/app/lib/data';
import { FormattedCustomersTable } from '@/app/lib/definitions';
import Table from '@/app/ui/customers/table';
import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const customers: FormattedCustomersTable[] =
    await fetchFilteredCustomers(query);

  return <Table customers={customers} />;
}
