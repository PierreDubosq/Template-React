import HelloWorld from "../components/HelloWorld";
import Hello from "../interfaces/Hello.interface";

const HomePage = () => {
  const helloData: Hello = { username: "foo" };

  return (
    <div className="home-page">
      <HelloWorld hello={helloData} />
    </div>
  );
};

export default HomePage;