import logo from './logo.svg';
import './App.css';
import AppRoutes from './routes/web';

function App() {
  let role = sessionStorage.getItem('role')
  if(role === 'Admin' || role === 'Coach'){
    document.title = `Enhapp | ${role}`
  }else{
    document.title = `Enhapp`
  }
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
