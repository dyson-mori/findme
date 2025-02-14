import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const loc = [
    {
      urls: [
        'https://res.cloudinary.com/dyrtdrnky/image/upload/v1739384715/sanctuary/c84a47c6e8e529b388d2f791d94fd883_irc5tu.jpg'
      ],
      name: "sofi",
      lat: -19.942699,
      lng: -44.031464,
      partnership: []
    },
    {
      urls: [
        'https://res.cloudinary.com/dyrtdrnky/image/upload/v1739487810/sanctuary/images_deqrzc.jpg'
      ],
      name: "motel cine express",
      lat: -19.9312648,
      lng: -44.0385159,
      partnership: []
    },
    {
      urls: [
        'https://res.cloudinary.com/dyrtdrnky/image/upload/v1739385566/sanctuary/011b7baf375ff3c1b3dde39f08ba7c7f_kyfeyq.jpg'
      ],
      name: "gabi",
      lat: -19.9431461,
      lng: -44.0337437,
      partnership: []
    },
    {
      urls: [
        'https://res.cloudinary.com/dyrtdrnky/video/upload/v1736029189/sanctuary/jaiane_lima_swrtxf.jpg',
        'https://res.cloudinary.com/dyrtdrnky/image/upload/v1739385566/sanctuary/011b7baf375ff3c1b3dde39f08ba7c7f_kyfeyq.jpg',
      ],
      name: "fabi",
      lat: -19.939505,
      lng: -44.035773,
      partnership: [
        {
          lat: -19.9312648,
          lng: -44.0385159,
        },
        {
          lat: -19.9475208,
          lng: -44.070889,
        }
      ]
    },
    {
      urls: [
        'https://res.cloudinary.com/dyrtdrnky/image/upload/v1739487810/sanctuary/images_deqrzc.jpg'
      ],
      name: "Millenium Love - Motel Via Expressa Contagem",
      lat: -19.9247048,
      lng: -44.0448441,
      partnership: []
    },
    {
      urls: [
        'https://res.cloudinary.com/dyrtdrnky/image/upload/v1739487810/sanctuary/images_deqrzc.jpg'
      ],
      name: "Motel CristaContagem",
      lat: -19.9475208,
      lng: -44.070889,
      partnership: []
    },
  ];

  return NextResponse.json(loc, { status: 200, statusText: 'success' })
};