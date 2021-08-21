import './Membership.css';
import Header from './Header';
import Member from './Member';
import FAQ from './faq';
import Footer from './Footer';


function Membership() {
  return (
    <div className="MemberMain">
      <Header/>
      <div className="Membership">
      <h1 className="memberTitle">Memberships</h1>
      {/* <p> description </p> */}
      <div className="types">
        <Member title="Trial Membership" 
        subtitle = "Free"
        access = "Limited access for 14 days"
        ></Member>
        <Member title="Trial Membership" 
        subtitle = "Free"
        access = "Limited access for 14 days"
        ></Member>
        <Member title="Trial Membership" 
        subtitle = "Free"
        access = "Limited access for 14 days"
        ></Member>
      </div>
      <h1 className="faqTitle">Frequently Asked Questions</h1>
      <div className="questions">
        <FAQ question="What is life?" answer="Bhallagena bhai ar"></FAQ>
        <FAQ question="What is life?" answer="Bhallagena bhai ar"></FAQ>
        <FAQ question="What is life?" answer="Bhallagena bhai ar"></FAQ>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Membership;