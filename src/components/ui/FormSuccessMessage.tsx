import { CheckCircle } from "lucide-react";

interface FormSuccessMessageProps {
  message: string;
}

export function FormSuccessMessage({ message }: FormSuccessMessageProps) {
  return (
    <div
      role="status"
      className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-800"
    >
      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
      <p>{message}</p>
    </div>
  );
}
