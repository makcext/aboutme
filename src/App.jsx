import logo from "./logo.svg";
import "./App.css";
import { Box, Button, CardContent, Typography } from "@mui/material";
import QRsvg from "./components/qrsvg";

function Logo() {
  return (




    
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100" className="App-logo" style={{ padding: '8px' }}>
      <rect x="0" y="0" width="100" height="100" fill="#282c34" />
      <text x="50" y="60" fontSize="50" fill="#fff" textAnchor="middle">dev</text>
    </svg>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" />

        <Typography variant="overline" fontSize={24} component="div" gutterBottom>
          makcext front-end developer
        </Typography>

        <p>
          scan <code>&</code> save.
        </p>

        <p>
          react <code>|</code> material-ui <code>|</code> mobx <code>|</code> graphql
        </p>
      </header>


      <div className="App-body">
        <Box maxWidth="lg" sx={{ minWidth: 300, background: "#282c34" }}>
          <CardContent
            sx={{ minWidth: 300, background: "#282c34" }}
          >
      
        <Typography
          variant="h4"
          sx={{
            background: 'linear-gradient(to bottom, #555, #999)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            // WebkitLineClamp: 5,
            // WebkitBoxOrient: 'vertical',
            position: 'relative',
            textAlign: 'justify',
          }}
        >    

        <QRsvg />
        {/* import svg qr-code */}

          It involves the implementation of designs and interactions that users see and interact with directly in their web browsers. 
          Frontend developers use a combination of programming languages, frameworks, and tools to build dynamic, responsive, and visually appealing web applications.
        </Typography>

          </CardContent>

          <a
          className="App-link"
          href="https://t.me/makcext"
          target="_blank"
          rel="noopener noreferrer"
          >
          connect
          </a>

          <Typography variant="overline" align="right"> version</Typography>

        </Box>

      </div>
    </div>
  );
}

export default App;
