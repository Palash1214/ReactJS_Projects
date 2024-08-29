import React from 'react';
import TittleComponent from './TittleComponent';
import SubheadingDescription from './SubheadingDescription';
import Applink from './Applink';
import FooterCompo from './FooterCompo';



export default function ProfilePhoto() {
  return (
    <>
      <div className='Container mt-3 bg-bg-body-secondary bg-transparent text-dark '>
        <div className='row'>
          <div className='col-sm-3'>
            <div className='card shadow-lg d-flex flex-column'>
              <div className='card-body bg-warning'>
                <img 
                  src="https://scontent.fpnq9-1.fna.fbcdn.net/v/t1.6435-1/137001501_3622104424533483_5644561293542113672_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=e4545e&_nc_eui2=AeEPhdD7o_NsRulEzt-myN8eUnhXGDYCTrVSeFcYNgJOtYUsJDsuE2apgEMgeN8PAPxs4kJtMp_WzjwfwZzawsPM&_nc_ohc=l9MMtzGH4hQQ7kNvgGD9Qsf&_nc_ht=scontent.fpnq9-1.fna&oh=00_AYBIXSFxLgy8nSnc0ERUCPvPRV3FEA4kA6r5ScZQrusw_Q&oe=66F2189C" 
                  alt="Profile" 
                  width="300px" 
                  height="200px" 
                />
                <TittleComponent />
                <SubheadingDescription />
                <Applink />
                <FooterCompo/>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
