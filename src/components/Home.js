import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardInput,
  CardButton,
} from "../styledComponents";
import ChangeThemeButton from "./ChangeButton";

const Home = () => {
  return (
    <>
      <div>
        <CardWrapper>
          <CardHeader>
            <CardHeading>Sign in</CardHeading>
          </CardHeader>
          <CardBody>
            <CardInput placeholder="Username" type="text" required />
            <CardInput placeholder="E-mail" type="text" required />
            <CardInput placeholder="Password" type="password" required />
            <CardButton type="button">Sign Up</CardButton>
          </CardBody>
        </CardWrapper>
      </div>
      <ChangeThemeButton />
    </>
  );
};

export default Home;
