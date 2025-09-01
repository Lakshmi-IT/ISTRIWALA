import { useEffect, useState } from "react";
import { ShoppingCart, PlusCircle, Trash2, LocateIcon, MapPin, CreditCard, UserPlus } from "lucide-react";
import laundry from "../assets/Laundry.png"
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils/url"


const categories = {
    men: [
        { name: "Men shirt", price: 20 },
        { name: "T-shirt", price: 20 },
        { name: "Pant", price: 20 },
        { name: "Jeans pant", price: 20 },
        { name: "Silk shirt", price: 30 },
        { name: "Dhoti", price: 20 },
        { name: "Pancha", price: 20 },
        { name: "Pattu pancha", price: 50 },
        { name: "Pipancha", price: 15 },
        { name: "Short", price: 20 },
        { name: "Kurta", price: 20 },
        { name: "Night pant", price: 20 },
        { name: "Men woolen", price: 30 },
        { name: "Coat", price: 60 },
        { name: "Waistcoat", price: 20 },
        { name: "Long coat", price: 60 },
        { name: "Jacket", price: 60 },
        { name: "Hoodie", price: 30 },
        { name: "Leather jacket", price: 100 },
        { name: "Sweat shirt", price: 60 },
        { name: "Sweater", price: 60 },
        { name: "Kurta heavy", price: 30 },
        { name: "Safari suit coat", price: 60 },
        { name: "Capri", price: 20 },
        { name: "Sweat pant", price: 30 },
        { name: "Track pant", price: 30 },
        { name: "Swimming dress", price: 20 },
        { name: "Underwears", price: 15 },
    ],

    women: [
        { name: "Kurta plane", price: 20 },
        { name: "Salwar plain", price: 20 },
        { name: "Top plane", price: 20 },
        { name: "Dupatta", price: 10 },
        { name: "Legging", price: 20 },
        { name: "Dress bottom", price: 20 },
        { name: "Saree plain", price: 25 },
        { name: "Blouse", price: 5 },
        { name: "Plazo plane", price: 20 },
        { name: "Petticoat", price: 10 },
        { name: "Dress set", price: 50 },
        { name: "Kurta heavy", price: 60 },
        { name: "Salwar very heavy", price: 40 },
        { name: "Plazo very heavy", price: 40 },
        { name: "Dupatta heavy", price: 30 },
        { name: "Pattu saree", price: 40 },
        { name: "Work saree", price: 60 },
        { name: "Blouse heavy", price: 15 },
        { name: "Dress set heavy", price: 75 },
        { name: "Dress set long", price: 50 },
        { name: "Dress set long heavy", price: 100 },
        { name: "Lehenga set plain", price: 70 },
        { name: "Lehenga set heavy", price: 100 },
        { name: "Bridal lehenga set", price: 200 },
        { name: "Bridal lehenga blouse", price: 50 },
        { name: "skirt plain", price: 20 },
        { name: "skirt heavy", price: 50 },
        { name: "Top heavy", price: 50 },
        { name: "Shirt", price: 20 },
        { name: "T-shirt", price: 20 },
        { name: "Pant", price: 20 },
        { name: "Jeans", price: 20 },
        { name: "Capri", price: 20 },
        { name: "Stole", price: 10 },
        { name: "Court", price: 50 },
        { name: "Jacket", price: 35 },
        { name: "Sweater", price: 50 },
        { name: "Track pant", price: 20 },
        { name: "Scarf", price: 20 },
        { name: "Jumper", price: 50 },
        { name: "Dangre", price: 20 },
        { name: "Slacks", price: 20 },
        { name: "Shawl", price: 20 },   // matched to "Shawl"
        { name: "Long coat", price: 45 },
        { name: "Kudi", price: 35 },
        { name: "Long pullover", price: 50 },
        { name: "Stocking", price: 10 },
        { name: "Sweat shirt with hoodi", price: 35 },
        { name: "Nighties", price: 20 },
    ],

    kids: [
        { name: "T-shirt", price: 15 },
        { name: "Shirt", price: 15 },
        { name: "Pant", price: 15 },
        { name: "Jeans", price: 15 },
        { name: "Frock", price: 15 },
        { name: "Skirt", price: 15 },
        { name: "Top", price: 15 },
        { name: "Long top", price: 15 },
        { name: "Shorts", price: 15 },
        { name: "Capri", price: 15 },
        { name: "Kurta plane", price: 15 },
        { name: "Salwar plain", price: 15 },
        { name: "Blouse", price: 15 },
        { name: "Dress set plain", price: 30 },
        { name: "Dress set heavy", price: 50 },
        { name: "Dupatta plane", price: 15 },
        { name: "Dupatta heavy", price: 20 },
        { name: "Legging", price: 15 },
        { name: "Frock heavy", price: 40 },
        { name: "Skirt heavy", price: 40 },
        { name: "Sherwani set", price: 75 },
        { name: "Kurta heavy", price: 30 },
        { name: "Salwar heavy", price: 30 },
        { name: "Blouse heavy", price: 25 },
        { name: "Lehenga", price: 50 },
        { name: "Lehenga heavy", price: 75 },
        { name: "Court", price: 40 },   // your list says "Court", corrected to Coat
        { name: "Waistcoat", price: 20 },
        { name: "Jacket", price: 25 },
        { name: "Sweater", price: 30 },
        { name: "Track pant", price: 20 },
        { name: "Socks pair", price: 10 },
        { name: "Baby blanket", price: 30 },
    ],

    others: [
        { name: "Towels", price: 20 },
        { name: "Blanket", price: 50 },
        { name: "Bed sheet", price: 30 },
        { name: "Pillow covers set", price: 10 },
        { name: "Bathroob", price: 50 },
        { name: "Hand karchief", price: 10 },
        { name: "Muffler", price: 20 },
        { name: "Tie", price: 10 },
        { name: "Uniform set", price: 50 },
        { name: "Sofa covers", price: 50 },
    ]

};



export default function OrderPage() {
    const [selectedCategory, setSelectedCategory] = useState("men");
    const [selectedItem, setSelectedItem] = useState("");
    const [qty, setQty] = useState(1);
    const [cart, setCart] = useState([]);
    const [message, setMessage] = useState("");
    const [address, setAddress] = useState([])

    const [cartData, setCartData] = useState([])
    const [fullcartDetails, setFullcartDetails] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)




    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredItems = categories[selectedCategory].filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );


    const [paymentMethod, setPaymentMethod] = useState("cod");

    const navigate = useNavigate();


    // Example addresses






    const sendCartToBackend = async (itemData) => {
        try {
            const token = localStorage.getItem("token");

            const response = await fetch(`${BASE_URL}api/cart/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    item: itemData.item,
                    category: itemData.category,
                    qty: itemData.qty,
                    price: itemData.price,
                }),
            });

            const data = await response.json();
            console.log(data, "data");

            if (response.ok) {
                setCartData(data?.cart?.items);
                setFullcartDetails(data?.cart)
                setTotalAmount(data?.cart?.totalPrice);
                toast.success(data.message || "✅ Cart updated successfully!");
            } else {
                console.error("Error updating cart:", data.error);
            }
        } catch (err) {
            console.error("Failed to send cart:", err);
        }
    };





    const handleAddToCart = () => {
        if (!selectedItem || qty < 1) return;

        const itemData = categories[selectedCategory].find(
            (i) => i.name === selectedItem
        );
        if (!itemData) return;

        setCart((prev) => {
            const existingIndex = prev.findIndex(
                (i) => i.item === selectedItem && i.category === selectedCategory
            );

            let updatedCart;
            if (existingIndex >= 0) {
                updatedCart = [...prev];
                updatedCart[existingIndex].qty += qty;
            } else {
                updatedCart = [
                    ...prev,
                    { category: selectedCategory, item: selectedItem, qty, price: itemData.price },
                ];
            }

            // ✅ send only the new/updated item to backend
            sendCartToBackend({
                item: selectedItem,
                category: selectedCategory,
                qty,
                price: itemData.price,
            });

            return updatedCart;
        });

        setSelectedItem("");
        setQty(1);
    };

    const handleQuantityChange = (index, delta) => {
        setCartData(prev => {
            if (!prev || !prev[index]) return prev; // ✅ Safety check
            const updated = [...prev];
            const newQty = updated[index].qty + delta;
            if (newQty < 1) return updated;
            updated[index].qty = newQty;

            // Call backend
            updateCartItemBackend(updated[index].item, newQty);

            return updated;
        });
    };




    const updateCartItemBackend = async (itemId, qty) => {
        try {

            console.log(itemId, qty, "itemId,qty ")
            const token = localStorage.getItem("token"); // get user token

            const response = await fetch(`${BASE_URL}api/cart/update-item`, {
                method: "PATCH", // assuming your backend route uses PUT
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ itemId, qty }),
            });

            const data = await response.json();

            if (response.ok) {

                console.log(data, "dataaaa")

                setCartData(data?.cart?.items);
                setFullcartDetails(data?.cart)
                setTotalAmount(data?.cart?.totalPrice)

                toast.success(data.message || "✅ Cart Quantity updated successfully!");
                console.log("Cart item updated successfully", data.cart);
            } else {
                toast.error(
                    err.response?.data?.message || "❌ Registration failed. Try again."
                );
                console.error("Error updating cart item:", data.error);
            }

            return data.cart; // return updated cart if needed
        } catch (err) {
            console.error("Failed to update cart item:", err);
        }
    };

    const deleteCartItemBackend = async (itemId) => {
        try {
            const token = localStorage.getItem("token");

            const response = await fetch(`${BASE_URL}api/cart/remove-item`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ itemId }), // ✅ itemId in body
            });

            const data = await response.json();

            if (response.ok) {
                setCartData(data?.cart?.items);
                setFullcartDetails(data?.cart);
                setTotalAmount(data?.cart?.totalPrice)
                toast.success(data.message || "✅ Item removed from cart!");

                return data.cart; // updated cart
            } else {
                console.error("Error removing cart item:", data.error);
            }
        } catch (err) {
            console.error("Failed to remove cart item:", err);
        }
    };





    // ✅ Remove item
    const handleRemove = (index) => {
        setCart((prev) => prev.filter((_, i) => i !== index));
    };



    // ✅ Place order (POST API call)



    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) return;

        axios
            .get(`${BASE_URL}api/user/profile`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
                const user = res.data.user;

                // ✅ Transform into address object
                const formattedAddress = {
                    id: user._id,
                    label: "Home",
                    details: `${user.hno}, ${user.street}, ${user.area}, ${user.state} - ${user.pincode}`,
                    mobile: user.mobile,
                    altMobile: user.alternativeMobile,
                    email: user.email,
                };

                setAddress([formattedAddress]);
            })
            .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) return;
        axios
            .get(`${BASE_URL}api/cart`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
                setFullcartDetails(res?.data)

                setCartData(res?.data?.items);
                setTotalAmount(res?.data?.totalPrice)
            })
            .catch((err) => console.error(err));
    }, []);


    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);


    const handlePlaceOrder = async () => {

        console.log("clicked")
        const token = localStorage.getItem("token");
        console.log(token, "token")

        if (paymentMethod === "cod") {
            // Direct COD Order
            await fetch(`${BASE_URL}api/orders/create`, {
                method: "POST",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
                //   body: JSON.stringify({ cartId, addressId, paymentMethod: "COD" }),
                body: JSON.stringify({
                    cartId: fullcartDetails?._id,
                    userId: address[0]?._id,
                    paymentMethod: "COD"
                }),
            });
            toast.success("✅ Order Placed successfully!");
            navigate("/yourorders");

            return;
        }

        console.log(paymentMethod)

        if (paymentMethod === "razorpay") {
            // Step 1: Create Razorpay order
            const res = await fetch(`${BASE_URL}api/orders/payment/order`, {
                method: "POST",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
                body: JSON.stringify({ cartId: fullcartDetails?._id, }),
            });
            const { razorpayOrder } = await res.json();

            // Step 2: Open Razorpay
            const options = {
                key: "rzp_test_R9TVNL20x37y6X",
                amount: razorpayOrder.amount,
                currency: "INR",
                name: "Lakshmi IT Pvt Ltd",
                order_id: razorpayOrder.id,
                handler: async function (response) {
                    // Step 3: Verify & create final order
                    const verifyRes = await fetch(`${BASE_URL}api/orders/verify`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
                        body: JSON.stringify({
                            razorpayOrderId: response.razorpay_order_id,
                            razorpayPaymentId: response.razorpay_payment_id,
                            razorpaySignature: response.razorpay_signature,
                            cartId: fullcartDetails?._id,
                            userId: address[0]?._id,
                        }),
                    });
                    const verifyData = await verifyRes.json();
                    if (verifyData.success) {
                        navigate("/yourorders");
                        toast.success("✅ Payment successful, order created!");

                    }
                    else {
                        toast.error(
                            err.response?.data?.message || "❌  Payment verification failed! failed. Try again."
                        );
                    }

                },
            };
            new window.Razorpay(options).open();
        }
    };








    const isInvalidAddress =
        !address.length ||
        !address[0].details ||
        address[0].details.replace(/undefined|,|-|\s/g, "") === "";

    // console.log(cartData, "cartData")

    const totalPrice = cartData?.reduce((acc, curr) => acc + (curr?.price * curr?.qty), 0);

    // console.log("Total Price:", totalPrice);

    let errorMessage = "";
    if (cartData?.length === 0) {
        errorMessage = "Your cart is empty. Please add items before placing an order.";
    } else if (isInvalidAddress) {
        errorMessage = "Please select a valid delivery address.";
    } else if (totalPrice < 200) {
        errorMessage = "Minimum order value is ₹200.";
    }




    return (
        <div className="max-w-full mx-auto px-5 lg:px-14 my-5 grid md:grid-cols-3 gap-6">
            {/* LEFT: Select Items */}
            <div className="bg-blue-50 p-6 rounded-xl shadow lg:h-[80vh] h-[fit-content]">
                <h1 className="text-2xl font-bold mb-4 text-blue-700">
                    Select Items <PlusCircle className="inline ml-2" />
                </h1>

                {/* Category Selector */}
                <div className="mb-3">
                    <label className="font-semibold">Select Category:</label>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="ml-2 border p-2 rounded"
                    >
                        {Object.keys(categories).map((cat) => (
                            <option key={cat} value={cat}>
                                {cat.toUpperCase()}
                            </option>
                        ))}
                    </select>
                </div>



                <div className="mb-3 relative">
                    <label className="font-semibold">Select Item:</label>
                    <div
                        className="mt-2 border p-2 rounded w-full cursor-pointer"
                        onClick={() => setOpen(!open)}
                    >
                        {selectedItem || "-- choose --"}
                    </div>

                    {open && (
                        <div className="absolute z-10 mt-1 w-full bg-white border rounded shadow-lg max-h-60 overflow-y-auto">
                            {/* Search Input */}
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full p-2 border-b"
                            />

                            {/* Items */}
                            {filteredItems.length > 0 ? (
                                filteredItems.map((item) => (
                                    <div
                                        key={item.name}
                                        onClick={() => {
                                            setSelectedItem(item.name);
                                            setOpen(false);
                                            setSearchTerm("");
                                        }}
                                        className="p-2 hover:bg-blue-100 cursor-pointer"
                                    >
                                        {item.name}
                                        {/* (₹{item.price}) */}
                                    </div>
                                ))
                            ) : (
                                <div className="p-2 text-gray-500">No items found</div>
                            )}
                        </div>
                    )}
                </div>

                {/* Quantity */}
                <div className="mb-3">
                    <label className="font-semibold">Quantity:</label>
                    <input
                        type="number"
                        value={qty}
                        min="1"
                        onChange={(e) => setQty(parseInt(e.target.value))}
                        className="ml-2 border p-2 rounded w-20"
                    />
                </div>

                {/* Add to cart */}
                <button
                    onClick={handleAddToCart}
                    className="bg-blue-600 text-white px-4 py-2 rounded flex items-center"
                >
                    <PlusCircle className="mr-2" /> Add to Cart
                </button>
            </div>

            {/* RIGHT: Cart */}
            <div className="bg-white p-6 rounded-xl shadow lg:h-[80vh]  h-[fit-content]">
                <h2 className="text-2xl font-bold mb-4 text-blue-700 flex items-center">
                    <ShoppingCart className="mr-2" /> Your Cart
                </h2>

                {cartData?.length === 0 ? (
                    <div className="flex flex-col justify-center items-center">
                        <img src={laundry} alt="laundry" className="w-[300px] " />
                        <p className="text-gray-500">No items yet.</p>
                    </div>
                ) : (
                    <div>

                        <ul className="divide-y overflow-y-scroll lg:h-[70vh]   ">
                            {cartData?.map((c, index) => (
                                <li key={index} className="py-3 flex justify-between items-center">
                                    <div>
                                        <p className="font-semibold">{c.item}</p>
                                        <p className="text-sm text-gray-500">
                                            {c.category} • ₹{c.price} × {c.qty} ={" "}
                                            <span className="font-bold">₹{c.price * c.qty}</span>
                                        </p>
                                        {/* Quantity controls */}
                                        <div className="flex items-center mt-1 gap-2">
                                            <button
                                                onClick={() => handleQuantityChange(index, -1)}
                                                className="bg-gray-200 px-2 rounded"
                                            >
                                                -
                                            </button>
                                            <span>{c.qty}</span>
                                            <button
                                                onClick={() => handleQuantityChange(index, 1)}
                                                className="bg-gray-200 px-2 rounded"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => {
                                            handleRemove(index);
                                            deleteCartItemBackend(c?._id);
                                        }}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        <Trash2 />
                                    </button>

                                </li>
                            ))}
                            <hr className="border-t-2  my-4" />
                        </ul>




                    </div>
                )}


            </div>

            {/* address */}
            <div className="bg-white p-6 rounded-xl shadow lg:h-[80vh] h-[fit-content] overflow-y-auto">
                <h2 className="text-2xl font-bold mb-4 text-blue-700 flex items-center">
                    <MapPin className="mr-2" /> Delivery Address
                </h2>

                {/* Address List */}

                <div className="space-y-4">
                    {address.map((addr) => (
                        <label
                            key={addr.id}
                            className={`flex items-start p-3 border rounded-lg 
                               
                                `}
                        >
                            <input
                                type="radio"
                                name="address"
                                value={addr.id}
                                checked="true"
                                // onChange={() => setSelectedAddress(addr.id)}
                                className="mt-1 mr-3"
                            />

                            {isInvalidAddress ? (
                                <div>

                                    <div className="flex justify-center">

                                        <Link to={"/ProfilePage"}>
                                            <button
                                                type="button"
                                                className="flex items-center gap-2 bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition"
                                            >
                                                <UserPlus className="h-5 w-5" /> Add Address
                                            </button>
                                        </Link>
                                    </div>

                                </div>
                            ) : (
                                <div>

                                    <div className="flex justify-between">
                                        <p className="font-semibold">{addr.label}</p>
                                        <Link to={"/ProfilePage"}>
                                            <p className="text-blue-500 font-semibold cursor-pointer">Edit</p>
                                        </Link>
                                    </div>
                                    <p className="text-sm text-gray-600">{addr.details}</p>
                                </div>
                            )}


                        </label>
                    ))}
                </div>

                {/* Payment Method */}
                <h2 className="text-xl font-bold mt-6 mb-3 text-blue-700 flex items-center">
                    <CreditCard className="mr-2" /> Payment Method
                </h2>

                <div className="space-y-3">
                    {/* <label className="flex items-center p-3 border rounded-lg cursor-pointer">
                        <input
                            type="radio"
                            name="payment"
                            value="razorpay"
                            checked={paymentMethod === "razorpay"}
                            onChange={() => setPaymentMethod("razorpay")}
                            className="mr-3"
                        />
                        Razorpay (UPI, Card, NetBanking)
                    </label> */}

                    <label className="flex items-center p-3 border rounded-lg cursor-pointer">
                        <input
                            type="radio"
                            name="payment"
                            value="cod"
                            checked={paymentMethod === "cod"}
                            onChange={() => setPaymentMethod("cod")}
                            className="mr-3"
                        />
                        Cash on Delivery
                    </label>
                </div>

                {/* Place Order */}
                <div className="mt-4 font-bold text-lg text-blue-800"> Total: ₹{totalAmount} </div>
                {console.log(address, "address")}
                {console.log(address.length, "address length")}


                {/* // then render */}
                {console.log(cartData, "cartData")}
                <div>
                    <button
                        onClick={handlePlaceOrder}
                        disabled={!!errorMessage}
                        className={`bg-green-600 text-white px-4 py-2 rounded mt-6 w-full font-semibold ${errorMessage ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                    >
                        Place Order
                    </button>

                    {/* Error message below button */}
                    {errorMessage && (
                        <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
                    )}
                </div>

            </div>
        </div>
    );
}
