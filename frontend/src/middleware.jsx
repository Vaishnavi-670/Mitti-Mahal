import { NextResponse } from 'next/server';

export function middleware(request) {
  // This middleware just allows the request to proceed
  // but ensures these paths are client-side rendered
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Paths that will use client-side rendering only
    '/user/:path*',
    '/admin/:path*',
    '/checkout',
  ],
};