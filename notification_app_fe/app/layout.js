import "./globals.css";

export const metadata = {
  title: "Notification App",
  description: "Campus Notifications",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}