"use client";

import Contants from "@/components/ui/Contants";
import SideBar from "@/components/ui/Sidebar";
import { isLogedIn } from "@/services/auth.service";
import { Layout } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const userLogedIn = isLogedIn();
  const [isLoding, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userLogedIn) {
      router.push("/login");
    } else {
      setIsLoading(true);
    }
  }, [router, isLoding]);

  if (!isLoding) {
    return <p>Loading</p>;
  }

  return (
    <Layout hasSider>
      <SideBar />
      <Contants>{children}</Contants>
    </Layout>
  );
};

export default DashboardLayout;
