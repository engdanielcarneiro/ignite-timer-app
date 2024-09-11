import { createContext, useContext, useState } from "react";

const CyclesContext = createContext({} as any);

export function Home() {
  const [activeCycle, setActiveCycle] = useState(0);

  return (
    <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
      <div>
        <NewCycleForm />
        <Countdown />
      </div>
    </CyclesContext.Provider>
  );
}

function NewCycleForm() {
  const { activeCycle, setActiveCycle } = useContext(CyclesContext);

  return (
    <>
      <div>
        <h1>NewCycleForm: {activeCycle}</h1>
      </div>
      <button onClick={() => setActiveCycle(activeCycle + 1)}>change</button>
    </>
  );
}

function Countdown() {
  const { activeCycle } = useContext(CyclesContext);
  return <h1>Countdown: {activeCycle}</h1>;
}
