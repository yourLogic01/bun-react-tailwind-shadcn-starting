import { Card, CardContent } from "@/components/ui/card";
import React, { useEffect, useMemo, useState } from "react";
import { APITester } from "./APITester";
import "@/public/styles/globals.css";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";

import logo from "@/public/images/logo.svg";
import reactLogo from "@/public/images/react.svg";
import { CounterComponent } from "./components/shared/CounterComponent";
import RegistrationForm from "./components/shared/RegistrationForm";
import { Toaster } from "sonner";
import DragonBallSection from "./components/shared/DragonBallSection";

export function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="p-8 text-center relative z-10">
      <div className="mx-auto w-full max-w-2xl">
        <div className="flex justify-center items-center gap-8 mb-8">
          <img src={logo} alt="Bun Logo" className="h-36 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa] scale-120" />
          <img src={reactLogo} alt="React Logo" className="h-36 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] [animation:spin_20s_linear_infinite]" />
        </div>
        <div className="flex justify-center my-3">
          <Button variant="secondary" onClick={toggleTheme}>
            Toggle {theme === "light" ? "Dark" : "Light"}
          </Button>
        </div>
      </div>

      <div className="mx-auto w-full max-w-2xl space-y-8">
        <Card className="bg-card/50 backdrop-blur-sm border-muted">
          <CardContent className="pt-6">
            <CounterComponent />
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm border-muted">
          <CardContent className="pt-6">
            <RegistrationForm />
          </CardContent>
        </Card>
      </div>

      <div className="mx-auto mt-8 w-full max-w-6xl">
        <DragonBallSection />
      </div>

      <Toaster position="top-center" className="mt-8" />
    </div>
  );
}

export default App;
