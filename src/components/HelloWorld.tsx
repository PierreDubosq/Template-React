import { sayHello } from "../services/hello.service";
import Hello from '../interfaces/Hello.interface';

type Props = {
  hello: Hello
}

const HelloWorld = ({ hello }: Props) => {
  sayHello();

  return (
    <div className="hello-world">
      <h1>Hello World: { hello.username }</h1>
    </div>
  );
};

export default HelloWorld;