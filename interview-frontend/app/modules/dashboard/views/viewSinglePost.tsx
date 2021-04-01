import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchSinglePost, fetchPostComments } from '../../action';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '60rem',
            },
        },
        table: {
            minWidth: 450,
        },
        container: {
            margin: "120px auto",
            width: 1000,
            height: 300
        },
        subContainer: {
            margin: "20px 0"
        }
    }),
);

interface Props {
    fetchSinglePost: (number) => void;
    fetchPostComments: (number) => void;
    match: any;
    singlePost: any;
    comments: any;
}
const ViewSinglePost: React.FC<Props> = ({ match, comments, singlePost, fetchSinglePost, fetchPostComments }) => {
    const classes = useStyles();
    const [searchVal, setSearchVal] = useState('')
    // const [data, setData] = useState([]);

    useEffect(() => {
        fetchSinglePost(match.params.id);
        fetchPostComments(match.params.id)
        console.log(searchVal)
        return () => {

        };
    }, [singlePost.length, comments.length])
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
                        <TableRow key={singlePost.id}>
                            <TableCell align="right">{singlePost.title}</TableCell>
                            <TableCell align="right">{singlePost.body}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <form className={classes.root} method="POST" noValidate autoComplete="off">
                <TextField onChange={(e) => setSearchVal(e.target.value)} id="standard-basic" label="Search..." />
            </form>
            <TableContainer className={classes.subContainer} component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Body</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {comments.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.body}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

const mapStateToProps = ({ singlePost, comments }) => {
    return { singlePost, comments }
}

export default connect(mapStateToProps, { fetchSinglePost, fetchPostComments })(ViewSinglePost);