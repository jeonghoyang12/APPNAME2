import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const result = { username: 'ggkim', email: 'ggkim@test.com' } // Mock data
    return NextResponse.json({ result }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
