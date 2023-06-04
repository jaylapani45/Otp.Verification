"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
const style1 = { display: 'flex', justifycontent: 'center', flexdirection: 'row', alignitems: 'center', margininline: '10px' }


const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response)
    }
    setUpProviders();


    // const style2 = {background: none; border-top: none; borderleft: none, borderright: none, borderbottom: '2px solid white', border-radius: '0px'}
  }, []);


  return (
    // <nav className='flex-between w-full mb-16 pt-3'>
    //   <Link href='/' className='flex gap-2 flex-center'>
    //     <Image
    //       src='/assets/images/logo.svg'
    //       alt='logo'
    //       width={30}
    //       height={30}
    //       className='object-contain'
    //     />
    //     <p className='logo_text'>Promptopia</p>
    //   </Link>

    //   {/* {alert(providers)} */}

    //   {/* Desktop Navigation */}
    //   <div className='sm:flex hidden'>
    //     {session?.user ? (
    //       <div className='flex gap-3 md:gap-5'>
    //         <Link href='/create-prompt' className='black_btn'>
    //           Create Post
    //         </Link>

    //         <button type='button' onClick={signOut} className='outline_btn'>
    //           Sign Out
    //         </button>

    //         <Link href='/profile'>
    //           <Image
    //             src={session?.user.image}
    //             width={37}
    //             height={37}
    //             className='rounded-full'
    //             alt='profile'
    //           />
    //         </Link>
    //       </div>
    //     ) : (
    //       <>
    //         {providers &&
    //           Object.values(providers).map((provider) => (
    //             <button
    //               type='button'
    //               key={provider.name}
    //               onClick={() => {
    //                 signIn(provider.id);
    //               }}
    //               className='black_btn'
    //             >
    //               Sign in
    //             </button>
    //           ))}
    //       </>
    //     )}
    //   </div>

    //   {/* Mobile Navigation */}
    //   <div className='sm:hidden flex relative'>
    //     {session?.user ? (
    //       <div className='flex'>
    //         <Image
    //           src={session?.user.image}
    //           width={37}
    //           height={37}
    //           className='rounded-full'
    //           alt='profile'
    //           onClick={() => setToggleDropdown(!toggleDropdown)}
    //         />

    //         {toggleDropdown && (
    //           <div className='dropdown'>
    //             <Link
    //               href='/profile'
    //               className='dropdown_link'
    //               onClick={() => setToggleDropdown(false)}
    //             >
    //               My Profile
    //             </Link>
    //             <Link
    //               href='/create-prompt'
    //               className='dropdown_link'
    //               onClick={() => setToggleDropdown(false)}
    //             >
    //               Create Prompt
    //             </Link>
    //             <button
    //               type='button'
    //               onClick={() => {
    //                 setToggleDropdown(false);
    //                 signOut();
    //               }}
    //               className='mt-5 w-full black_btn'
    //             >
    //               Sign Out
    //             </button>
    //           </div>
    //         )}
    //       </div>
    //     ) : (
    //       <>
    //         {providers &&
    //           Object.values(providers).map((provider) => (
    //             <button
    //               type='button'
    //               key={provider.name}
    //               onClick={() => {
    //                 signIn(provider.id);
    //               }}
    //               className='black_btn'
    //             >
    //               Sign in
    //             </button>
    //           ))}
    //       </>
    //     )}
    //   </div>
    // </nav>
    <div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a href="#" class="navbar-brand"><img src="assets/onlyLogo.png" height="50px" width="50px"></img></a>

          <button class="navbar-toggler ml-auto custom-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar4" />
          <button type="button" class="navbar-toggler ml-auto custom-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <img src="drop-down-menu.png" alt="" height="35px" width="35px" />
          </button>
          <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div class="navbar-nav">
              <a href="#" class="nav-item nav-link active">Home</a>
              <a href="#" class="nav-item nav-link">Profile</a>
              <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Messages</a>
                <div class="dropdown-menu">
                  <a href="#" class="dropdown-item">Inbox</a>
                  <a href="#" class="dropdown-item">Sent</a>
                  <a href="#" class="dropdown-item">Drafts</a>
                </div>
              </div>
            </div>
            <div style={Object.assign({}, style1)}>
              <form class="d-flex">
                <div class="input-group">
                  <button type="button" style={{ background: 'none !important', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottom: '2px solid white', borderRradius: '0px !important' }}><img src="assets/components-search.png" height="25px" width="25px" alt="" /></button>
                  <input id="search" type="text" class="form-control" placeholder="Search" style={{ marginRight: '20px' }} />
                </div>
              </form>
              <div class="navbar-nav">
                <a href="#" class="nav-item nav-link" style={{ paddingLeft: '20px', borderLeft: '1px solid white' }}>Login</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;