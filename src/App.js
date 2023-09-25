import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import { Container } from "./Components/Styles/Components.styled";
import { GlobalStyles } from "./Components/Styles/Global";
import content from "./content";
import Card from "./Components/Card";
import Footer from "./Components/Footer";

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#033'
  },
  modile: '768px',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </Container>
        <Footer />
    </ThemeProvider>
  );
}

export default App;
