import Link from "next/link";

const Index = () => (
  <div>
    <h3>My Todo App</h3>
    <Link href="/about">
      <a>About Project</a>
    </Link>
  </div>
);

export default Index;
