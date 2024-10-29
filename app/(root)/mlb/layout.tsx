import { ReactNode } from "react";
import MlbMainLayout from "@/app/_components/MlbMainLayout/MlbMainLayout";

interface MLBLayoutProps {
  children: ReactNode;
}

const MLBLayout: React.FC<MLBLayoutProps> = ({ children }) => {
  return <MlbMainLayout>{children}</MlbMainLayout>;
};

export default MLBLayout;
