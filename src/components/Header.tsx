import { useAuth } from '../context/auth-context';

function Header() {
  const { logout, authUser } = useAuth();

  return (
    <div>
      <p>header</p>
      <button onClick={() => logout()}>logout</button>
      <p>{authUser?.displayName}</p>
    </div>
  );
}

export default Header;
