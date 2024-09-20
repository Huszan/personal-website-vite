import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ContactButton.scss";
import { faMailForward } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../button/Button";

interface ContactButtonProps {
  email?: string;
  subject?: string;
  body?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = (
  props: ContactButtonProps
) => {
  const {
    email = "mateuszjacenty1@gmail.com",
    subject = "Contact from Personal Website",
    body = "",
  } = props;
  const mailToLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  const onClick = () => {
    location.href = mailToLink;
  };

  return (
    <Button onClick={onClick}>
      <FontAwesomeIcon icon={faMailForward} /> Contact me
    </Button>
  );
};
