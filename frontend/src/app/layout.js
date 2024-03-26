
export const metadata ={
    title: 'Academy Atlas',
    description:  "Plan your courses anytime.",
  }
  

const Rootlayout = ({ children }) => (
    <html lang="en">
        <body>
            <main>{children}</main>

        </body>
    </html>
);

export default Rootlayout;