'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React, { useState } from 'react'
import CommonForm from '../common-form';
import { candidateOnBoardFormControls, intialCandidateFormData, intialRecruiterFormData, recruiterOnBoardFormControls } from '@/utils';

const OnBoard = () => {
    const [currentTab,setCurrentTab]=useState('candidate');
    const [recruiterForm,setRecruiterForm]=useState(intialRecruiterFormData);
    const [candidateForm, setCandidateForm] = useState({intialCandidateFormData});
    const handleTabChange=(value)=>{
        setCurrentTab(value);
    }
    
  return (
    <div className='bg-white'>
        <Tabs value={currentTab} onValueChange={handleTabChange}>
            <div className='w-full'>
            <div className='flex items-baseline justify-between border-b pb-6 pt-24 '>
                <h1 className='text-4xl font-bold text-gray-900 tracking-tight'>
                Welcome to On boarding</h1>
                <TabsList>
                    <TabsTrigger value="candidate"> Candidates </TabsTrigger> 
                    <TabsTrigger value="recruiter"> Recruiter </TabsTrigger> 

                </TabsList>
            </div>
            </div>

            <TabsContent value='candidate'> 
                <CommonForm formControls={candidateOnBoardFormControls}
                    formData={candidateForm} buttonText={"OnBoard as a Candidate"}  setFormData={setCandidateForm}/>
            </TabsContent>

            <TabsContent value='recruiter'> 
                <CommonForm formControls={recruiterOnBoardFormControls}
                    buttonText={'Onboard as a Recruiter'}
                    formData={recruiterForm} setFormData={setRecruiterForm}
                />
                 </TabsContent>

        </Tabs>
    </div>
  )
}

export default OnBoard
