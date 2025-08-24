import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, password } = await request.json();
  
  if (email === 'lahiru.jsn@gmail.com' && password === '1234') {
    return NextResponse.json({ success: true, message: 'Sign-in successful!' });
  }
  return NextResponse.json({ success: false, message: 'Invalid credentials.' }, { status: 401 });
}
