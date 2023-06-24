import { useAuth } from "../../hooks/useAuth";

const Header = () => {
    const { user, setUser } = useAuth();

    return user ? (
        <>
            <h2>Welcome, {user.name}!</h2>{" "}
            <button onClick={() => setUser(null)}>Exit</button>
        </>
    ) : (
        <button onClick={() => setUser((prev) => ({ ...prev, name: "Jhon" }))}>
            Login
        </button>
    );
};

export default Header;
