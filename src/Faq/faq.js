import React from 'react';
import Navs from '../Home/navs';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { ExpandMore } from '@material-ui/icons';
import _ from 'lodash';

const  Faq = () => {
    const faqs = [
        {
            question: 'Who is a manager?',
            answer: 'A personnel who bridges the gap between you and the tasks that you need to carry out but do not want to!!'
        },
        {
            question: 'How do we operate?',
            answer: 'Your Lifestyle Manager either do the assigned tasks by themselves or appoint third party experts in the particular fields'
        },
        {
            question: 'How do we charge?',
            answer: 'Our basic method is through a subscription basis, apart from a separate charge for On-request services.'
        },
        {
            question: 'What are various services that are provided?',
            answer: 'HuEx provides In-house and On-request services such as purchasing groceries, collecting packages/couriers, collecting laundry and dry cleaning, weekly tidy ups, purchasing medication, providing pet-care, house parties and much more.'
        },
        
    ]
    return (
        <div className="faq">
            <Navs />
            <div className="main">
            <p className="page-header font-44">Got <span className="semi-bold">questions ?</span></p>
            <div className="margin-top-40">
            {
                _.map(faqs,faq =>
                  <div style = {{ maxWidth:'80%'}}>
                      <section id="faq">
                        <Accordion style={{ boxShadow:'none'}}>
                            <AccordionSummary style={{ padding: 0 }} expandIcon={<ExpandMore />}>
                                    <p className="font-20 margin-t-b-20" style={{ fontWeight: 300 }}>{faq.question}</p>
                            </AccordionSummary>
                            <AccordionDetails>
                                <p className="font-14 gray-text">{faq.answer}</p>
                            </AccordionDetails>
                        </Accordion>
                      </section>
                  </div>     
                )
            }
            </div>
            </div>
        </div>
    )
}

export default Faq;


