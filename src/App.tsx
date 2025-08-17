import { Card, CardContent } from "@/components/ui/card";
import React, { useState } from "react";
import { APITester } from "./APITester";
import "@/public/styles/globals.css";

import logo from "@/public/images/logo.svg";
import reactLogo from "@/public/images/react.svg";
import { CounterComponent } from "./components/shared/CounterComponent";
import RegistrationForm from "./components/shared/RegistrationForm";
import { Toaster } from "sonner";
import ProfileCard from "./components/shared/ProfileCard";
import { profileData } from "./data";


export function App() {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };
  return (
    <div className="container mx-auto p-8 text-center relative z-10">
      <div className="flex justify-center items-center gap-8 mb-8">
        <img src={logo} alt="Bun Logo" className="h-36 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa] scale-120" />
        <img src={reactLogo} alt="React Logo" className="h-36 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] [animation:spin_20s_linear_infinite]" />
      </div>

      <Card className="bg-card/50 backdrop-blur-sm border-muted my-2">
        <CardContent className="pt-6">
          <CounterComponent count={count} onIncrement={handleIncrement} onDecrement={handleDecrement} />

          <button onClick={handleReset} className="px-6 mt-2 py-2 rounded-md bg-yellow-500 text-white font-medium hover:bg-yellow-600 transition">
            Reset Counter
          </button>
        </CardContent>
      </Card>

      <Card className="bg-card/50 backdrop-blur-sm border-muted mt-8">
        <CardContent className="pt-6">
          <RegistrationForm />
        </CardContent>
      </Card>
      <Toaster position="top-center" className="mt-8" />

      <ProfileCard name={profileData.name} description={profileData.description} image={profileData.image} socialMedia={profileData.socialMedia} />

    </div>
  );
}

export default App;
