import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function BackButton({ url }) {
  const navigate = useNavigate();
  return (
    <Button
      className="button--backbutton"
      variant="outline"
      marginTop={6}
      onClick={() => navigate(`/${url}`)}
    >
      Back to {url}
    </Button>
  );
}
