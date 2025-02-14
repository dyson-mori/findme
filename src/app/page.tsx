import { Metadata } from "next/types";

import { api } from "@services";

import Location from "./location";

export const metadata: Metadata = {
  title: 'find | maps',
  description: 'find.me'
};

export default async function Main() {
  const location = await api.location.list();

  return <Location location={location} />
};
