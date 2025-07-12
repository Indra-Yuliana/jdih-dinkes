export default async function ProductPage({
  params ,
}: {
  params: Promise<{id: string}>
}) {
  const {id} = await params
  return (
  // <div >My Post : {id}</div>
  <main className="p-6">
    <h1 className="text-3xl font-bold">Product #{id}</h1>
    <p className="mt-2 text-xl">Informasi tentang produk dengan ID: {id}</p>
  </main>
  );
}