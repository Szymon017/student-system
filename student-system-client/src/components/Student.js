import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Student() {
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [students, setStudents] = useState([]);

    useState(() => {
        fetch("http://localhost:8080/student/")
            .then(res => res.json())
            .then((result) => {
                setStudents(result)
            })
    }, [])


    const handleClick = (e) => {
        e.preventDefault();
        const student = { name, address }
        console.log(student);
        fetch("http://localhost:8080/student/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)
        }).then(() => {
            console.log("Added New Student");
        })

    }

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete="off"
        >
            <h1>Add Student</h1>
            <form>

                <TextField id="standard-basic" label="Student name" variant="standard"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField id="standard-basic" label="Student address" variant="standard" value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <Button variant="contained" color="success" onClick={handleClick}>
                    Add
                </Button>
            </form>
            <div style={{width: "50%", margin: "auto"}}>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>

                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Address</TableCell>
                            <TableCell align="center">Option</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >

                                <TableCell align="center">{row.name}</TableCell>
                                <TableCell align="center">{row.address}</TableCell>
                                <TableCell align="center">Delete</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
                        </div>









        </Box>
    );
}
