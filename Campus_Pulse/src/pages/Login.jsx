import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Login() {
  const [step, setStep] = useState(1); // 1 = role, 2 = email/password
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRoleSelect = () => {
    if (!role) return alert("Please select a role");
    setStep(2);
  };

  const handleLogin = () => {
    if (!email || !password) {
      alert("Enter valid email and password");
      return;
    }

    // For demo: store in localStorage
    localStorage.setItem("userRole", role);
    localStorage.setItem("userEmail", email);
    navigate("/events");
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-300 via-blue-200 to-blue-100 flex items-center justify-center px-4">
      <motion.div
        className="bg-white/30 backdrop-blur-lg shadow-xl rounded-2xl p-8 max-w-sm w-full border border-white/40"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          CampusPulse Login
        </h2>

        {step === 1 ? (
          <>
            <label className="block mb-2 text-gray-700 font-medium">
              Select Your Role:
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 mb-6"
            >
              <option value="">-- Choose --</option>
              <option value="student">🎓 Student</option>
              <option value="leader">👑 Club Leader</option>
            </select>

            <button
              onClick={handleRoleSelect}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
            >
              Continue
            </button>
          </>
        ) : (
          <>
            <label className="block mb-1 text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border px-3 py-2 rounded-lg mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="block mb-1 text-gray-700 font-medium">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border px-3 py-2 rounded-lg mb-6"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={handleLogin}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition"
            >
              Login
            </button>

            <button
              onClick={() => setStep(1)}
              className="w-full mt-3 text-sm text-gray-600 underline"
            >
              ⬅ Back to Role Selection
            </button>
          </>
        )}
      </motion.div>
    </div>
  );
}

export default Login;
