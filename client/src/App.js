import Auth from "./components/Auth/Auth";
import Map from "./components/Map/Map"

const App = () => {
    return (
        <BrowserRouter>
            <Container maxidth="lg">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/auth" exact component={Auth} />
                    <Route path="/explore" exact component={Map} />
                </Switch>
            </Container>
        </BrowserRouter>
    );
}

export default App;
