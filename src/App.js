import "./App.css";
import Router from "./components/Router";

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;

/* con éste setItem guardo en mi localstorage (a nivel global) mi token */
localStorage.setItem(
  "token",
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NDY3NDM4ODIsImV4cCI6MTY4Mjc0Mzg4Miwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiY3VkaWxsZXJvLnJ1dGFzQGdtYWlsLmNvbSJ9.O_ZweCPcfBrx8QdA-myDhTk3CDjl6-__WQ1XFMI00hy1-zEVXhc2DdVIxjo5qN_SthXheiKplQgkU9SMCBJQHTneUunVKj0x3JLHVqrJR_D8ppcWf4P5lF5Eb-dsEAZW6vM49PzJwr4u96Q54kF_8elDFLAKw6PNexArNU29sGFDn8yyFmosbEKxq9A61JbPOHrzQU8LjzlzQPHX1AfnIpN4ozgcpAFFeubjZ0fVxcbyGSUkl8liaJ6Y0uZvkLls3M68kCyeIqdKraPDqspIYpdl76e9kokaRGLcrAJQDW222MlHPJiD4rO-b_s7YkgQfL6oH_hCYMizoY9BXi5NXg"
);

/* con éste getItem obtendría en cualquier punto de la aplicación mi token */
localStorage.getItem("myData");
