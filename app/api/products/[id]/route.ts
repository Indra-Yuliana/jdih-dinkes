import { NextResponse } from 'next/server';
import { products } from '../route';

export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;      // ✅ gunakan await
  const productId = Number(id);
  const body = await req.json();

  const index = products.findIndex((p) => p.id === productId);
  if (index === -1) {
    return NextResponse.json({ message: 'Not found' }, { status: 404 });
  }

  products[index] = { ...products[index], ...body };
  return NextResponse.json(products[index]);
}

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;      // ✅ gunakan await
  const productId = Number(id);

  const index = products.findIndex((p) => p.id === productId);
  if (index === -1) {
    return NextResponse.json({ message: 'Not found' }, { status: 404 });
  }

  const deleted = products.splice(index, 1);
  return NextResponse.json(deleted[0]);
}
