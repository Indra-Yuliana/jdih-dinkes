'use client';
import { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState<number | string>('');
  const [editingId, setEditingId] = useState<number | null>(null);

  // ambil data
  async function fetchProducts() {
    const res = await fetch('/api/products');
    const data = await res.json();
    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  // tambah data
  async function addProduct() {
    if (!name || !price) return;
    await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price: Number(price) }),
    });
    setName('');
    setPrice('');
    fetchProducts();
  }

  // update data
  async function updateProduct(id: number) {
    if (!name || !price) return;
    await fetch(`/api/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price: Number(price) }),
    });
    setEditingId(null);
    setName('');
    setPrice('');
    fetchProducts();
  }

  // hapus data
  async function deleteProduct(id: number) {
    await fetch(`/api/products/${id}`, { method: 'DELETE' });
    fetchProducts();
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Daftar Produk</h1>

      <div className="mb-4">
        <input
          className="border p-2 mr-2"
          placeholder="Nama produk"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border p-2 mr-2"
          placeholder="Harga"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        {editingId ? (
          <button
            onClick={() => updateProduct(editingId)}
            className="bg-yellow-500 text-white px-4 py-2 rounded"
          >
            Update
          </button>
        ) : (
          <button
            onClick={addProduct}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Tambah
          </button>
        )}
      </div>

      <table className="border-collapse border border-gray-300 w-full">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Nama</th>
            <th className="border p-2">Harga</th>
            <th className="border p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td className="border p-2">{p.id}</td>
              <td className="border p-2">{p.name}</td>
              <td className="border p-2">{p.price}</td>
              <td className="border p-2">
                <button
                  onClick={() => {
                    setEditingId(p.id);
                    setName(p.name);
                    setPrice(p.price);
                  }}
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteProduct(p.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
