import { NotificationProvider } from "@/components/shared/messages/notification";
import "@/helpers/extensions";
import ReduxWrapper from "@/lib/rtk/redux/redux-wrapper";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ANTD_THEME } from "../config/styles/antd-theme";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "project-name",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ReduxWrapper>
			<html lang="en">
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<body className={inter.className}>
					<AntdRegistry>
						<NotificationProvider>
							<ConfigProvider theme={ANTD_THEME}>{children}</ConfigProvider>
						</NotificationProvider>
					</AntdRegistry>
				</body>
			</html>
		</ReduxWrapper>
	);
}
