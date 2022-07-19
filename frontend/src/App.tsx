import Header from "./componets/Header";
import SalesCard from "./componets/SalesCard";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
        <ToastContainer/>
            <Header />
            <main>
                <section id="sales">
                    <div className="dsmeta-contener">
                        <SalesCard/>
                    </div>
                </section>
            </main>
        </>

    )
}

export default App;
