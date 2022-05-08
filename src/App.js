import logo from './logo.svg';
import './App.css';
//import './soccerdata.js';
const yes = "."
const frontp = (
    <html>
        

        <body>
            <div class = "header">
                <h1 class = "lol">
                    Futbol Comparator
                </h1>
            </div>

            <div class = "content">
                <h1> Search player </h1>
            </div>

            <div class = "search">
                <input type="text" placeholder="Search..." />
            </div>
            
            <div class="player-table">
                <table class="w3-table w3-striped w3-bordered">
                    <tr>
                        <th>Top Scorer</th>
                        <th>Club</th>
                        <th>Nationality</th>
                        <th>Position</th>
                    </tr>
                    <tr>
                        <td>Harry Kane</td>
                        <td>Tottenham Hotspur</td>
                        <td>England</td>
                        <td>Str</td>
                    </tr>

                    <tr>
                        <td>Mohamed Salah</td>
                        <td>Liverpool</td>
                        <td>England</td>
                        <td>RW</td>
                    </tr>

                    <tr>
                        <td>Sergio Aguero</td>
                        <td>Manchester City</td>
                        <td>England</td>
                        <td>Str</td>
                    </tr>
                    <tr>
                        <td>Chris Wood</td>
                        <td>Newcastle</td>
                        <td>England</td>
                        <td>Str</td>
                    </tr>
                    <tr>
                        <td>Sadio Mane</td>
                        <td>Liverpool</td>
                        <td>England</td>
                        <td>LW</td>
                    </tr>
                </table>
            </div>
        </body>
    </html>
  )

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Futbol Lookup
        </p>
        <a
          className="App-link"
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          l
        </a>
      </header>

      
      <h1> {yes} </h1>
      <h1> {frontp} </h1>

      
    </div>

    
  );
}

export default App;
