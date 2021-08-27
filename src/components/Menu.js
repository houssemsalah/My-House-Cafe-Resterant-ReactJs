import React, { useState } from "react";
import { useSelector } from "react-redux";

const Menu = () => {
  const list=useSelector(state => state.itemSlice.itemList) 


  const [menuList, setMenuList] = useState("");
  const handleAll = () => setMenuList("");
  const handlePizza = () => setMenuList("pizza");
  const handleDrink = () => setMenuList("drink");
  const handlePlat = () => setMenuList("plat");
  const handleSandwiche = () => setMenuList("sandwiche");
  return (
    <div>
      <section 
        style={{ backgroundImage: "url(/images/bg_3.jpg)", linearGradient:"black",height:"800px" ,width:"100%" }}
      >
        
        
          <div className=" container  ">  <div />
            <div className="row slider-text justify-content-center align-items-center ">
              <div className="col-md-7 col-sm-12 text-center " style={{marginTop:"300px"}}>
                <h1 className="mb-3 mt-5 bread" style={{color:"white" , fontSize:"90px"}}>Our Menu</h1>
                <p className="breadcrumbs">
                  <span className="mr-2">
                    <a href="index.html" style={{color:"white",fontSize:"30px"}}>Home</a>
                  </span>{" "}
                  <span  style={{color:"white",fontSize:"30px"}}>Menu</span>
                </p>
              </div>
            </div>
          </div>
        
      </section>
      <section className="ftco-menu" style={{marginTop:"100px", marginBottom:"-50px"}}>
        <div className="container-fluid">
          <div className="row d-md-flex">
            <div className="col-lg-12  p-md-5">
              <div className="row">
                <div
                  className="col-md-12 nav-link-wrap mb-5 d-flex "
                  style={{
                    justifyContent: "center",
                    marginBottom: 0,
                    paddingBottom: 0,
                  }}
                >
                  <div
                    className="nav  nav-pills"
                   
                    aria-orientation="vertical"
                  >
                    <a
                      className="nav-link active"
                      onClick={handleAll}
                    
                    >
                      All
                    </a>
                    <a
                      className="nav-link "
                      
                     
                      onClick={handlePlat}
                   
                      aria-selected="true"
                    >
                      Plats
                    </a>
                    <a
                      className="nav-link"
                   onClick={handlePizza}
                      aria-selected="false"
                    >
                      Pizzas
                    </a>
                    <a
                      className="nav-link"
                      onClick={handleSandwiche}
                      aria-selected="false"
                    >
                      Sandwiches
                    </a>
                    <a
                      className="nav-link"
                      onClick={handleDrink}
                      aria-selected="false"
                    >
                      Boissons
                    </a>
                  </div>
                </div>
                <div
                  className="col-md-12 d-flex align-items-center  "
                  style={{
                    justifyContent: "center",
                    marginTop: 0,
                    paddingTop: 0,
                  }}
                >
                  <div className="tab-content" id="v-pills-tabContent">
                    <div
                     
                    >
                      <section className="ftco-section ">
                        
                          <div className="row justify-content-center mb-5 pb-3 mt-5 pt-5">
                            <div className="col-md-7 heading-section text-center ">
                              <h2 className="mb-4">Nos {menuList}</h2>
                              <p className="flip">
                                <span className="deg1" />
                                <span className="deg2" />
                                <span className="deg3" />
                              </p>
                              <p style={{color:"grey"}} className="mt-5">
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts.
                              </p>
                            </div>
                          </div>

                          { list.filter(item =>( item.type.includes(menuList))).map(item => (
      
   
                          <div className="row">
                            <div className="col-md" style={{margin:"0px 100px"}}>
                              <div className="pricing-entry d-flex ">
                                <div className="desc pl-3">
                                  <div className="d-flex text align-items-center">
                                    <h3>
                                      <span>{item.title}</span>
                                    </h3>
                                    <span className="price">${item.price}</span>
                                  </div>
                                  <div className="d-block">
                                    <p style={{color:"grey"}}>
                                   {item.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                             
                            </div>
                          </div>
                           ))}
                        
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
