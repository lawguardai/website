import React from 'react';
import { Shield, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function Header() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-white/10 backdrop-blur-sm py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="w-8 h-8 text-white" />
          <h1 className="text-2xl font-bold text-white">Lawguard AI</h1>
        </div>
        <nav className="flex items-center gap-6">
          <ul className="flex gap-6">
            <li><a href="#database" className="text-white/90 hover:text-white">Database</a></li>
            <li><a href="#check" className="text-white/90 hover:text-white">Compliance Check</a></li>
            <li><a href="#playbook" className="text-white/90 hover:text-white">Playbook</a></li>
          </ul>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-white/90 hover:text-white"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
}