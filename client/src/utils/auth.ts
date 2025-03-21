import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    return jwtDecode<JwtPayload>(this.getToken());
  }

  loggedIn(): string {
    const token = this.getToken();
    return token;
  }

  isTokenExpired(token: string): boolean {
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      if (decoded.exp && decoded.exp * 1000 < Date.now()) {
      localStorage.removeItem('id_token');
      return true
    }
      return false;
    } catch (error) {
      console.error('Invalid token format:', error);
      localStorage.removeItem('id_token');
      return true
    }
  }

  getToken(): string {
    const loggedUser = localStorage.getItem('id_token') || '';
    return loggedUser;
  }

  login(idToken: string) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}

export default new AuthService();
