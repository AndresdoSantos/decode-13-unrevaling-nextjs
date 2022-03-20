import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  // Pegar o cookie de auth

  // Chamar a API para verificar se o cookie existe

  return NextResponse.redirect('http://localhost:3000/');
}
