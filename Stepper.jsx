import { useLocation } from "react-router-dom";

const steps = ["/", "/step-2", "/step-3", "/review"];

export default function Stepper() {
  const location = useLocation();
  const current = steps.indexOf(location.pathname);

  return (
    <div>
      {steps.map((_, i) => (
        <span key={i}>
          {i <= current ? "●" : "○"}
        </span>
      ))}
    </div>
  );
}