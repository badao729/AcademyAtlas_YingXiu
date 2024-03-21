import Header from './components/header/Header'
import Nav from './components/nav/Nav'

export const metadata ={
    title: 'Academy Atlas',
    description:  "Plan your courses anytime.",
  }
  

const Rootlayout = ({ children }) => (
    <html lang="en">
        <body>
            <Header />
            <Nav />
            <main>{children}</main>
            <footer>Footer</footer>
        </body>
    </html>
);

export default Rootlayout;