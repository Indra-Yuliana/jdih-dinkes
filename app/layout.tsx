import './globals.css';
import NavBar from './components/NavBar';

export const metadata = {
  title: 'Tugas Next.js',
  description: 'Tugas Pertemuan 2',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
