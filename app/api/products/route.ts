import { NextResponse } from 'next/server';

// array static sebagai database sementara
const products: { id: number; name: string; price: number }[] = [
  { id: 1, name: 'Produk A', price: 10000 },
  { id: 2, name: 'Produk B', price: 20000 },
];

// GET -> ambil semua data
export async function GET() {
  return NextResponse.json(products);
}

// POST -> tambah data
export async function POST(req: Request) {
  const body = await req.json();
  const newProduct = {
    id: Date.now(),
    name: body.name,
    price: body.price,
  };
  products.push(newProduct);
  return NextResponse.json(newProduct, { status: 201 });
}

// export array untuk diakses oleh route.ts lain
export { products };
