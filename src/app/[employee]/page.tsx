import React from 'react';

import type { Metadata } from 'next';

import { api } from '@services';

import App from './app';

export const metadata: Metadata = {
  title: 'sanctuary | feed',
  description: 'The official Next.js Learn Dashboard built with App Router.',
};

interface Props {
  params: Promise<{
    employee: string
  }>
};

export default async function Employee({ params }: Props) {
  const { employee } = await params;

  const data = await api.employee.list(employee);

  return <App employee={data} />
};