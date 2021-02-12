import React from 'react';
import Navs from '../Home/navs';
import { Button } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import _ from 'lodash';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const  Admission = () => {

    const assistance = [
        {
            label: 'Courses',
            text: "Counselling is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries",
            icon: require('./../assets/reglobaldartscreens/books-icons.png')
        },
        {
            label: 'Universities',
            text: "Counselling is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries",
            icon : require('./../assets/reglobaldartscreens/course-icons.png')
        },
        {
            label: 'Scholarships',
            text: "Counselling is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries",
            icon : require('./../assets/reglobaldartscreens/savings.png')
        },
        {
            label: 'Academic Profile',
            text: "Counselling is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries",
            icon : require('./../assets/reglobaldartscreens/percentage.png')
        }
    ]
    return (
        <div className="admissions">
            <Navs />
            <div className="admission-process main flex-wrap">
                <div className="flex-fluid">
                    <div style = {{ padding:'0px 20px' }}>
                            <p className="font-44 bold" style={{ fontFamily:'Helvetica'}}>VISA Process</p>
                            <p className="font-20 gray-text margin-t-r-b-l">Counselling is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries</p>
                    
                    </div>
                    <div className="right">
                            <p style={{ fontWeight: 'lighter'}} className="font-14">ASSISTANCE IN</p>
                            {
                                _.map(assistance,assist => 
                                    <div className="margin-top-20">
                                        <img className="icon-size" src = {assist.icon.default} />
                                        <p className="font-30 semi-bold">{assist.label}</p><hr></hr>
                                        <p className="font-14 gray-text">{assist.text}</p>
                                    </div>
                                    
                                )
                            }
                            <p className="flex-vc">Proceed to <span className="red">VISA Processing<ChevronRightIcon/></span></p>
                        </div>
                    </div>
                        <div className="services-info">
                        <div className="documents margin-t-b-60">
                            <p className="font-14 main-blue margin-top-20 bold">DOCUMENTS REQUIRED</p>
                            <p className="font-14 margin-t-r-b-l  flex-vc gray-text"><CheckIcon style={{ width:'16px',height:'16px', paddingRight:'5px'}} className="main-blue"/> Work experience letter</p>
                            <p className="font-14 margin-t-r-b-l  flex-vc gray-text"><CheckIcon style={{ width:'16px',height:'16px',paddingRight:'5px'}} className="main-blue"/> Undergraduate Marksheet & degree certificate</p>
                            <p className="font-14 margin-t-r-b-l  flex-vc gray-text"><CheckIcon style={{ width:'16px',height:'16px',paddingRight:'5px'}} className="main-blue"/> 12th Marksheets</p>
                            <p className="font-14 margin-t-r-b-l  flex-vc gray-text"><CheckIcon style={{ width:'16px',height:'16px',paddingRight:'5px'}} className="main-blue" /> Passport</p>
                        </div>
                        <div>
                            <p className="font-34 margin-t-r-b-l">Want to know more about VISA Process?</p>
                            <Button style={{ color: '#ffff', fontSize:'18px',width:'220px',height:'44px',fontFamily:'fontSemiBold',backgroundColor:'#c8102e',textTransform:'capitalize',boxShadow:'unset',margin:'20px 0px'}} variant="contained">Get in touch</Button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Admission;

