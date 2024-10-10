import Link from 'next/link';

export const metadata = {
  title: 'Home - MyWebsite',
  description: 'Welcome to the homepage of MyWebsite.',
  keywords: 'home, MyWebsite, homepage',
};

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li>
            <Link href="/services">services</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
