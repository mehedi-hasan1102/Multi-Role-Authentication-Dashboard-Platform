import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, role }) {
  const auth = useSelector((state) => state.auth);

  if (!auth.token || auth.role !== role) {
    return <Navigate to={`/login/${role}`} />;
  }

  return children;
}
