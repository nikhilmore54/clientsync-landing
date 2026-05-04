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

    try {
      await fetch(scriptURL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          company: e.target.company.value
        })
      });

      status.innerText = "✅ Submitted!";
      e.target.reset();
    } catch {
      status.innerText = "❌ Error";
    }

    btn.innerText = "Book My Demo";
    btn.disabled = false;
  };

  return (
    <div className="text-white">

      <div className="max-w-6xl mx-auto p-6 flex justify-between">
        <h1 className="font-semibold text-xl">ClientSync</h1>
        <a href="#demo" className="bg-indigo-600 px-4 py-2 rounded">Book Demo</a>
      </div>

      <section className="text-center py-24">
        <motion.h1 initial="hidden" animate="show" variants={fadeUp}
          className="text-5xl font-semibold">
          Run your client operations<br/>
          <span className="text-indigo-400">like a system.</span>
        </motion.h1>

        <motion.p initial="hidden" animate="show" variants={fadeUp}
          className="mt-6 text-gray-400">
          Replace chaos with structured workflows.
        </motion.p>
      </section>

      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
        {["Clients", "Tasks", "Communication"].map((x,i)=>(
          <motion.div key={i} initial="hidden" whileInView="show"
            variants={fadeUp}
            className="p-6 rounded-xl bg-white/5 border border-white/10">
            {x}
          </motion.div>
        ))}
      </section>

      <section id="demo" className="text-center py-20">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <input name="name" placeholder="Name" required className="w-full p-3 rounded bg-gray-900 border"/>
          <input name="email" placeholder="Email" required className="w-full p-3 rounded bg-gray-900 border"/>
          <input name="company" placeholder="Company" className="w-full p-3 rounded bg-gray-900 border"/>

          <button className="w-full bg-indigo-600 py-3 rounded">
            Book Demo
          </button>

          <p id="status" className="text-gray-400 text-sm"></p>
        </form>
      </section>

    </div>
  );
}
