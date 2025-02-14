import React from 'react'
import Logo from './logo'
import { Button } from './ui/button'
import { IoMdMenu } from "react-icons/io";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
const NavBar = () => {
  return (
    <div className=" h-[80px] w-full flex items-center justify-between">
    <Logo />

    <div className=' hidden lg:flex gap-12 justify-center items-center'>
        <p>
            Home 
        </p>
        <p>
        Services 
        </p>
        <p>
        Get Involved 
        </p>
        <p>
        Contact us 
        </p>
    </div>

    <div className=' flex gap-2 justify-center items-center'>

<Button variant={"outline"}>Login</Button>
<Button className='bg-MttPrimary'>Register</Button>

<Sheet>
  <SheetTrigger>

  <div className=' lg:hidden hover:bg-slate-400 hover:text-white hover:cursor-pointer flex justify-center items-center bg-slate-100 rounded-md p-1'>
<IoMdMenu size={30} />
</div>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>


    </div>
  </div>
  )
}

export default NavBar
