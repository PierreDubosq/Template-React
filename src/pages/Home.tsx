import HelloWorld from "../components/HelloWorld";
import Hello from "../interfaces/Hello.interface";

const HomePage = () => {
  const hello: Hello = { username: "foo" };

  return (
    <div className="home-page">
      <HelloWorld />
    </div>
  );
};

export default HomePage;