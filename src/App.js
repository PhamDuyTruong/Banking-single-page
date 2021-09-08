import Header from "./Components/Header";
import { OuterLayout } from "./styles/Layouts";
import { Fade } from "react-reveal";
import Flip from 'react-reveal/Flip';
import CardSection from "./Components/CardSection";
import ChartSection from "./Components/ChartSection";
import MessageSection from "./Components/MessageSection";
import PaymentSection from "./Components/PaymentSection";
import FAQSection from "./Components/FAQSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <OuterLayout>
            <Fade left>
                <CardSection />
            </Fade>
            <Fade right>
                <ChartSection />
            </Fade>
            <Fade left>
                <MessageSection />
            </Fade>
            <Flip right>
                <PaymentSection />
            </Flip>
            <Fade bottom>
                <FAQSection />
            </Fade>
        </OuterLayout>
        <Fade left>
            <Footer />
        </Fade>
    </div>
  );
}

export default App;
