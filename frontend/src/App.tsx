import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const token = localStorage.getItem("token");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [products, setProducts] = useState<any[]>([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");

  // Fetch Products
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/products",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchProducts();
    }
  }, []);

  // Login Function
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Invalid Credentials ❌");
    }
  };
const handleAddProduct = async (
  e: React.FormEvent
) => {
  e.preventDefault();

  try {
    await axios.post(
      "http://localhost:5000/api/products",
      {
        name,
        price,
        stock,
        category,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Product Added ✅");

    setName("");
    setPrice("");
    setStock("");
    setCategory("");

    fetchProducts();
  } catch (error) {
    console.error(error);
    alert("Failed to add product ❌");
  }
}
const handleDeleteProduct = async (
  id: string
) => {
  try {
    await axios.delete(
      `http://localhost:5000/api/products/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Product Deleted ✅");

    fetchProducts();
  } catch (error) {
    console.error(error);
    alert("Delete Failed ❌");
  }
};
  // Logout
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  // Dashboard UI
  if (user) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="bg-white shadow-lg rounded-xl p-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-blue-600">
                Retail POS Dashboard 🚀
              </h1>

              <p className="mt-2">
                Welcome, <strong>{user.name}</strong>
              </p>

              <p className="text-gray-500">
                Role: <strong>{user.role}</strong>
              </p>
            </div>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-5 py-2 rounded-lg"
            >
              Logout
            </button>
          </div>
          <h2 className="text-2xl font-bold mt-8 mb-4">
  Add Product
</h2>

<form
  onSubmit={handleAddProduct}
  className="grid grid-cols-2 gap-4 mb-8"
>
  <input
    type="text"
    placeholder="Product Name"
    className="border p-3 rounded-lg"
    value={name}
    onChange={(e) => setName(e.target.value)}
  />

  <input
    type="number"
    placeholder="Price"
    className="border p-3 rounded-lg"
    value={price}
    onChange={(e) => setPrice(e.target.value)}
  />

  <input
    type="number"
    placeholder="Stock"
    className="border p-3 rounded-lg"
    value={stock}
    onChange={(e) => setStock(e.target.value)}
  />

  <input
    type="text"
    placeholder="Category"
    className="border p-3 rounded-lg"
    value={category}
    onChange={(e) => setCategory(e.target.value)}
  />

  <button
    type="submit"
    className="col-span-2 bg-green-600 text-white p-3 rounded-lg"
  >
    Add Product
  </button>
</form>
          <h2 className="text-2xl font-bold mt-8 mb-4">
            Products
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-3">Name</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Stock</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product) => (
                  <tr
                    key={product._id}
                    className="text-center border-b"
                  >
                    <td className="p-3">{product.name}</td>
                    <td className="p-3">₹{product.price}</td>
                    <td className="p-3">{product.stock}</td>
                    <td className="p-3">{product.category}</td>
                    <td className="p-3">
  <button
    onClick={() =>
      handleDeleteProduct(product._id)
    }
    className="bg-red-500 text-white px-4 py-2 rounded-lg"
  >
    Delete
  </button>
</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  // Login UI
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">
          Retail POS
        </h1>

        <p className="text-gray-500 text-center mb-6">
          Login to continue
        </p>

        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full border border-gray-300 rounded-lg p-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter password"
            className="w-full border border-gray-300 rounded-lg p-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;