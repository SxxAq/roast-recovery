import { NextResponse } from 'next/server';
import { generateResponse } from '@/utils/gemini';

export async function POST(req: Request) {
  const { critique } = await req.json();

  if (!critique) {
    return NextResponse.json({ error: 'Critique is required' }, { status: 400 });
  }

  try {
    const response = await generateResponse(critique);
    return NextResponse.json({ response });
  } catch (error) {
    console.error('Error generating response:', error);
    return NextResponse.json({ error: 'Failed to generate response' }, { status: 500 });
  }
}
