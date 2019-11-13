import Head from 'next/head';
import TopMenu from './Menu';

const MasterPage = (props) => {
    return(
        <div>
            <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <title>BitcoinApp</title>
              <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.css"/>
            </Head>
            
            <TopMenu/>
            <div className="container mt-4">
            {props.children}
            </div>
          
        </div>
    )
}
export default MasterPage;