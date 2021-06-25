import React from 'react';

const Header = () => {
    return (
        <div>
        <div className='abc flex justify-center items-center flex-col'>
           
          <h1 className='text-7xl ' style={{textAlign:'center', color:'white'}}>Welcome To Tanzid's Blog</h1>
        </div>
        
              <svg class="preserve" viewBox="0 9 100 6" width="100%" xmlns="http://www.w3.org/2000/svg">
                <linearGradient id="fill_1">
                    <stop class="g_fill_1" offset="0%" stop-color="#c4183c"></stop>
                    <stop class="g_fill_2" offset="100%" stop-color="#4f37ac"></stop>
                </linearGradient>
                <path d="M0 0 V12 Q30 17 55 12 T100 11 V0z" fill="url(#fill_1)"></path>
                <clipPath id="clip-path"><path d="M0 0 V12 Q30 17 55 12 T100 11 V0z"></path></clipPath>
                <path clip-path="url(#clip-path)" d="M0 30 V15 Q30 3 60 15 V30z" fill="#fff" opacity="0.5"></path>
            </svg>
        </div>
    );
};

export default Header;