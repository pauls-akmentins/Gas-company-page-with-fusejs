import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FourOhFour: React.FC = ({}) => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => {
      clearTimeout(redirectTimeout);
    };
  }, [navigate]);

  return (
    <>Page does not exist, you will be redirected to Home page shortly...</>
  );
};

export default FourOhFour;
