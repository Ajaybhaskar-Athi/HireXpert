// 'use client'

// import { AlignJustify } from "lucide-react"
// import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet"
// import { Button } from "../ui/button"
// import Link from "next/link"
// import { Badge } from "../ui/badge"
// import { UserButton } from "@clerk/nextjs"
// /*
//        {
//             label:  ,
//             path:  ,
//             show: 
//         }
//   */
// function Header({user}) {
//     const menuItems=[
//         {
//             label:'Home',
//             path:'/',
//             show:true
//         },
//         {
//             label:'Login', 
//             path:'/sign-in',
//             show:!user //only visible if user is not Authenticated
//         },
//         {
//             label:'Register',
//             path:'/sign-up',
//             show:!user //only visible if user is not Authenticated
//         },
//         {
//             label: "Jobs" ,
//             path: "/jobs" ,
//             show: user
//         },
//         {
//             label:  "Activity",
//             path: "/activity" ,
//             show: user
//         },
//         {
//             label: "Membership" ,
//             path: "/membership" ,
//             show: user
//         },
//         {
//             label: "Account" ,
//             path: "/account" ,
//             show: user
//         },
//         {
//             label: "Logout" ,
//             path: "/sign-out" ,
//             show: user
//         },
//     ]

//     return (
//         // <div>
//         //     <header className="flex h-16 w-full shrink-0 items-center">
//         <div className="container mx-auto">
//     <header className="flex h-16 items-center justify-between ">

//                 <Sheet>
//                     <SheetTrigger asChild>
//                         <Button className="lg:hidden">
//                             <AlignJustify className="h-6 w-6" />
//                             <span className="sr-only">Toggle Navigation Menu</span>
//                         </Button>
//                     </SheetTrigger>

//                     <SheetContent side='left' >
//                         <Link className="mr-6 hidden lg:flex" href={"#"}>
//                 <h3>HireXpert</h3>
//                         </Link>
//                         <div className="grid gap-2 py-6">
//                         {
//                             menuItems.map((menuItem,index)=>(
//                                 menuItem.show ? <Link key={index} href={menuItem.path} className="flex w-full items-center py-2 text-lg font-semibold">
//                                     {menuItem.label}
//                                     </Link>: null
//                             ))
//                         }
//                         </div>
//                     </SheetContent>
//                 </Sheet>
//                 <Link className="hidden lg:flex mr-6"
//                     href={"/"}
//                 > <Badge>HireXpert</Badge> </Link>
//                 <nav className="ml-auto hidden lg:flex gap-6">
//                     {
//                         menuItems.map((menuItem,index)=>(
//                            menuItem.show? 
//                            <Link href={menuItem.path} key={index} className="group inline-flex h-9 w-max items-center rounded-md bg-white px-4 py-2 text-sm font-medium"> 
//                                     {menuItem.label}
//                             </Link>:null 
//                         ))
//                     }

//                 <UserButton afterSignOutUrl="/"/>

//                 </nav>
//             </header>
//         </div>
//     )
// }

// export default Header 

'use client'

import { AlignJustify } from "lucide-react"
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet"
import { Button } from "../ui/button"
import Link from "next/link"
import { Badge } from "../ui/badge"
import { UserButton, useAuth } from "@clerk/nextjs"

function Header(user,profileInfo) {
    console.log(user,profileInfo);
    const { isSignedIn } = useAuth(); // Fetch authentication state
    // const menuItems = [
    //     { label: 'Home', path: '/', show: true },
    //     { label: 'Login', path: '/sign-in', show: !user }, 
    //     { label: 'Register', path: '/sign-up', show: !user }, 
    //     { label: 'Jobs', path: '/jobs', show: profileInfo },
    //     { label: 'Activity', path: '/activity', show: profileInfo?.role==='candidate' },
    //     { label: 'Membership', path: '/membership', show: profileInfo },
    //     { label: 'Account', path: '/account', show: profileInfo },
    //     {
    //         label: "Companies",
    //         path: "/companies",
    //         show: profileInfo?.role === "candidate",
    //       },
    // ];

    const menuItems = [
        { label: 'Home', path: '/', show: true },
        { label: 'Login', path: '/sign-in', show: !isSignedIn }, 
        { label: 'Register', path: '/sign-up', show: !isSignedIn }, 
        { label: 'Jobs', path: '/jobs', show: isSignedIn },
        { label: 'Activity', path: '/activity', show: isSignedIn },
        { label: 'Membership', path: '/membership', show: isSignedIn },
        { label: 'Account', path: '/account', show: isSignedIn },
    ];

    return (
        <div className="container mx-auto">
            <header className="flex h-16 items-center justify-between">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button className="lg:hidden">
                            <AlignJustify className="h-6 w-6" />
                            <span className="sr-only">Toggle Navigation Menu</span>
                        </Button>
                    </SheetTrigger>

                    <SheetContent side='left'> 
                        <Link className="mr-6 hidden lg:flex" href={"/"}>
                            <h3>HireXpert</h3>
                        </Link>
                        <div className="grid gap-2 py-6">
                            {menuItems.map((menuItem, index) =>
                                menuItem.show ? (
                                    <Link key={index} href={menuItem.path} className="flex w-full items-center py-2 text-lg font-semibold">
                                        {menuItem.label}
                                    </Link>
                                ) : null
                            )}
                        </div>
                        {isSignedIn && (
        <div className="mt-4">
            <UserButton afterSignOutUrl="/" />
        </div>
    )}
                    </SheetContent>
                </Sheet>

                <Link className="hidden lg:flex mr-6" href={"/"}>
                    <Badge>HireXpert</Badge>
                </Link>

                <nav className="ml-auto hidden lg:flex gap-6">
                    {menuItems.map((menuItem, index) =>
                        menuItem.show ? (
                            <Link key={index} href={menuItem.path} className="group inline-flex h-9 w-max items-center rounded-md bg-white px-4 py-2 text-sm font-medium">
                                {menuItem.label}
                            </Link>
                        ) : null
                    )}

                    {isSignedIn && <UserButton afterSignOutUrl="/" />}
                </nav>
            </header>
        </div>
    );
}

export default Header;
