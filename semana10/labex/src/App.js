import { Router } from './components/Router/Router';
function App() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <style
        dangerouslySetInnerHTML={{
          __html: `
                              
                                * {
                                   font-family: 'Bebas Neue', cursive;
                                }
                                body {
                                  max-width: 100vw;
                                  
                                }
                                @font-face {
                                    font-family:  'Bebas Neue';
                                    src:
                                    url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
                                                
                                    
                                }
                        `,
        }}
      />
      <Router />
    </>
  );
}
export default App;
