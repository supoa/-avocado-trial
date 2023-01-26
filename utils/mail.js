import nodemailer from "nodemailer";

// const pass = "nasybqffosnfblry";
// const from = "avocadoofficial634@gmail.com";

const pass = "cqfpmdnwtaazhkol";
const from = "devtestfrom@gmail.com";

const mailOptionsForNewUser = (user) => {
  return {
    from: from,
    to: user.email,
    subject: " Welcome to Avocado!",
    html: ` <div style=" background: linear-gradient( rgba(94, 255, 0, 0.2), rgba(222, 172, 79, 0.2) ); position: relative; color: rgb(36, 32, 5); overflow-x: hidden; font-family: Arial, sans-serif; margin: 0; padding: 0; " > <header style=" display: flex; align-items: center; justify-content: flex-start; flex-direction: column; padding: 10px; width: 100%; overflow: hidden; background-color: rgb(0, 0, 0, 0.1); min-height: 8vh; margin: 0; " > <div style=" font-size: 180%; font-weight: bold; color: rgb(25, 106, 0); display: flex; align-items: center; justify-content: flex-start; gap: 3px; " > <span>A</span> <span>v</span> <span style="color: #ffa600"> <img src="https://cdn-icons-png.flaticon.com/512/381/381058.png" width="24px" height="20px" style="padding-top: 5px" alt=""/></span> <span>c</span> <span>a</span> <span>d</span> <span style="color: #ffa600"> <img src="https://cdn-icons-png.flaticon.com/512/381/381058.png" width="24px" height="20px" alt="" style="padding-top: 5px"/></span> </div></header> <div style="padding: 10px"> <p style="font-size: 16px; line-height: 1.5">Dear ${user.name},</p><p style="font-size: 16px; line-height: 1.5"> Welcome to the <a style=" display: inline-block; font-size: 16px; font-weight: bold; text-decoration: none; color: #ffa600; border-radius: 10px; text-align: center; " href="" >Avocado</a > community! We are thrilled to have you on board as a member of our exclusive investment platform. </p><p style="font-size: 16px; line-height: 1.5"> At Avocado, we believe in providing our members with access to the best investment opportunities and personalized financial advice. Our platform is designed to help you make informed decisions and achieve your financial goals. </p><p style="font-size: 16px; line-height: 1.5"> We encourage you to explore our website and discover the services that we offer. If you have any questions or need assistance, please don't hesitate to reach out to our support team. </p><p style="font-size: 16px; line-height: 1.5"> Thank you for choosing Avocado and we look forward to helping you reach your financial dreams. </p><p style="font-size: 16px; line-height: 1.5">Best,</p><p style="font-size: 16px; line-height: 1.5">The Avocado Team</p></div></div>`,
  };
};

const mailOptionForReferance = (user, newUser) => {
  return {
    from: from,
    to: user.email,
    subject: "New User Signup from your Referral",
    html: ` <div style=" background: linear-gradient( rgba(94, 255, 0, 0.2), rgba(222, 172, 79, 0.2) ); position: relative; color: rgb(36, 32, 5); overflow-x: hidden; font-family: Arial, sans-serif; margin: 0; padding: 0; " > <header style=" display: flex; align-items: flex-start; justify-content: center; flex-direction: column; padding: 10px; width: 100%; overflow: hidden; background-color: rgb(0, 0, 0, 0.1); min-height: 7.5vh; margin: 0; " > <div style=" font-size: 180%; font-weight: bold; color: rgb(25, 106, 0); display: flex; align-items: center; justify-content: flex-start; gap: 3px; " > <span>A</span> <span>v</span> <span style="color: #ffa600"> <img src="https://cdn-icons-png.flaticon.com/512/381/381058.png" width="24px" height="20px" style="padding-top: 5px" alt=""/></span> <span>c</span> <span>a</span> <span>d</span> <span style="color: #ffa600"> <img src="https://cdn-icons-png.flaticon.com/512/381/381058.png" width="24px" height="20px" alt="" style="padding-top: 5px"/></span> </div></header> <div style="padding: 10px"> <p style="font-size: 16px; line-height: 1.5"> Dear ${user.name}, </p><p style="font-size: 16px; line-height: 1.5"> We wanted to take a moment to thank you for introducing <b>${newUser.name}</b> to Avocado. Your referral has helped us grow our community and we couldn't have done it without you. </p><p style="font-size: 16px; line-height: 1.5"> As a reminder, our referral program rewards you for every new user that signs up using your referral code. We appreciate your support and encourage you to continue sharing your referral code with your friends and family. </p><p style="font-size: 16px; line-height: 1.5"> If you have any questions about the referral program or would like to learn more about the rewards that you can earn, please don't hesitate to reach out to our support team. </p><p style="font-size: 16px; line-height: 1.5"> Thank you again for your support, , </p><p style="font-size: 16px; line-height: 1.5">The Avocado Team</p></div></div>`,
  };
};

const mailOptionForAdmin = (admin, newUser) => {
  return {
    from: from,
    to: admin.email,
    subject: "New User Signup",
    html: `<div style=" background: linear-gradient( rgba(94, 255, 0, 0.2), rgba(222, 172, 79, 0.2) ); position: relative; color: rgb(36, 32, 5); overflow-x: hidden; font-family: Arial, sans-serif; margin: 0; padding: 0; " > <header style=" display: flex; align-items: flex-start; justify-content: center; flex-direction: column; padding: 10px; width: 100%; overflow: hidden; background-color: rgb(0, 0, 0, 0.1); min-height: 7.5vh; margin: 0; " > <div style=" font-size: 180%; font-weight: bold; color: rgb(25, 106, 0); display: flex; align-items: center; justify-content: flex-start; gap: 3px; " > <span>A</span> <span>v</span> <span style="color: #ffa600"> <img src="https://cdn-icons-png.flaticon.com/512/381/381058.png" width="24px" height="20px" style="padding-top: 5px" alt=""/></span> <span>c</span> <span>a</span> <span>d</span> <span style="color: #ffa600"> <img src="https://cdn-icons-png.flaticon.com/512/381/381058.png" width="24px" height="20px" alt="" style="padding-top: 5px"/></span> </div></header> <div style="padding: 10px"> <p style="font-size: 16px; line-height: 1.5">Dear Admin,</p><p style="font-size: 16px; line-height: 1.5"> We wanted to inform you that a new user has registered on our website. Their name is <b>${newUser.name}</b> and their contact information is ${newUser.email}. </p><p style="font-size: 16px; line-height: 1.5"> We encourage you to reach out to ${newUser.name} to welcome them to the Avocado community and provide any assistance they may need. This will help them to feel more comfortable and confident in their investment journey. </p><p style="font-size: 16px; line-height: 1.5"> Thank you again for your support, , </p><p style="font-size: 16px; line-height: 1.5">Best,</p><p style="font-size: 16px; line-height: 1.5">The Avocado Team</p></div></div>`,
  };
};

const mailOptionForAnnouncement = (user, content) => {
  console.log(content[0]);
  return {
    from: from,
    to: `${user.email}`,
    subject: "New Announcement ",
    html: ` <div style=" background: linear-gradient( rgba(94, 255, 0, 0.2), rgba(222, 172, 79, 0.2) ); position: relative; color: rgb(36, 32, 5); overflow-x: hidden; font-family: Arial, sans-serif; margin: 0; padding: 0; " > <header style=" display: flex; align-items: flex-start; justify-content: center; flex-direction: column; padding: 10px; width: 100%; overflow: hidden; background-color: rgb(0, 0, 0, 0.1); min-height: 7.5vh; margin: 0; " > <div style=" font-size: 180%; font-weight: bold; color: rgb(25, 106, 0); display: flex; align-items: center; justify-content: flex-start; gap: 3px; " > <span>A</span> <span>v</span> <span style="color: #ffa600"> <img src="https://cdn-icons-png.flaticon.com/512/381/381058.png" width="24px" height="20px" style="padding-top: 5px" alt=""/></span> <span>c</span> <span>a</span> <span>d</span> <span style="color: #ffa600"> <img src="https://cdn-icons-png.flaticon.com/512/381/381058.png" width="24px" height="20px" alt="" style="padding-top: 5px"/></span> </div></header> <div style="padding: 10px"> <p style="font-size: 16px; line-height: 1.5">Dear ${
      user.name
    },</p>${content
      .split("#")
      .map((item) => `<p style="font-size: 16px; line-height: 1.5">${item}</p>`)
      .join(
        ""
      )}<p style="font-size: 16px; line-height: 1.5">Best,</p><p style="font-size: 16px; line-height: 1.5">The Avocado Team</p></div></div>`,
  };
};

const mailOptionForUpdatedUser = (user) => {
  return {
    from: from,
    to: user.email,
    subject: "Your Profile Has been Updated",
    html: ` <body> <div style=" background: linear-gradient( rgba(94, 255, 0, 0.2), rgba(222, 172, 79, 0.2) ); position: relative; color: rgb(36, 32, 5); overflow-x: hidden; font-family: Arial, sans-serif; margin: 0; padding: 0; " > <header style=" display: flex; align-items: flex-start; justify-content: center; flex-direction: column; padding: 10px; width: 100%; overflow: hidden; background-color: rgb(0, 0, 0, 0.1); min-height: 7.5vh; margin: 0; " > <div style=" font-size: 180%; font-weight: bold; color: rgb(25, 106, 0); display: flex; align-items: center; justify-content: flex-start; gap: 3px; " > <span>A</span> <span>v</span> <span style="color: #ffa600"> o</span> <span>c</span> <span>a</span> <span>d</span> <span style="color: #ffa600"> o</span> </div></header> <div style="padding: 10px"> <p style="font-size: 16px; line-height: 1.5">Dear ${user.name},</p><p style="font-size: 16px; line-height: 1.5"> We hope this email finds you well. We wanted to inform you that your profile data has been updated by our admin. </p><p style="font-size: 16px; line-height: 1.5"> Visit your dashboard to see the new picture of Yor profile with the link bellow </p><p style="font-size: 16px; line-height: 1.5"> <a href="https://avocado-official.vercel.app/profile/${user.id}" >https://avocado-official.vercel.app/profile/${user.id}</a> </p><p style="font-size: 16px; line-height: 1.5"> If you have any concerns or questions about the update, please do not hesitate to contact our support team. </p><p style="font-size: 16px; line-height: 1.5">Thank You</p><p style="font-size: 16px; line-height: 1.5">The Avocado Team</p></div></div></body>`,
  };
};

const mailOptionForNewStructure = (user, content) => {
  return {
    from: from,
    to: user.email,
    subject: "New Structure Added In Your Profile",
    html: ` <div style=" background: linear-gradient( rgba(94, 255, 0, 0.2), rgba(222, 172, 79, 0.2) ); position: relative; color: rgb(36, 32, 5); overflow-x: hidden; font-family: Arial, sans-serif; margin: 0; padding: 0; " > <header style=" display: flex; align-items: flex-start; justify-content: center; flex-direction: column; padding: 10px; width: 100%; overflow: hidden; background-color: rgb(0, 0, 0, 0.1); min-height: 7.5vh; margin: 0; " > <div style=" font-size: 180%; font-weight: bold; color: rgb(25, 106, 0); display: flex; align-items: center; justify-content: flex-start; gap: 3px; " > <span>A</span> <span>v</span> <span style="color: #ffa600"> o</span> <span>c</span> <span>a</span> <span>d</span> <span style="color: #ffa600"> o</span> </div></header> <div style="padding: 10px"> <p style="font-size: 16px; line-height: 1.5">Dear ${user.name},</p><p style="font-size: 16px; line-height: 1.5"> We hope this email finds you well. We wanted to inform you that We added this new structure in you profile </p><p style="font-size: 16px; line-height: 1.5"> <img src="${content}" alt="" width="100%" height="100%"/> </p><p style="font-size: 16px; line-height: 1.5"> If you have any concerns or questions about the structure we added, please do not hesitate to contact our support team. </p><p style="font-size: 16px; line-height: 1.5">Thank You</p><p style="font-size: 16px; line-height: 1.5">The Avocado Team</p></div></div>`,
  };
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: from,
    pass: pass,
  },
});

export {
  mailOptionsForNewUser,
  mailOptionForReferance,
  mailOptionForAdmin,
  mailOptionForAnnouncement,
  mailOptionForUpdatedUser,
  mailOptionForNewStructure,
  transporter,
};
