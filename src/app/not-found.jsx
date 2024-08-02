import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>Not founded</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link href="/">Go back to home</Link>
    </div>
  );
};

export default NotFound;
