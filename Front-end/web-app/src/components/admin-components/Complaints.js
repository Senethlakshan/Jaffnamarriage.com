import { Accordion, AccordionDetails, AccordionSummary, TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { FaArrowAltCircleDown } from 'react-icons/fa';


function Complaints() {
    const [expanded, setExpanded] = React.useState(false);

    const [complaints, setComplaints] = React.useState([]);
    const [complaintsAll, setComplaintsAll] = React.useState([]);

    const [searchText, setSearchText] = React.useState('');



    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    useEffect(() => {

        const dummyComplaintsData = [
            {
                "id": "1",
                "email": "test@mail.com",
                "complaintHeader": "comp title",
                "complaintBody": "comp fw body",
            },
            {
                "id": "2",
                "email": "test1@mail.com",
                "complaintHeader": "comp2 title",
                "complaintBody": "comp bod wfey",
            },
            {
                "id": "3",
                "email": "test2@mail.com",
                "complaintHeader": "comp3 title",
                "complaintBody": "comp body w fe ",
            },
            {
                "id": "4",
                "email": "test3@mail.com",
                "complaintHeader": "comp4 title",
                "complaintBody": "comp body fwfee",
            },
        ];

        setComplaints(dummyComplaintsData);
        setComplaintsAll(dummyComplaintsData);

    }, []);

    useEffect(() => { }, [complaints]);

    function filterBySearchText(text) {

        if (text === '') {
            setComplaints(complaintsAll);
            return;
        }

        setSearchText(text);
        const filteredComplaints = complaints.filter((complaint) => {
            return complaint.complaintHeader.toLowerCase().includes(text.toLowerCase());
        });
        setComplaints(filteredComplaints);
    }

    return (
        <div className="emailCont">
            <TextField
                style={{
                    width: "100%",
                    marginTop: "10px",
                    marginBottom: "10px",
                }}
                id="filled-basic" label="Search" variant="filled"
                onChange={(e) => {
                    filterBySearchText(e.target.value);
                }}
            />

            <div
                style={{
                    width: "100%",
                    marginTop: "10px",
                    marginBottom: "10px",
                }}
            >

                {complaints.map((complaint) => (
                    <Accordion expanded={expanded === complaint.id} onChange={handleChange(complaint.id)}>
                        <AccordionSummary
                            expandIcon={<FaArrowAltCircleDown />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                {complaint.complaintHeader}
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>{complaint.email}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {complaint.complaintBody}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}

            </div>



        </div>
    )
}

export default Complaints