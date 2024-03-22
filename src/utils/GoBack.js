import { useNavigate } from "react-router-dom";

export default function GoBack() {
  const navigate = useNavigate();
  return () => navigate(-1);
}
