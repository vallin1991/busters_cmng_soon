import React, { Component } from 'react';
import '../styles/ComingSoon.css';
import Countdown from './Countdown';
import { Logo } from './Logo';

import { Title } from './Title';
import { Description } from './Description';
// import Subscribe from './Subscribe';
import logo from '../images/logo.png';
// import xmark from '../images/x-mark.svg';
// import exclamation from '../images/exclamation.svg';
// import check from '../images/check-mark.svg';
import instagram from '../images/instaicon.png';
// import facebook from '../images/fbookicon.svg';
// import youtube from '../images/youtubeicon.svg';
// import twitter from '../images/twittericon.svg';
import Links from './Links';




class ComingSoon extends Component {
    state = {
        countdown: {
            futureDate: "2022-08-30 00:00:00"
        },
        logo: {
            alt: "Spinning Gear",
            src: logo,
        },
        title: {
            text: " Coming Soon!"
        },
        description: {
            text: " Buster's Website is under construction!"
        },
        // subscribe: {
        //     placeholder: "Enter Email Address",
        //     buttonText: "Submit"
        // },
        links: [

            // {
            //     url: "https://www.facebook.com/groups/CodingFromNull",
            //     logo: facebook,
            //     text: "Join"
            // },

            {
                url: "https://www.instagram.com/bustersconstruction/",
                logo: instagram,
                text: "Follow Buster's Construction"

            },

            // {
            //     url: "https://wwww.youtube.com/channel/UC9Psp9-p9jgHfDBReAAcZ3W",
            //     logo: youtube,
            //     text: "Watch"
            // },

            // {
            //     url: "https://www.twitter.com/CodingFromNull",
            //     logo: twitter,
            //     text: "Tweet"
            // }
        ],

        notification: {
            src: " ",
            alt: " ",
            message: " ",
            level: " ",
            visible: false
        }
    }
    // configureNotification = level => {
    //     const notification = { ...this.state.notification };
    //     notification.level = level;
    //     if (level === "success") {
    //         notification.src = check;
    //         notification.alt = "Check Mark";
    //         notification.message = `Thank you for subscribing to our mailing list.
    //                                 You will be receiving a welcome email shortly.`;
    //     } else if (level === "warning") {
    //         notification.src = exclamation;
    //         notification.alt = "Exclamation Point";
    //         notification.message = `The email you entered is already on our mailing list.
    //                                 Thank you for joining`;
    //     } else {
    //         notification.src = xmark;
    //         notification.alt = "X Mark";
    //         notification.message = ` There was an issue with your email submission.
    //                                 Please check your email and try again.`;
    //     }
    //     this.setState({ notification });

    // };

    showNotification = () => {
        const notification = { ...this.state.notification };
        notification.visible = true;
        this.setState({ notification }, () => {
            setTimeout(() => {
                notification.visible = false;
                this.setState({ notification });
            }, 3000);
        });
    };
    render() {
        const {
            countdown,
            logo,
            title,
            description,
            // subscribe,
            links,
            notification
        } = this.state;

        return (
            <div className="background">
                <Countdown futureDate={countdown.futureDate} />
                <Logo alt={logo.alt} src={logo.src} />
                <Title text={title.text} />
                <Description text={description.text} src={notification.src} alt={notification.alt} message={notification.message} level={notification.level} visible={notification.visible} />
                {/* <Subscribe placeholder={subscribe.placeholder} buttonText={subscribe.buttonText} configureNotification={this.configureNotification} showNotification={this.showNotification} /> */}
                <Links links={links} />


            </div>

        )
    };
}

export default ComingSoon;
