

import React from 'react'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'

const CommonCard = ({icon,title,description,footerContent}) => {
  return (
    <Card className="flex bg-gray-100 flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 cursor-pointer">
        <CardHeader className='p-0'>
        {
            icon?icon:null
        }
        {
            title?
            <CardTitle className='text-xl max-w-[250px] font-semibold text-gray-950 whitespace-nowrap overflow-hidden text-ellipsis'>{title}</CardTitle> :null
        }
        {
            description?
            <CardDescription className="mt-3 text-gray-600">{description}</CardDescription>:null  
          }
        </CardHeader>
        
        <CardFooter className="p-0">{footerContent}</CardFooter>
    </Card>
  )
}

export default CommonCard
