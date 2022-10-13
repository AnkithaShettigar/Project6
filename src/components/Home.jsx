import { Link } from "react-router-dom";
import Banner from "./Banner";
import Homepage from "./Homepage";
import Middle from "./Middle";
import { ImageWithTitle } from "./ImageWithTitle";
import { Latest,mainHome,mainMiddle ,mainPage} from "./MockData";
import Bottompage from "./Bottompage";
import { AiOutlineMenu,AiOutlineClose} from "react-icons/ai";
import { useRef } from "react";

const Home = () =>{
  const navRef = useRef();

  const showNavbar=()=>{
      navRef.current.classList.toggle("responsive_nav");
  }
  return(
     <div>
       <span className="cross">The</span>
          <h1 className="head1">Siren</h1>
           <p className="tool" ref={navRef}>
          <Link to = "/" className="one">Home</Link>
          <Link to = "/bollywood"className="one">Bollywood</Link>
          <Link to = "/technology"className="one">Technology</Link>
          <Link to = "/hollywood"className="one">Hollywood</Link>
          <Link to ="/fitness" className="one">Fitness</Link>
          <Link to="/food"className="one">Food</Link>
          <button className="btn nav-btn nav-close-btn" onClick={showNavbar}>
          <AiOutlineClose/>
          </button>           
          </p>
          <button className="btn nav-btn" onClick={showNavbar}>
          <AiOutlineMenu/>
          </button>
      

          

            <hr className="hr1" />
          <div className="ud">
           <Link to={`/pages/about/${1}`} className="two"><Banner className="jaipur" title={"Udaipur, Rajasthan - The City of Lakes"} tag={"Travel / August 2017" } banimg={require("../pics/UDAIPUR.jpg")}/></Link>
          
            <div className="double">
            <Link to={`/pages/about/${2}`} className="two"><Banner titleClass="first1" className="delhi" title={"New Delhi,NCR-The city of cities"} tag={"Travel / August 2017"} banimg={require("../pics/DELHI.jpg")} /></Link><br/>
            <Link to={`/pages/about/${3}`} className="two"><Banner titleClass="first1" className="delhi1" title={"Mumbai,Maharashtra-The City of Dreams"} tag={"Travel / August 2017"} banimg={require("../pics/MUMBAI.jpg")}/></Link>
            </div>
          </div>
          <div className="latest">
            <p className="new">The Latest</p>
            <hr className="hr2"/>
            <div className="latest1">
            {
                Latest.map((item,index)=>{return( <Link to={`/pages/about/${item.id}`} className="two"><ImageWithTitle header={item.header} description={item.description} tags={item.tags} imgurl={item.background}/></Link> )})
            }
           
            </div> 
          </div>
          
          <div className="article">
            <p className="new1">Latest Articles</p>
            <hr className="hr3"/>
          </div>
          <div className="box">
            <div className="boxright">
            
           
             {
                 mainHome.map((item1,index1)=>{
                    return(
                        <>

                        <Homepage headding={item1.headding } brief={item1.brief} data={item1.data} backimg={item1.backimg}/>
                        </>
                    )
                 })
             } 
           
            <div className="more">
                <div className="arrow1">
                </div>
                <div className="arrowtext">
                <p>LOAD MORE</p>
                </div>
            </div>
           
             <Link to={`/pages/about/${4}`} className="two"><Banner titleClass="gujtext" className="guj" title={"Ahmedabad,Gujarat-Manchester ot the East"} tag={"Travel / August 2017"} banimg={require("../pics/AHMEDABAD.jpg")} /></Link>
              
            </div>
            <div className="boxleft">
               <div className="advert">
                  <p className="adverttext">Advertistement</p>
                </div>
                <div className="post">
                    <p className="toptext">Top Posts</p>
                    <hr className="hr5"/>
                </div>
                <div className="toppost">
                    <div className="top1">
                    <h1 className="no1">1</h1>
                    <h3 className="top1text">Kanyakumari,Tamil Nadu</h3>
                    <span className="travel">Travel</span>
                    <span className="travel1">/ August 21 2017</span>
                    </div>
                    <hr className="hr6" />
                    {
                         mainMiddle.map((item2,index2)=>{
                            return(
                                <>
        
                                <Middle number={item2.number } toptext={item2.toptext} midtext={item2.midtext} textimg={item2.textimg}/>
                                </>
                            )
                         })
                    }                  

                </div>
            </div>
          </div>
          <div className="story">
          <p className="newstory">Latest Stories</p>
            <hr className="hr2"/>
           </div>
           <hr className="hr8"/>
            
          <div className="bottom">
          {
                         mainPage.map((item3,index3)=>{
                            return(
                                <>
        
                                <Bottompage titlehead={item3.titlehead } deschead={item3.deschead} taghead={item3.taghead} />
                                </>
                            )
                         })
                    }

          </div>
          <hr className="hr8"/>

          <div className="viewmore">
          <p className="view">VIEW MORE</p>
            <div className="forwardarrow">
            </div>
    
          </div>
          
          </div>
    )
}

export default Home;