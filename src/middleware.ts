import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const hostname = req.headers.get('host') || '';
  const baseDomain = process.env.BASE_DOMAIN;
  let subdomain = '';

  if (hostname !== baseDomain) {
    subdomain = hostname.replace(`.${baseDomain}`, '');
  }


  if(!subdomain){
    console.log('No subdomain, serving root domain content');
    return NextResponse.next();
  }else if( pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.endsWith('.ico')){
    return NextResponse.next();
  }
  console.log('Serving subdomain content');
  return NextResponse.rewrite(new URL(`${subdomain}${pathname}`, req.url));

}
