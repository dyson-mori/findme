import { NextRequest, NextResponse } from "next/server";

// import { Employee } from "@prisma/client";

// import { prisma } from "@services";

import { location } from '../mock.json';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const search = url.searchParams.get("id");

  const loc = location.find(el => el.id === search);

  // const data = await prisma.employee.findMany();

  return NextResponse.json(loc, { status: 200, statusText: 'done' });
};

export async function POST(request: NextRequest) {
  // const { name, description, lat, lng, files, price } = await request.json() as Employee;

  // const data = await prisma.employee.create({
  //   data: {
  //     name, description, lat, lng, files, price
  //   }
  // });

  // if (!data?.id) {
  //   return NextResponse.json(false, { status: 401, statusText: 'failed when trying to find' });
  // };

  // return NextResponse.json(data, { status: 201, statusText: 'done' });
};
