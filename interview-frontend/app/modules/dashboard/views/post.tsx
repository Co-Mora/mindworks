import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAllPosts } from '../../action';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    table: {
        minWidth: 450,
    },
    container: {
        margin: "120px auto",
        width: 1000,
        height: 300
    }
});


interface Props {
    posts: any;
    fetchAllPosts: () => void;
}
const Post: React.FC<Props> = ({ posts, fetchAllPosts }) => {
    const classes = useStyles();

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchAllPosts();
        console.log("data: ", posts);
        setData(posts);
        return () => {

        };
    }, [posts.length, data])
    return (
        <div className={classes.container}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">Body</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {posts.map((row) => (
                            <TableRow key={row.id}>
                                <Link to={`/posts/${row.id}/comment`}>
                                    <TableCell align="right">{row.title}</TableCell>
                                </Link>
                                <TableCell align="right">{row.body}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

const mapStateToProps = ({ posts }) => {
    return { posts }
}

export default connect(mapStateToProps, { fetchAllPosts })(Post);