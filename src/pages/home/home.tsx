import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const Home = () => {
    const useStyles = makeStyles((theme) => {
        return {
            heading: {
                color:'red',
            }
        }
    });

    const styles = useStyles();
    return (
        <h2 className={styles.heading}>I am the home Page</h2>
    )
}

export default Home;