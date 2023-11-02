import './App.css';
import AppDrawer from './AppDrawer';

const menu = [
  { id: 1, name: 'About' },
  { id: 2, name: 'Get Started' },
  { id: 3, name: 'Sign In' },
];

function App() {
  return <AppDrawer menuList={menu} />;
}

export default App;
