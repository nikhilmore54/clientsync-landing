import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

export default function App() {

  const scriptURL = "https://script.google.com/macros/s/AKfycbzxN_eKDo3u-PFYrYkUXDOYCmXdRjpiw_fVP3MpK5_GRuECTyATMmoX0RG55bE_Fi5-/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const btn = e.target.querySelector("button");
    const status = document.getElementById("status");

    btn.innerText = "Submitting...";
    btn.disabled = true;

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      company: e.target.company.value,
    };

    try {
      await fetch(scriptURL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(data)
      });

      status.innerText = "✅ Demo request submitted!";
      e.target.reset();
    } catch {
      status.innerText = "❌ Something went wrong.";
    }

    btn.innerText = "Book My Demo";
    btn.disabled = false;
  };

  return (
    <div className="text-white">

      {/* NAVBAR */}
      <div className="max-w-6xl mx-auto flex justify-between items-center p-6">
        <h1 className="font-semibold text-xl">ClientSync</h1>
        <a href="#demo" className="bg-indigo-600 px-4 py-2 rounded-lg">
          Book Demo
        </a>
      </div>

      {/* HERO */}
      <section className="text-center py-24 px-6">
        <motion.h1 
          initial="hidden" animate="show" variants={fadeUp}
          className="text-5xl font-semibold leading-tight"
        >
          Run your client operations<br/>
          <span className="text-indigo-400">like a system.</span>
        </motion.h1>

        <motion.p 
          initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.2 }}
          className="mt-6 text-gray-400 max-w-xl mx-auto"
        >
          Replace WhatsApp chaos with a structured platform for managing clients, tasks, and delivery.
        </motion.p>

        <motion.div 
          initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.4 }}
          className="mt-10 flex justify-center gap-4"
        >
          <a href="#demo" className="bg-indigo-600 px-6 py-3 rounded-lg">
            Book Demo
          </a>
          <a href="#features" className="border border-gray-600 px-6 py-3 rounded-lg">
            See Features
          </a>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section id="features" className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-3 gap-6">
        {[
          "Client Dashboard",
          "Task Tracking",
          "Communication",
          "Approvals",
          "Workflows",
          "Visibility"
        ].map((item, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-xl bg-white/5 border border-white/10"
          >
            <h3 className="font-medium">{item}</h3>
            <p className="text-gray-400 mt-2 text-sm">
              Structured and efficient workflow.
            </p>
          </motion.div>
        ))}
      </section>

      {/* PRICING */}
      <section className="text-center py-20">
        <h2 className="text-3xl font-semibold">Simple pricing</h2>

        <div className="mt-10 inline-block p-8 bg-white/5 border border-white/10 rounded-xl">
          <h3 className="text-lg">Starter</h3>
          <p className="text-3xl mt-3 text-indigo-400">₹999/mo</p>

          <button className="mt-6 bg-indigo-600 px-6 py-2 rounded-lg">
            Start Trial
          </button>
        </div>
      </section>

      {/* DEMO FORM */}
      <section id="demo" className="text-center py-20">
        <h2 className="text-3xl font-semibold">Book your demo</h2>

        <form onSubmit={handleSubmit} className="mt-10 max-w-md mx-auto space-y-4">
          <input name="name" placeholder="Name" required className="w-full p-3 rounded bg-gray-900 border border-gray-700"/>
          <input name="email" placeholder="Email" required className="w-full p-3 rounded bg-gray-900 border border-gray-700"/>
          <input name="company" placeholder="Company" className="w-full p-3 rounded bg-gray-900 border border-gray-700"/>

          <button className="w-full bg-indigo-600 py-3 rounded">
            Book My Demo
          </button>

          <p id="status" className="text-sm text-gray-400"></p>
        </form>
      </section>

    </div>
  );
}
