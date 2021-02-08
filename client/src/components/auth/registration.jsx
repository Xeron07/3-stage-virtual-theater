import React, { Component } from 'react';
import  Carousel  from  'semantic-ui-carousel-react';
import "./loginStyle.css";
import {Card,Form,Button,Image} from "semantic-ui-react";

class Registration extends Component {
    state = {  }
    render() { 
        let elements  = [
            {
                render:()=>{
                    return <Image src='https://res.cloudinary.com/emerging-it/image/upload/v1610905985/img/tiktik_e0a2wv.jpg' wrapped ui={false} />
                }
            },
            {
                render:()=>{
                    return <Image src='https://res.cloudinary.com/emerging-it/image/upload/v1610906100/img/felix-mooneeram-evlkOfkQ5rE-unsplash_s1fx7w.jpg' wrapped ui={false} />
                }
            },
        ]
        return ( 
            <div style={{top:"0px",width:"100%",minHeight:"100vh",backgroundImage:"url(https://res.cloudinary.com/emerging-it/image/upload/v1610906100/img/felix-mooneeram-evlkOfkQ5rE-unsplash_s1fx7w.jpg)",display:"flex",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}>
                <div style={{position:"absolute",left:"0px",top:"0px",filter:" blur(8px)",width:"100%",height:"100vh",backgroundColor: "rgb(75,75,75,0.5)"}}>
                </div>
                <Card className="loginCard" style={{margin:"auto",marginTop:"2%",backgroundColor:"#4b4b4b"}} width={8}>
                <Image>
                <Carousel
				elements  =  {  elements  }
				duration  ={4000}
				animation  ='pulse'
				showNextPrev  =  {false}
                showIndicators  ={false}
              
			/>
                </Image>
                {/* <Image src='https://res.cloudinary.com/emerging-it/image/upload/v1610905985/img/tiktik_e0a2wv.jpg' wrapped ui={false} /> */}
                    <Card.Content style={{padding:"20px"}}>
                        {/* <img src="https://res.cloudinary.com/emerging-it/image/upload/v1583060005/personal/Developer-Experience_aowdq5.gif"
                                style={{border:"50%",margin:"20% auto",}} width="64px"
                                alt="logo"/> */}
                        <Form>
                        <Form.Field>
                                 <label style={{float:"left",color:"whitesmoke"}}>Name</label>
                                 <input type="text" placeholder="Name" required/>
                                </Form.Field>
                            <Form.Field>
                                 <label style={{float:"left",color:"whitesmoke"}}>Phone Number</label>
                                 <input type="tel" placeholder="Phone Number" required/>
                                </Form.Field>
                                <Form.Field>
                                 <label style={{float:"left",color:"whitesmoke"}}>Password</label>
                                 <input type="password" placeholder="*******"  required/>
                                </Form.Field> 
                                <Form.Field>
                                 <label style={{float:"left",color:"whitesmoke"}}>Confirm Password</label>
                                 <input type="password" placeholder="*******"  required/>
                                </Form.Field> 
                                
                            <Button style={{width:"100%"}} color="green" type='submit'>Sign Up</Button>     
                        </Form>
                    </Card.Content>
                </Card>
                
            </div>
               
         );
    }


  
}
 
export default Registration;