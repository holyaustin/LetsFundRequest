import { ReactNode } from "react";

export const Error = ({ children }: { children: ReactNode }) => (
  <p className="text-red-500 text-sm">{children}</p>
);
