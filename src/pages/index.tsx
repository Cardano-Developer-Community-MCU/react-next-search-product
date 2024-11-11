import { useState, useEffect } from "react";

export default function Home() {
  const [product, setProduct] = useState({
    id: "",
    title: "",
  });
  const [id, setId] = useState<string>("");

  useEffect(() => {
    getProduct(id);
  }, [id]);

  async function getProduct(id: string) {
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function searchHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value;
    setId(value);
  }

  return (
    <div className="flex justify-center items-center min-h-screen text-center">
      <div className="border border-black p-12 rounded-xl flex-col justify-center items-center">
        <div className="mb-4">
          <input
            type="text"
            className="border border-black px-4 py-2 rounded-lg w-full"
            placeholder="Masukan Product-ID"
            onChange={searchHandler}
          />
        </div>
        <div>
          <table>
            <thead>
              <tr className="bg-slate-300">
                <th className="px-4 py-2 border border-black">Product-ID</th>
                <th className="px-4 py-2 border border-black w-72">
                  Product-Name
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-slate-100">
                <th className="px-4 py-2 border border-black">
                  {!product.id ? "NULL" : product.id}
                </th>
                <th className="px-4 py-2 border border-black w-72">
                  {!product.title ? "NULL" : product.title}
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
