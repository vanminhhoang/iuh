import React from 'react';


function SearchHeader() {
    return (
    <section className="container-form">
        <form action="" className="form-search">
          <input type="text" onChange={(e)=>{console.log(e.target.value);}} placeholder="Enter your search..." id="input-search"/>
          <button className="btn-search" type="button">
            <a href="#" className="link-search">
              <div className="div-link-search">Search</div>
            </a>
          </button>
        </form>
    </section>   
    );
}

export default SearchHeader;