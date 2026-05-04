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

  status.innerText = "✅ Demo request submitted!";
  e.target.reset();
} catch {
  status.innerText = "❌ Something went wrong.";
}

btn.innerText = "Book My Demo";
btn.disabled = false;

};

return ( <div className="text-white">
  {/* NAVBAR */}
  <div className="max-w-6xl mx-auto p-6 flex justify-between items-center">
    <h1 className="text-xl font-semibold">ClientSync</h1>
    <a href="#demo" className="bg-indigo-600 px-4 py-2 rounded-lg">
      Book Demo
    </a>
  </div>

  {/* HERO */}
  <section className="text-center py-24 px-6">
    <motion.h1 initial="hidden" animate="show" variants={fadeUp}
      className="text-5xl font-semibold leading-tight">
      Stop Client Chaos.<br/>
      <span className="text-indigo-400">Run Your Agency Like a System.</span>
    </motion.h1>

    <p className="mt-6 text-gray-400 max-w-xl mx-auto">
      Replace scattered WhatsApp, emails, and spreadsheets with one platform 
      to manage clients, tasks, and delivery.
    </p>
  </section>

  {/* PROBLEM */}
  <section className="max-w-6xl mx-auto px-6 py-16">
    <h2 className="text-3xl font-semibold text-center">Sound familiar?</h2>

    <div className="grid md:grid-cols-3 gap-6 mt-12">
      {[
        "Endless WhatsApp threads",
        "No task visibility",
        "Constant follow-ups"
      ].map((item, i) => (
        <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show"
          className="p-6 bg-white/5 border border-white/10 rounded-xl">
          {item}
        </motion.div>
      ))}
    </div>
  </section>

  {/* FEATURES */}
  <section id="features" className="max-w-6xl mx-auto px-6 py-20">
    <h2 className="text-3xl font-semibold text-center">Everything in one place</h2>

    <div className="grid md:grid-cols-2 gap-6 mt-12">
      {[
        "Client Dashboard",
        "Task Tracking",
        "Centralized Communication",
        "Approvals Made Easy"
      ].map((item, i) => (
        <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show"
          className="p-6 bg-white/5 border border-white/10 rounded-xl">
          {item}
        </motion.div>
      ))}
    </div>
  </section>

  {/* HOW IT WORKS */}
  <section className="bg-gray-900 py-20">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-semibold">How it works</h2>

      <div className="grid md:grid-cols-3 gap-6 mt-10 text-left">
        <div>
          <h3 className="font-semibold">1. Add Clients</h3>
          <p className="text-gray-400">Bring all your clients into one system.</p>
        </div>
        <div>
          <h3 className="font-semibold">2. Assign Work</h3>
          <p className="text-gray-400">Create tasks and workflows.</p>
        </div>
        <div>
          <h3 className="font-semibold">3. Track & Deliver</h3>
          <p className="text-gray-400">Monitor progress and close faster.</p>
        </div>
      </div>
    </div>
  </section>

  {/* SOCIAL PROOF */}
  <section className="text-center py-20">
    <p className="text-gray-400 max-w-xl mx-auto">
      “We reduced client follow-ups by 60% and improved delivery speed within 2 weeks.”
    </p>
  </section>

  {/* PRICING */}
  <section className="text-center py-20">
    <h2 className="text-3xl font-semibold">Simple pricing</h2>

    <div className="mt-10 inline-block p-8 bg-white/5 border border-white/10 rounded-xl">
      <h3 className="text-lg">Starter</h3>
      <p className="text-3xl text-indigo-400 mt-2">₹999/mo</p>
    </div>
  </section>

  {/* DEMO */}
  <section id="demo" className="text-center py-20">
    <h2 className="text-3xl font-semibold">Book your demo</h2>

    <form onSubmit={handleSubmit} className="mt-10 max-w-md mx-auto space-y-4">
      <input name="name" placeholder="Name" required className="w-full p-3 rounded bg-gray-900 border"/>
      <input name="email" placeholder="Email" required className="w-full p-3 rounded bg-gray-900 border"/>
      <input name="company" placeholder="Company" className="w-full p-3 rounded bg-gray-900 border"/>

      <button className="w-full bg-indigo-600 py-3 rounded">
        Book My Demo
      </button>

      <p id="status" className="text-gray-400 text-sm"></p>
    </form>
  </section>

</div>

);
}
