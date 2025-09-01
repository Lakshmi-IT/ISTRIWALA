


import { useEffect, useState } from "react";
import axios from "axios";
import { User, MapPin } from "lucide-react";
import { toast } from "react-toastify";
import { BASE_URL } from "../utils/url";

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [form, setForm] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [loadingLocation, setLoadingLocation] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) return;
        axios
            .get(`${BASE_URL}api/user/profile`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
                setUser(res.data.user);
                setForm(res.data.user);
            })
            .catch((err) => console.error(err));
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token");
        const formData = new FormData();

        for (let key in form) {
            formData.append(key, form[key] || "");
        }

        try {
            const res = await axios.put(
                `${BASE_URL}api/user/update`,
                formData,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setUser(res.data);
            setIsEditing(false);
            toast.success(res.data.message || "✅ Profile updated successfully!");
        } catch (err) {
            toast.error(
                "❌ Failed to update profile."
            );
            console.error(err);

        }
    };

    // 🌍 Autofill location using GPS + Reverse Geocoding
    const fillWithCurrentLocation = async () => {
        if (!navigator.geolocation) {
            toast.error("❌ Geolocation is not supported by your browser");
            return;
        }

        setLoadingLocation(true);

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;

                try {
                    // Call backend proxy (not directly Nominatim → avoids CORS issues)
                    const res = await axios.get(
                        `${BASE_URL}api/user/reverse-geocode?lat=${latitude}&lon=${longitude}`
                    );

                    // Nominatim response → we only need `address`
                    const addr = res.data.address || {};

                    setForm((prev) => ({
                        ...prev,
                        hno: addr.house_number || "",
                        street: addr.road || addr.neighbourhood || "",
                        area: addr.suburb || addr.village || addr.town || addr.city || "",
                        pincode: addr.postcode || "",
                        state: addr.state || "",
                        country: addr.country || "",
                        lat: latitude || 0,
                        lng: longitude || 0
                    }));

                    toast.success("📍 Location fetched successfully!");
                } catch (error) {
                    console.error("Frontend location error:", error.response?.data || error.message);
                    toast.error("❌ Failed to fetch location details");
                } finally {
                    setLoadingLocation(false);
                }
            },
            (error) => {
                console.error("Geolocation error:", error);
                toast.error("❌ Unable to fetch location from device");
                setLoadingLocation(false);
            },
            { enableHighAccuracy: true, timeout: 10000 } // ⏳ 10s timeout for slow GPS
        );
    };


    if (!user) {
        return (
            <div className="flex justify-center items-center p-6">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <User className="h-7 w-7 text-blue-600" /> Profile Settings
                    </h2>
                    {!isEditing ? (
                        <button
                            type="button"
                            onClick={() => setIsEditing(true)}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Edit
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={() => {
                                setForm(user); // reset to old values
                                setIsEditing(false);
                            }}
                            className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
                        >
                            Cancel
                        </button>
                    )}
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* User Name + Email */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-1 font-medium">User Name</label>
                            <input
                                type="text"
                                name="userName"
                                value={form.userName || ""}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className="border p-2 rounded w-full disabled:cursor-not-allowed"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email || ""}
                                onChange={handleChange}
                                disabled
                                className="border p-2 rounded w-full cursor-not-allowed"
                            />
                        </div>
                    </div>

                    {/* Mobile & Alternative Mobile */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-1 font-medium">Mobile</label>
                            <input
                                type="text"
                                name="mobile"
                                value={form.mobile || ""}
                                onChange={(e) => {
                                    const value = e.target.value.replace(/\D/g, "");
                                    if (value.length <= 10) {
                                        setForm({ ...form, mobile: value });
                                    }
                                }}
                                disabled
                                required
                                pattern="\d{10}"
                                maxLength={10}
                                className="border p-2 rounded w-full cursor-not-allowed"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">
                                Alternative Mobile
                            </label>
                            <input
                                type="text"
                                name="alternativeMobile"
                                value={form.alternativeMobile || ""}
                                onChange={(e) => {
                                    const value = e.target.value.replace(/\D/g, "");
                                    if (value.length <= 10) {
                                        setForm({ ...form, alternativeMobile: value });
                                    }
                                }}
                                disabled={!isEditing}
                                required
                                pattern="\d{10}"
                                maxLength={10}
                                className="border p-2 rounded w-full disabled:cursor-not-allowed"
                            />
                        </div>
                    </div>

                    {/* Address Section with Location Button */}
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-lg">Address</h3>
                        {isEditing && (
                            <button
                                type="button"
                                onClick={fillWithCurrentLocation}
                                className="flex items-center gap-2 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition"
                            >
                                <MapPin className="h-5 w-5" />
                                {loadingLocation ? "Fetching..." : "Use My Location"}
                            </button>
                        )}
                    </div>

                    {/* House / Street */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-1 font-medium">House / Door No.</label>
                            <input
                                type="text"
                                name="hno"
                                value={form.hno || ""}
                                required
                                onChange={handleChange}
                                disabled={!isEditing}
                                className="border p-2 rounded w-full disabled:cursor-not-allowed"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Street</label>
                            <input
                                type="text"
                                name="street"
                                value={form.street || ""}
                                onChange={handleChange}
                                required
                                disabled={!isEditing}
                                className="border p-2 rounded w-full disabled:cursor-not-allowed"
                            />
                        </div>
                    </div>

                    {/* Area & Pincode */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-1 font-medium">Area</label>
                            <input
                                type="text"
                                name="area"
                                value={form.area || ""}
                                required
                                onChange={handleChange}
                                disabled={!isEditing}
                                className="border p-2 rounded w-full disabled:cursor-not-allowed"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Pincode</label>
                            <input
                                type="text"
                                name="pincode"
                                value={form.pincode || ""}
                                onChange={(e) => {
                                    const value = e.target.value.replace(/\D/g, "");
                                    if (value.length <= 6) {
                                        setForm({ ...form, pincode: value });
                                    }
                                }}
                                disabled={!isEditing}
                                required
                                pattern="\d{6}"
                                maxLength={6}
                                className="border p-2 rounded w-full disabled:cursor-not-allowed"
                            />
                        </div>
                    </div>

                    {/* State */}
                    <div>
                        <label className="block mb-1 font-medium">State</label>
                        <input
                            type="text"
                            name="state"
                            value={form.state || ""}
                            onChange={handleChange}
                            required
                            disabled={!isEditing}
                            className="border p-2 rounded w-full disabled:cursor-not-allowed"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Latitude</label>
                        <input
                            type="number"
                            name="lat"
                            value={form.lat || ""}
                            onChange={handleChange}
                            required
                            disabled={!isEditing}
                            className="border p-2 rounded w-full disabled:cursor-not-allowed"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Longitude</label>
                        <input
                            type="number"
                            name="lng"
                            value={form.lng || ""}
                            onChange={handleChange}
                            required
                            disabled={!isEditing}
                            className="border p-2 rounded w-full disabled:cursor-not-allowed"
                        />
                    </div>

                    {/* Save Button */}
                    {isEditing && (
                        <button
                            type="submit"
                            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                        >
                            Save Changes
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ProfilePage;