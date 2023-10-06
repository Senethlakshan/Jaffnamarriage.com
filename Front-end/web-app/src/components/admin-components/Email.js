import { Box, Button, Checkbox, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";

function Email() {

    const [checked, setChecked] = React.useState(false);
    const [emails, setEmails] = React.useState([]);
    const [editPanel, setEditPanel] = useState(false);


    function openCard() {
        setEditPanel(true)
    }

    function closeCard() {
        setEditPanel(false)
    }

    const selectEmail = (id) => {
        setEmails(emails.map((email) => {
            if (email.id === id) {
                return { ...email, checked: !email.checked }
            } else {
                return email;
            }
        }))
    }

    useEffect(() => { }, [emails]);

    useEffect(() => {

        // const getEmails = async () => {
        //     const res = await fetch('http://localhost:5000/api/v1/email');
        //     const data = await res.json();
        //     setEmails(data);
        //     console.log(data);
        // }
        // getEmails();

        const dummyEmailData = [
            {
                "id": 1,
                "email": "test@gmail.com",
                "checked": false
            },
            {
                "id": 2,
                "email": "test2@gmail.com",
                "checked": false
            },
            {
                "id": 3,
                "email": "test3@gmail.com",
                "checked": false
            },
            {
                "id": 4,
                "email": "test4@gmail.com",
                "checked": false
            },
            {
                "id": 5,
                "email": "test5@gmail.com",
                "checked": false
            },

        ];

        setEmails(dummyEmailData);

    }, []);

    return (
        <div className="emailCont">
            <Paper
                style={{
                    width: "100%",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    margin: "7px 0",
                    paddingLeft: "10px",
                }}
            >
                Select All
                <Checkbox
                    checked={checked}

                    onClick={() => {
                        setEmails(emails.map((email) => {
                            return { ...email, checked: !checked }
                        }))
                        setChecked(!checked);
                    }}
                />
            </Paper>

            {emails.map((email) => (

                <Paper
                    style={{
                        width: "100%",
                        height: "50px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#ffe4b8",
                        margin: "7px 0",
                    }}
                >
                    {email.email}
                    <Checkbox
                        checked={email.checked}
                        onClick={() => {
                            selectEmail(email.id);
                        }}



                    />
                </Paper>

            ))}

            <Button
                variant="contained"
                style=
                {{
                    width: "100%",
                    backgroundColor: "#fefefe",
                    color: "#ff9800",
                }}
                size="large"

                onClick={openCard}
            >Send Email</Button>


            {(editPanel == true) && (
                <div className='openedCardOverlay' onClick={closeCard}></div>
            )}
            {(editPanel == true) && (

                <div className='openedCardContainer'>
                    <div className='profEdit'>
                        <div className="fullWidthtOnly" >
                            <div id="form-main" className="fullWidthtOnly">
                                <form class="form" id="form1">


                                    {/* 
                        <p className='checkBox'>
                            <input type="checkbox" id="allUsers" name="allUsers" value="allUsers" />
                            <label for="vehicle1">Send to all users</label><br />
                        </p> */}

                                    {/* <label className="containerCheckBx">Send to all users
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label> */}
                                    {/* <p class="name">
                                            <input name="name" type="text" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Email/Emails" id="name" />
                                        </p> */}

                                    <p class="email">
                                        <input name="email" type="text" class="validate[required,custom[email]] feedback-input" id="email" placeholder="Subject" />
                                    </p>

                                    <p class="text">
                                        <textarea name="text" class="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Body"></textarea>
                                    </p>


                                    <div class="submit">
                                        <input type="submit" value="SEND" id="button-blue" />
                                        <div class="ease"></div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            )}




        </div>
    );
}

export default Email;
