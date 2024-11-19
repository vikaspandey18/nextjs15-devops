import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <div>
        <h1>Welcome to About Us page</h1>
        <p className="p-5">
          Go Back{" "}
          <Link href="/" className="bg-blue-500 p-3 rounded-lg hover:bg-blue-900 hover:text-white">
            Home Page
          </Link>
        </p>
      </div>
    </>
  );
};
export default AboutUs;
