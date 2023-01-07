import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const key = request.nextUrl.searchParams.get('staging')
  const cookie = request.cookies.get('auth')
  if (key) {
    const response = NextResponse.next()
    response.cookies.set('auth', 'OK')
    return response
  }
  if (cookie === 'OK') {
    return NextResponse.next()
  }

  return NextResponse.redirect(new URL('/comingsoon', request.url))
}

export const config = {
  matcher: '/',
}
