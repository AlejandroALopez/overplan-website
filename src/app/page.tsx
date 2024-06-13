import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      {/* Section 1: Presentation */}
      <section className="flex flex-col items-center w-full py-24 bg-wave-pattern bg-cover">
        <p className="text-4xl font-semibold text-center">Unlock Your Potential With</p>
        <p className="text-4xl font-semibold mt-1">AI-Driven Planning</p>
        <p className="text-2xl text-center font-light my-8">Let AI create a personalized plan to achieve your goals</p>
        <button className="flex items-center justify-center bg-primary rounded-2xl px-8 py-3">
          <p className="text-white text-xl">Start Now</p>
        </button>
        <p className="text-[#999999] mt-4">Get your first plan free!</p>
      </section>
      {/* Section 2: Features */}
      <section className="flex flex-col bg-[#D9D9D9] w-full p-12 gap-24">
        <div className="flex flex-row justify-between items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-4">
            <p className="text-3xl font-semibold">AI creates the plan...</p>
            <p className="text-lg font-light">Let AI make the plan for you, tailored to your specific goal and preferences.</p>
          </div>
          {/* Image Placeholder */}
          <div className="bg-gray-500 w-[500px] h-96"/>
        </div>
        <div className="flex flex-row justify-between items-center">
          {/* Image Placeholder */}
          <div className="bg-gray-500 w-[500px] h-96"/>
          {/* Text Content */}
          <div className="flex flex-col gap-4">
            <p className="text-3xl font-semibold">... so you can focus on progress</p>
            <p className="text-lg font-light">Visualize your weekly tasks on a Kanban Board, making it easy to track progress.</p>
          </div>
        </div>
      </section>
      {/* Section 3: Use Cases */}
      <section className="flex flex-col items-center bg-[#F2F2F2] w-full">
        <p className="text-3xl font-semibold text-center mt-12">Designed for Diverse Goals</p>
        <p className="text-2xl text-center font-light my-6">Learn a Skill. Build a Routine. And More.</p>
        {/* Text Animation Placeholder */}
        <div className="bg-gray-600 w-full h-24 mt-12"/>
      </section>
      {/* Section 4: Call to Action */}
      <section className="flex flex-col items-center bg-[#808080] w-full p-12 gap-8">
        <p className="text-3xl font-medium text-white">Ready to Achieve Your Goals?</p>
        <button className="flex items-center justify-center bg-white rounded-2xl px-8 py-3">
          <p className="text-xl">Start Now</p>
        </button>
      </section>
      <Footer />
    </main>
  );
}
