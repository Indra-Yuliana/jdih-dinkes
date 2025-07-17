interface Props {
  params: { id: string };
}

export default async function ProductDetail({ params }: Props) {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Detail Produk #{params.id}</h1>
      <p>Ini adalah detail produk dengan ID: {params.id}</p>
    </main>
  );
}
