import "./styles.css";
import { useLogin } from "./UserContext";

const PETS = [{ name: "Pet 1" }, { name: "Pet 2" }, { name: "Pet 3" }];
export default function App() {
    const { loggedInUser } = useLogin();
  return (
    <>
    {loggedInUser.admin && <button>Create Pet</button>}
    {PETS.map((pet) => (
        <div key={pet.name}>
          <p>{pet.name}</p>
          {loggedInUser.admin && (
            <>
              <button>edit</button>
              <button>delete</button>
    </>