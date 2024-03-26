import Nav from '../../components/nav/Nav';

export const metadata = {
    title: 'About | Academy Atlas',
    description: "Plan your courses anytime.",
}


const Layout = ({ children }) => (

    <article>
        <Nav />
        {children}
    </article>


);

export default Layout;